import { useEffect, useRef } from "react";

export function useScrollAnimation(direction = "left", threshold = 0.2) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    // Remove all animation classes before observing
    node.classList.remove(
      "animate-in-view",
      "animate-bounce-left",
      "animate-bounce-right"
    );
    const handleScroll = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add("animate-in-view");
          node.classList.add(
            direction === "left"
              ? "animate-bounce-left"
              : "animate-bounce-right"
          );
        } else {
          node.classList.remove("animate-in-view");
          node.classList.remove("animate-bounce-left");
          node.classList.remove("animate-bounce-right");
        }
      });
    };
    const observer = new window.IntersectionObserver(handleScroll, {
      threshold,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, direction]);

  return ref;
}
