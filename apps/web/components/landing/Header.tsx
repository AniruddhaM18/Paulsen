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
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark";

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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border-dark bg-bg-dark/85 backdrop-blur-xl transition-transform duration-300 ease-out will-change-transform ${
        barVisible
          ? "translate-y-0"
          : "-translate-y-full pointer-events-none"
      }`}
    >
      <PageContainer className="flex h-[4.25rem] items-center justify-between lg:h-16">
        <a
          href="#"
          className={`font-mono text-[13px] font-semibold uppercase tracking-[0.15em] text-white ${linkFocus}`}
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
                className={`font-mono text-[11px] uppercase tracking-[0.15em] text-white/70 transition-colors duration-200 hover:text-white ${linkFocus}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">
              Accepting Projects
            </span>
          </div>
          <Button
            href="#contact"
            variant="primary"
            size="xs"
            className="focus-visible:ring-offset-bg-dark"
          >
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
            className="hidden overflow-hidden border-t border-border-dark bg-bg-dark/95 backdrop-blur-xl lg:block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <PageContainer className="grid grid-cols-3 gap-12 py-10">
              {/* Left: Availability */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Status
                </p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span className="font-mono text-[13px] text-white">
                    Accepting Projects
                  </span>
                </div>
                <a
                  href="mailto:contact@paulsen.dev"
                  className={`mt-3 block font-mono text-[12px] text-white/55 transition-colors duration-200 hover:text-white ${linkFocus}`}
                >
                  contact@paulsen.dev
                </a>
              </div>

              {/* Center: Featured project */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  Featured Project
                </p>
                <a href="#contact" className={`group mt-4 block ${linkFocus}`}>
                  <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-900 transition-transform duration-500 group-hover:scale-[1.02]" />
                  <p className="mt-3 font-mono text-[13px] font-medium text-white">
                    WKNDHRS
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-white/55">
                    Agency Website &middot; Portfolio
                  </p>
                </a>
              </div>

              {/* Right: Team & Socials */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                  The Studio
                </p>
                <p className="mt-4 font-mono text-[13px] text-white">
                  Julian &amp; Adrian
                </p>
                <p className="mt-1 font-mono text-[11px] text-white/55">
                  Founders, Paulsen Studio
                </p>
                <div className="mt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Socials
                  </p>
                  <div className="mt-3 flex gap-4">
                    {SOCIALS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        className={`font-mono text-[12px] text-white/55 transition-colors duration-200 hover:text-white ${linkFocus}`}
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
