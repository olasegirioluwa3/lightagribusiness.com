import React from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "green" | "academy" | "advisory" | "lightagrios";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className = "",
}) => {
  const variantStyles = {
    default: "bg-brand-border/40 text-brand-charcoal border-brand-border",
    gold: "bg-brand-gold/15 text-brand-gold-dark border-brand-gold/30",
    green: "bg-brand-green/10 text-brand-green border-brand-green/20",
    academy: "bg-amber-100 text-amber-900 border-amber-300",
    advisory: "bg-slate-200 text-slate-800 border-slate-300",
    lightagrios: "bg-teal-100 text-teal-900 border-teal-300",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
