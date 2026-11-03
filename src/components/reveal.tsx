"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Anchor id of the block. */
  id?: string;
  /** Delay in seconds — used to stagger the blocks of one section. */
  delay?: number;
  /** The element to render. Keep the original tag so the legacy layout
   *  (section grids, flex rows) is not disturbed. */
  as?: "div" | "section" | "article" | "li" | "header" | "ul";
};

/**
 * Scroll reveal.
 *
 * The content is visible by default — only when JavaScript is available
 * (`html[data-js="true"]`, set by a tiny inline script in the root layout)
 * may the CSS hide a block before it animates in. If the script never runs,
 * the page is still fully readable.
 */
export function Reveal({
  children,
  className = "",
  id,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    /* No motion for guests who asked for less of it. */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    /* Already on screen — animate in right away. */
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(element);

    /* Safety net: content must never stay hidden. */
    const timer = window.setTimeout(() => {
      setVisible(true);
      observer.disconnect();
    }, 10000);

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const Tag = as as React.ElementType;

  return (
    <Tag
      ref={ref}
      id={id}
      className={`kama-reveal${visible ? " is-visible" : ""}${className ? ` ${className}` : ""}`}
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
