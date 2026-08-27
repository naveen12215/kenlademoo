"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { motionEase } from "@/lib/motion";

interface LineRevealProps {
  lines: React.ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "div";
  delay?: number;
}

export function LineReveal({
  lines,
  className,
  as: Tag = "h1",
  delay = 0.06,
}: LineRevealProps) {
  const reduced = useReducedMotion();

  return (
    <Tag className={cn(className)}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden pt-[0.12em] pb-[0.42em]">
          <motion.span
            className="block leading-[1.05]"
            initial={reduced ? false : { y: "100%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.68,
              delay: delay + index * 0.09,
              ease: motionEase,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
