import Link from "next/link";
import { ReactNode } from "react";

const styles = {
  primary:
    "bg-amber text-amber-ink font-semibold px-6 py-3 rounded-lg hover:brightness-110 transition-all",
  ghost:
    "border border-line text-cream font-medium px-6 py-3 rounded-lg hover:border-amber hover:text-amber transition-colors",
};

export default function NavButton({
  href,
  download,
  variant = "ghost",
  children,
}: {
  href: string;
  download?: boolean;
  variant?: "primary" | "ghost";
  children: ReactNode;
}) {
  const cls = `${styles[variant]} text-[15px]`;
  if (download) {
    return (
      <a href={href} download className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
