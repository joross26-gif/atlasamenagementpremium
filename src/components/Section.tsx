import { ReactNode } from "react";

export function Section(props: { title: string; subtitle?: string; children: ReactNode }) {
  return (
    <section className="py-10 md:py-14">
      <div className="container-max space-y-6">
        <div className="space-y-2">
          <h2 className="h2">{props.title}</h2>
          {props.subtitle ? <p className="sub">{props.subtitle}</p> : null}
        </div>
        {props.children}
      </div>
    </section>
  );
}
