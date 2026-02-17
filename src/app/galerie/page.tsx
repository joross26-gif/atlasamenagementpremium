import Section from "@/components/Section";

export default function GaleriePage() {
  const items = Array.from({ length: 35 }, (_, idx) => idx + 1);

  return (
    <main>
      <Section
        title="Galerie de réalisations"
        subtitle="Découvrez nos projets de pavé uni, entretien paysager et déneigement dans Montréal Est"
      >
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {items.map((i) => (
            <figure
              key={i}
              className="overflow-hidden rounded-2xl border border-gold-500/30 bg-black/20"
            >
              <img
                src={`/gallery/gallery${i}.jpg`}
                alt={`Projet Atlas ${i}`}
                className="h-64 w-full object-cover"
              />
              <figcaption className="p-3 text-sm text-slate-300">
                Projet {i}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </main>
  );
}
