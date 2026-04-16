import { ScrollReveal } from "../ui/ScrollReveal";
import { HyperScrollScene } from "./HyperScrollScene";
import { NAV_LINKS, SOCIALS } from "@/lib/nav-links";

const CONTACT_EMAILS = [
  "contact@paulsen.dev",
  "julian@paulsen.dev",
  "adrian@paulsen.dev",
];

const footerLinkFocus =
  "rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative flex h-screen flex-col overflow-hidden bg-background text-foreground"
    >
      {/* Upper 40% — Footer content */}
      <div className="relative flex h-[40%] shrink-0 flex-col justify-between overflow-hidden">
        {/* ASCII art decorative element */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-between px-5 pb-8 opacity-[0.04] md:px-10 lg:px-16">
          <pre className="hidden font-mono text-[8px] leading-none text-accent lg:block">
            {`
    ██████╗
    ██╔══██╗
    ██████╔╝
    ██╔═══╝
    ██║
    ╚═╝
            `}
          </pre>
          <pre className="hidden font-mono text-[8px] leading-none text-accent lg:block">
            {`
    ███████╗
    ██╔════╝
    ███████╗
    ╚════██║
    ███████║
    ╚══════╝
            `}
          </pre>
        </div>

        <div className="relative flex flex-1 flex-col justify-between px-5 pt-8 pb-6 md:px-10 lg:px-16 lg:pt-12 lg:pb-8">
          <div className="mx-auto w-full max-w-page">
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 md:grid-cols-12 md:gap-x-12 md:gap-y-0">
                {/* Brand */}
                <div className="sm:col-span-2 md:col-span-4">
                  <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.15em]">
                    Paulsen
                  </p>
                  <p className="mt-3 max-w-xs font-mono text-[12px] leading-relaxed text-muted-foreground">
                    Frontend development studio.
                    <br />
                    Websites that move.
                  </p>
                </div>

                {/* Pages */}
                <div className="sm:col-span-1 md:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    Pages
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {NAV_LINKS.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={`inline-block font-mono text-[12px] text-muted-foreground transition-colors duration-200 hover:text-foreground ${footerLinkFocus}`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Socials */}
                <div className="sm:col-span-1 md:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    Socials
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {SOCIALS.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={`inline-block font-mono text-[12px] text-muted-foreground transition-colors duration-200 hover:text-foreground ${footerLinkFocus}`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="sm:col-span-2 md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    Contact
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {CONTACT_EMAILS.map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${email}`}
                          className={`inline-block break-all font-mono text-[12px] text-muted-foreground transition-colors duration-200 hover:text-foreground ${footerLinkFocus}`}
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      Working Globally
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom bar */}
          <div className="mx-auto w-full max-w-350">
            <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-border pt-5 md:flex-row md:items-center">
              <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/70">
                &copy; {new Date().getFullYear()} Paulsen Studio GmbH. All
                rights reserved.
              </p>
              <p className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground/70">
                Let the fellas handle it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower 60% — 3D Hyper-Scroll Scene */}
      <div className="relative h-[60%] shrink-0 border-t border-border">
        <HyperScrollScene />
      </div>
    </footer>
  );
}
