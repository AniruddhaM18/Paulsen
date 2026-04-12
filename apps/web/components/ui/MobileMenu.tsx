"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./Button";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Contact", href: "#contact" },
];

const linkFocus =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-dark";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <div className="flex flex-col gap-[5px]">
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              open
                ? "translate-y-[3px] rotate-45 bg-white"
                : "bg-foreground"
            }`}
          />
          <span
            className={`block h-px w-5 transition-all duration-300 ${
              open
                ? "-translate-y-[3px] -rotate-45 bg-white"
                : "bg-foreground"
            }`}
          />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-start justify-center bg-bg-dark px-10"
          >
            <p className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">
              {"// Navigation"}
            </p>
            <nav className="flex flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className={`font-mono text-3xl font-light text-white transition-colors hover:text-accent ${linkFocus}`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-16">
              <Button
                href="#contact"
                variant="primary"
                size="xs"
                className="!tracking-[0.2em] focus-visible:ring-offset-bg-dark"
                onClick={() => setOpen(false)}
              >
                Let&apos;s work together
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
