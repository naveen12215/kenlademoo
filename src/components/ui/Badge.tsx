import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "gradient" | "outline";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-warm-100 text-warm-700 border border-warm-200",
  gradient: "brand-gradient-bg text-white border-0",
  outline: "bg-transparent border border-warm-300 text-warm-600",
};

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
