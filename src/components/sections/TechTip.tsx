"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { techIconMap } from "@/lib/tech-icons";
import { techCategories } from "@/data/technologies";
import type { Technology } from "@/types";

const POP_WIDTH = 300;
const GAP = 8;
const EDGE = 12;

type FlyoutState = {
  tech: Technology;
  top: number;
  left: number;
  pinned: boolean;
};

type FlyoutApi = {
  activeName: string | null;
  hover: (tech: Technology, el: HTMLElement) => void;
  leave: () => void;
  toggle: (tech: Technology, el: HTMLElement) => void;
};

const FlyoutContext = createContext<FlyoutApi | null>(null);

function positionFor(el: HTMLElement, height: number) {
  const rect = el.getBoundingClientRect();
  const spaceBelow = window.innerHeight - rect.bottom - EDGE;
  const placeAbove = spaceBelow < height + GAP && rect.top > spaceBelow;
  const top = placeAbove
    ? Math.max(EDGE, rect.top - height - GAP)
    : Math.min(rect.bottom + GAP, window.innerHeight - height - EDGE);

  let left = rect.left;
  if (left + POP_WIDTH > window.innerWidth - EDGE) {
    left = window.innerWidth - POP_WIDTH - EDGE;
  }
  if (left < EDGE) left = EDGE;

  return { top, left };
}

export function TechFlyoutProvider({ children }: { children: ReactNode }) {
  const [flyout, setFlyout] = useState<FlyoutState | null>(null);
  const flyoutRef = useRef<FlyoutState | null>(null);
  const popRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<number | null>(null);

  flyoutRef.current = flyout;

  const clearHide = () => {
    if (hideTimer.current != null) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const close = useCallback(() => {
    clearHide();
    setFlyout(null);
  }, []);

  const openAt = useCallback((tech: Technology, el: HTMLElement, pinned: boolean) => {
    clearHide();
    const first = positionFor(el, popRef.current?.offsetHeight ?? 176);
    setFlyout({ tech, top: first.top, left: first.left, pinned });
    requestAnimationFrame(() => {
      const next = positionFor(el, popRef.current?.offsetHeight ?? 176);
      setFlyout((current) =>
        current && current.tech.name === tech.name
          ? { tech, top: next.top, left: next.left, pinned }
          : current
      );
    });
  }, []);

  const hover = useCallback(
    (tech: Technology, el: HTMLElement) => {
      if (flyoutRef.current?.pinned) return;
      openAt(tech, el, false);
    },
    [openAt]
  );

  const leave = useCallback(() => {
    if (flyoutRef.current?.pinned) return;
    clearHide();
    hideTimer.current = window.setTimeout(() => {
      if (!flyoutRef.current?.pinned) setFlyout(null);
    }, 140);
  }, []);

  const toggle = useCallback(
    (tech: Technology, el: HTMLElement) => {
      const current = flyoutRef.current;
      if (current?.pinned && current.tech.name === tech.name) {
        close();
        return;
      }
      openAt(tech, el, true);
    },
    [close, openAt]
  );

  useEffect(() => {
    if (!flyout) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (popRef.current?.contains(target)) return;
      if (target.closest("[data-tech-row]")) return;
      close();
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [flyout, close]);

  const api = useMemo<FlyoutApi>(
    () => ({
      activeName: flyout?.tech.name ?? null,
      hover,
      leave,
      toggle,
    }),
    [flyout?.tech.name, hover, leave, toggle]
  );

  const iconEntry = flyout ? techIconMap[flyout.tech.icon] : undefined;

  return (
    <FlyoutContext.Provider value={api}>
      {children}
      {flyout
        ? createPortal(
            <div
              ref={popRef}
              role="tooltip"
              onPointerEnter={clearHide}
              onPointerLeave={leave}
              style={{
                top: flyout.top,
                left: flyout.left,
                width: POP_WIDTH,
              }}
              className="paper fixed z-[100] overflow-hidden rounded-xl shadow-lg"
            >
              <span className="brand-gradient-bg absolute inset-x-0 top-0 h-0.5" />
              <div className="px-4 pt-4 pb-4">
                <div className="mb-3 flex items-start gap-2.5">
                  {iconEntry &&
                    (() => {
                      const { icon: Icon, color } = iconEntry;
                      return (
                        <Icon
                          size={22}
                          className="mt-0.5 shrink-0"
                          style={{ color }}
                          aria-hidden="true"
                        />
                      );
                    })()}
                  <div className="min-w-0">
                    <p className="font-heading text-[17px] font-extrabold tracking-tight text-dark">
                      {flyout.tech.name}
                    </p>
                    <p className="text-[11px] font-semibold tracking-[0.14em] text-brand-orange uppercase">
                      {techCategories[flyout.tech.category]}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] leading-snug font-medium text-warm-800">
                  {flyout.tech.description}
                </p>
                <p className="mt-2.5 text-[13px] leading-snug font-medium text-warm-700">
                  <span className="font-semibold text-warm-800">Used in: </span>
                  {flyout.tech.usedFor}
                </p>
              </div>
            </div>,
            document.body
          )
        : null}
    </FlyoutContext.Provider>
  );
}

export function TechRow({
  tech,
  className,
  children,
  index = 0,
}: {
  tech: Technology;
  className?: string;
  children: ReactNode;
  index?: number;
}) {
  const api = useContext(FlyoutContext);
  const riseStyle = {
    ["--rise-delay" as string]: `${Math.min(index, 10) * 0.045}s`,
  };

  if (!api) {
    return (
      <tr className={cn(className, "soft-rise")} style={riseStyle}>
        {children}
      </tr>
    );
  }

  const active = api.activeName === tech.name;

  return (
    <tr
      data-tech-row={tech.name}
      className={cn(className, "soft-rise", active && "bg-white")}
      style={riseStyle}
      onPointerEnter={(event) => {
        if (event.pointerType !== "mouse") return;
        api.hover(tech, event.currentTarget);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType !== "mouse") return;
        api.leave();
      }}
      onClick={(event) => {
        event.stopPropagation();
        api.toggle(tech, event.currentTarget);
      }}
    >
      {children}
    </tr>
  );
}

export function TechName({ tech }: { tech: Technology }) {
  const iconEntry = techIconMap[tech.icon];

  return (
    <span className="flex items-center gap-2.5">
      {iconEntry &&
        (() => {
          const { icon: Icon, color } = iconEntry;
          return (
            <Icon
              size={20}
              className="shrink-0"
              style={{ color }}
              aria-hidden="true"
              suppressHydrationWarning
            />
          );
        })()}
      <span className="text-[15px] font-semibold text-warm-800">{tech.name}</span>
    </span>
  );
}
