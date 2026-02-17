import Section from "@/components/Section";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <div
        className="relative overflow-hidden border-b border-white/5"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(245,158,11,0.12), transparent 40%), radial-gradient(circle at 80% 30%, rgba(245,158,11,0.08), transparent 45%), url("/backgrounds/hero-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Section
          eyebrow={SITE.area}
          title={SITE.name}
          subtitle="Paysagement + Déneigement. Service clé en main à Montréal-Est : pavé uni, entretien (tonte + nettoyage à pression) et déneigement. Estimation rapide, travail propre, prix clair."
        >
          <div className="flex flex-wrap gap-3">
            <a
              className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-gold-400"
              href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
            >
              Appeler {SITE.phone}
            </a>

            <a
              className="rounded-full border border-gold-500/40 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10"
              href="/contact"
            >
              Demande de soumission
            </a>

            <a
              className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10"
              href="/assets/offre-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Voir l’offre 2026 (PDF)
            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { t: "Rapide", d: "Estimation sur photos ou sur place, réponse rapide." },
              { t: "Propre", d: "Finition nette, chantier propre, communication claire." },
              { t: "Fiable", d: "Priorité et stabilité avec les forfaits annuels." },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <div className="font-semibold">{c.t}</div>
                <div className="mt-1 text-sm text-slate-300">{c.d}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* ... le reste de ta page (sections suivantes) ... */}
    </main>
  );
}
