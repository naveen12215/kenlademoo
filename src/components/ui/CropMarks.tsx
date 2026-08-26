import { cn } from "@/lib/utils";

interface CropMarksProps {
  className?: string;
}

const corners = [
  "top-0 left-0 origin-top-left border-t border-l",
  "top-0 right-0 origin-top-right border-t border-r",
  "bottom-0 left-0 origin-bottom-left border-b border-l",
  "bottom-0 right-0 origin-bottom-right border-b border-r",
] as const;

export function CropMarks({ className }: CropMarksProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0", className)}
      aria-hidden="true"
    >
      {corners.map((corner, index) => (
        <span
          key={corner}
          className={cn("crop-mark", corner)}
          style={{ animationDelay: `${0.08 + index * 0.08}s` }}
        />
      ))}
    </div>
  );
}
