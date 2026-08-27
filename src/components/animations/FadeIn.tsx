"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { motionDuration, motionEase, motionRise } from "@/lib/motion";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: motionRise },
  down: { x: 0, y: -motionRise },
  left: { x: motionRise, y: 0 },
  right: { x: -motionRise, y: 0 },
};

export function FadeIn({
  children,
  direction,
  delay = 0,
  duration = motionDuration,
  className,
}: FadeInProps) {
  const reduced = useReducedMotion();
  const offset = direction ? directionOffset[direction] : { x: 0, y: 0 };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration,
        delay,
        ease: motionEase,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
