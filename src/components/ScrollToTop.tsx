import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
      document.body.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    };

    // Try multiple times to ensure it hits after any layout shifts
    scrollToTop();
    
    // Using requestAnimationFrame to ensure it happens after the next paint
    const rafId = requestAnimationFrame(() => {
      scrollToTop();
    });

    // Fallback timeout
    const timeoutId = setTimeout(scrollToTop, 10);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
}
