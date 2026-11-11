"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const links = NAV_LINKS.filter(({ href }) => href !== "/");

  const linkClass = (path: string) =>
    `font-mono text-[13px] transition-colors ${
      pathname === path ? "text-amber" : "text-muted hover:text-amber"
    }`;

  return (
    <nav className="w-full sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-line">
      <div className="max-w-[1160px] mx-auto px-4 md:px-6 py-4 flex flex-wrap items-center gap-x-3 md:gap-x-6 gap-y-3">
        <Link
          href="/"
          className="font-mono text-[15px] font-medium tracking-wide hover:text-amber transition-colors"
        >
          dor·alagem
        </Link>

        <span className="ml-auto md:ml-0 md:order-last inline-flex items-center gap-2 font-mono text-[11px] text-amber border border-amber/30 rounded-full px-2.5 md:px-3 py-1.5 whitespace-nowrap">
          <span className="w-1.5 h-1.5 rounded-full bg-amber animate-pulse" />
          open to opportunities
        </span>

        <button
          className="md:hidden text-cream text-xl"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <div
          className={`${isOpen ? "flex" : "hidden"} md:flex basis-full md:basis-auto md:ml-auto flex-col md:flex-row md:items-center gap-3 md:gap-6`}
        >
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className={linkClass(href)}>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
