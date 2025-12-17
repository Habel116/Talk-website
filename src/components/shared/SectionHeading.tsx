import { cn } from "@/lib/utils";
import { ScrollReveal } from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
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
        <h2 className={cn("heading-section mb-4", titleClassName)}>{title}</h2>
        {subtitle && (
          <p className={cn("max-w-2xl mx-auto", subtitleClassName)}>{subtitle}</p>
        )}
      </div>
    </ScrollReveal>
  );
}
