import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5 bg-black/20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3">
        <div>
          <div className="text-lg font-semibold">{SITE.name}</div>
          <div className="mt-2 text-sm text-slate-400">{SITE.tagline}</div>
          <div className="mt-4 text-sm text-slate-300">
            <div>{SITE.area}</div>
            <div className="mt-1">
              <a className="hover:underline" href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}>{SITE.phone}</a> •{" "}
              <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </div>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Liens</div>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li><Link className="hover:underline" href="/services">Services</Link></li>
            <li><Link className="hover:underline" href="/forfait-annuel">Forfait annuel</Link></li>
            <li><Link className="hover:underline" href="/prix">Prix</Link></li>
            <li><Link className="hover:underline" href="/galerie">Galerie</Link></li>
            <li><Link className="hover:underline" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="text-sm">
          <div className="font-semibold">Documents</div>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li><a className="hover:underline" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">Offre 2026 (PDF)</a></li>
            <li><a className="hover:underline" href="/assets/contrat-annuel-formulaire.pdf" target="_blank" rel="noreferrer">Contrat annuel (PDF)</a></li>
          </ul>
          <div className="mt-4 text-xs text-slate-500"><span className="font-mono"></span>.</div>
        </div>
      </div>

      <div className="border-t border-white/5 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {SITE.name}. Tous droits réservés.
      </div>
    </footer>
  );
}
