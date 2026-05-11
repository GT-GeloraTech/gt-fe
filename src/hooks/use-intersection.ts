"use client";

import { useEffect, useRef, useState } from "react";

export function useIntersection<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry?.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return {
    ref,
    visible,
  };
}
