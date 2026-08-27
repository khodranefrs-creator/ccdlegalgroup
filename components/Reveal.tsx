"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** delay in ms */
  delay?: number;
  /** direction of entrance */
  from?: "up" | "left" | "right" | "none";
  className?: string;
  as?: React.ElementType;
};

/**
 * Elegant scroll-reveal. Uses IntersectionObserver and only applies once.
 * Respects prefers-reduced-motion (renders visible immediately).
 */
export default function Reveal({
  children,
  delay = 0,
  from = "up",
  className = "",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const hiddenTransform =
    from === "up"
      ? "translateY(28px)"
      : from === "left"
      ? "translateX(-28px)"
      : from === "right"
      ? "translateX(28px)"
      : "none";

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : hiddenTransform,
    transition: `opacity 1s var(--ease-out-expo) ${delay}ms, transform 1s var(--ease-out-expo) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    <Tag ref={ref as React.Ref<HTMLElement>} style={style} className={className}>
      {children}
    </Tag>
  );
}
