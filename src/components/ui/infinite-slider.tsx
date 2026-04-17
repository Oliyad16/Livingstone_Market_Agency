"use client";

import { motion } from "motion/react";
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";
import { useEffect, useState, type ReactNode } from "react";

type InfiniteSliderProps = {
  children: ReactNode;
  gap?: number;
  duration?: number;
  durationOnHover?: number;
  direction?: "horizontal" | "vertical";
  reverse?: boolean;
  className?: string;
};

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [ref, { width, height }] = useMeasure();
  const [hovered, setHovered] = useState(false);
  const [currentDuration, setCurrentDuration] = useState(duration);

  useEffect(() => {
    setCurrentDuration(hovered && durationOnHover ? durationOnHover : duration);
  }, [hovered, duration, durationOnHover]);

  const axis = direction === "horizontal" ? "x" : "y";
  const size = direction === "horizontal" ? width : height;
  const contentSize = size + gap;
  const from = reverse ? -contentSize / 2 : 0;
  const to = reverse ? 0 : -contentSize / 2;

  return (
    <div
      className={cn("overflow-hidden", className)}
      onMouseEnter={durationOnHover ? () => setHovered(true) : undefined}
      onMouseLeave={durationOnHover ? () => setHovered(false) : undefined}
    >
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        animate={{ [axis]: [from, to] }}
        transition={{
          [axis]: {
            duration: currentDuration,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
