"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "Work", href: "/work" },
    { label: "Stack", href: "/stack" },
    { label: "Logs", href: "/#logs" },
    { label: "Connect", href: "/connect" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/20 backdrop-blur-xl border-b border-white/10 shadow-[0_0_15px_rgba(184,195,255,0.1)] transition-all duration-300 ease-out">
      <div className="flex justify-between items-center max-w-container-max mx-auto px-gutter py-sm">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-on-surface tracking-tighter hover:text-primary transition-colors"
        >
          Vignesh.exe
        </Link>
        <nav className="hidden md:flex items-center gap-lg">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors duration-300 font-label-caps text-label-caps ${
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Link href="/connect">
          <button className="bg-primary text-on-primary font-label-caps text-label-caps px-md py-xs rounded hover:bg-primary/90 transition-all active:scale-95 neon-glow-primary">
            Hire Me
          </button>
        </Link>
      </div>
    </header>
  );
}
