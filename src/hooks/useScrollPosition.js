import { useState, useEffect } from "react";
import { throttle } from "lodash";

export const useScrollPosition = (threshold = 100) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrollPos(window.scrollY);
      setIsScrolled(window.scrollY > threshold);
    }, 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      handleScroll.cancel(); // Clean up the throttle
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { isScrolled, threshold, scrollPos };
};
