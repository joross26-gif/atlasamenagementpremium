import React from "react";

export default function Section({
  eyebrow,
  title,
  subtitle,
  children,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="rounded-[28px] border border-gold-500/30 bg-[#0b1220]/70 p-8 gold-border">
        {eyebrow && (
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 max-w-2xl text-slate-300">{subtitle}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
