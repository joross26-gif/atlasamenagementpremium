"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/Section";

type Status = "idle" | "sending" | "sent" | "error";

export default function Page() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "";
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  const disabled = useMemo(() => status === "sending", [status]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");

    if (!endpoint) {
      setStatus("error");
      setError("Endpoint Formspree manquant. Ajoute NEXT_PUBLIC_FORMSPREE_ENDPOINT dans Vercel (Environment Variables).");
      return;
    }

    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(endpoint, { method: "POST", body: formData, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("Erreur d’envoi");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
      setError("Impossible d’envoyer. Réessaie ou contacte-nous par téléphone.");
    }
  }

  return (
    <Section title="Contact / Soumission" subtitle="Réponse rapide. Tu peux aussi envoyer une photo par email.">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6">
          <div className="text-lg font-extrabold">Atlas Aménagement</div>
          <div className="mt-2 text-sm text-[hsl(var(--muted))]">Tétreaultville (Montréal-Est) & alentours</div>

          <div className="mt-5 space-y-2 text-sm">
            <a className="block text-[hsl(var(--muted))] hover:text-white" href="tel:4387954120">📞 438-795-4120</a>
            <a className="block text-[hsl(var(--muted))] hover:text-white" href="mailto:atlasamenagement514@gmail.com">✉️ atlasamenagement514@gmail.com</a>
            <a className="block text-[hsl(var(--muted))] hover:text-white" href="/assets/offre-2026.pdf" target="_blank" rel="noreferrer">📄 Télécharger l’offre 2026 (PDF)</a>
          </div>

          <div className="mt-6 line" />

          <div className="mt-6">
            <div className="text-sm font-bold">Infos à envoyer pour un prix exact</div>
            <ul className="mt-2 list-disc pl-5 text-sm text-[hsl(var(--muted))]">
              <li>1 photo (entrée/terrain)</li>
              <li>Ton secteur</li>
              <li>Taille (petite/moyenne/grande)</li>
              <li>Services demandés</li>
            </ul>
          </div>
        </div>

        <form onSubmit={onSubmit} className="card p-6">
          <div className="text-sm font-bold">Demande de soumission</div>

          <div className="mt-4 grid gap-3">
            <input name="name" required placeholder="Nom" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[hsl(var(--line)/0.55)]" />
            <input name="phone" required placeholder="Téléphone" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[hsl(var(--line)/0.55)]" />
            <input name="address" placeholder="Adresse ou secteur" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[hsl(var(--line)/0.55)]" />

            <select name="service" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[hsl(var(--line)/0.55)]">
              <option value="Forfait annuel">Forfait annuel (été + hiver)</option>
              <option value="Déneigement">Déneigement</option>
              <option value="Tonte/entretien pelouse">Tonte / entretien pelouse</option>
              <option value="Paysagement / pavé uni">Paysagement / pavé uni</option>
              <option value="Nettoyage pression">Nettoyage pression</option>
            </select>

            <textarea name="message" rows={5} placeholder="Décris ton besoin (dimensions approx, timing, etc.)" className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-[hsl(var(--line)/0.55)]" />

            <button disabled={disabled} className="btn-primary">{status === "sending" ? "Envoi..." : "Envoyer"}</button>

            {status === "sent" ? <div className="text-sm text-[hsl(var(--success))]">✅ Merci! Message envoyé. On te répond rapidement.</div> : null}
            {status === "error" ? <div className="text-sm text-red-300">❌ {error}</div> : null}

            <div className="text-xs text-[hsl(var(--muted))]">Astuce : tu peux aussi envoyer une photo par email pour accélérer l’estimation.</div>
          </div>
        </form>
      </div>
    </Section>
  );
}
