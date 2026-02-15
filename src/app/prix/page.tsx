import { Section } from "@/components/Section";

export default function Page() {
  return (
    <Section
      title="Grille de prix (à partir de) — prix + tx"
      subtitle="Prix de départ (Grand Montréal). Le prix final varie selon la surface, l’accès, la météo et les matériaux."
    >
      <div className="card p-6 overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-[hsl(var(--muted))]">
            <tr>
              <th className="py-2">Service</th>
              <th className="py-2">Essentiel</th>
              <th className="py-2">Standard</th>
              <th className="py-2">Premium</th>
            </tr>
          </thead>
          <tbody className="align-top">
            <tr className="border-t border-white/10">
              <td className="py-3 font-semibold">Déneigement (saisonnier)</td>
              <td className="py-3">Entrée 1 voiture : 325$+tx<br/>Entrée 2 voitures : 449$+tx</td>
              <td className="py-3">1 voiture : 449$+tx<br/>2 voitures : 575$+tx</td>
              <td className="py-3">1 voiture : 575$+tx<br/>2 voitures : 699$+tx</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="py-3 font-semibold">À la visite</td>
              <td className="py-3">95$+tx (minimum)</td>
              <td className="py-3">125$+tx</td>
              <td className="py-3">165$+tx</td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="py-3 font-semibold">Options (déneigement)</td>
              <td className="py-3" colSpan={3}>
                Banc municipal : 75$ à 149$ • Sel/sable : 15$ à 35$ • Urgence : +25% à +60% • Petit stationnement : 249$ • Déneigement de toit : 275$
              </td>
            </tr>
            <tr className="border-t border-white/10">
              <td className="py-3 font-semibold">Paysagement / Aménagement</td>
              <td className="py-3">Pavé uni : 22$+tx / pi²<br/>Tourbe : 2$+tx / pi²</td>
              <td className="py-3">Pavé uni : 28$+tx / pi²<br/>Dalle béton : 28$+tx / pi²</td>
              <td className="py-3">Pavé uni : 35$+tx / pi²<br/>Pierre naturelle : 70$+tx / pi²</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a className="btn-primary" href="/contact">Obtenir un prix exact</a>
        <a className="btn-ghost" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">PDF offre 2026</a>
      </div>
    </Section>
  );
}
