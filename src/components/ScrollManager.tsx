import { useEffect } from "react";
import { useLocation } from "react-router";

/** Scrolls to the hash target on navigation, or to the top for a new path. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const id = hash ? decodeURIComponent(hash.slice(1)) : "";

    function scrollToHash() {
      const target = id ? document.getElementById(id) : null;
      if (target) {
        target.scrollIntoView();
        return true;
      }
      return false;
    }

    if (id) {
      if (scrollToHash()) return;
      const raf = window.requestAnimationFrame(() => {
        if (!scrollToHash()) window.scrollTo(0, 0);
      });
      return () => {
        window.cancelAnimationFrame(raf);
      };
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
