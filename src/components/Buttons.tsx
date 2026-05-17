import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "bg-salon-pink text-salon-black hover:bg-salon-rose hover:text-white",
  secondary:
    "border border-salon-pink/70 bg-white/5 text-white hover:border-white hover:bg-white hover:text-salon-black",
  ghost: "text-salon-pink hover:bg-salon-pink/10 hover:text-white",
};

export function ButtonLink({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      {...props}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-bold uppercase tracking-normal transition ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
