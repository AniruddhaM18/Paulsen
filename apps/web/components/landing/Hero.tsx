"use client";

import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import LaserFlow from "../LaserFlow";
import { PageContainer } from "../ui/PageContainer";
import { Button } from "../ui/Button";

const BG_VERTICAL_MASK =
  "linear-gradient(to bottom, black 0%, black 38%, rgba(0,0,0,0.65) 52%, transparent 72%)";

const SPOTLIGHT_RADIUS_PX = 300;
const BG_BASE_OPACITY = 0.08;

const HERO_BEAM_X_FRAC = 1 / 6;
const BEAM_SPOTLIGHT_HALF_WIDTH_NORM = 0.12;

const LASER_BEAM_COLOR = "#6ee7a5";

const LASER_PROPS = {
  horizontalSizing: 0.5,
  verticalSizing: 12,
  wispDensity: 1,
  wispSpeed: 15,
  wispIntensity: 5,
  flowSpeed: 0.35,
  flowStrength: 0.25,
  fogIntensity: 0.45,
  fogScale: 0.3,
  fogFallSpeed: 0.6,
  decay: 1.1,
  falloffStart: 1.2,
  verticalBeamOffset: -0.20,
} as const;

const RAIL_TABS = ["Studio", "Projects", "Inbox"] as const;

export function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);

  const shouldIgnoreSpotlight = useCallback((target: EventTarget | null) => {
    const el =
      target instanceof Element ? target : (target as Node | null)?.parentElement;
    if (!el?.closest) return true;
    if (el.closest("[data-hero-spotlight-ignore]")) return true;
    if (el.closest("a[href], button")) return true;
    return false;
  }, []);

  const updateSpot = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (shouldIgnoreSpotlight(e.target)) {
        setSpot(null);
        return;
      }
      const root = sectionRef.current;
      if (!root) return;
      const r = root.getBoundingClientRect();
      const relX = (e.clientX - r.left) / Math.max(r.width, 1);
      const beamCenterX = 0.5 + HERO_BEAM_X_FRAC;
      if (Math.abs(relX - beamCenterX) <= BEAM_SPOTLIGHT_HALF_WIDTH_NORM) {
        setSpot(null);
        return;
      }
      setSpot({ x: e.clientX - r.left, y: e.clientY - r.top });
    },
    [shouldIgnoreSpotlight]
  );

  const radialMask =
    spot === null
      ? "radial-gradient(circle 0px at -1px -1px, transparent 0%, transparent 100%)"
      : `radial-gradient(circle ${SPOTLIGHT_RADIUS_PX}px at ${spot.x}px ${spot.y}px, black 0%, rgba(0,0,0,0.42) 42%, transparent 68%)`;

  return (
    <section
      ref={sectionRef}
      onMouseMove={updateSpot}
      onMouseLeave={() => setSpot(null)}
      className="relative min-h-[100svh] overflow-hidden bg-background pt-[4.25rem] lg:pt-16"
    >
      <div
        aria-hidden
        className="absolute inset-0 z-0 min-h-[100svh] overflow-hidden"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/bg1.webp')",
            opacity: BG_BASE_OPACITY,
            WebkitMaskImage: BG_VERTICAL_MASK,
            maskImage: BG_VERTICAL_MASK,
          }}
        />
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            WebkitMaskImage: BG_VERTICAL_MASK,
            maskImage: BG_VERTICAL_MASK,
          }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/bg1.webp')",
              WebkitMaskImage: radialMask,
              maskImage: radialMask,
            }}
          />
        </div>
        <LaserFlow
          {...LASER_PROPS}
          horizontalBeamOffset={HERO_BEAM_X_FRAC}
          color={LASER_BEAM_COLOR}
          className="absolute inset-0 h-full min-h-[100svh] w-full"
        />
      </div>

      <div className="pointer-events-none relative z-10 flex min-h-[100svh] flex-col pb-[9rem] sm:pb-[8.5rem]">
        <PageContainer className="flex flex-1 flex-col pt-10 pb-4 md:pt-14 lg:pt-16">
          <div className="grid min-h-0 flex-1 grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-8 lg:gap-y-10">
            <div
              data-hero-spotlight-ignore
              className="pointer-events-auto flex max-w-xl flex-col justify-start lg:col-span-8"
            >
              <motion.h1
                initial={{ opacity: 0, y: 36 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-display text-[clamp(2.25rem,6vw,4.25rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-foreground"
              >
                Paulsen
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="mt-6 max-w-md lg:mt-8"
              >
                <p className="text-[15px] leading-relaxed text-muted-foreground md:text-base">
                  Stepping into Web3.
                  <br />
                  Websites that move. Built by people who care about craft.
                </p>
                <div className="mt-8">
                  <Button href="#contact" variant="primary" size="sm">
                    Get in touch
                    <svg
                      className="ml-2 h-3 w-3"
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
                  </Button>
                </div>
              </motion.div>
            </div>

            <div
              aria-hidden
              className="pointer-events-none relative hidden min-h-[180px] lg:col-span-4 lg:block"
            >
              <div className="bg-grid-subtle absolute inset-0 opacity-[0.12]" />
            </div>
          </div>
        </PageContainer>

        <motion.div
          data-hero-spotlight-ignore
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute bottom-0 left-0 right-0 z-30 w-full px-5 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] md:px-10 lg:px-16"
        >
          <div className="mx-auto w-full max-w-6xl">
            <div className="shadow-rail relative z-[1] flex min-h-[280px] flex-col overflow-hidden rounded-t-xl border border-border bg-surface">
              <div className="grid flex-1 grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-3 border-b border-border px-4 py-7 sm:px-5 sm:py-8">
                <div className="flex min-w-0 flex-wrap items-center gap-3">
                  {RAIL_TABS.map((label) => (
                    <span
                      key={label}
                      className="rounded-md px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground first:bg-muted first:text-foreground"
                    >
                      {label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-center justify-center gap-1.5 justify-self-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Scroll
                  </span>
                  <motion.div
                    animate={{ y: [0, 4, 0] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                    className="h-6 w-px bg-muted-foreground/70"
                  />
                </div>

                <div className="flex items-center justify-end gap-1.5">
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-muted to-surface-elevated ring-1 ring-border" />
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-muted to-surface-elevated ring-1 ring-border" />
                  <span className="h-6 w-6 rounded-full bg-gradient-to-br from-muted to-surface-elevated ring-1 ring-border" />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 px-4 py-7 sm:px-5 sm:py-8">
                <div className="h-2 flex-1 min-w-[120px] max-w-md rounded-full bg-muted" />
                <div className="flex gap-2">
                  <span className="h-2 w-2 rounded-full bg-secondary" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/50" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
