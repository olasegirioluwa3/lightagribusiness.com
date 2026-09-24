import React from "react";
import { Badge } from "./Badge";

export interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "default" | "gold" | "green" | "academy" | "advisory" | "lightagrios";
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  badgeVariant = "gold",
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 ${alignment} ${className}`}>
      {badge && (
        <div className="mb-3">
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal mb-4 leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-brand-grey leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`h-1 w-16 bg-brand-gold mt-6 rounded-full ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
};
