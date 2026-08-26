"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/animations/FadeIn";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const grains = [
  { x: "-11px", y: "58px", delay: "0s", color: "#f6ba29", size: "8px", dur: "4.4s", rot0: "8deg", rot1: "96deg", facet: true },
  { x: "7px", y: "70px", delay: "0.22s", color: "#ee7a48", size: "6px", dur: "4.1s", rot0: "-12deg", rot1: "78deg", facet: false },
  { x: "16px", y: "52px", delay: "0.4s", color: "#e95559", size: "7px", dur: "4.6s", rot0: "24deg", rot1: "128deg", facet: true },
  { x: "-5px", y: "76px", delay: "0.62s", color: "#f8c94d", size: "5px", dur: "3.9s", rot0: "-6deg", rot1: "64deg", facet: false },
  { x: "12px", y: "62px", delay: "0.84s", color: "#ee7a48", size: "8px", dur: "4.5s", rot0: "18deg", rot1: "108deg", facet: true },
  { x: "-16px", y: "68px", delay: "1.05s", color: "#d94450", size: "6px", dur: "4.2s", rot0: "-20deg", rot1: "86deg", facet: false },
  { x: "2px", y: "80px", delay: "1.22s", color: "#f6ba29", size: "7px", dur: "4.7s", rot0: "4deg", rot1: "140deg", facet: true },
  { x: "-8px", y: "48px", delay: "0.5s", color: "#f8c94d", size: "4px", dur: "3.8s", rot0: "30deg", rot1: "72deg", facet: false },
];

function Milestone({
  event,
  index,
}: {
  event: TimelineEvent;
  index: number;
}) {
  const nodeRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          return;
        }
        node.setAttribute("data-fall", "true");
      },
      { threshold: 0.45 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={nodeRef} className="relative">
      <span
        className="absolute top-10 left-0 z-20 -translate-x-1/2 md:left-[7.25rem]"
        aria-hidden="true"
      >
        <span className="relative block h-3.5 w-3.5 rounded-full brand-gradient-bg shadow-[0_0_14px_rgba(238,122,72,0.85)]" />
        {grains.map((grain, grainIndex) => (
          <i
            key={grainIndex}
            className={grain.facet ? "sand-grain sand-grain--facet" : "sand-grain"}
            style={{
              animationDelay: grain.delay,
              ["--sand-x" as string]: grain.x,
              ["--sand-y" as string]: grain.y,
              ["--sand-size" as string]: grain.size,
              ["--sand-dur" as string]: grain.dur,
              ["--sand-color" as string]: grain.color,
              ["--sand-rot-start" as string]: grain.rot0,
              ["--sand-rot-end" as string]: grain.rot1,
            }}
          />
        ))}
      </span>
      <FadeIn delay={index * 0.08}>
        <article className="group grid gap-4 py-8 pl-8 md:grid-cols-12 md:items-start md:gap-8 md:pl-0">
          <p className="font-heading text-3xl font-extrabold tracking-tight md:col-span-3 md:pr-8 md:text-right lg:text-4xl">
            <span className="brand-gradient-text">{event.year}</span>
          </p>
          <div className="relative overflow-hidden rounded-xl bg-white p-5 shadow-[0_12px_28px_rgba(238,122,72,0.08)] transition-transform duration-300 hover:-translate-y-0.5 md:col-span-9 md:ml-12 md:p-7">
            <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
            <p className="index-num mb-2">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="font-heading text-xl font-bold tracking-tight text-dark md:text-[1.35rem]">
              {event.title}
            </h3>
            <p className="mt-2 max-w-xl text-[15px] leading-relaxed font-medium text-warm-800">
              {event.description}
            </p>
          </div>
        </article>
      </FadeIn>
    </li>
  );
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative">
      <div
        className="absolute top-0 bottom-0 left-0 w-px bg-warm-200 md:left-[7.25rem]"
        aria-hidden="true"
      >
        <div className="spine-grow gradient-divider h-full w-full" />
      </div>
      <ol>
        {events.map((event, index) => (
          <Milestone key={event.year} event={event} index={index} />
        ))}
      </ol>
    </div>
  );
}
