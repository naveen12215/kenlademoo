import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  shimmer?: boolean;
}

export function GradientText({
  children,
  className,
  as: Component = "span",
  shimmer = false,
}: GradientTextProps) {
  return (
    <Component
      className={cn("brand-gradient-text", shimmer && "shimmer", className)}
    >
      {children}
    </Component>
  );
}
