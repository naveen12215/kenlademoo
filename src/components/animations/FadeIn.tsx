"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface FadeInProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
}

const directionOffset: Record<Direction, { x: number; y: number }> = {
  up: { x: 0, y: 14 },
  down: { x: 0, y: -14 },
  left: { x: 16, y: 0 },
  right: { x: -16, y: 0 },
};

const ease = [0.22, 1, 0.36, 1] as const;

export function FadeIn({
  children,
  direction,
  delay = 0,
  duration = 0.5,
  className,
}: FadeInProps) {
  const offset = direction ? directionOffset[direction] : { x: 0, y: 0 };

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration,
        delay,
        ease,
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
