import { Section } from "@/components/Section";

export default function Page() {
  return (
    <Section title="Services Atlas" subtitle="Qualité premium, communication claire, finition propre.">
      <div className="grid gap-4 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-lg font-extrabold">Déneigement</div>
          <p className="mt-2 text-sm text-[hsl(var(--muted))]">
            Résidentiel + petits commerces. Déclenchement standard (≈5 cm) avec option priorité (≈2,5 cm).
            Options : banc municipal, sel/sable, urgence, gros volume.
          </p>
        </div>
        <div className="card p-6">
          <div className="text-lg font-extrabold">Entretien pelouse</div>
          <p className="mt-2 text-sm text-[hsl(var(--muted))]">
            Tonte régulière, bordures, soufflage, ramassage léger. Contrat ou à la visite.
          </p>
        </div>
        <div className="card p-6">
          <div className="text-lg font-extrabold">Paysagement / Aménagement</div>
          <p className="mt-2 text-sm text-[hsl(var(--muted))]">
            Pavé uni (installation/réparation), tourbe, dalle béton, nivelage. Estimation sur photos ou sur place.
          </p>
        </div>
        <div className="card p-6">
          <div className="text-lg font-extrabold">Nettoyage haute pression</div>
          <p className="mt-2 text-sm text-[hsl(var(--muted))]">
            Entrée, patio, marches, surfaces béton/pavé. Prix selon surface, état et accès à l’eau.
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a className="btn-primary" href="/contact">Demande de soumission</a>
        <a className="btn-ghost" href="/prix">Voir la grille de prix</a>
      </div>
    </Section>
  );
}
