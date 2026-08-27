import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { Check } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  valid?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, valid, className, id, ...props },
  ref
) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-1.5">
      <label htmlFor={inputId} className="block text-[15px] font-semibold text-warm-800">
        {label}
      </label>
      <div className="field-ink relative">
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-none border-0 border-b bg-transparent px-0 py-3",
            "text-[15px] text-warm-800 placeholder:text-warm-400",
            "transition-colors duration-200",
            "focus:border-brand-orange focus:ring-0 focus:outline-none",
            error
              ? "border-error"
              : valid
                ? "border-success/50"
                : "border-warm-300 hover:border-warm-400",
            className
          )}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={error ? `${inputId}-error` : undefined}
          {...props}
        />
        {valid && !error && (
          <Check
            className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 text-success"
            strokeWidth={2}
            aria-hidden="true"
          />
        )}
      </div>
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
});
