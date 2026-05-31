"use client";

import ErrorBoundary from "@/components/error-boundary";
import { SiteBackground } from "@/components/layout/site-background";
import { AppReadyContext } from "@/components/motion/app-ready-context";
import { SmoothScroll } from "@/components/motion/smooth-scroll";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ErrorBoundary>
      <AppReadyContext.Provider value>
        <SiteBackground />
        <SmoothScroll>{children}</SmoothScroll>
      </AppReadyContext.Provider>
    </ErrorBoundary>
  );
}
