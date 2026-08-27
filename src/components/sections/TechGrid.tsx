"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { TechGridCategorized } from "@/components/sections/TechGridCategorized";
import {
  TechFlyoutProvider,
  TechName,
  TechRow,
} from "@/components/sections/TechTip";
import { technologies, techCategories } from "@/data/technologies";
import { techUsedIn } from "@/lib/tech-used-in";
import type { TechCategory } from "@/types";

type ViewMode = "grid" | "categorized";
type FilterKey = "all" | TechCategory;

const viewOptions: { key: ViewMode; label: string }[] = [
  { key: "grid", label: "Table" },
  { key: "categorized", label: "Grouped" },
];

const filters: { key: FilterKey; label: string }[] = [
  { key: "all", label: "All" },
  ...Object.entries(techCategories).map(([key, label]) => ({
    key: key as TechCategory,
    label,
  })),
];

export function TechGrid() {
  const searchParams = useSearchParams();
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [activeFilter, setActiveFilter] = useState<FilterKey>("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return technologies.filter((tech) => {
      const inFilter = activeFilter === "all" || tech.category === activeFilter;
      const inQuery =
        !q ||
        tech.name.toLowerCase().includes(q) ||
        tech.description.toLowerCase().includes(q) ||
        tech.usedFor.toLowerCase().includes(q) ||
        tech.category.toLowerCase().includes(q) ||
        tech.proficiency.toLowerCase().includes(q);
      return inFilter && inQuery;
    });
  }, [activeFilter, query]);

  return (
    <TechFlyoutProvider>
      <div>
      <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <label className="relative block max-w-md flex-1">
          <span className="sr-only">Search the stack</span>
          <Search className="pointer-events-none absolute top-1/2 left-0 h-4 w-4 -translate-y-1/2 text-brand-orange" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter the table…"
            className="w-full border-b border-warm-200 bg-transparent py-3 pr-3 pl-8 text-[15px] text-dark placeholder:text-warm-400 focus:border-brand-orange focus:outline-none"
          />
        </label>

        <div className="flex gap-6">
          {viewOptions.map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setViewMode(item.key)}
              aria-pressed={viewMode === item.key}
              className={cn(
                "rounded-md px-3 py-1.5 text-[13px] font-semibold transition-colors",
                viewMode === item.key
                  ? "brand-gradient-bg text-white shadow-sm"
                  : "bg-white text-warm-700 hover:text-dark"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      <div className="chip-scroll mb-6 flex gap-2 overflow-x-auto pb-1 lg:flex-wrap lg:overflow-visible">
        {filters.map((item) => {
          const isActive = item.key === activeFilter;
          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveFilter(item.key)}
              aria-pressed={isActive}
              className={cn(
                "relative shrink-0 rounded-md px-3.5 py-2 text-[13px] font-semibold transition-colors",
                isActive
                  ? "brand-gradient-bg text-white shadow-sm"
                  : "bg-white text-warm-700 hover:text-dark"
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <p className="mb-6 text-[13px] font-semibold text-warm-700">
        {filtered.length} {filtered.length === 1 ? "tool" : "tools"}
      </p>

      {filtered.length === 0 ? (
        <p className="border-t border-warm-200 py-16 text-[15px] font-medium text-warm-700">
          Nothing in the stack matches that. Try a tool name, a category, or a
          proficiency.
        </p>
      ) : viewMode === "grid" ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] border-t border-warm-200 text-left">
            <thead className="thead-sticky">
              <tr className="text-[12px] font-semibold tracking-[0.12em] text-warm-700 uppercase">
                <th className="py-3 pr-4">Tool</th>
                <th className="py-3 pr-4">Category</th>
                <th className="py-3 pr-4">Proficiency</th>
                <th className="py-3">Used in</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((tech, index) => {
                const used = techUsedIn(tech.name);
                return (
                  <TechRow
                    key={tech.name}
                    tech={tech}
                    index={index}
                    className="wash-hover border-t border-warm-200"
                  >
                    <td className="py-3.5 pr-4">
                      <TechName tech={tech} />
                    </td>
                    <td className="py-3.5 pr-4 text-[13px] font-medium text-warm-700">
                      {techCategories[tech.category]}
                    </td>
                    <td className="py-3.5 pr-4 text-[13px] font-medium tracking-[0.04em] text-warm-700 uppercase">
                      {tech.proficiency}
                    </td>
                    <td className="py-3.5 text-[13px] font-medium text-warm-700">
                      {used.length ? used.join(", ") : "Core to how we ship"}
                    </td>
                  </TechRow>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <TechGridCategorized technologies={filtered} />
      )}
      </div>
    </TechFlyoutProvider>
  );
}
