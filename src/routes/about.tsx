import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import { Sparkles, Trophy, GraduationCap, Palette } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Guddu Kumar" },
      {
        name: "description",
        content: "Professional summary, education, and achievements of Guddu Kumar.",
      },
      { property: "og:title", content: "About — Guddu Kumar" },
      {
        property: "og:description",
        content: "Professional summary, education, and achievements of Guddu Kumar.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const stats = [
  { v: "5+", l: "Years Experience" },
  { v: "60+", l: "Projects Completed" },
  { v: "25+", l: "Technologies" },
  { v: "40+", l: "Happy Clients" },
];

const achievements = [
  { t: "Hackathon Winner", d: "1st place, Global AI Hack 2024", icon: Trophy },
  { t: "Open Source", d: "500+ stars across 12 repositories", icon: Sparkles },
  { t: "Speaker", d: "3 international React conferences", icon: GraduationCap },
  { t: "Design Awards", d: "Featured on Awwwards & CSSDA", icon: Palette },
];

function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About Me"
          title="Professional Summary"
          sub="A short intro to who I am and how I work."
        />
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="soft-card rounded-3xl p-8 lg:col-span-3">
            <h2 className="text-xl font-bold text-gradient">Building products that people love</h2>
            <p className="mt-4 text-muted-foreground">
              I'm a Full Stack Developer with 5+ years of experience designing and shipping web
              products. I care deeply about performance, accessibility, and craft. Currently
              exploring the intersection of AI and product design — building tools that feel
              intelligent, not gimmicky.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-border bg-muted/60 p-4 text-center"
                >
                  <div className="text-2xl font-extrabold text-gradient">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="soft-card rounded-3xl p-8 lg:col-span-2">
            <h2 className="text-xl font-bold text-gradient">Education</h2>
            <ol className="mt-6 space-y-6 border-l border-border pl-6">
              {[
                {
                  t: "B.Tech, Computer Science",
                  s: "IIT Delhi · 2018 – 2022",
                  d: "Graduated with honors, specializing in AI & distributed systems.",
                },
                {
                  t: "Higher Secondary, PCM",
                  s: "Delhi Public School · 2016 – 2018",
                  d: "Top 1% in national board examinations.",
                },
              ].map((e) => (
                <li key={e.t} className="relative">
                  <span className="absolute -left-[29px] top-1.5 grid h-4 w-4 place-items-center rounded-full bg-gradient-brand">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  </span>
                  <div className="text-sm font-semibold">{e.t}</div>
                  <div className="text-xs text-sky">{e.s}</div>
                  <p className="mt-1 text-xs text-muted-foreground">{e.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-20">
          <SectionHeader eyebrow="Achievements" title="Highlights & Recognition" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {achievements.map((a, i) => (
              <div key={a.t} className="soft-card rounded-3xl p-6 transition hover:-translate-y-1">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${i % 2 ? "btn-sky" : "btn-lime"}`}
                >
                  <a.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{a.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
