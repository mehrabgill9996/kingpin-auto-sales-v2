import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondaryOnDark" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type LinkProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type CTAButtonProps = LinkProps | ButtonProps;

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const variantClasses: Record<Variant, string> = {
  primary: "bg-crown-red text-white border border-crown-red hover:bg-crown-redDark",
  secondary: "bg-white text-crown-red border border-crown-gold hover:bg-crown-cream",
  secondaryOnDark:
    "bg-transparent text-crown-goldLight border border-crown-gold hover:bg-white/10 hover:text-white",
  ghost: "bg-transparent text-crown-red border border-transparent hover:bg-crown-cream",
};

export default function CTAButton(props: CTAButtonProps) {
  const { children, variant = "primary", size = "md", className = "", href, ...rest } = props;

  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-gold ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
