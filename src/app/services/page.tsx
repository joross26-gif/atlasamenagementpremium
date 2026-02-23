import Section from "@/components/Section";

const services = [
  { title: "Pavé uni", items: ["Pose", "Réparation", "Nivellement", "Bordures"] },
  { title: "Aménagement paysager", items: ["Terre + tourbe", "Plate-bandes", "Plantation", "Finition propre"] },
  { title: "Entretien", items: ["Tonte (contrat ou à la visite)", "Nettoyage haute pression", "Ramassage"] },
  { title: "Déneigement", items: ["Entrées", "Escaliers", "Trottoirs", "Contrat saisonnier"] },
];

export default function ServicesPage() {
  return (
    <main style={{ backgroundImage: "url(/backgrounds/services-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Section title="Services" subtitle="Ce que nous faisons à Montréal Est ,Repentigny,Charlemagne,Terrebonne,Lachenaie (été + hiver).">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="text-lg font-semibold">{s.title}</div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
                {s.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
