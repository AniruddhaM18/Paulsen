"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/Button";
import { MobileMenu } from "../ui/MobileMenu";
import { PageContainer } from "../ui/PageContainer";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

const TOP_REVEAL_PX = 18;
const SCROLL_DELTA_PX = 8;

const linkFocus =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Header() {
  const [hiddenByScroll, setHiddenByScroll] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    setScrollY(window.scrollY);
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      if (y < TOP_REVEAL_PX) {
        setHiddenByScroll(false);
      } else if (delta > SCROLL_DELTA_PX) {
        setHiddenByScroll(true);
      } else if (delta < -SCROLL_DELTA_PX) {
        setHiddenByScroll(false);
      }
      lastScrollY.current = y;
      setScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setMenuOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => {
      setMenuOpen(false);
    }, 150);
  };

  const barVisible =
    scrollY < TOP_REVEAL_PX || !hiddenByScroll || menuOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl transition-transform duration-300 ease-out will-change-transform ${
        barVisible
          ? "translate-y-0"
          : "-translate-y-full pointer-events-none"
      }`}
    >
      <PageContainer className="flex h-[4.25rem] items-center justify-between lg:h-16">
        <a
          href="#"
          className={`font-mono text-[13px] font-semibold uppercase tracking-[0.15em] text-foreground ${linkFocus}`}
        >
          Paulsen
        </a>

        {/* Desktop nav with flyout trigger */}
        <div
          className="hidden lg:block"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/70 transition-colors duration-200 hover:text-foreground ${linkFocus}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
              Accepting Projects
            </span>
          </div>
          <Button href="#contact" variant="primary" size="xs">
            Let&apos;s work together
          </Button>
        </div>

        <MobileMenu hamburgerOnDarkBar />
      </PageContainer>

      {/* Flyout mega menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl lg:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <PageContainer className="grid grid-cols-3 gap-12 py-10">
              {/* Left: Availability */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Status
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                  </span>
                  <span className="font-mono text-[13px] text-foreground">
                    Accepting Projects
                  </span>
                </div>
                <a
                  href="mailto:contact@paulsen.dev"
                  className={`mt-3 block font-mono text-[12px] text-muted-foreground transition-colors duration-200 hover:text-foreground ${linkFocus}`}
                >
                  contact@paulsen.dev
                </a>
              </div>

              {/* Center: Featured project */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  Featured Project
                </p>
                <a href="#contact" className={`group mt-4 block ${linkFocus}`}>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-surface-elevated to-surface transition-transform duration-500 group-hover:scale-[1.02]" />
                  <p className="mt-3 font-mono text-[13px] font-medium text-foreground">
                    WKNDHRS
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                    Agency Website &middot; Portfolio
                  </p>
                </a>
              </div>

              {/* Right: Team & Socials */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  The Studio
                </p>
                <p className="mt-4 font-mono text-[13px] text-foreground">
                  Julian &amp; Adrian
                </p>
                <p className="mt-1 font-mono text-[11px] text-muted-foreground">
                  Founders, Paulsen Studio
                </p>
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Socials
                  </p>
                  <div className="mt-3 flex gap-4">
                    {SOCIALS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`font-mono text-[12px] text-muted-foreground transition-colors duration-200 hover:text-foreground ${linkFocus}`}
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </PageContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
