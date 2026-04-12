interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  href,
  className = "",
  size = "md",
}: ButtonProps) {
  const sizes = {
    sm: "min-h-[2.75rem] px-6 py-3.5 text-[11px]",
    md: "px-8 py-4 text-[12px]",
    lg: "px-10 py-[1.125rem] text-[13px]",
  };

  const variants = {
    primary:
      "bg-accent text-white hover:bg-accent-hover",
    outline:
      "border border-foreground/20 text-foreground hover:border-foreground/40 hover:bg-foreground/5",
    ghost: "text-muted hover:text-foreground",
  };

  const classes = `inline-flex items-center justify-center rounded-full font-mono uppercase leading-normal tracking-[0.15em] transition-all duration-300 ${sizes[size]} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
