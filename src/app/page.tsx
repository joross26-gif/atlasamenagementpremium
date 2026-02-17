import Section from "@/components/Section";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <main>
      <div
  className="relative overflow-hidden border-b border-white/5"
  style={{
    backgroundImage: `radial-gradient(circle at 20% 20%, rgba(245,158,11,0.12), transparent 40%),
                      radial-gradient(circle at 80% 30%, rgba(245,158,11,0.08), transparent 45%),
                      url("/backgrounds/hero-bg.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

      >
        <Section
          eyebrow={SITE.area}
          title={SITE.name}
          subtitle="Paysagement + Déneigement. Une équipe, un contact, une qualité constante. Offre “service complet à l’année” (été + hiver) et services à la carte."
        >
          <div className="flex flex-wrap gap-3">
            <a className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-gold-400" href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}>
              Appeler {SITE.phone}
            </a>
            <a className="rounded-full border border-gold-500/40 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10" href="/contact">
              Demande de soumission
            </a>
            <a className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">
             href="/assets/offre-2026.pdf"
             target="_blank"
             rel="noopener noreferrer"

            </a>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              { t: "Rapide", d: "Réponse rapide, estimation sur photos ou sur place selon secteur." },
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

      <section className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { t: "Pavé uni", d: "Entrées, trottoirs, contours, réparations." },
            { t: "Entretien", d: "Tonte de gazon (contrat ou à la visite), nettoyage haute pression." },
            { t: "Déneigement", d: "Résidentiel et petit commercial — Montréal Est." },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border border-white/10 bg-[#0b1220]/60 p-6 gold-border">
              <div className="text-lg font-semibold">{x.t}</div>
              <div className="mt-2 text-sm text-slate-300">{x.d}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
