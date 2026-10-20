import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";

vi.spyOn(window, "scrollTo").mockImplementation(() => undefined);
Element.prototype.scrollIntoView = vi.fn<Element["scrollIntoView"]>();

afterEach(() => {
  cleanup();
});
