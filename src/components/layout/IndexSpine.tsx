"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { spineItems, spineActive } from "@/data/navigation";

export function IndexSpine() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max <= 0 ? 1 : Math.min(1, Math.max(0, window.scrollY / max)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  return (
    <>
      <nav
        aria-label="Site index"
        className="index-spine fixed top-[var(--chrome-header)] bottom-0 left-0 z-40 hidden flex-col justify-evenly px-1 py-4 lg:flex"
      >
        <span
          className="spine-progress"
          style={{ transform: `scaleY(${progress})` }}
          aria-hidden="true"
        />
        {spineItems.map((item, index) => {
          const active = spineActive(pathname, item.href);
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.04 * index,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
            <Link
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "spine-link group relative flex flex-col items-center justify-center gap-0.5 rounded-lg px-1 py-2 text-center",
                active
                  ? "text-white"
                  : "text-warm-800 hover:bg-white/55 hover:text-dark"
              )}
            >
              {active && (
                <motion.span
                  layoutId="spine-rail"
                  className="brand-gradient-bg absolute inset-0 rounded-xl shadow-md"
                  transition={{ type: "spring", stiffness: 280, damping: 34 }}
                />
              )}
              <span
                className={cn(
                  "relative z-10 font-heading text-sm font-extrabold tracking-tight",
                  active ? "text-white" : "text-brand-orange"
                )}
              >
                {item.index}
              </span>
              <span
                className={cn(
                  "relative z-10 text-[11px] font-bold tracking-wide",
                  active ? "text-white" : "text-warm-800"
                )}
              >
                {item.label}
              </span>
            </Link>
            </motion.div>
          );
        })}
      </nav>

      <nav
        aria-label="Site index"
        className="index-chips chip-scroll fixed top-[var(--chrome-header)] right-0 left-0 z-40 flex justify-start gap-1 overflow-x-auto px-2 py-1 lg:hidden"
      >
        {spineItems.map((item) => {
          const active = spineActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative shrink-0 px-3.5 py-2 text-[13px] font-bold tracking-wide",
                active ? "text-white" : "text-warm-800"
              )}
            >
              {active && (
                <motion.span
                  layoutId="spine-rail-mobile"
                  className="brand-gradient-bg absolute inset-0 rounded-xl"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
