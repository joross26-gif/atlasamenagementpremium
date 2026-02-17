import Link from "next/link";
import Logo from "./Logo";
import { SITE } from "@/lib/site";

const nav = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/forfait-annuel", label: "Forfait annuel" },
  { href: "/prix", label: "Prix" },
  { href: "/galerie", label: "Galerie" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#070B12]/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} className="text-sm text-slate-300 hover:text-white">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a className="rounded-full border border-gold-500/40 bg-white/5 px-4 py-2 text-sm hover:bg-white/10" href={`mailto:${SITE.email}`}>Email</a>
          <a className="rounded-full bg-gold-500 px-4 py-2 text-sm font-semibold text-black hover:bg-gold-400" href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}>Appeler</a>
        </div>
      </div>
    </header>
  );
}
