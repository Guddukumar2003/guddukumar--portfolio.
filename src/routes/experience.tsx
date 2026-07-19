import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import { Briefcase, Award, Calendar, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Rohit" },
      { name: "description", content: "Professional work experience and certifications." },
      { property: "og:title", content: "Experience — Rohit" },
      { property: "og:description", content: "Professional work experience and certifications." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const items = [
  { c: "Vercel", r: "Senior Full Stack Engineer", d: "2023 — Present", desc: "Leading frontend platform work; shipped design system used across 12+ products.", icon: Briefcase },
  { c: "Stripe", r: "Full Stack Engineer", d: "2021 — 2023", desc: "Built payment dashboards and internal tools serving 200k+ merchants.", icon: Briefcase },
  { c: "Freelance", r: "UI/UX & Full Stack", d: "2019 — 2021", desc: "Delivered 30+ client projects across startups and agencies.", icon: Briefcase },
];

const certs = [
  { t: "AWS Certified Developer", i: "Amazon Web Services", d: "2024" },
  { t: "Meta Front-End Developer", i: "Meta / Coursera", d: "2023" },
  { t: "Google UX Design", i: "Google", d: "2022" },
];

function ExperiencePage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Experience" title="Professional Work Experience" />
        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-lime via-sky to-transparent md:left-1/2" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div key={it.c} className={`relative grid gap-4 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}>
                <span className="btn-lime absolute left-4 top-4 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full md:left-1/2">
                  <it.icon className="h-4 w-4" />
                </span>
                <div className={`soft-card ml-12 rounded-2xl p-6 md:ml-0 ${i % 2 ? "md:mr-12" : "md:ml-12"}`}>
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-foreground">{it.r}</h2>
                    <span className="text-xs font-semibold text-sky">{it.d}</span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-lime">{it.c}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <SectionHeader eyebrow="Certifications" title="Learning & Credentials" />
        <div className="grid gap-6 md:grid-cols-3">
          {certs.map((c) => (
            <div key={c.t} className="soft-card group rounded-3xl p-6 transition hover:-translate-y-1">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-sky/15 to-lime/25">
                <div className="absolute inset-0 grid place-items-center">
                  <Award className="h-12 w-12 text-sky" />
                </div>
              </div>
              <h3 className="mt-5 font-bold text-foreground">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.i}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky"><Calendar className="h-3 w-3" /> {c.d}</span>
                <a href="#" className="btn-lime inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold">
                  Verify <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
