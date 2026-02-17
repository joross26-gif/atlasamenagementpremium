import Section from "@/components/Section";

const rows = [
  { service: "Tonte de gazon (à la visite)", price: "à partir de 45$" },
  { service: "Tonte de gazon (contrat)", price: "sur soumission" },
  { service: "Nettoyage haute pression", price: "à partir de 125$" },
  { service: "Pavé uni / réparation", price: "sur soumission" },
  { service: "Déneigement", price: "sur contrat (saisonnier)" },
];

export default function PrixPage() {
  return (
    <main>
      <Section title="Prix" subtitle="Repères rapides — prix exact sur place ou sur photos selon le projet.">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-left">
              <tr><th className="px-4 py-3">Service</th><th className="px-4 py-3">Prix</th></tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {rows.map((r) => (
                <tr key={r.service} className="bg-black/20">
                  <td className="px-4 py-3 text-slate-200">{r.service}</td>
                  <td className="px-4 py-3 text-slate-300">{r.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-slate-500">* Remplace ce tableau par tes prix exacts quand tu veux.</p>
      </Section>
    </main>
  );
}
