"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function ServiceRail({
  activeSlug,
  onSelect,
  layoutId = "service-rail",
}: {
  activeSlug: string;
  onSelect?: (slug: string) => void;
  layoutId?: string;
}) {
  return (
    <div className="chip-scroll -mx-4 mb-8 flex gap-1 overflow-x-auto border-y border-warm-200 px-4 py-1 lg:sticky lg:top-16 lg:col-span-4 lg:mx-0 lg:mb-0 lg:block lg:max-h-[calc(100svh-7rem)] lg:overflow-y-auto lg:overflow-x-visible lg:border-y-0 lg:px-1 lg:py-1">
      {services.map((item, index) => {
        const isActive = item.slug === activeSlug;
        const className = cn(
          "service-pop relative flex shrink-0 items-center gap-3 rounded-lg px-2.5 py-4 text-left lg:w-full lg:py-3.5",
          isActive ? "z-10 text-white" : "text-warm-700"
        );
        const inner = (
          <>
            {isActive && (
              <motion.span
                layoutId={layoutId}
                className="brand-gradient-bg absolute inset-0 rounded-lg shadow-sm"
                transition={{ type: "spring", stiffness: 280, damping: 34 }}
              />
            )}
            <span
              className="index-num relative z-10"
              style={isActive ? { color: "#fff" } : undefined}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="relative z-10 whitespace-nowrap text-[15px] font-semibold lg:whitespace-normal">
              {item.title}
            </span>
          </>
        );

        if (onSelect) {
          return (
            <button
              key={item.slug}
              type="button"
              aria-pressed={isActive}
              onClick={() => onSelect(item.slug)}
              className={className}
            >
              {inner}
            </button>
          );
        }

        return (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
            aria-current={isActive ? "page" : undefined}
            className={className}
          >
            {inner}
          </Link>
        );
      })}
    </div>
  );
}
