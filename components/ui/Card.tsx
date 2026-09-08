import React from "react";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  borderAccent?: "none" | "gold" | "green" | "academy" | "advisory" | "lightagrios";
}

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hoverable = false,
  borderAccent = "none",
}) => {
  const accentStyles = {
    none: "border-brand-border/60",
    gold: "border-t-4 border-t-brand-gold border-brand-border/60",
    green: "border-t-4 border-t-brand-green border-brand-border/60",
    academy: "border-t-4 border-t-amber-500 border-brand-border/60",
    advisory: "border-t-4 border-t-slate-700 border-brand-border/60",
    lightagrios: "border-t-4 border-t-teal-600 border-brand-border/60",
  };

  return (
    <div
      className={`bg-brand-parchment-card rounded-xl p-6 sm:p-8 border shadow-parchment transition-all duration-300 ${
        hoverable ? "hover:shadow-parchment-hover hover:-translate-y-1" : ""
      } ${accentStyles[borderAccent]} ${className}`}
    >
      {children}
    </div>
  );
};
