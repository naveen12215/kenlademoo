"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function InkCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let targetX = 0;
    let targetY = 0;
    let x = 0;
    let y = 0;
    let frame = 0;

    const tick = () => {
      x += (targetX - x) * 0.22;
      y += (targetY - y) * 0.22;
      node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };

    const move = (event: MouseEvent) => {
      if (window.matchMedia("(pointer: coarse)").matches) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      node.style.opacity = "1";
      targetX = event.clientX - 14;
      targetY = event.clientY - 14;
    };

    const hide = () => {
      node.style.opacity = "0";
    };

    frame = requestAnimationFrame(tick);
    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <div ref={ref} className="ink-cursor" aria-hidden="true">
      <Image src="/logo.svg" alt="" width={28} height={28} unoptimized />
    </div>
  );
}
