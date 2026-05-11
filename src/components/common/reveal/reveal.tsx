"use client";

import { cn } from "@/lib/cn";
import { useIntersection } from "@/hooks/use-intersection";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const { ref, visible } = useIntersection<HTMLDivElement>();

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        `translate-y-10 opacity-0 transition-all duration-700 ease-out will-change-transform`,
        visible && "translate-y-0 opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
