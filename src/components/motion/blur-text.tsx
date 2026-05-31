"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ElementType } from "react";

type BlurTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  animateBy?: "words" | "letters";
  delay?: number;
  direction?: "top" | "bottom";
  animateWhen?: boolean;
};

export function BlurText({
  text,
  as: Component = "span",
  className = "",
  animateBy = "words",
  delay = 80,
  direction = "top",
  animateWhen = true,
}: BlurTextProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Root = Component;
  const [inView, setInView] = useState(false);
  const parts = animateBy === "words" ? text.split(" ") : text.split("");
  const words = text.split(" ");
  const y = direction === "top" ? -28 : 28;

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const shouldAnimate = inView && animateWhen;

  if (animateBy === "letters") {
    let letterIndex = 0;
    return (
      <Root ref={ref as never} className={`flex min-w-0 max-w-full flex-wrap ${className}`}>
        {words.map((word, wordIndex) => (
          <span key={`${word}-${wordIndex}`} className="mr-[0.22em] inline-flex whitespace-nowrap last:mr-0">
            {word.split("").map((letter) => {
              const index = letterIndex++;
              return (
                <motion.span
                  key={`${letter}-${index}`}
                  className="inline-block will-change-[transform,filter,opacity]"
                  initial={false}
                  animate={
                    shouldAnimate
                      ? { opacity: [0, 1], y: [y, 0], filter: ["blur(10px)", "blur(0px)"] }
                      : { opacity: 1, y: 0, filter: "blur(0px)" }
                  }
                  transition={{ duration: 0.42, delay: (index * delay) / 1000, ease: [0.22, 1, 0.36, 1] }}
                >
                  {letter}
                </motion.span>
              );
            })}
          </span>
        ))}
      </Root>
    );
  }

  return (
    <Root ref={ref as never} className={`flex min-w-0 max-w-full flex-wrap ${className}`}>
      {parts.map((part, index) => (
        <motion.span
          key={`${part}-${index}`}
          className="inline-block will-change-[transform,filter,opacity]"
          initial={false}
          animate={
            shouldAnimate
              ? { opacity: [0, 1], y: [y, 0], filter: ["blur(10px)", "blur(0px)"] }
              : { opacity: 1, y: 0, filter: "blur(0px)" }
          }
          transition={{ duration: 0.48, delay: (index * delay) / 1000, ease: [0.22, 1, 0.36, 1] }}
        >
          {part}
          {index < parts.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Root>
  );
}
