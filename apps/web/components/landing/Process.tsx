import { PageContainer } from "../ui/PageContainer";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

const STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your brand, goals, and audience. Deep-dive into what makes you different.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Wireframes, prototypes, motion studies. We iterate until it feels right.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "Clean code, real performance. Every interaction built with care.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Launch, monitor, refine. We stick around to make sure it works.",
  },
] as const;

export function Process() {
  return (
    <section id="process" className="section-pad bg-surface-subtle">
      <PageContainer>
        <SectionHeader
          label="How We Work"
          title="Process"
          align="center"
        />

        <div className="relative mt-16">
          {/* Connecting horizontal line (desktop only) */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-7 hidden h-px bg-border lg:block"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.15}>
                <div className="relative text-center">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-surface-subtle font-mono text-lg font-semibold text-secondary">
                    {step.number}
                  </div>
                  <h3 className="mt-6 font-display text-sm font-bold uppercase tracking-wide text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
