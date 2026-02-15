import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[hsl(var(--line)/0.14)] bg-black/20">
      <div className="container-max py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="space-y-2">
            <div className="text-sm font-extrabold">ATLAS AMÉNAGEMENT</div>
            <div className="text-sm text-[hsl(var(--muted))]">Paysagement & Déneigement • Montréal Est</div>
            <div className="text-sm text-[hsl(var(--muted))]">Tétreaultville (Montréal-Est) & alentours</div>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold">Contact</div>
            <a className="block text-sm text-[hsl(var(--muted))] hover:text-white" href="tel:4387954120">438-795-4120</a>
            <a className="block text-sm text-[hsl(var(--muted))] hover:text-white" href="mailto:atlasamenagement514@gmail.com">atlasamenagement514@gmail.com</a>
            <a className="block text-sm text-[hsl(var(--muted))] hover:text-white" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">
              Télécharger l’offre 2026 (PDF)
            </a>
          </div>

          <div className="space-y-2">
            <div className="text-sm font-bold">Pages</div>
            <div className="grid grid-cols-2 gap-2">
              {[
                ["/services", "Services"],
                ["/forfait-annuel", "Forfait annuel"],
                ["/prix", "Prix"],
                ["/galerie", "Galerie"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"]
              ].map(([href, label]) => (
                <Link key={href} href={href} className="text-sm text-[hsl(var(--muted))] hover:text-white">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-[hsl(var(--muted))]">
          Prix indicatifs (prix + tx). Variables : accès, surface, météo, matériaux, conditions.
        </div>
      </div>
    </footer>
  );
}
