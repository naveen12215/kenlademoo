import { cn } from "@/lib/utils";
import { GradientText } from "./GradientText";
import { FadeIn } from "@/components/animations/FadeIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  gradient?: boolean;
  align?: "left" | "center";
  className?: string;
  eyebrow?: string;
  index?: string;
  subtitleClassName?: string;
  titleAs?: "h1" | "h2";
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
  titleAs: TitleTag = "h2",
}: SectionHeadingProps) {
  return (
    <FadeIn direction="up">
    <div
      className={cn(
        "mb-8 md:mb-10",
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
        <TitleTag
          className={cn(
            "display-h2 font-extrabold tracking-tight",
            !gradient && "text-dark"
          )}
        >
          {gradient ? <GradientText>{title}</GradientText> : title}
        </TitleTag>
      </div>
      {subtitle && (
        <p
          className={cn(
            "max-w-xl text-lg leading-relaxed font-medium text-warm-800",
            subtitleClassName,
            align === "center" && "mx-auto mt-4",
            align === "left" && "lg:col-span-5 lg:mb-1"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
    </FadeIn>
  );
}
