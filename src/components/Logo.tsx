import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <img src="/assets/logo.png" alt="Atlas Aménagement" className="h-8 w-auto" />

      <div className="leading-tight">
        <div className="font-semibold tracking-wide">ATLAS AMÉNAGEMENT</div>
        <div className="text-xs text-slate-400">Paysagement & Déneigement • Montréal Est</div>
      </div>
    </Link>
  );
}
