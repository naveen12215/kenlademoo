import { cn } from "@/lib/utils";
import { GradientText } from "./GradientText";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  align?: "left" | "center";
  className?: string;
  eyebrow?: string;
  index?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  gradient = false,
  align = "left",
  className,
  eyebrow,
  index,
  subtitleClassName,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        align === "left" && "grid gap-6 lg:grid-cols-12 lg:items-end",
        className
      )}
    >
      <div className={cn(align === "left" && "lg:col-span-7")}>
        {(eyebrow || index) && (
          <p className="eyebrow mb-4">
            {index && <span className="mr-3">{index}</span>}
            {eyebrow}
          </p>
        )}
        <h2
          className={cn(
            "text-[2rem] font-extrabold tracking-tight sm:text-4xl lg:text-[3.15rem] lg:leading-[1.08]",
            !gradient && "text-dark"
          )}
        >
          {gradient ? <GradientText>{title}</GradientText> : title}
        </h2>
      </div>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-[15px] leading-relaxed font-medium text-warm-700 lg:text-[17px]",
            subtitleClassName,
            align === "center" && "mx-auto mt-4",
            align === "left" && "lg:col-span-5 lg:mb-1"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
