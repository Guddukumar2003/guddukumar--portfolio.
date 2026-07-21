import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import {
  Code2,
  Server,
  Database,
  Wrench,
  Cpu,
  Cloud,
  Layers,
  GitBranch,
  Sparkles,
  Zap,
  ShieldCheck,
  Gauge,
} from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Guddu Kumar" },
      {
        name: "description",
        content:
          "Core technical skills across frontend, backend, database, DevOps and design tools.",
      },
      { property: "og:title", content: "Skills — Guddu Kumar" },
      {
        property: "og:description",
        content:
          "Core technical skills across frontend, backend, database, DevOps and design tools.",
      },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

const groups = [
  {
    icon: Code2,
    title: "Frontend",
    items: [
      ["HTML", 95],
      ["CSS", 92],
      ["JavaScript", 94],
      ["React", 95],
      ["Next.js", 90],
      ["Tailwind CSS", 96],
    ] as [string, number][],
  },
  {
    icon: Server,
    title: "Backend",
    items: [
      ["Node.js", 90],
      ["Express", 88],
      ["Django", 78],
      ["tRPC", 82],
    ] as [string, number][],
  },
  {
    icon: Database,
    title: "Database",
    items: [
      ["MongoDB", 88],
      ["PostgreSQL", 85],
      ["MySQL", 80],
      ["Redis", 76],
    ] as [string, number][],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      ["Git", 92],
      ["Docker", 82],
      ["Figma", 88],
      ["VS Code", 95],
      ["AWS", 78],
    ] as [string, number][],
  },
];

const circular = [
  { name: "TypeScript", v: 92 },
  { name: "React", v: 95 },
  { name: "Next.js", v: 90 },
  { name: "Node.js", v: 88 },
];

const stack = [
  { icon: Layers, t: "UI Systems", d: "shadcn/ui, Radix, Framer Motion, Storybook" },
  { icon: Cloud, t: "Cloud", d: "AWS, Vercel, Cloudflare Workers, Supabase" },
  { icon: Cpu, t: "AI / ML", d: "OpenAI, LangChain, Vercel AI SDK, embeddings" },
  { icon: GitBranch, t: "Workflow", d: "Git, GitHub Actions, Turbo, Changesets" },
  { icon: ShieldCheck, t: "Testing", d: "Vitest, Playwright, MSW, Testing Library" },
  { icon: Gauge, t: "Performance", d: "Lighthouse, Web Vitals, bundle analysis, Sentry" },
];

const languages = ["TypeScript", "JavaScript", "Python", "Go", "SQL", "Bash", "HTML", "CSS"];

function Ring({ v, name }: { v: number; name: string }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  const offset = c - (v / 100) * c;
  return (
    <div className="soft-card flex flex-col items-center rounded-3xl p-6">
      <div className="relative h-28 w-28">
        <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
          <circle cx="50" cy="50" r={r} strokeWidth="8" className="fill-none stroke-muted" />
          <defs>
            <linearGradient id={`g-${name}`} x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#95D521" />
              <stop offset="100%" stopColor="#2D9ED8" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r={r}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            className="fill-none transition-all duration-700"
            stroke={`url(#g-${name})`}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center text-xl font-extrabold text-gradient">
          {v}%
        </div>
      </div>
      <div className="mt-4 text-sm font-semibold text-foreground">{name}</div>
    </div>
  );
}

function SkillsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title="Core Technical Skills"
          sub="Tools & technologies I use every day to ship great products."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map(({ icon: Icon, title, items }, idx) => (
            <div
              key={title}
              className="soft-card group rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl text-white ${idx % 2 ? "btn-sky" : "btn-lime"}`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="text-lg font-bold text-gradient">{title}</h2>
              </div>
              <div className="mt-6 space-y-4">
                {items.map(([name, v]) => (
                  <div key={name}>
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="font-medium text-foreground">{name}</span>
                      <span>{v}%</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-gradient-brand transition-all duration-700"
                        style={{ width: `${v}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Circular indicators */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Top proficiencies"
            title="Where I'm strongest"
            sub="The core stack I reach for on every new project."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {circular.map((c) => (
              <Ring key={c.name} v={c.v} name={c.name} />
            ))}
          </div>
        </div>

        {/* Broader stack */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Toolbelt"
            title="Beyond the basics"
            sub="The full stack of libraries, platforms and workflows I bring to every project."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stack.map((s, i) => (
              <div key={s.t} className="soft-card rounded-3xl p-6 transition hover:-translate-y-1">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${i % 2 ? "btn-sky" : "btn-lime"}`}
                >
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages cloud */}
        <div className="mt-20">
          <div className="soft-card rounded-3xl p-10">
            <div className="flex items-center gap-3">
              <span className="btn-sky grid h-11 w-11 place-items-center rounded-xl">
                <Sparkles className="h-5 w-5" />
              </span>
              <h2 className="text-xl font-bold text-gradient">Languages I code in</h2>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              {languages.map((l, i) => (
                <span
                  key={l}
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    i % 2 ? "btn-sky" : "btn-lime"
                  }`}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Currently learning */}
        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          <div className="soft-card rounded-3xl p-8">
            <span className="btn-lime grid h-11 w-11 place-items-center rounded-xl">
              <Zap className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-gradient">Currently learning</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Rust for systems tooling, and shipping small CLIs with it.
            </p>
          </div>
          <div className="soft-card rounded-3xl p-8">
            <span className="btn-sky grid h-11 w-11 place-items-center rounded-xl">
              <Cpu className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-gradient">Exploring</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              LLM evals, agentic workflows, and building useful AI copilots.
            </p>
          </div>
          <div className="soft-card rounded-3xl p-8">
            <span className="btn-lime grid h-11 w-11 place-items-center rounded-xl">
              <Layers className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-gradient">Next up</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Deeper into design engineering — motion, micro-interactions, prototyping.
            </p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
