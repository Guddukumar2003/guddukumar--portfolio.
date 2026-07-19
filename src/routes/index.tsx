import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Github, Linkedin, Twitter, Mail, Download, ArrowRight, ArrowUp,
  Code2, Palette, Sparkles, Database, Wrench, Server,
  ExternalLink, MapPin, Phone, Send, Calendar, Award, Quote,
  Briefcase, GraduationCap, Trophy, ChevronLeft, ChevronRight, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-lime/25 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-sky/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
        <div className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-lime/15 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(11,18,32,0.06)_1px,transparent_0)] [background-size:32px_32px]" />
      </div>

      <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Achievements />
      <Testimonials />
      <Blog />
      <Contact />
      <Footer />

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="btn-sky fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full transition hover:scale-110"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}

/* ---------- NAV ---------- */
function Nav({ menuOpen, setMenuOpen }: { menuOpen: boolean; setMenuOpen: (v: boolean) => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-[#0B1220]">R</span>
            <span className="text-gradient text-lg">Rohit</span>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground">
                {n.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-lime hidden rounded-xl px-4 py-2 text-sm font-semibold transition hover:opacity-90 md:inline-flex">
            Hire Me
          </a>
          <button className="grid h-9 w-9 place-items-center rounded-lg text-foreground md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="glass mt-2 flex flex-col rounded-2xl p-2 md:hidden">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                {n.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
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
            <a href="#projects" className="btn-lime group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]">
              View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#" className="btn-sky inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02]">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: Github, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Mail, href: "#contact" },
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
  );
}

/* ---------- SECTION HEADER ---------- */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const stats = [
    { v: "5+", l: "Years Experience" },
    { v: "60+", l: "Projects Completed" },
    { v: "25+", l: "Technologies" },
    { v: "40+", l: "Happy Clients" },
  ];
  return (
    <section id="about" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About Me" title="Professional Summary" sub="A short intro to who I am and how I work." />
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="soft-card rounded-3xl p-8 lg:col-span-3">
            <h3 className="text-xl font-bold text-gradient">Building products that people love</h3>
            <p className="mt-4 text-muted-foreground">
              I'm a Full Stack Developer with 5+ years of experience designing and
              shipping web products. I care deeply about performance, accessibility,
              and craft. Currently exploring the intersection of AI and product
              design — building tools that feel intelligent, not gimmicky.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.l} className="rounded-2xl border border-border bg-muted/60 p-4 text-center">
                  <div className="text-2xl font-extrabold text-gradient">{s.v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="soft-card rounded-3xl p-8 lg:col-span-2">
            <h3 className="text-xl font-bold text-gradient">Education</h3>
            <ol className="mt-6 space-y-6 border-l border-border pl-6">
              {[
                { t: "B.Tech, Computer Science", s: "IIT Delhi · 2018 – 2022", d: "Graduated with honors, specializing in AI & distributed systems." },
                { t: "Higher Secondary, PCM", s: "Delhi Public School · 2016 – 2018", d: "Top 1% in national board examinations." },
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
      </div>
    </section>
  );
}

/* ---------- SKILLS ---------- */
function Skills() {
  const groups = [
    { icon: Code2, title: "Frontend", items: [["HTML", 95], ["CSS", 92], ["JavaScript", 94], ["React", 95], ["Next.js", 90], ["Tailwind CSS", 96]] as [string, number][] },
    { icon: Server, title: "Backend", items: [["Node.js", 90], ["Express", 88], ["Django", 78]] as [string, number][] },
    { icon: Database, title: "Database", items: [["MongoDB", 88], ["PostgreSQL", 85], ["MySQL", 80]] as [string, number][] },
    { icon: Wrench, title: "Tools", items: [["Git", 92], ["Docker", 82], ["Figma", 88], ["VS Code", 95], ["AWS", 78]] as [string, number][] },
  ];
  return (
    <section id="skills" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Skills" title="Core Technical Skills" sub="Tools & technologies I use every day to ship great products." />
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map(({ icon: Icon, title, items }, idx) => (
            <div key={title} className="soft-card group rounded-3xl p-6 transition hover:-translate-y-1">
              <div className="flex items-center gap-3">
                <span className={`grid h-11 w-11 place-items-center rounded-xl text-white ${idx % 2 ? "btn-sky" : "btn-lime"}`}>
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-gradient">{title}</h3>
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
    </section>
  );
}

/* ---------- PROJECTS ---------- */
function Projects() {
  const projects = [
    { title: "AI Design House", desc: "AI-powered platform for automated UI/UX generation.", stack: ["Next.js", "OpenAI", "Tailwind"] },
    { title: "Nova Analytics", desc: "Real-time analytics dashboard for SaaS teams.", stack: ["React", "Node.js", "PostgreSQL"] },
    { title: "Prism CMS", desc: "Headless CMS with a delightful editor experience.", stack: ["Next.js", "MongoDB", "TS"] },
    { title: "PulseChat", desc: "Realtime chat with AI copilots and voice channels.", stack: ["React", "WebRTC", "Express"] },
    { title: "Orbit Store", desc: "E-commerce platform with headless checkout.", stack: ["Next.js", "Stripe", "Prisma"] },
    { title: "Lumen Portfolio", desc: "Portfolio builder for creatives with themes.", stack: ["React", "Tailwind", "Framer"] },
  ];
  return (
    <section id="projects" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Projects" title="Selected Work" sub="A snapshot of recent projects I've designed and built." />
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
                    <div className="grid place-items-center p-6 text-lg font-bold text-gradient">{p.title}</div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full border border-border bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">{t}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <a href="#" className="btn-lime inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold">
                      <ExternalLink className="h-3.5 w-3.5" /> Live Demo
                    </a>
                    <a href="#" className="btn-sky inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold">
                      <Github className="h-3.5 w-3.5" /> Code
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- EXPERIENCE ---------- */
function Experience() {
  const items = [
    { c: "Vercel", r: "Senior Full Stack Engineer", d: "2023 — Present", desc: "Leading frontend platform work; shipped design system used across 12+ products.", icon: Briefcase },
    { c: "Stripe", r: "Full Stack Engineer", d: "2021 — 2023", desc: "Built payment dashboards and internal tools serving 200k+ merchants.", icon: Briefcase },
    { c: "Freelance", r: "UI/UX & Full Stack", d: "2019 — 2021", desc: "Delivered 30+ client projects across startups and agencies.", icon: Briefcase },
  ];
  return (
    <section id="experience" className="px-4 py-24">
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
                    <h3 className="text-lg font-bold text-foreground">{it.r}</h3>
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
    </section>
  );
}

/* ---------- CERTIFICATIONS ---------- */
function Certifications() {
  const certs = [
    { t: "AWS Certified Developer", i: "Amazon Web Services", d: "2024" },
    { t: "Meta Front-End Developer", i: "Meta / Coursera", d: "2023" },
    { t: "Google UX Design", i: "Google", d: "2022" },
  ];
  return (
    <section id="certifications" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
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
    </section>
  );
}

/* ---------- ACHIEVEMENTS ---------- */
function Achievements() {
  const items = [
    { t: "Hackathon Winner", d: "1st place, Global AI Hack 2024", icon: Trophy },
    { t: "Open Source", d: "500+ stars across 12 repositories", icon: Sparkles },
    { t: "Speaker", d: "3 international React conferences", icon: GraduationCap },
    { t: "Design Awards", d: "Featured on Awwwards & CSSDA", icon: Palette },
  ];
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Achievements" title="Highlights & Recognition" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((a, i) => (
            <div key={a.t} className="soft-card rounded-3xl p-6 transition hover:-translate-y-1">
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${i % 2 ? "btn-sky" : "btn-lime"}`}>
                <a.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{a.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { q: "Rohit delivered beyond expectations. Clean code, thoughtful design, incredible attention to detail.", n: "Aarav Mehta", r: "CTO, Nova Labs" },
    { q: "One of the best engineers I've worked with. Ships fast without ever compromising quality.", n: "Priya Sharma", r: "Product Lead, Pixel" },
    { q: "A rare mix of designer and developer. Our conversion rate doubled after the redesign.", n: "Kabir Singh", r: "Founder, Loop" },
  ];
  const [i, setI] = useState(0);
  return (
    <section className="px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeader eyebrow="Testimonials" title="Kind Words From Clients" />
        <div className="soft-card relative rounded-3xl p-8 sm:p-12">
          <Quote className="absolute right-8 top-8 h-12 w-12 text-lime/40" />
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">"{items[i].q}"</p>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="btn-lime grid h-11 w-11 place-items-center rounded-full font-bold">
                {items[i].n[0]}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{items[i].n}</div>
                <div className="text-xs text-muted-foreground">{items[i].r}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button aria-label="Prev" onClick={() => setI((i - 1 + items.length) % items.length)} className="soft-card grid h-9 w-9 place-items-center rounded-lg hover:text-sky">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button aria-label="Next" onClick={() => setI((i + 1) % items.length)} className="soft-card grid h-9 w-9 place-items-center rounded-lg hover:text-sky">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- BLOG ---------- */
function Blog() {
  const posts = [
    { t: "Designing systems that scale", d: "Lessons from shipping design systems at scale.", tag: "Design", date: "Jul 10" },
    { t: "The AI-native product loop", d: "How AI is reshaping the way we build products.", tag: "AI", date: "Jun 22" },
    { t: "React Server Components in practice", d: "Patterns I use in production Next.js apps.", tag: "Engineering", date: "May 04" },
  ];
  return (
    <section id="blog" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Blog" title="Latest Articles" />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.t} href="#" className="soft-card group flex flex-col rounded-3xl p-6 transition hover:-translate-y-1">
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-sky/20 to-lime/25" />
              <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="rounded-full bg-lime/20 px-2 py-0.5 font-semibold text-[#4c6d10]">{p.tag}</span>
                <span className="text-muted-foreground">{p.date}</span>
              </div>
              <h3 className="mt-3 font-bold text-foreground transition group-hover:text-gradient">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sky">
                Read more <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact() {
  return (
    <section id="contact" className="px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Contact" title="Let's Build Something" sub="Have a project in mind? Drop a message — I usually reply within a day." />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="soft-card rounded-3xl p-8 lg:col-span-2">
            <h3 className="text-lg font-bold text-gradient">Get in touch</h3>
            <div className="mt-6 space-y-4 text-sm">
              {[
                { Icon: Mail, l: "hello@rohit.dev", cls: "btn-lime" },
                { Icon: Phone, l: "+91 98765 43210", cls: "btn-sky" },
                { Icon: MapPin, l: "Bengaluru, India", cls: "btn-lime" },
              ].map(({ Icon, l, cls }) => (
                <div key={l} className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${cls}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{l}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-2">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="soft-card grid h-10 w-10 place-items-center rounded-xl transition hover:text-sky">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="soft-card grid gap-4 rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
            </div>
            <Field label="Subject" placeholder="Project inquiry" />
            <div>
              <label className="text-xs font-semibold text-muted-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-sky/60 focus:ring-2 focus:ring-sky/20"
              />
            </div>
            <button className="btn-lime group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.01]">
              Send Message <Send className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...p }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      <input
        {...p}
        className="mt-1.5 w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-sky/60 focus:ring-2 focus:ring-sky/20"
      />
    </div>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <a href="#home" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-[#0B1220]">R</span>
            <span className="text-gradient text-lg">Rohit</span>
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            Full Stack Developer, UI/UX Designer, and AI enthusiast crafting premium digital experiences.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-gradient">Quick Links</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.href}><a className="hover:text-sky" href={n.href}>{n.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm font-semibold text-gradient">Follow</div>
          <div className="mt-3 flex gap-2">
            {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
              <a key={i} href="#" className="soft-card grid h-10 w-10 place-items-center rounded-xl transition hover:text-sky">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Rohit. Crafted with care.
      </div>
    </footer>
  );
}
