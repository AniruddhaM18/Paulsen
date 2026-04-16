import { PageContainer } from "../ui/PageContainer";
import { SectionHeader } from "../ui/SectionHeader";
import { ScrollReveal } from "../ui/ScrollReveal";

const PROJECTS = [
  {
    title: "WKNDHRS",
    category: "Agency",
    year: "2024",
    image: "/bg3.webp",
    description: "Agency portfolio with custom 3D scroll interactions.",
    featured: true,
  },
  {
    title: "Velocity",
    category: "Web3",
    year: "2024",
    image: "/bg1.webp",
    description: "Token-gated platform with real-time on-chain data.",
  },
  {
    title: "Meridian",
    category: "SaaS",
    year: "2023",
    image: "/bg2.webp",
    description: "Dashboard interface with data visualization.",
  },
  {
    title: "Brutal",
    category: "E-Commerce",
    year: "2023",
    image: "/bg4.webp",
    description: "Headless storefront with immersive product pages.",
  },
] as const;

export function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="work" className="section-pad bg-background">
      <PageContainer>
        <SectionHeader
          label="Selected Work"
          title="Projects"
          description="A selection of recent work for clients who care about craft as much as we do."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {/* Featured project — spans 2 cols + 2 rows on desktop */}
          <ScrollReveal className="lg:col-span-2 lg:row-span-2">
            <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface">
              <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:absolute lg:inset-0">
                <img
                  src={featured.image}
                  alt=""
                  aria-hidden
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
              </div>
              <div className="relative p-6 lg:absolute lg:inset-x-0 lg:bottom-0 lg:p-8">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
                    {featured.category}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {featured.year}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {featured.description}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Remaining projects */}
          {rest.map((project, i) => (
            <ScrollReveal key={project.title} delay={0.1 + i * 0.08} className="lg:col-span-2 first:lg:col-span-2 [&:nth-child(3)]:lg:col-span-1 [&:nth-child(4)]:lg:col-span-1">
              <div className="group relative h-full overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-border-strong">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] uppercase tracking-widest text-secondary">
                      {project.category}
                    </span>
                    <span className="h-px flex-1 bg-border" />
                    <span className="font-mono text-[10px] text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
