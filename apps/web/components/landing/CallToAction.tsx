import { PageContainer } from "../ui/PageContainer";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Button } from "../ui/Button";

export function CallToAction() {
  return (
    <section className="section-pad relative overflow-hidden bg-surface-subtle">
      {/* Subtle radial glow decoration */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, var(--tertiary-500) 0%, transparent 70%)",
          opacity: 0.06,
        }}
      />

      <PageContainer className="relative">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-secondary">
              Ready to start?
            </p>
            <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-foreground">
              Let&apos;s Build
              <br />
              Something Together
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground md:text-base">
              We&apos;re currently accepting new projects. Tell us about your
              vision and we&apos;ll make it move.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="#contact" variant="primary" size="md">
                Get in touch
              </Button>
              <Button
                href="mailto:contact@paulsen.dev"
                variant="outline"
                size="md"
              >
                contact@paulsen.dev
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
