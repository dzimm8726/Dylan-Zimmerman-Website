interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}

export default function Button({
  href,
  onClick,
  children,
  variant = "outline",
}: ButtonProps) {
  const styles =
    variant === "solid"
      ? "bg-zinc-100 text-zinc-900 hover:bg-zinc-200"
      : "border border-white/10 text-zinc-100 hover:bg-white/5";

  const base =
    "inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium transition";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}
