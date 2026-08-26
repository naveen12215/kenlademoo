"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}

export function Magnetic({
  children,
  strength = 0.28,
  className,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className ? `inline-block ${className}` : "inline-block"}
      animate={{ x: offset.x, y: offset.y }}
      transition={{ type: "spring", stiffness: 260, damping: 18, mass: 0.35 }}
      onMouseMove={(event) => {
        const node = ref.current;
        if (!node || window.matchMedia("(pointer: coarse)").matches) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }
        const box = node.getBoundingClientRect();
        const x = event.clientX - box.left - box.width / 2;
        const y = event.clientY - box.top - box.height / 2;
        setOffset({ x: x * strength, y: y * strength });
      }}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
    >
      {children}
    </motion.div>
  );
}
