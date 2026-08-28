"use client";

import { technologies as allTechnologies, techCategories } from "@/data/technologies";
import { TechName, TechRow } from "@/components/sections/TechTip";
import { FadeIn } from "@/components/animations/FadeIn";
import { techUsedIn } from "@/lib/tech-used-in";
import type { Technology, TechCategory } from "@/types";

const categories = Object.entries(techCategories).filter(
  (entry): entry is [TechCategory, string] => Boolean(entry[1])
);

interface TechGridCategorizedProps {
  technologies?: Technology[];
}

export function TechGridCategorized({
  technologies = allTechnologies,
}: TechGridCategorizedProps) {
  const groups = categories
    .map(([key, label], index) => ({
      key,
      label,
      index,
      techs: technologies.filter((item) => item.category === key),
    }))
    .filter((group) => group.techs.length > 0);

  return (
    <div className="space-y-14">
      {groups.map((group, groupIndex) => (
        <FadeIn key={group.key} direction="up" delay={Math.min(groupIndex, 6) * 0.05}>
        <section>
          <div className="mb-3 flex items-baseline gap-4 border-b border-warm-200 pb-3">
            <span className="index-num">
              {String(group.index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-heading text-xl font-bold tracking-tight text-dark">
              {group.label}
            </h3>
            <span className="text-[13px] font-semibold text-warm-700">
              {group.techs.length} {group.techs.length === 1 ? "tool" : "tools"}
            </span>
          </div>

          <table className="w-full text-left">
            <tbody>
              {group.techs.map((tech, techIndex) => {
                const used = techUsedIn(tech.name);
                return (
                  <TechRow
                    key={tech.name}
                    tech={tech}
                    index={techIndex}
                    className="wash-hover border-b border-warm-200"
                  >
                    <td className="py-3 pr-4">
                      <TechName tech={tech} />
                    </td>
                    <td className="hidden py-3 pr-4 text-[13px] font-medium tracking-[0.04em] text-warm-700 uppercase sm:table-cell">
                      {tech.proficiency}
                    </td>
                    <td className="hidden py-3 text-[13px] font-medium text-warm-700 md:table-cell">
                      {used.length ? used.join(", ") : "Core to how we ship"}
                    </td>
                  </TechRow>
                );
              })}
            </tbody>
          </table>
        </section>
        </FadeIn>
      ))}
    </div>
  );
}
