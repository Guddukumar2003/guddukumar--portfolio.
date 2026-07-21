import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import {
  Sparkles,
  Trophy,
  GraduationCap,
  Palette,
  Heart,
  Coffee,
  Music,
  Mountain,
  Camera,
  BookOpen,
  Target,
  Zap,
  Users,
  Rocket,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Guddu Kumar" },
      {
        name: "description",
        content:
          "Professional summary, values, education, achievements and interests of Guddu Kumar.",
      },
      { property: "og:title", content: "About — Guddu Kumar" },
      {
        property: "og:description",
        content:
          "Professional summary, values, education, achievements and interests of Guddu Kumar.",
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

const values = [
  {
    icon: Target,
    t: "Outcomes over output",
    d: "I optimize for what moves the metric, not for the number of tickets closed.",
  },
  {
    icon: Zap,
    t: "Fast, but never sloppy",
    d: "Ship weekly. Polish continuously. Small iterations beat big rewrites.",
  },
  {
    icon: Users,
    t: "Design with people",
    d: "Every decision starts with the user. Empathy is a technical skill.",
  },
  {
    icon: Rocket,
    t: "Own the whole thing",
    d: "From Figma to production logs — I care about the full journey.",
  },
];

const hobbies = [
  { icon: Coffee, t: "Specialty coffee" },
  { icon: Music, t: "Lo-fi & indie" },
  { icon: Mountain, t: "Trekking" },
  { icon: Camera, t: "Street photography" },
  { icon: BookOpen, t: "Design books" },
  { icon: Heart, t: "Mentoring juniors" },
];

const journey = [
  { y: "2019", t: "Started freelancing", d: "First paid React project — a booking app for a local gym." },
  { y: "2021", t: "Joined Stripe", d: "Moved into fintech; learned what production scale really means." },
  { y: "2023", t: "Joined Vercel", d: "Led the internal design system used across 12+ surfaces." },
  { y: "2024", t: "Building publicly", d: "Started shipping open-source AI tooling and writing weekly." },
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
            <p className="mt-3 text-muted-foreground">
              I've partnered with early-stage founders, scaled fintech teams, and design-led
              startups. My sweet spot is 0-to-1 product work where UX, engineering and business
              strategy overlap.
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

        {/* Values */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="What I value"
            title="Principles I ship by"
            sub="Four ideas I keep coming back to whether I'm coding, designing, or leading a team."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <div key={v.t} className="soft-card rounded-3xl p-6 transition hover:-translate-y-1">
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${i % 2 ? "btn-sky" : "btn-lime"}`}
                >
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey */}
        <div className="mt-20 grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">My journey</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gradient">Five years, in short</h2>
            <p className="mt-4 text-muted-foreground">
              I didn't take a straight line. Every jump taught me something the last role couldn't
              — from client work to product companies to open source.
            </p>
          </div>
          <ol className="soft-card space-y-6 rounded-3xl p-8 lg:col-span-3">
            {journey.map((j, idx) => (
              <li key={j.y} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="btn-lime grid h-11 w-11 place-items-center rounded-xl text-sm font-bold">
                    {j.y}
                  </span>
                  {idx < journey.length - 1 && (
                    <span className="mt-2 h-full w-px flex-1 bg-border" />
                  )}
                </div>
                <div className="pb-2">
                  <div className="font-semibold text-foreground">{j.t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{j.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Achievements */}
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

        {/* Quote */}
        <div className="mt-20">
          <div className="soft-card relative overflow-hidden rounded-3xl p-10 sm:p-14">
            <Quote className="absolute right-8 top-8 h-16 w-16 text-lime/40" />
            <p className="max-w-3xl text-xl font-medium leading-relaxed text-foreground/90 sm:text-2xl">
              "The best products feel obvious in hindsight. My job is to do the messy work that
              gets them there."
            </p>
            <div className="mt-6 text-sm text-muted-foreground">— My working philosophy</div>
          </div>
        </div>

        {/* Beyond code */}
        <div className="mt-20">
          <SectionHeader
            eyebrow="Beyond code"
            title="When I'm not shipping"
            sub="Things that keep me grounded and curious."
          />
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {hobbies.map((h, i) => (
              <div
                key={h.t}
                className="soft-card flex flex-col items-center rounded-2xl p-5 text-center transition hover:-translate-y-1"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl ${i % 2 ? "btn-sky" : "btn-lime"}`}
                >
                  <h.icon className="h-5 w-5" />
                </span>
                <div className="mt-3 text-xs font-semibold text-foreground">{h.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
