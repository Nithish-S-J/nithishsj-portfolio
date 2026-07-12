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
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-500 hover:scale-105"
      : "border border-white/20 bg-white/5 text-white hover:bg-white/10";

  return (
    <Link
      href={href}
      className={`${base} ${styles}`}
    >
      {children}
    </Link>
  );
}