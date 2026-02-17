"use client";

import Section from "@/components/Section";
import { SITE } from "@/lib/site";
import { useMemo, useState } from "react";

export default function ContactPage() {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  const [status, setStatus] = useState<"idle" | "ok" | "err" | "sending">("idle");
  const ready = useMemo(() => Boolean(endpoint && endpoint.startsWith("https://")), [endpoint]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ready || !endpoint) return;
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (res.ok) { form.reset(); setStatus("ok"); } else { setStatus("err"); }
    } catch { setStatus("err"); }

  return (
    <main style={{ backgroundImage: "url(/backgrounds/contact-bg.jpg)", backgroundSize: "cover", backgroundPosition: "center" }}>
      <Section title="Contact" subtitle="Soumission rapide — réponse rapide.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-lg font-semibold">Coordonnées</div>
            <div className="mt-3 text-sm text-slate-300">
              <div>Téléphone: <a className="hover:underline" href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}>{SITE.phone}</a></div>
              <div className="mt-2">Email: <a className="hover:underline" href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
              <div className="mt-2">Secteur: {SITE.area}</div>
            </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-lg font-semibold">Formulaire</div>
            {!ready && (
              <div className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                Variable manquante: <span className="font-mono">{SITE.formspreeEnvKey}</span>. Mets-la dans <span className="font-mono">.env.local</span> (ou Vercel → Settings → Environment Variables).
              </div>
            )}
            <form onSubmit={onSubmit} className="mt-4 space-y-3">
              <input name="name" required placeholder="Nom" className="w-full rounded-xl border border-white/10 bg-[#070B12]/70 px-4 py-3 text-sm outline-none focus:border-gold-500/60" />
              <input name="phone" placeholder="Téléphone" className="w-full rounded-xl border border-white/10 bg-[#070B12]/70 px-4 py-3 text-sm outline-none focus:border-gold-500/60" />
              <input name="email" type="email" required placeholder="Email" className="w-full rounded-xl border border-white/10 bg-[#070B12]/70 px-4 py-3 text-sm outline-none focus:border-gold-500/60" />
              <textarea name="message" required placeholder="Décris ton projet + adresse + photos si possible" rows={5} className="w-full rounded-xl border border-white/10 bg-[#070B12]/70 px-4 py-3 text-sm outline-none focus:border-gold-500/60" />
              <button disabled={!ready || status === "sending"} className="w-full rounded-xl bg-gold-500 px-5 py-3 text-sm font-semibold text-black disabled:opacity-50">
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </button>
              {status === "ok" && <div className="text-sm text-emerald-300">Message envoyé ✅</div>}
              {status === "err" && <div className="text-sm text-red-300">Erreur. Réessaie ou écris-nous par email.</div>}
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
