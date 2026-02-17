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
                className="underline"
                href={`tel:${SITE.phone.replace(/[^0-9]/g, "")}`}
              >
                {SITE.phone}
              </a>
            </div>

            <div className="mt-2">
              Email :{" "}
              <a className="underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </div>

            <div className="mt-2">
              Secteur : {SITE.area}
            </div>
          </div>
        </div>

        {/* FORMULAIRE */}
        <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-lg font-semibold">Formulaire</div>

          <form onSubmit={onSubmit} className="mt-4 space-y-3">
            <input name="name" placeholder="Nom" className="w-full p-2 rounded bg-black/40 border border-white/10" />
            <input name="email" placeholder="Email" className="w-full p-2 rounded bg-black/40 border border-white/10" />
            <textarea name="message" placeholder="Message" className="w-full p-2 rounded bg-black/40 border border-white/10" />

            <button className="bg-gold-500 text-black px-4 py-2 rounded">
              Envoyer
            </button>
          </form>

        </div>

      </div>

    </Section>
  </main>
);

