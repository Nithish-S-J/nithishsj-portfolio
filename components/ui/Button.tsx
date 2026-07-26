import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-medium tracking-wide transition-all duration-300";

  const styles =
    variant === "primary"
      ? `
        border border-white/10
        bg-white/5
        text-white
        backdrop-blur-xl
        hover:bg-white/10
        hover:border-white/20
        hover:shadow-[0_0_30px_rgba(96,165,250,0.15)]
      `
      : `
        border border-slate-700
        bg-transparent
        text-slate-300
        hover:bg-white/5
        hover:text-white
      `;

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
    >
      {children}
    </Link>
  );
}