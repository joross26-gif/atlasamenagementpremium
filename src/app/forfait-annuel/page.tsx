import { Section } from "@/components/Section";
import { PricingCards } from "@/components/PricingCards";

export default function Page() {
  return (
    <Section title="Service complet à l’année" subtitle="Un seul forfait pour l’été + l’hiver. Idéal si tu veux zéro gestion.">
      <PricingCards />

      <div className="mt-6 card p-6">
        <div className="text-sm font-bold">Ce qui est inclus</div>
        <div className="mt-2 grid gap-3 md:grid-cols-2 text-sm text-[hsl(var(--muted))]">
          <div>
            <div className="font-semibold text-white">Été (mai–octobre)</div>
            <ul className="mt-2 list-disc pl-5">
              <li>Tonte régulière</li>
              <li>Soufflage des surfaces</li>
              <li>Bordures (selon forfait)</li>
            </ul>
          </div>
          <div>
            <div className="font-semibold text-white">Hiver (novembre–avril)</div>
            <ul className="mt-2 list-disc pl-5">
              <li>Déneigement entrée/allée</li>
              <li>Accès piéton/trottoir (selon forfait)</li>
              <li>Option sel/sable (Premium)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a className="btn-primary" href="/contact">Réserver / Soumission</a>
          <a className="btn-ghost" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">Télécharger l’offre 2026 (PDF)</a>
        </div>
      </div>
    </Section>
  );
}
