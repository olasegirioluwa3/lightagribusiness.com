import React from "react";
import Link from "next/link";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs font-semibold tracking-wide",
    md: "px-5 py-2.5 text-sm font-semibold tracking-wide",
    lg: "px-7 py-3 text-base font-semibold tracking-wide",
  };

  const variantStyles = {
    primary:
      "bg-brand-gold text-brand-charcoal hover:bg-brand-gold-light focus:ring-brand-gold shadow-gold active:scale-[0.98]",
    secondary:
      "bg-brand-green text-brand-parchment hover:bg-brand-green-light focus:ring-brand-green shadow-green active:scale-[0.98]",
    outline:
      "border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-parchment focus:ring-brand-green active:scale-[0.98]",
    ghost:
      "text-brand-charcoal hover:text-brand-green hover:bg-brand-green/5 focus:ring-brand-green",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};
