import { Section } from "@/components/Section";
import { PricingCards } from "@/components/PricingCards";

export default function Page() {
  return (
    <>
      <section className="pt-12 md:pt-16">
        <div className="container-max">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="pill">Montréal Est • Tétreaultville & alentours</div>
              <h1 className="h1 mt-4">
                Site premium <span className="text-[hsl(var(--gold))]">noir & or</span> — Atlas Aménagement
              </h1>
              <p className="sub mt-4 max-w-2xl">
                Paysagement + Déneigement. Une équipe, un contact, une qualité constante.
                Offre “Service complet à l’année” (été + hiver) et services à la carte.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="tel:4387954120">Appeler 438-795-4120</a>
                <a className="btn-ghost" href="/contact">Demande de soumission</a>
                <a className="btn-ghost" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">Voir l’offre 2026 (PDF)</a>
              </div>

              <div className="mt-8 line" />

              <div className="mt-6 grid gap-3 md:grid-cols-3">
                {[
                  ["Rapide", "Réponse rapide, estimation sur photos ou sur place selon secteur."],
                  ["Propre", "Finition nette, chantier propre, communication claire."],
                  ["Fiable", "Priorité et stabilité avec les forfaits annuels."]
                ].map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-bold">{t}</div>
                    <div className="mt-1 text-sm text-[hsl(var(--muted))]">{d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section title="Forfait Service complet à l’année" subtitle="Un seul contrat pour l’été + l’hiver. Paiement annuel ou mensualisé (12 versements).">
        <PricingCards />
        <div className="mt-6 card p-6">
          <div className="text-sm font-bold">🔥 Offre limitée 2026</div>
          <div className="mt-2 text-sm text-[hsl(var(--muted))]">
            Réserve avant le 1er mai : priorité de service, prix garanti 2026, rabais fidélité au renouvellement.
          </div>
        </div>
      </Section>

      <Section title="Services" subtitle="Déneigement, tonte, entretien, pavé uni, tourbe, réparation et plus.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Déneigement", "Résidentiel + petits commerces. Options : banc municipal, sel/sable, urgence."],
            ["Entretien pelouse", "Tonte régulière, bordures, soufflage, ouverture/fermeture de saison."],
            ["Paysagement", "Pavé uni, réparation, tourbe, nivelage. Estimation rapide."]
          ].map(([t, d]) => (
            <div key={t} className="card p-6">
              <div className="text-lg font-extrabold">{t}</div>
              <div className="mt-2 text-sm text-[hsl(var(--muted))]">{d}</div>
              <div className="mt-4">
                <a className="btn-ghost" href="/services">Voir détails</a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Prêt pour un prix exact ?" subtitle="Envoie 1 photo + ton secteur + taille (petite/moyenne/grande). Réponse rapide.">
        <div className="flex flex-col gap-3 sm:flex-row">
          <a className="btn-primary" href="/contact">Obtenir une soumission</a>
          <a className="btn-ghost" href="mailto:atlasamenagement514@gmail.com">Envoyer un email</a>
        </div>
      </Section>
    </>
  );
}
