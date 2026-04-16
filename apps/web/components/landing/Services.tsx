"use client";

import { motion } from "framer-motion";
import { PageContainer } from "../ui/PageContainer";
import { ScrollReveal } from "../ui/ScrollReveal";

/* ------------------------------------------------------------------ */
/*  Mini-mockup visuals rendered inside each bento card                */
/* ------------------------------------------------------------------ */

function MockBrowser() {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="overflow-hidden rounded-lg border border-border bg-background/60">
        {/* Title bar */}
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/60" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/60" />
          <span className="h-2 w-2 rounded-full bg-green-400/60" />
          <span className="ml-2 h-3 flex-1 rounded-sm bg-white/5" />
        </div>
        {/* Body with scroll layers */}
        <div className="relative h-28 overflow-hidden">
          <div className="absolute inset-x-3 top-3 h-6 rounded bg-secondary/15" />
          <div className="absolute inset-x-3 top-11 h-3 w-3/4 rounded bg-white/5" />
          <div className="absolute inset-x-3 top-16 h-3 w-1/2 rounded bg-white/5" />
          {/* Animated scroll indicator */}
          <motion.div
            className="absolute right-1.5 top-2 h-6 w-1 rounded-full bg-secondary/40"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Parallax layers */}
          <motion.div
            className="absolute bottom-2 left-3 h-8 w-16 rounded bg-gradient-to-r from-secondary/20 to-tertiary-500/20"
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-3 right-3 h-6 w-12 rounded bg-tertiary-500/10"
            animate={{ x: [0, -4, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />
        </div>
      </div>
    </div>
  );
}

function MockWallet() {
  return (
    <div className="relative mx-auto w-full max-w-[200px]">
      <div className="overflow-hidden rounded-xl border border-border bg-background/60 p-4">
        {/* Wallet icon */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-tertiary-500/20">
            <svg className="h-4 w-4 text-tertiary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3" />
            </svg>
          </div>
          <div>
            <p className="font-mono text-[9px] text-muted-foreground">Connected</p>
            <p className="font-mono text-[10px] text-foreground">0x4f3...a8b2</p>
          </div>
        </div>
        {/* Balance */}
        <div className="rounded-lg bg-white/[0.03] p-2.5">
          <p className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground">
            Balance
          </p>
          <p className="mt-0.5 font-mono text-sm font-semibold text-foreground">
            2.847 <span className="text-muted-foreground">ETH</span>
          </p>
        </div>
        {/* Animated pulse ring */}
        <motion.div
          className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-secondary"
          animate={{ scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </div>
    </div>
  );
}

function MockComponents() {
  return (
    <div className="relative mx-auto flex w-full max-w-[220px] flex-col gap-2">
      {/* Stacked cards showing components */}
      <div className="rounded-lg border border-border bg-background/60 p-3">
        <div className="flex items-center gap-2">
          <div className="h-5 w-14 rounded-full bg-secondary text-center font-mono text-[8px] leading-5 text-secondary-foreground">
            Button
          </div>
          <div className="h-5 w-14 rounded-full border border-border text-center font-mono text-[8px] leading-5 text-muted-foreground">
            Ghost
          </div>
          <div className="h-5 flex-1 rounded-full bg-tertiary-500/20 text-center font-mono text-[8px] leading-5 text-tertiary-400">
            Link
          </div>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background/60 p-3">
        <div className="flex items-center gap-2">
          {/* Color swatches */}
          <div className="h-5 w-5 rounded-md bg-secondary" />
          <div className="h-5 w-5 rounded-md bg-tertiary-500" />
          <div className="h-5 w-5 rounded-md bg-foreground" />
          <div className="h-5 w-5 rounded-md bg-muted-foreground" />
          <div className="ml-auto h-2.5 w-12 rounded bg-white/5" />
        </div>
      </div>
      <div className="rounded-lg border border-border bg-background/60 p-3">
        <div className="flex items-center gap-2">
          <div className="h-5 flex-1 rounded-md border border-border bg-white/[0.02] px-2 font-mono text-[8px] leading-5 text-muted-foreground">
            placeholder...
          </div>
          <div className="h-5 w-5 rounded-md bg-secondary/20" />
        </div>
      </div>
    </div>
  );
}

function MockVitals() {
  return (
    <div className="relative mx-auto w-full max-w-[200px]">
      <div className="overflow-hidden rounded-xl border border-border bg-background/60 p-4">
        <p className="mb-3 font-mono text-[9px] uppercase tracking-wider text-muted-foreground">
          Core Web Vitals
        </p>
        {[
          { label: "LCP", value: "1.2s", width: "90%" },
          { label: "INP", value: "45ms", width: "95%" },
          { label: "CLS", value: "0.02", width: "98%" },
        ].map((metric) => (
          <div key={metric.label} className="mb-2 last:mb-0">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] text-foreground">
                {metric.label}
              </span>
              <span className="font-mono text-[9px] text-secondary">
                {metric.value}
              </span>
            </div>
            <div className="mt-1 h-1 w-full rounded-full bg-white/5">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-secondary to-secondary-400"
                initial={{ width: 0 }}
                whileInView={{ width: metric.width }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MockAnimation() {
  return (
    <div className="relative mx-auto flex h-28 w-full max-w-[220px] items-center justify-center">
      {/* Orbital path */}
      <div className="absolute h-20 w-40 rounded-full border border-border/50" />
      <div className="absolute h-12 w-28 rounded-full border border-border/30" />
      {/* Orbiting dot */}
      <motion.div
        className="absolute h-3 w-3 rounded-full bg-secondary shadow-[0_0_12px_rgba(34,197,94,0.4)]"
        animate={{
          x: [60, 0, -60, 0, 60],
          y: [0, 30, 0, -30, 0],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute h-2 w-2 rounded-full bg-tertiary-400 shadow-[0_0_10px_rgba(129,140,248,0.4)]"
        animate={{
          x: [-35, 0, 35, 0, -35],
          y: [0, -18, 0, 18, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Center */}
      <div className="relative z-10 h-4 w-4 rounded-full bg-foreground/10 ring-2 ring-foreground/20" />
    </div>
  );
}

function MockTerminal() {
  return (
    <div className="relative mx-auto w-full max-w-[220px]">
      <div className="overflow-hidden rounded-lg border border-border bg-background/80">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-1.5">
          <span className="font-mono text-[8px] text-muted-foreground">
            Terminal
          </span>
        </div>
        <div className="space-y-1.5 p-3 font-mono text-[9px] leading-relaxed">
          <p className="text-muted-foreground">
            <span className="text-secondary">$</span> pnpm build
          </p>
          <p className="text-muted-foreground/60">
            <span className="text-secondary">✓</span> Compiled in 1.8s
          </p>
          <p className="text-muted-foreground/60">
            <span className="text-secondary">✓</span> TypeScript 0 errors
          </p>
          <p className="text-muted-foreground/60">
            <span className="text-secondary">✓</span> Lint passed
          </p>
          <p className="text-muted-foreground/60">
            <span className="text-secondary">✓</span> 24 tests passed
          </p>
          <motion.span
            className="inline-block h-3 w-1.5 bg-secondary"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bento card data                                                    */
/* ------------------------------------------------------------------ */

const CARDS = [
  {
    title: "Interactive Websites.",
    description:
      "Custom-built sites with scroll animations, 3D effects, and micro-interactions that make brands memorable.",
    visual: MockBrowser,
    span: "lg:col-span-5",
  },
  {
    title: "Web3 & dApps.",
    description:
      "Decentralized applications with clean interfaces. Wallet connections, on-chain data, token-gated experiences.",
    visual: MockWallet,
    span: "lg:col-span-4",
  },
  {
    title: "Design Systems.",
    description:
      "Scalable component libraries and design tokens. Built for consistency across products.",
    visual: MockComponents,
    span: "lg:col-span-3",
  },
  {
    title: "Performance.",
    description:
      "Sub-second loads, perfect Core Web Vitals. Every millisecond matters.",
    visual: MockVitals,
    span: "lg:col-span-3",
  },
  {
    title: "Motion & Animation.",
    description:
      "Framer Motion, GSAP, Three.js, WebGL shaders. We make pixels dance.",
    visual: MockAnimation,
    span: "lg:col-span-5",
  },
  {
    title: "Frontend Architecture.",
    description:
      "Next.js, React, TypeScript. Monorepos, CI/CD, testing. Production-grade from day one.",
    visual: MockTerminal,
    span: "lg:col-span-4",
  },
];

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

export function Services() {
  return (
    <section id="services" className="section-pad relative overflow-hidden bg-surface-subtle">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 60%, rgba(99,102,241,0.06) 0%, transparent 70%)",
        }}
      />

      <PageContainer className="relative">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-foreground">
              Expertise
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              We specialize in high-end frontend development — the kind that
              turns heads and drives results.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-12">
          {CARDS.map((card, i) => {
            const Visual = card.visual;
            return (
              <ScrollReveal
                key={card.title}
                delay={i * 0.07}
                className={`sm:col-span-1 ${card.span}`}
              >
                <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/80 backdrop-blur-sm transition-all duration-300 hover:border-border-strong hover:bg-surface-elevated/80">
                  {/* Text content */}
                  <div className="p-5 pb-0 lg:p-6 lg:pb-0">
                    <h3 className="text-sm font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-muted-foreground">
                      {card.description}
                    </p>
                  </div>
                  {/* Visual mockup */}
                  <div className="mt-auto px-4 pb-5 pt-4 lg:px-5 lg:pb-6 lg:pt-5">
                    <Visual />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </PageContainer>
    </section>
  );
}
