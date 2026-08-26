"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { spineItems, spineActive } from "@/data/navigation";

export function IndexSpine() {
  const pathname = usePathname();

  return (
    <>
      <nav
        aria-label="Studio index"
        className="index-spine fixed top-14 bottom-0 left-0 z-40 hidden flex-col justify-evenly px-1.5 py-6 lg:flex"
      >
        {spineItems.map((item) => {
          const active = spineActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "spine-link group relative flex flex-col items-center justify-center gap-1 rounded-xl px-1 py-3.5 text-center",
                active
                  ? "text-white"
                  : "text-warm-800 hover:bg-white/55 hover:text-dark"
              )}
            >
              {active && (
                <motion.span
                  layoutId="spine-rail"
                  className="brand-gradient-bg absolute inset-0 rounded-xl shadow-md"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <span
                className={cn(
                  "relative z-10 font-heading text-base font-extrabold tracking-tight",
                  active ? "text-white" : "text-brand-orange"
                )}
              >
                {item.index}
              </span>
              <span
                className={cn(
                  "relative z-10 text-[12px] font-bold tracking-wide",
                  active ? "text-white" : "text-warm-800"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      <nav
        aria-label="Studio index"
        className="chip-scroll fixed top-14 right-0 left-0 z-40 flex justify-start gap-1 overflow-x-auto bg-[linear-gradient(90deg,color-mix(in_srgb,#f6ba29_28%,white),color-mix(in_srgb,#e95559_16%,#fff5f3))] px-2 py-1.5 lg:hidden"
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
