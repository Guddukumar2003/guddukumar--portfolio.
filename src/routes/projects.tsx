import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import { ExternalLink, Github } from "lucide-react";

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

const projects = [
  {
    title: "AI Design House",
    desc: "AI-powered platform for automated UI/UX generation.",
    stack: ["Next.js", "OpenAI", "Tailwind"],
  },
  {
    title: "Nova Analytics",
    desc: "Real-time analytics dashboard for SaaS teams.",
    stack: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Prism CMS",
    desc: "Headless CMS with a delightful editor experience.",
    stack: ["Next.js", "MongoDB", "TS"],
  },
  {
    title: "PulseChat",
    desc: "Realtime chat with AI copilots and voice channels.",
    stack: ["React", "WebRTC", "Express"],
  },
  {
    title: "Orbit Store",
    desc: "E-commerce platform with headless checkout.",
    stack: ["Next.js", "Stripe", "Prisma"],
  },
  {
    title: "Lumen Portfolio",
    desc: "Portfolio builder for creatives with themes.",
    stack: ["React", "Tailwind", "Framer"],
  },
];

function ProjectsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title="Selected Work"
          sub="A snapshot of recent projects I've designed and built."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group relative overflow-hidden rounded-3xl">
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
          ))}
        </div>
      </div>
    </PageShell>
  );
}
