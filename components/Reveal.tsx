"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
};

/**
 * Near-invisible entrance: a short opacity fade only (no movement).
 * In most layouts we simply render content without a reveal; this is only
 * used where a subtle entrance is genuinely preferable. Respects
 * prefers-reduced-motion (renders visible immediately).
 */
export default function Reveal({
  children,
  delay = 0,
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
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [visible]);

  const style: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transition: `opacity 0.5s var(--ease-out-soft) ${delay}ms`,
  };

  return (
    <Tag ref={ref as React.Ref<HTMLElement>} style={style} className={className}>
      {children}
    </Tag>
  );
}
