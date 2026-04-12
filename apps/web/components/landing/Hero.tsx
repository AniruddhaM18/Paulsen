"use client";

import { motion } from "framer-motion";
import { PageContainer } from "../ui/PageContainer";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-background pt-[4.25rem] lg:pt-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <PageContainer className="relative py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <motion.h1
              initial={{ opacity: 0, y: 48 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-display text-[clamp(3.25rem,12vw,11.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.02em] text-foreground"
            >
              Paulsen
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.28,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="mt-8 max-w-lg lg:mt-12"
            >
              <p className="text-[15px] leading-relaxed text-muted md:text-base">
                Frontend development studio.
                <br />
                Websites that move. Built by people who care about craft.
              </p>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.15em] text-foreground transition-colors duration-300 hover:text-accent"
              >
                Get in touch
                <svg
                  className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </PageContainer>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 md:bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
            Scroll
          </span>
          <div className="h-8 w-px bg-muted/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
