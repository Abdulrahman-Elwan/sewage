"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Renders a stat string like "+450", "24/7" or "+8" and animates any
 * numeric run inside it from 0 up to its final value once in view.
 */
export default function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parts = value.split(/(\d+)/);
  const [displayed, setDisplayed] = useState<string[]>(
    parts.map((p) => (/^\d+$/.test(p) ? "0" : p))
  );

  useEffect(() => {
    if (!inView) return;
    const controls: ReturnType<typeof animate>[] = [];
    parts.forEach((part, i) => {
      if (!/^\d+$/.test(part)) return;
      const target = parseInt(part, 10);
      const c = animate(0, target, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => {
          setDisplayed((prev) => {
            const next = [...prev];
            next[i] = String(Math.round(v));
            return next;
          });
        },
      });
      controls.push(c);
    });
    return () => controls.forEach((c) => c.stop());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return <span ref={ref}>{displayed.join("")}</span>;
}
