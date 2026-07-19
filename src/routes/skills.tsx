import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import { Code2, Server, Database, Wrench } from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Rohit" },
      { name: "description", content: "Core technical skills across frontend, backend, database, and tools." },
      { property: "og:title", content: "Skills — Rohit" },
      { property: "og:description", content: "Core technical skills across frontend, backend, database, and tools." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: SkillsPage,
});

const groups = [
  { icon: Code2, title: "Frontend", items: [["HTML", 95], ["CSS", 92], ["JavaScript", 94], ["React", 95], ["Next.js", 90], ["Tailwind CSS", 96]] as [string, number][] },
  { icon: Server, title: "Backend", items: [["Node.js", 90], ["Express", 88], ["Django", 78]] as [string, number][] },
  { icon: Database, title: "Database", items: [["MongoDB", 88], ["PostgreSQL", 85], ["MySQL", 80]] as [string, number][] },
  { icon: Wrench, title: "Tools", items: [["Git", 92], ["Docker", 82], ["Figma", 88], ["VS Code", 95], ["AWS", 78]] as [string, number][] },
];

function SkillsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Skills" title="Core Technical Skills" sub="Tools & technologies I use every day to ship great products." />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map(({ icon: Icon, title, items }, idx) => (
            <div key={title} className="soft-card group rounded-3xl p-6 transition hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${idx % 2 ? "btn-sky" : "btn-lime"}`}>
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
                      <div className="h-full rounded-full bg-gradient-brand transition-all duration-700" style={{ width: `${v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
