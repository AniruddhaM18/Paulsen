import { ScrollReveal } from "./ScrollReveal";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <ScrollReveal className={centered ? "text-center" : ""}>
      <div className={centered ? "mx-auto max-w-2xl" : "max-w-2xl"}>
        <div
          className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-secondary" />
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
            {label}
          </p>
        </div>
        <h2 className="mt-4 font-display text-[clamp(1.75rem,4vw,3rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-foreground">
          {title}
        </h2>
        {description && (
          <p
            className={`mt-5 text-[15px] leading-relaxed text-muted-foreground md:text-base ${centered ? "mx-auto max-w-xl" : "max-w-md"}`}
          >
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
