import Section from "@/components/Section";

export default function ForfaitPage() {
  return (
    <main style={{ backgroundImage: "url(/backgrounds/forfait-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Section title="Forfait annuel" subtitle="Une solution “service complet à l’année” (été + hiver) pour une tranquillité d’esprit.">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-lg font-semibold">Inclus (exemples)</div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
              <li>Déneigement (selon contrat)</li>
              <li>Tonte de gazon (contrat ou à la visite)</li>
              <li>Nettoyage saisonnier</li>
              <li>Priorité sur l’horaire</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-lg font-semibold">Documents</div>
            <p className="mt-2 text-sm text-slate-300">Télécharge les PDFs (à remplacer dans <span className="font-mono">/public/assets</span>).</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-black hover:bg-gold-400" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">Offre 2026 (PDF)</a>
              <a className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm hover:bg-white/10" href="/assets/contrat-annuel-formulaire.pdf" target="_blank" rel="noreferrer">Contrat annuel (PDF)</a>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
