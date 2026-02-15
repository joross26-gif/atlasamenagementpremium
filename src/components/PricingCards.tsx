import Link from "next/link";

type Plan = { name: string; price: string; highlight?: boolean; bullets: string[]; };

const plans: Plan[] = [
  { name: "Essentiel", price: "1 100$ + tx / année", bullets: ["Tonte régulière", "Déneigement standard (≈5 cm)", "Communication rapide (texto/email)"] },
  { name: "Standard", price: "1 350$ + tx / année", highlight: true, bullets: ["Tonte + bordures", "Déneigement prioritaire", "Accès piéton / walkway (selon config)"] },
  { name: "Premium", price: "1 600$ + tx / année", bullets: ["Entretien complet", "Déclenchement ≈2,5 cm", "Option sel/sable léger + urgence (selon dispo)"] }
];

export function PricingCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {plans.map((p) => (
        <div key={p.name} className={["card p-6", p.highlight ? "border-[hsl(var(--line)/0.45)]" : ""].join(" ")}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-lg font-extrabold">{p.name}</div>
              <div className="mt-1 text-sm text-[hsl(var(--muted))]">{p.price}</div>
            </div>
            {p.highlight ? <span className="pill">Le plus populaire</span> : null}
          </div>

          <div className="my-5 h-px bg-white/10" />

          <ul className="space-y-2 text-sm text-[hsl(var(--muted))]">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span className="mt-[6px] h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--gold))]" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex gap-2">
            <Link href="/contact" className="btn-primary w-full text-center">Soumission</Link>
            <a className="btn-ghost w-full text-center" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">PDF</a>
          </div>
        </div>
      ))}
    </div>
  );
}
