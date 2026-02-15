"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/forfait-annuel", label: "Forfait annuel" },
  { href: "/prix", label: "Prix" },
  { href: "/galerie", label: "Galerie" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[hsl(var(--line)/0.14)] bg-black/35 backdrop-blur">
      <div className="container-max flex h-16 items-center justify-between gap-4">
        <Link href="/" className="shrink-0"><Logo /></Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "rounded-xl px-3 py-2 text-sm transition",
                  active ? "bg-white/7 text-white" : "text-[hsl(var(--muted))] hover:bg-white/5 hover:text-white"
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a className="btn-ghost hidden md:inline-flex" href="mailto:atlasamenagement514@gmail.com">Email</a>
          <a className="btn-primary" href="tel:4387954120">Appeler</a>
        </div>
      </div>

      <div className="container-max md:hidden pb-3">
        <div className="flex flex-wrap gap-2">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={[
                  "text-xs px-3 py-2 rounded-full border",
                  active
                    ? "border-[hsl(var(--line)/0.35)] bg-white/10 text-white"
                    : "border-white/10 text-[hsl(var(--muted))] bg-black/10"
                ].join(" ")}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
