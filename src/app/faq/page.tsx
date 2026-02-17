import Section from "@/components/Section";
import { SITE } from "@/lib/site";

const faqs = [
  { q: "Est-ce que vous faites une estimation sur place ?", a: "Oui. Selon le secteur, on peut aussi estimer sur photos pour aller plus vite." },
  { q: "Vous êtes dans quel secteur ?", a: SITE.area },
  { q: "Comment réserver une date ?", a: "Écris-nous via le formulaire ou par texto/appel. On confirme l’horaire selon la météo et le volume." },
  { q: "Vous faites des contrats ?", a: "Oui: déneigement saisonnier et entretien (tonte) en contrat." },
];

export default function FAQPage() {
  return (
    <main>
      <Section title="FAQ" subtitle="Questions fréquentes.">
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <summary className="cursor-pointer list-none font-semibold">{f.q}</summary>
              <p className="mt-2 text-sm text-slate-300">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>
    </main>
  );
}
