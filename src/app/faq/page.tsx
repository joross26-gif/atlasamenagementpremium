import { Section } from "@/components/Section";

const faqs = [
  { q: "Comment avoir un prix exact rapidement ?", a: "Envoie 1 photo + ton secteur + taille (petite/moyenne/grande). Réponse rapide." },
  { q: "C’est quoi l’avantage du forfait annuel ?", a: "Un seul contrat pour l’été + l’hiver, priorité de service, et meilleure stabilité de prix." },
  { q: "Vous desservez quels secteurs ?", a: "Tétreaultville (Montréal-Est) & alentours (Montréal Est)." },
  { q: "Les prix incluent les taxes ?", a: "Non — prix indicatifs + tx. Le prix final varie selon accès, surface, météo et matériaux." }
];

export default function Page() {
  return (
    <Section title="FAQ" subtitle="Les réponses rapides aux questions les plus fréquentes.">
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((f) => (
          <div key={f.q} className="card p-6">
            <div className="text-sm font-bold">{f.q}</div>
            <div className="mt-2 text-sm text-[hsl(var(--muted))]">{f.a}</div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <a className="btn-primary" href="/contact">Demander une soumission</a>
      </div>
    </Section>
  );
}
