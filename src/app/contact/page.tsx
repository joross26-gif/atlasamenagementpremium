"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import { SITE } from "@/lib/site";

type Status = "idle" | "sending" | "ok" | "err";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  // Formspree endpoint: mets-le dans Vercel + .env.local (NEXT_PUBLIC_...)
  const endpoint = useMemo(
    () => process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
    []
  );
  const ready = Boolean(endpoint);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!ready) return;

    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        form.reset();
        setStatus("ok");
      } else {
        setStatus("err");
      }
    } catch {
      setStatus("err");
    }
  }

  return (
    <main
      style={{
        backgroundImage: "url(/backgrounds/contact-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Section title="Contact" subtitle="Soumission rapide – réponse rapide.">
        <div className="grid gap-6 md:grid-cols-2">
          {/* COORDONNÉES */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-lg font-semibold">Coordonnées</div>

            <div className="mt-3 text-sm text-slate-300">
              <div>
                Téléphone :{" "}
                <a
                  className="hover:underline"
                  href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
                >
                  {SITE.phone}
                </a>
              </div>

              <div className="mt-2">
                Email :{" "}
                <a className="hover:underline" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </div>

              <div className="mt-2">Secteur : {SITE.area}</div>
            </div>
          </div>

          {/* FORMULAIRE */}
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-lg font-semibold">Formulaire</div>

            {!ready && (
              <div className="mt-3 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-200">
                Variable manquante :{" "}
                <span className="font-mono">NEXT_PUBLIC_FORMSPREE_ENDPOINT</span>
                . Ajoute-la dans Vercel (Project → Settings → Environment
                Variables) et dans ton <span className="font-mono">.env.local</span>.
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-4 space-y-3">
              <input
                name="name"
                required
                placeholder="Nom"
                className="w-full rounded-lg border border-white/10 bg-black/40 p-2 text-sm"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-lg border border-white/10 bg-black/40 p-2 text-sm"
              />
              <textarea
                name="message"
                required
                placeholder="Message"
                rows={5}
                className="w-full rounded-lg border border-white/10 bg-black/40 p-2 text-sm"
              />

              <button
                type="submit"
                disabled={!ready || status === "sending"}
                className="rounded-lg bg-yellow-500 px-4 py-2 text-sm font-semibold text-black disabled:opacity-50"
              >
                {status === "sending" ? "Envoi..." : "Envoyer"}
              </button>

              {status === "ok" && (
                <div className="text-sm text-emerald-300">
                  Merci! Message envoyé.
                </div>
              )}
              {status === "err" && (
                <div className="text-sm text-red-300">
                  Oups… erreur. Réessaie.
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </main>
  );
}
