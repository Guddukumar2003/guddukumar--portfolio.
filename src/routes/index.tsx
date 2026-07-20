import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Github, Linkedin, Twitter, Mail, Download, ArrowRight,
  Code2, Palette, Rocket, Sparkles, Layers, Cpu,
  Star, Quote, CheckCircle2, Zap, Trophy, Users,
  Briefcase, Award, BookOpen, HelpCircle, Send, Calendar,
  Coffee, Music, Camera, Plane,
} from "lucide-react";
import { SectionHeader } from "@/components/site/Shared";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohit — Full Stack Developer & UI/UX Designer" },
      { name: "description", content: "Portfolio of Rohit — Full Stack Developer, UI/UX Designer & AI Enthusiast crafting premium digital experiences." },
      { property: "og:title", content: "Rohit — Full Stack Developer & UI/UX Designer" },
      { property: "og:description", content: "Portfolio of Rohit — Full Stack Developer, UI/UX Designer & AI Enthusiast." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const services = [
  { icon: Code2, title: "Web Development", desc: "Modern, performant apps built with React, Next.js and TypeScript.", tone: "lime" },
  { icon: Palette, title: "UI / UX Design", desc: "Clean, thoughtful interfaces backed by real product thinking.", tone: "sky" },
  { icon: Cpu, title: "AI Integrations", desc: "LLM-powered features, RAG pipelines and smart automations.", tone: "lime" },
  { icon: Layers, title: "Full Stack Systems", desc: "APIs, databases and infra designed to scale from day one.", tone: "sky" },
];

const stats = [
  { v: "5+", l: "Years Experience", icon: Rocket },
  { v: "60+", l: "Projects Shipped", icon: CheckCircle2 },
  { v: "40+", l: "Happy Clients", icon: Users },
  { v: "12", l: "Awards Won", icon: Trophy },
];

const featured = [
  { title: "Nova Analytics", tag: "SaaS · Dashboard", desc: "Realtime analytics platform used by 200+ teams worldwide." },
  { title: "Orbit AI Studio", tag: "AI · Design Tool", desc: "AI-assisted design canvas with vector generation and prompt history." },
  { title: "Fleetly", tag: "Mobility · Web App", desc: "Fleet management suite with live tracking and driver profiles." },
];

const process = [
  { n: "01", t: "Discover", d: "Understand the goals, users, and constraints." },
  { n: "02", t: "Design", d: "Craft flows and interfaces that feel effortless." },
  { n: "03", t: "Build", d: "Ship clean, tested code with delightful motion." },
  { n: "04", t: "Refine", d: "Measure, iterate, and continuously improve." },
];

const skillPreview = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind",
  "PostgreSQL", "Figma", "AWS", "Docker", "Python",
];

const testimonials = [
  { q: "Rohit turned our messy prototype into a beautiful, fast product. A rare mix of design taste and engineering rigor.", n: "Ananya S.", r: "Product Lead, Nova" },
  { q: "Ship quality is unreal. Every interaction felt intentional, and the codebase was a joy to inherit.", n: "Marcus L.", r: "CTO, Orbit AI" },
  { q: "Delivered ahead of schedule, communicated like a partner. Would hire again in a heartbeat.", n: "Priya R.", r: "Founder, Fleetly" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative flex min-h-screen items-center px-4 pt-28">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="soft-card mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
              </span>
              Available for freelance work
            </div>
            <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I'm <span className="text-gradient">Rohit</span>
            </h1>
            <p className="mt-4 text-lg font-medium text-foreground/80">
              Full Stack Developer <span className="text-lime">•</span> UI/UX Designer <span className="text-sky">•</span> AI Enthusiast
            </p>
            <p className="mt-5 max-w-xl text-base text-muted-foreground">
              I craft premium digital experiences — from pixel-perfect interfaces to
              scalable backends. Passionate about clean design, thoughtful motion,
              and shipping products that feel effortless.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-lime group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]">
                View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </Link>
              <a href="#" className="btn-sky inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]">
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
            <div className="mt-8 flex items-center gap-3">
              {[
                { Icon: Github, href: "#" },
                { Icon: Linkedin, href: "#" },
                { Icon: Twitter, href: "#" },
                { Icon: Mail, href: "/contact" },
              ].map(({ Icon, href }, i) => (
                <a key={i} href={href} className="soft-card grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:-translate-y-0.5 hover:text-sky">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative animate-float">
              <div className="absolute -inset-6 rounded-full bg-gradient-brand opacity-30 blur-2xl" />
              <div className="relative h-72 w-72 rounded-full p-[3px] sm:h-96 sm:w-96">
                <div className="absolute inset-0 rounded-full bg-gradient-brand animate-spin-slow" />
                <div className="relative h-full w-full overflow-hidden rounded-full bg-white">
                  <div className="grid h-full w-full place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(149,213,33,0.25),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(45,158,216,0.25),transparent_60%)]">
                    <span className="text-8xl font-black text-gradient">R</span>
                  </div>
                </div>
              </div>
              {["React", "Node.js", "Next.js", "AI"].map((t, i) => (
                <span
                  key={t}
                  className="soft-card absolute rounded-full px-3 py-1 text-xs font-semibold text-foreground"
                  style={{
                    top: `${[8, 20, 70, 55][i]}%`,
                    left: `${[-10, 92, -8, 90][i]}%`,
                    animation: `float 6s ease-in-out ${i * 0.7}s infinite`,
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE / TRUSTED */}
      <section className="px-4 py-10">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            Trusted by teams building on modern stacks
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
            {["Nova", "Orbit AI", "Fleetly", "Lumen", "Northwind", "Kepler"].map((b) => (
              <span key={b} className="text-lg font-black tracking-tight text-foreground/60">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT I DO */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="What I Do" title="Services I offer" sub="End-to-end product craft — from first sketch to production." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div key={s.title} className="soft-card group relative overflow-hidden rounded-3xl p-6 transition hover:-translate-y-1">
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl transition group-hover:scale-125 ${s.tone === "lime" ? "bg-lime/25" : "bg-sky/25"}`} />
                <span className={`relative grid h-11 w-11 place-items-center rounded-xl ${s.tone === "lime" ? "btn-lime" : "btn-sky"}`}>
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="relative mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="relative mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="soft-card rounded-3xl bg-muted/50 p-8 sm:p-12">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {stats.map((s, i) => (
                <div key={s.l} className="text-center">
                  <span className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl ${i % 2 ? "btn-sky" : "btn-lime"}`}>
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div className="mt-4 text-3xl font-extrabold text-gradient sm:text-4xl">{s.v}</div>
                  <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Selected Work</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                <span className="text-gradient">Featured Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="group inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-sky">
              View all <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featured.map((p, i) => (
              <div key={p.title} className="soft-card group overflow-hidden rounded-3xl transition hover:-translate-y-1">
                <div className={`relative h-44 overflow-hidden ${i % 2 ? "bg-gradient-brand" : "bg-[radial-gradient(circle_at_30%_20%,rgba(149,213,33,0.35),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(45,158,216,0.35),transparent_60%)]"}`}>
                  <div className="absolute inset-0 grid place-items-center">
                    <span className="text-5xl font-black text-white/90">{p.title.charAt(0)}</span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-sky">{p.tag}</p>
                  <h3 className="mt-2 text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS PREVIEW */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Toolbox" title="Technologies I use daily" sub="A curated stack for building fast, reliable products." />
          <div className="flex flex-wrap justify-center gap-3">
            {skillPreview.map((s, i) => (
              <span
                key={s}
                className={`soft-card rounded-full px-5 py-2 text-sm font-semibold transition hover:-translate-y-0.5 ${i % 2 ? "hover:text-sky" : "hover:text-lime"}`}
              >
                {s}
              </span>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/skills" className="inline-flex items-center gap-1 text-sm font-semibold text-sky hover:text-lime">
              Explore full skillset <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Process" title="How I work" sub="A simple, transparent flow from idea to launch." />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => (
              <div key={p.n} className="soft-card relative rounded-3xl p-6">
                <div className={`text-4xl font-black ${i % 2 ? "text-sky/30" : "text-lime/40"}`}>{p.n}</div>
                <h3 className="mt-2 text-lg font-bold text-foreground">{p.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
                <Zap className={`absolute right-5 top-5 h-4 w-4 ${i % 2 ? "text-sky" : "text-lime"}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Kind Words" title="What clients say" />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div key={t.n} className="soft-card relative rounded-3xl p-6">
                <Quote className={`absolute right-5 top-5 h-8 w-8 ${i % 2 ? "text-sky/30" : "text-lime/40"}`} />
                <div className="flex gap-0.5 text-lime">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-3 text-sm text-foreground/80">"{t.q}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-full text-sm font-bold text-white ${i % 2 ? "bg-sky" : "bg-lime"}`}>
                    {t.n.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-foreground">{t.n}</div>
                    <div className="text-xs text-muted-foreground">{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* EXPERIENCE TIMELINE */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <SectionHeader eyebrow="Journey" title="Career highlights" sub="A quick look at the roles that shaped my craft." />
          <ol className="relative border-l-2 border-dashed border-border pl-8">
            {[
              { r: "Senior Full Stack Engineer", c: "Nova Labs", d: "2023 — Present", p: "Leading a team of 4 shipping the flagship analytics product." },
              { r: "Product Engineer", c: "Orbit AI", d: "2021 — 2023", p: "Built the AI canvas from prototype to 50k monthly users." },
              { r: "Frontend Developer", c: "Fleetly", d: "2019 — 2021", p: "Rewrote the driver app with React and cut load time by 60%." },
              { r: "Freelance Developer", c: "Independent", d: "2018 — 2019", p: "Shipped 20+ client sites across e-commerce and SaaS." },
            ].map((e, i) => (
              <li key={e.c} className="relative mb-8 last:mb-0">
                <span className={`absolute -left-[41px] top-1 grid h-6 w-6 place-items-center rounded-full ring-4 ring-background ${i % 2 ? "btn-sky" : "btn-lime"}`}>
                  <Briefcase className="h-3 w-3" />
                </span>
                <div className="soft-card rounded-2xl p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-base font-bold text-foreground">{e.r}</h3>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-sky">
                      <Calendar className="h-3 w-3" /> {e.d}
                    </span>
                  </div>
                  <div className="text-sm font-medium text-lime">{e.c}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.p}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-center">
            <Link to="/experience" className="inline-flex items-center gap-1 text-sm font-semibold text-sky hover:text-lime">
              See full experience <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Certifications" title="Validated & credentialed" sub="Recent certifications from industry-recognized programs." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { t: "AWS Solutions Architect", i: "Amazon Web Services", d: "2024" },
              { t: "Meta Frontend Developer", i: "Meta / Coursera", d: "2023" },
              { t: "Google UX Design", i: "Google", d: "2023" },
              { t: "MongoDB Developer", i: "MongoDB University", d: "2022" },
              { t: "TensorFlow Developer", i: "DeepLearning.AI", d: "2022" },
              { t: "Scrum Master (PSM I)", i: "Scrum.org", d: "2021" },
            ].map((c, i) => (
              <div key={c.t} className="soft-card group flex items-start gap-4 rounded-3xl p-6 transition hover:-translate-y-1">
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${i % 2 ? "btn-sky" : "btn-lime"}`}>
                  <Award className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="truncate text-base font-bold text-foreground">{c.t}</h3>
                  <p className="text-xs text-muted-foreground">{c.i} · {c.d}</p>
                  <a href="#" className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-sky hover:text-lime">
                    Verify <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST BLOG */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">Writing</p>
              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                <span className="text-gradient">From the Blog</span>
              </h2>
            </div>
            <Link to="/blog" className="group inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-sky">
              All posts <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Designing for AI-first interfaces", c: "Design", d: "Aug 12, 2026", r: "6 min read" },
              { t: "Scaling Next.js on the edge", c: "Engineering", d: "Jul 04, 2026", r: "8 min read" },
              { t: "The art of tiny microinteractions", c: "Craft", d: "Jun 18, 2026", r: "4 min read" },
            ].map((b, i) => (
              <article key={b.t} className="soft-card group overflow-hidden rounded-3xl transition hover:-translate-y-1">
                <div className={`h-40 ${i % 2 ? "bg-gradient-brand" : "bg-[radial-gradient(circle_at_30%_20%,rgba(45,158,216,0.35),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(149,213,33,0.35),transparent_60%)]"}`} />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs">
                    <span className={`rounded-full px-2 py-0.5 font-semibold ${i % 2 ? "bg-sky/10 text-sky" : "bg-lime/15 text-foreground"}`}>{b.c}</span>
                    <span className="text-muted-foreground">{b.d} · {b.r}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-foreground group-hover:text-sky">{b.t}</h3>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky">
                    Read post <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND WORK */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader eyebrow="Beyond Code" title="A few things I love" sub="Life outside the editor is where the best ideas come from." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Coffee, t: "Coffee", d: "Third-wave espresso and slow pour-overs." },
              { icon: Music, t: "Music", d: "Lo-fi beats and classical piano playlists." },
              { icon: Camera, t: "Photography", d: "Street and travel photography on the weekends." },
              { icon: Plane, t: "Travel", d: "Exploring new cultures — 14 countries so far." },
            ].map((h, i) => (
              <div key={h.t} className="soft-card rounded-3xl p-6 text-center transition hover:-translate-y-1">
                <span className={`mx-auto grid h-12 w-12 place-items-center rounded-2xl ${i % 2 ? "btn-sky" : "btn-lime"}`}>
                  <h.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-bold text-foreground">{h.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{h.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <SectionHeader eyebrow="FAQ" title="Frequently asked" sub="Quick answers to what most people ask before we start." />
          <div className="space-y-4">
            {[
              { q: "What kind of projects do you take on?", a: "Product-led websites, SaaS dashboards, AI-powered tools, and design-heavy marketing sites." },
              { q: "How do you charge?", a: "Fixed-price for scoped projects, or a weekly retainer for ongoing partnerships. Estimates are always upfront." },
              { q: "Do you work with existing teams?", a: "Yes — I regularly embed with product and design teams as a senior engineer or design partner." },
              { q: "What's your typical timeline?", a: "Landing pages ship in 1–2 weeks, MVPs in 4–8 weeks, larger platforms in 3+ months." },
              { q: "Do you offer post-launch support?", a: "Absolutely. Every project includes a 30-day warranty and optional monthly maintenance." },
            ].map((f, i) => (
              <details key={f.q} className="soft-card group rounded-2xl p-5 open:shadow-lg">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="flex items-center gap-3 text-sm font-bold text-foreground">
                    <HelpCircle className={`h-4 w-4 ${i % 2 ? "text-sky" : "text-lime"}`} />
                    {f.q}
                  </span>
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-muted text-lg font-bold text-muted-foreground transition group-open:rotate-45 group-open:btn-lime">
                    +
                  </span>
                </summary>
                <p className="mt-3 pl-7 text-sm text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="soft-card relative overflow-hidden rounded-[2rem] bg-muted/40 p-10 sm:p-12">
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-lime/25 blur-3xl" />
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-sky/25 blur-3xl" />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-sky">
                  <BookOpen className="h-3.5 w-3.5" /> Monthly Newsletter
                </span>
                <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                  Notes on <span className="text-gradient">design, code & AI</span>
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  One curated email a month. No spam. Unsubscribe anytime.
                </p>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-sky focus:ring-2 focus:ring-sky/20"
                />
                <button type="submit" className="btn-lime inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]">
                  Subscribe <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-24 pt-10">
        <div className="mx-auto max-w-5xl">
          <div className="soft-card relative overflow-hidden rounded-[2rem] p-10 text-center sm:p-14">
            <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-lime/25 blur-3xl" />
            <div className="absolute -bottom-24 right-10 h-64 w-64 rounded-full bg-sky/25 blur-3xl" />
            <div className="relative">
              <Sparkles className="mx-auto h-8 w-8 text-sky" />
              <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                Have a project in mind? <span className="text-gradient">Let's build it.</span>
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
                I'm currently taking on a limited number of freelance and contract engagements.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link to="/contact" className="btn-lime inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]">
                  Start a project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/about" className="btn-sky inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition hover:scale-[1.02]">
                  More about me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
