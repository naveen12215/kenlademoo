import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradientBorder?: boolean;
  hoverGradient?: boolean;
  as?: React.ElementType;
}

export function Card({
  children,
  className,
  hover = true,
  gradientBorder = false,
  hoverGradient = false,
  as: Component = "div",
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-xl bg-white p-6 md:p-8",
        "border border-warm-200",
        hover && [
          "transition-all duration-300 ease-out",
          "hover:shadow-md hover:-translate-y-0.5",
        ],
        gradientBorder && "brand-gradient-border",
        hoverGradient && "brand-gradient-border-hover",
        className
      )}
    >
      {children}
    </Component>
  );
}
