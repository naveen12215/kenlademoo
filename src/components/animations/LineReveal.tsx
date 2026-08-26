"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface LineRevealProps {
  lines: React.ReactNode[];
  className?: string;
  as?: "h1" | "h2" | "div";
  delay?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

export function LineReveal({
  lines,
  className,
  as: Tag = "h1",
  delay = 0.05,
}: LineRevealProps) {
  return (
    <Tag className={cn(className)}>
      {lines.map((line, index) => (
        <span key={index} className="block overflow-hidden pt-[0.12em] pb-[0.42em]">
          <motion.span
            className="block leading-[1.05]"
            initial={{ y: "108%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.72,
              delay: delay + index * 0.11,
              ease,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
