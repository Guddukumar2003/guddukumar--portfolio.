import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import {
  Briefcase,
  Award,
  Calendar,
  ExternalLink,
  Users,
  Code2,
  Building2,
  MapPin,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Guddu Kumar" },
      { name: "description", content: "Professional work experience, certifications and clients." },
      { property: "og:title", content: "Experience — Guddu Kumar" },
      { property: "og:description", content: "Professional work experience, certifications and clients." },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: ExperiencePage,
});

const items = [
  {
    c: "Vercel",
    r: "Senior Full Stack Engineer",
    d: "2023 — Present",
    loc: "Remote",
    desc: "Leading frontend platform work; shipped design system used across 12+ products.",
    stack: ["Next.js", "TypeScript", "Turbo"],
    bullets: [
      "Led migration of legacy dashboards to a unified design system used by 40+ engineers.",
      "Cut initial page load by 38% through streaming, RSC and edge caching.",
      "Mentored 4 junior engineers; ran a weekly design engineering guild.",
    ],
    icon: Briefcase,
  },
  {
    c: "Stripe",
    r: "Full Stack Engineer",
    d: "2021 — 2023",
    loc: "Bengaluru, IN",
    desc: "Built payment dashboards and internal tools serving 200k+ merchants.",
    stack: ["React", "Ruby", "Postgres"],
    bullets: [
      "Owned the disputes surface end-to-end; reduced merchant response time by 22%.",
      "Introduced type-safe API client that removed 3 recurring incident categories.",
      "Collaborated with design to ship a new checkout analytics module.",
    ],
    icon: Briefcase,
  },
  {
    c: "Freelance",
    r: "UI/UX & Full Stack",
    d: "2019 — 2021",
    loc: "Remote",
    desc: "Delivered 30+ client projects across startups and agencies.",
    stack: ["React", "Node", "Figma"],
    bullets: [
      "Shipped marketing sites, dashboards and MVPs for early-stage founders.",
      "Averaged 4.9/5 across 24 verified client reviews.",
    ],
    icon: Briefcase,
  },
];

const certs = [
  { t: "AWS Certified Developer", i: "Amazon Web Services", d: "2024" },
  { t: "Meta Front-End Developer", i: "Meta / Coursera", d: "2023" },
  { t: "Google UX Design", i: "Google", d: "2022" },
  { t: "MongoDB Associate Dev", i: "MongoDB University", d: "2022" },
  { t: "Scrum Fundamentals", i: "Scrum Alliance", d: "2021" },
  { t: "Advanced React Patterns", i: "Frontend Masters", d: "2021" },
];

const stats = [
  { icon: Building2, v: "8+", l: "Companies worked with" },
  { icon: Users, v: "40+", l: "Happy clients" },
  { icon: Code2, v: "60+", l: "Projects shipped" },
  { icon: Award, v: "12", l: "Certifications" },
];

const clients = [
  "Vercel",
  "Stripe",
  "Notion",
  "Linear",
  "Framer",
  "Loom",
  "Retool",
  "Supabase",
];

function ExperiencePage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Experience" title="Professional Work Experience" />

        {/* Stats strip */}
        <div className="mb-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.l} className="soft-card flex items-center gap-3 rounded-2xl p-5">
              <span
                className={`grid h-11 w-11 place-items-center rounded-xl ${i % 2 ? "btn-sky" : "btn-lime"}`}
              >
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xl font-extrabold text-gradient">{s.v}</div>
                <div className="text-[11px] text-muted-foreground">{s.l}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-lime via-sky to-transparent md:left-1/2" />
          <div className="space-y-10">
            {items.map((it, i) => (
              <div
                key={it.c}
                className={`relative grid gap-4 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:col-start-2" : ""}`}
              >
                <span className="btn-lime absolute left-4 top-4 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full md:left-1/2">
                  <it.icon className="h-4 w-4" />
                </span>
                <div
                  className={`soft-card ml-12 rounded-2xl p-6 md:ml-0 ${i % 2 ? "md:mr-12" : "md:ml-12"}`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-lg font-bold text-foreground">{it.r}</h2>
                    <span className="text-xs font-semibold text-sky">{it.d}</span>
                  </div>
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-sm font-semibold text-lime">
                    {it.c}
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground">
                      <MapPin className="h-3 w-3" /> {it.loc}
                    </span>
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{it.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {it.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-lime" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {it.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients marquee */}
      <div className="mx-auto mt-24 max-w-6xl">
        <SectionHeader eyebrow="Trusted by" title="Teams I've built with" />
        <div className="soft-card flex flex-wrap justify-center gap-x-10 gap-y-4 rounded-3xl p-8">
          {clients.map((c, i) => (
            <span
              key={c}
              className={`text-lg font-bold ${i % 2 ? "text-sky" : "text-lime"} opacity-80`}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-24 max-w-6xl">
        <SectionHeader eyebrow="Certifications" title="Learning & Credentials" />
        <div className="grid gap-6 md:grid-cols-3">
          {certs.map((c) => (
            <div
              key={c.t}
              className="soft-card group rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-sky/15 to-lime/25">
                <div className="absolute inset-0 grid place-items-center">
                  <Award className="h-12 w-12 text-sky" />
                </div>
              </div>
              <h3 className="mt-5 font-bold text-foreground">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.i}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky">
                  <Calendar className="h-3 w-3" /> {c.d}
                </span>
                <a
                  href="#"
                  className="btn-lime inline-flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold"
                >
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
