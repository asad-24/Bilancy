"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FadeContentProps = React.HTMLAttributes<HTMLDivElement> & {
  blur?: boolean;
  delay?: number;
  duration?: number;
  threshold?: number;
  animateWhen?: boolean;
};

export function FadeContent({
  children,
  blur = false,
  delay = 0,
  duration = 0.7,
  threshold = 0.12,
  animateWhen = true,
  className = "",
  ...props
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const enteredRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      gsap.set(el, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      return;
    }

    gsap.set(el, {
      autoAlpha: 0,
      y: 24,
      filter: blur ? "blur(10px)" : "blur(0px)",
      willChange: "opacity, transform, filter",
    });

    const timeline = gsap.timeline({ paused: true, delay });
    timeline.to(el, {
      autoAlpha: 1,
      y: 0,
      filter: "blur(0px)",
      duration,
      ease: "power2.out",
    });
    timelineRef.current = timeline;

    const startPct = (1 - threshold) * 100;
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: `top ${startPct}%`,
      once: true,
      onEnter: () => {
        enteredRef.current = true;
        if (animateWhen) timeline.play();
      },
    });

    return () => {
      trigger.kill();
      timeline.kill();
      timelineRef.current = null;
    };
    // Build this ScrollTrigger once for the mounted element.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (animateWhen && enteredRef.current) {
      timelineRef.current?.play();
    }
  }, [animateWhen]);

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
}
