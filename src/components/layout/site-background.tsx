"use client";

import { useEffect, useRef } from "react";

export function SiteBackground() {
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const root = document.documentElement;

    const setVars = (mx: string, my: string, mxp: string, myp: string) => {
      root.style.setProperty("--mx", mx);
      root.style.setProperty("--my", my);
      root.style.setProperty("--mxp", mxp);
      root.style.setProperty("--myp", myp);
    };

    const setDefaults = () => setVars("0", "0", "50%", "35%");
    setDefaults();

    const onMove = (event: MouseEvent) => {
      const width = window.innerWidth || 1;
      const height = window.innerHeight || 1;
      const nx = (event.clientX / width - 0.5) * 2;
      const ny = (event.clientY / height - 0.5) * 2;
      const px = Math.max(0, Math.min(100, (event.clientX / width) * 100));
      const py = Math.max(0, Math.min(100, (event.clientY / height) * 100));

      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        setVars(
          Math.max(-1, Math.min(1, nx)).toFixed(3),
          Math.max(-1, Math.min(1, ny)).toFixed(3),
          `${px.toFixed(1)}%`,
          `${py.toFixed(1)}%`
        );
      });
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", setDefaults);
    window.addEventListener("blur", setDefaults);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", setDefaults);
      window.removeEventListener("blur", setDefaults);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      setDefaults();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="site-shell-bg fixed inset-0 -z-10"
    />
  );
}
