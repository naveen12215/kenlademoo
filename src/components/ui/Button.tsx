import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
}

interface ButtonAsButton
  extends ButtonBaseProps,
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> {
  href?: never;
}

interface ButtonAsLink
  extends ButtonBaseProps,
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> {
  href: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<ButtonVariant, string> = {
  primary: [
    "brand-gradient-bg text-white font-semibold",
    "shadow-md hover:shadow-lg",
    "active:brightness-95 active:scale-[0.98]",
  ].join(" "),
  secondary: [
    "bg-dark text-white font-semibold",
    "hover:bg-dark-light",
    "active:bg-dark-lighter active:scale-[0.98]",
  ].join(" "),
  outline: [
    "border border-warm-300 text-dark font-semibold bg-transparent",
    "hover:border-brand-orange hover:text-brand-orange",
    "active:scale-[0.98]",
  ].join(" "),
  ghost: [
    "text-warm-700 font-medium bg-transparent",
    "hover:bg-warm-100 hover:text-dark",
    "active:bg-warm-200",
  ].join(" "),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-[13px] rounded-md gap-1.5",
  md: "px-5 py-2 text-sm rounded-md gap-2",
  lg: "px-6 py-3 text-sm rounded-md gap-2",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = cn(
    "btn-sheen group inline-flex items-center justify-center overflow-hidden transition-all duration-300 cursor-pointer",
    "[&_svg]:transition-transform [&_svg]:duration-300 group-hover:[&_svg]:translate-x-1",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as Omit<
      ButtonAsLink,
      keyof ButtonBaseProps
    >;
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...linkRest}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...(rest as Omit<ButtonAsButton, keyof ButtonBaseProps>)}
    >
      {children}
    </button>
  );
});
