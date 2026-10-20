import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);
Element.prototype.scrollIntoView = vi.fn<Element["scrollIntoView"]>();
HTMLCanvasElement.prototype.getContext = vi.fn(
  () => null,
) as typeof HTMLCanvasElement.prototype.getContext;

HTMLDialogElement.prototype.showModal = function showModal() {
  this.setAttribute("open", "");
};
HTMLDialogElement.prototype.close = function close() {
  this.removeAttribute("open");
};

class ObserverStub {
  observe() {
    return undefined;
  }
  unobserve() {
    return undefined;
  }
  disconnect() {
    return undefined;
  }
}

vi.stubGlobal("IntersectionObserver", ObserverStub);
vi.stubGlobal("ResizeObserver", ObserverStub);

if (typeof window.matchMedia !== "function") {
  window.matchMedia = (query: string): MediaQueryList => {
    const mql = {
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => undefined,
      removeEventListener: () => undefined,
      dispatchEvent: () => false,
    };
    return mql as unknown as MediaQueryList;
  };
}

afterEach(() => {
  cleanup();
});
