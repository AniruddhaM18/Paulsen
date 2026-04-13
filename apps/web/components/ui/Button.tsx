interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  onClick?: () => void;
}

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  size = "md",
  onClick,
}: ButtonProps) {
  const sizes = {
    xs: "min-h-9 px-8 py-2 text-[10px]",
    sm: "min-h-[2.75rem] px-6 py-3.5 text-[11px]",
    md: "px-8 py-4 text-[12px]",
    lg: "px-10 py-[1.125rem] text-[13px]",
  };

  const variants = {
    primary:
      `bg-accent-hover text-white hover:brightness-110 active:brightness-95 ${focusRing}`,
    outline:
      `border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5 ${focusRing}`,
    ghost: `text-muted hover:text-foreground ${focusRing}`,
  };

  const classes = `inline-flex items-center justify-center overflow-hidden rounded-full font-mono uppercase leading-normal tracking-[0.15em] transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
