import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import { ExternalLink, Github, Star, GitFork, Eye } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Guddu Kumar" },
      { name: "description", content: "Selected projects designed and built by Guddu Kumar." },
      { property: "og:title", content: "Projects — Guddu Kumar" },
      {
        property: "og:description",
        content: "Selected projects designed and built by Guddu Kumar.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  desc: string;
  stack: string[];
  category: "Web" | "AI" | "Mobile" | "Open Source";
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "AI Design House",
    desc: "AI-powered platform for automated UI/UX generation with real-time collaboration.",
    stack: ["Next.js", "OpenAI", "Tailwind"],
    category: "AI",
    featured: true,
  },
  {
    title: "Nova Analytics",
    desc: "Real-time analytics dashboard for SaaS teams with custom event pipelines.",
    stack: ["React", "Node.js", "PostgreSQL"],
    category: "Web",
    featured: true,
  },
  {
    title: "Prism CMS",
    desc: "Headless CMS with a delightful editor experience and typed content models.",
    stack: ["Next.js", "MongoDB", "TS"],
    category: "Web",
  },
  {
    title: "PulseChat",
    desc: "Realtime chat with AI copilots, voice channels and end-to-end encryption.",
    stack: ["React", "WebRTC", "Express"],
    category: "AI",
  },
  {
    title: "Orbit Store",
    desc: "E-commerce platform with headless checkout and subscription billing.",
    stack: ["Next.js", "Stripe", "Prisma"],
    category: "Web",
  },
  {
    title: "Lumen Portfolio",
    desc: "Portfolio builder for creatives with 20+ themes and MDX blog engine.",
    stack: ["React", "Tailwind", "Framer"],
    category: "Open Source",
  },
  {
    title: "Halo Wallet",
    desc: "Cross-platform crypto wallet with biometric auth and multi-chain support.",
    stack: ["React Native", "Rust", "Web3"],
    category: "Mobile",
  },
  {
    title: "Draft.dev",
    desc: "AI-first writing tool for developers — outlines, edits and publishes.",
    stack: ["Next.js", "OpenAI", "Supabase"],
    category: "AI",
  },
  {
    title: "Ripple UI",
    desc: "Open-source React component library with 60+ accessible primitives.",
    stack: ["React", "Radix", "Tailwind"],
    category: "Open Source",
  },
];

const filters = ["All", "Web", "AI", "Mobile", "Open Source"] as const;

const stats = [
  { v: "60+", l: "Projects shipped" },
  { v: "12", l: "Open source repos" },
  { v: "500+", l: "GitHub stars" },
  { v: "1.2M", l: "Users reached" },
];

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl">
      <div className="absolute inset-0 rounded-3xl bg-gradient-brand opacity-0 blur-md transition group-hover:opacity-40" />
      <div className="soft-card relative flex h-full flex-col overflow-hidden rounded-3xl">
        <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-sky/15 via-white to-lime/15">
          <div className="absolute inset-6 rounded-xl border border-border bg-white shadow-sm transition duration-500 group-hover:scale-105">
            <div className="flex items-center gap-1.5 border-b border-border p-2">
              <span className="h-2 w-2 rounded-full bg-lime" />
              <span className="h-2 w-2 rounded-full bg-sky" />
              <span className="h-2 w-2 rounded-full bg-border" />
            </div>
            <div className="grid place-items-center p-6 text-lg font-bold text-gradient">
              {p.title}
            </div>
          </div>
          <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-sky shadow-sm">
            {p.category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h2 className="text-lg font-bold text-foreground">{p.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {p.stack.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-3">
            <a
              href="#"
              className="btn-lime inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live Demo
            </a>
            <a
              href="#"
              className="btn-sky inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold"
            >
              <Github className="h-3.5 w-3.5" /> Code
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const featured = projects.filter((p) => p.featured);
  const visible = projects.filter((p) => filter === "All" || p.category === filter);

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          sub="A snapshot of recent projects I've designed and built."
        />

        {/* Featured spotlight */}
        <div className="mb-14 grid gap-6 lg:grid-cols-2">
          {featured.map((p) => (
            <div key={p.title} className="soft-card group relative overflow-hidden rounded-3xl">
              <div className="grid gap-0 md:grid-cols-5">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-sky/20 via-white to-lime/25 md:col-span-2 md:aspect-auto">
                  <div className="absolute inset-6 rounded-xl border border-border bg-white shadow-sm">
                    <div className="flex items-center gap-1.5 border-b border-border p-2">
                      <span className="h-2 w-2 rounded-full bg-lime" />
                      <span className="h-2 w-2 rounded-full bg-sky" />
                    </div>
                    <div className="grid place-items-center p-4 text-sm font-bold text-gradient">
                      {p.title}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-6 md:col-span-3">
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky">
                    Featured · {p.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center gap-4 pt-6 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 text-lime" /> 240
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3.5 w-3.5 text-sky" /> 38
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Eye className="h-3.5 w-3.5" /> 12k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                filter === f
                  ? "btn-lime"
                  : "soft-card text-muted-foreground hover:text-sky"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.l}
              className={`soft-card rounded-3xl p-6 text-center transition hover:-translate-y-1 ${
                i % 2 ? "" : ""
              }`}
            >
              <div className="text-3xl font-extrabold text-gradient">{s.v}</div>
              <div className="mt-2 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 soft-card overflow-hidden rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold text-gradient sm:text-3xl">
            Have a project in mind?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
            I take on a handful of freelance projects each quarter. Let's talk about yours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/contact" className="btn-lime rounded-xl px-5 py-3 text-sm font-semibold">
              Start a project
            </a>
            <a href="/about" className="btn-sky rounded-xl px-5 py-3 text-sm font-semibold">
              Learn more about me
            </a>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
