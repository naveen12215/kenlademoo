"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Compass, FolderKanban, Layers, Search, Wrench, X } from "lucide-react";
import { services } from "@/data/services";
import { projects } from "@/data/projects";
import { technologies } from "@/data/technologies";

export type PaletteOpenHandler = (open: boolean) => void;

type Hit = {
  id: string;
  label: string;
  hint: string;
  href: string;
  group: string;
};

function flattenPages(): Hit[] {
  return [
    { id: "home", label: "Home", hint: "Start here", href: "/", group: "Pages" },
    {
      id: "/services",
      label: "Services",
      hint: "What we build",
      href: "/services",
      group: "Pages",
    },
    {
      id: "/technologies",
      label: "Stack",
      hint: "Technologies",
      href: "/technologies",
      group: "Pages",
    },
    {
      id: "/projects",
      label: "Project",
      hint: "Case files",
      href: "/projects",
      group: "Pages",
    },
    {
      id: "/about",
      label: "About",
      hint: "The studio",
      href: "/about",
      group: "Pages",
    },
    {
      id: "/contact",
      label: "Contact",
      hint: "Get in touch",
      href: "/contact",
      group: "Pages",
    },
  ];
}

const serviceHits: Hit[] = services.map((service) => ({
  id: `svc-${service.slug}`,
  label: service.title,
  hint: service.shortDescription,
  href: `/services/${service.slug}`,
  group: "Services",
}));

const projectHits: Hit[] = projects.map((project) => ({
  id: `prj-${project.slug}`,
  label: project.title,
  hint: project.industry,
  href: `/projects/${project.slug}`,
  group: "Projects",
}));

const techHits: Hit[] = technologies.map((tech) => ({
  id: `tech-${tech.name}`,
  label: tech.name,
  hint: tech.category,
  href: `/technologies?q=${encodeURIComponent(tech.name)}`,
  group: "Technologies",
}));

const allHits: Hit[] = [...flattenPages(), ...serviceHits, ...projectHits, ...techHits];

const groupIcon = {
  Pages: Compass,
  Services: Wrench,
  Projects: FolderKanban,
  Technologies: Layers,
} as const;

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [seenQuery, setSeenQuery] = useState(query);

  if (query !== seenQuery) {
    setSeenQuery(query);
    setActive(0);
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return [...flattenPages(), ...serviceHits, ...projectHits].slice(0, 14);
    }
    return allHits
      .filter(
        (hit) =>
          hit.label.toLowerCase().includes(q) ||
          hit.hint.toLowerCase().includes(q) ||
          hit.group.toLowerCase().includes(q)
      )
      .slice(0, 12);
  }, [query]);

  const grouped = useMemo(() => {
    const map = new Map<string, Hit[]>();
    for (const hit of results) {
      const list = map.get(hit.group) ?? [];
      list.push(hit);
      map.set(hit.group, list);
    }
    return map;
  }, [results]);

  const close = useCallback(() => {
    onOpenChange(false);
    setQuery("");
    setActive(0);
  }, [onOpenChange]);

  const go = useCallback(
    (href: string) => {
      close();
      router.push(href);
    },
    [close, router]
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const isPalette =
        (event.key === "k" || event.key === "K") &&
        (event.metaKey || event.ctrlKey);
      if (isPalette) {
        event.preventDefault();
        onOpenChange(!open);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      const id = window.setTimeout(() => inputRef.current?.focus(), 20);
      return () => window.clearTimeout(id);
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
      if (!results.length) return;
      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActive((index) => Math.min(index + 1, results.length - 1));
      }
      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActive((index) => Math.max(index - 1, 0));
      }
      if (event.key === "Enter") {
        const current = Math.min(active, results.length - 1);
        if (!results[current]) return;
        event.preventDefault();
        go(results[current].href);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, results, active, close, go]);

  const highlight =
    results.length === 0 ? -1 : Math.min(active, results.length - 1);

  let runningIndex = -1;

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-start sm:px-4 sm:pt-[18vh]">
          <motion.button
            type="button"
            aria-label="Close search"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-warm-900/15 backdrop-blur-sm"
            onClick={close}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
            className="palette-sheet transition-discrete relative z-10 flex h-[88vh] w-full flex-col overflow-hidden rounded-t-xl border border-warm-200 bg-white shadow-[0_24px_60px_rgba(238,122,72,0.18)] sm:h-auto sm:max-w-xl sm:rounded-xl"
          >
            <div className="mx-auto mt-2 h-1 w-10 rounded-full bg-warm-300 sm:hidden" />
            <div className="palette-input flex items-center gap-3 border-b border-warm-200 px-4">
              <span className="instrument-search-icon shrink-0" aria-hidden="true">
                <Search className="h-3.5 w-3.5" />
              </span>
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search services, projects, stack…"
                className="h-14 w-full bg-transparent text-base font-medium text-dark placeholder:font-normal placeholder:text-warm-400 focus:outline-none focus-visible:outline-none sm:text-[15px]"
              />
              <kbd className="instrument-kbd hidden sm:inline">ESC</kbd>
              <button
                type="button"
                onClick={close}
                className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-warm-200 bg-warm-50 text-warm-700 transition-colors hover:border-brand-orange/40 hover:bg-white hover:text-dark"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-2 sm:max-h-[min(24rem,50vh)] sm:flex-none">
              {results.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-warm-500">
                  Nothing matches “{query}”. Try a service, a stack, or a page.
                </p>
              )}

              {[...grouped.entries()].map(([group, hits]) => {
                const Icon = groupIcon[group as keyof typeof groupIcon] ?? Search;
                return (
                  <div key={group} className="mb-2">
                    <p className="flex items-center gap-1.5 px-3 py-2 text-[11px] font-semibold tracking-[0.14em] text-brand-orange uppercase">
                      <Icon className="h-3 w-3" />
                      {group}
                    </p>
                    {hits.map((hit) => {
                      runningIndex += 1;
                      const index = runningIndex;
                      return (
                        <button
                          key={hit.id}
                          type="button"
                          data-active={index === highlight}
                          onMouseEnter={() => setActive(index)}
                          onClick={() => go(hit.href)}
                          className="palette-hit relative flex w-full items-center justify-between gap-3 rounded-md px-3 py-3.5 text-left transition-colors sm:py-2.5"
                        >
                          <span>
                            <span className="block text-sm font-semibold text-dark">
                              {hit.label}
                            </span>
                            <span className="block truncate text-[13px] font-medium text-warm-700">
                              {hit.hint}
                            </span>
                          </span>
                          <ArrowRight className="h-3.5 w-3.5 shrink-0 text-brand-orange" />
                        </button>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="hidden items-center gap-4 border-t border-warm-100 px-4 py-2.5 sm:flex">
              <p className="text-[11px] font-medium text-warm-600">
                <kbd className="instrument-kbd mr-1">↑</kbd>
                <kbd className="instrument-kbd mr-2">↓</kbd>
                move
              </p>
              <p className="text-[11px] font-medium text-warm-600">
                <kbd className="instrument-kbd mr-2">↵</kbd>
                open
              </p>
              <p className="ml-auto text-[11px] font-medium text-warm-600">
                <kbd className="instrument-kbd mr-2">ESC</kbd>
                close
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
