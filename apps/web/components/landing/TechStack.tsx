import { PageContainer } from "../ui/PageContainer";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";
import { Marquee } from "../ui/Marquee";

const TECHNOLOGIES = [
  "React",
  "Next.js",
  "TypeScript",
  "Three.js",
  "Framer Motion",
  "Tailwind CSS",
  "Node.js",
  "Solidity",
  "WebGL",
  "Figma",
  "Vercel",
  "PostgreSQL",
];

const METRICS = [
  { value: "50+", label: "Projects Shipped" },
  { value: "3+", label: "Years" },
  { value: "100%", label: "Remote" },
  { value: "24h", label: "Response Time" },
] as const;

export function TechStack() {
  return (
    <section className="section-pad bg-background">
      <PageContainer>
        <SectionHeader label="Built With" title="Our Stack" align="center" />
      </PageContainer>

      {/* Full-bleed marquee */}
      <div className="mt-14">
        <Marquee speed={25} pauseOnHover>
          {TECHNOLOGIES.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-6 px-8 font-mono text-sm uppercase tracking-[0.15em] text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {tech}
              <span
                aria-hidden
                className="inline-block h-1 w-1 rounded-full bg-secondary/40"
              />
            </span>
          ))}
        </Marquee>
      </div>

      {/* Metrics row */}
      <PageContainer className="mt-16">
        <ScrollReveal>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {METRICS.map((metric) => (
              <div key={metric.label} className="text-center">
                <p className="font-display text-3xl font-bold text-foreground md:text-4xl">
                  {metric.value}
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
}
