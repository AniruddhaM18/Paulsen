import { ScrollReveal } from "../ui/ScrollReveal";
import { HyperScrollScene } from "./HyperScrollScene";

const PAGES = [
  { label: "Home", href: "#" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

const CONTACT_EMAILS = [
  "contact@paulsen.dev",
  "julian@paulsen.dev",
  "adrian@paulsen.dev",
];

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative flex h-screen flex-col overflow-hidden bg-bg-dark text-white"
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
          <div className="mx-auto w-full max-w-350">
            <ScrollReveal>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-12">
                {/* Brand */}
                <div className="md:col-span-4">
                  <p className="font-mono text-[13px] font-semibold uppercase tracking-[0.15em]">
                    Paulsen
                  </p>
                  <p className="mt-3 font-mono text-[12px] leading-relaxed text-neutral-500">
                    Frontend development studio.
                    <br />
                    Websites that move.
                  </p>
                </div>

                {/* Pages */}
                <div className="md:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    Pages
                  </p>
                  <ul className="mt-3 space-y-2">
                    {PAGES.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="font-mono text-[12px] text-neutral-500 transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Socials */}
                <div className="md:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    Socials
                  </p>
                  <ul className="mt-3 space-y-2">
                    {SOCIALS.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="font-mono text-[12px] text-neutral-500 transition-colors duration-200 hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div className="md:col-span-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-600">
                    Contact
                  </p>
                  <ul className="mt-3 space-y-2">
                    {CONTACT_EMAILS.map((email) => (
                      <li key={email}>
                        <a
                          href={`mailto:${email}`}
                          className="font-mono text-[12px] text-neutral-500 transition-colors duration-200 hover:text-white"
                        >
                          {email}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-neutral-500">
                      Working Globally
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom bar */}
          <div className="mx-auto w-full max-w-350">
            <div className="mt-6 flex flex-col items-start justify-between gap-3 border-t border-border-dark pt-5 md:flex-row md:items-center">
              <p className="font-mono text-[10px] tracking-[0.1em] text-neutral-600">
                &copy; {new Date().getFullYear()} Paulsen Studio GmbH. All
                rights reserved.
              </p>
              <p className="font-mono text-[10px] tracking-[0.1em] text-neutral-600">
                Let the fellas handle it.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lower 60% — 3D Hyper-Scroll Scene */}
      <div className="relative h-[60%] shrink-0 border-t border-border-dark">
        <HyperScrollScene />
      </div>
    </footer>
  );
}
