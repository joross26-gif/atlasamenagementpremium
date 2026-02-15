import Image from "next/image";
import { Section } from "@/components/Section";

const gallery = Array.from({ length: 35 }, (_, i) => ({
  src: `/gallery/galery${i + 1}.jpg`,
  alt: `Galerie ${i + 1}`,
}));

export default function Page() {
  return (
    <Section title="Galerie" subtitle="Remplace les placeholders dans /public/gallery par tes vraies photos (mêmes noms).">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((g) => (
          <div key={g.src} className="card overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image src={g.src} alt={g.alt} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
            </div>
            <div className="p-4">
              <div className="text-sm font-bold">{g.alt}</div>
              <div className="mt-1 text-xs text-[hsl(var(--muted))]">Pavé uni • Entretien • Déneigement</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a className="btn-primary" href="/contact">Soumission</a>
        <a className="btn-ghost" href="tel:4387954120">Appeler</a>
      </div>
    </Section>
  );
}
