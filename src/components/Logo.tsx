import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[hsl(var(--line)/0.22)] bg-white/5">
        <Image src="/assets/logo.png" alt="Atlas Aménagement" fill className="object-contain p-1" priority />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-extrabold tracking-wide">ATLAS AMÉNAGEMENT</div>
        <div className="text-xs text-[hsl(var(--muted))]">Paysagement & Déneigement • Montréal Est</div>
      </div>
    </div>
  );
}
