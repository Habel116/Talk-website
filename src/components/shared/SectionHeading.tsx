import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <div
        className={cn(
          "mb-12 lg:mb-16",
          centered && "text-center",
          className
        )}
      >
        <h2 className="heading-section mb-4">{title}</h2>
        {subtitle && (
          <p className="max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </ScrollReveal>
  );
}
