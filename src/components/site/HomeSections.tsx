import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  Rocket,
  Zap,
  Award,
  Github,
  Star,
  GitBranch,
  Activity,
  ArrowUpRight,
  Check,
  Globe,
  Layers,
  Cpu,
  Palette,
  ShieldCheck,
  Clock,
  TrendingUp,
  Quote,
} from "lucide-react";

/* ---------------- Bento Showcase ---------------- */
export function BentoShowcase() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-sky">
            <Sparkles className="h-3.5 w-3.5" /> Everything you need
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            One developer. <span className="text-gradient">Every layer.</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            From pixel-perfect UI to production-grade infra — a single seamless workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:grid-rows-2">
          {/* Big card */}
          <div className="soft-card group relative overflow-hidden rounded-3xl p-8 md:col-span-4 md:row-span-1">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-lime/20 blur-3xl transition group-hover:bg-lime/30" />
            <div className="absolute inset-0 bg-grid opacity-40" />
            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg">
                <Rocket className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold">Ship in weeks, not quarters</h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                Battle-tested boilerplates, component libraries and CI pipelines that let ideas hit
                production fast.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Next.js", "TypeScript", "Prisma", "tRPC", "Vercel"].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border bg-white px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="soft-card relative overflow-hidden rounded-3xl p-6 md:col-span-2">
            <Activity className="h-6 w-6 text-sky" />
            <h3 className="mt-4 text-lg font-bold">99.9% Uptime</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Monitored infra with automated failover.
            </p>
            <div className="mt-4 flex items-end gap-1">
              {[40, 65, 30, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                <div
                  key={i}
                  className="w-2 rounded-full bg-gradient-to-t from-sky to-lime"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>

          <div className="soft-card relative overflow-hidden rounded-3xl p-6 md:col-span-2">
            <ShieldCheck className="h-6 w-6 text-lime" />
            <h3 className="mt-4 text-lg font-bold">Secure by default</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Auth, RLS, rate limits & audits baked in.
            </p>
            <div className="mt-4 space-y-2">
              {["OWASP checks", "E2E encryption", "Role-based access"].map((s) => (
                <div key={s} className="flex items-center gap-2 text-xs text-foreground/80">
                  <Check className="h-3.5 w-3.5 text-lime" /> {s}
                </div>
              ))}
            </div>
          </div>

          <div className="soft-card group relative overflow-hidden rounded-3xl p-6 md:col-span-2">
            <Cpu className="h-6 w-6 text-sky" />
            <h3 className="mt-4 text-lg font-bold">AI-native</h3>
            <p className="mt-1 text-sm text-muted-foreground">RAG, agents & LLM pipelines.</p>
            <div className="mt-4 flex items-center gap-3 text-xs">
              <span className="rounded-md bg-muted px-2 py-1">OpenAI</span>
              <span className="rounded-md bg-muted px-2 py-1">Claude</span>
              <span className="rounded-md bg-muted px-2 py-1">Gemini</span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-6 text-white md:col-span-2">
            <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />
            <TrendingUp className="h-6 w-6" />
            <h3 className="mt-4 text-lg font-bold">+3.2x conversion</h3>
            <p className="mt-1 text-sm text-white/85">
              Average uplift after design + dev overhaul.
            </p>
            <Link
              to="/projects"
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold underline-offset-4 hover:underline"
            >
              See case studies <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Packages / Pricing ---------------- */
export function Packages() {
  const plans = [
    {
      name: "Landing",
      price: "$1.2k",
      note: "1–2 week turnaround",
      icon: Palette,
      features: [
        "Custom design system",
        "Up to 5 sections",
        "Responsive + SEO ready",
        "Analytics + forms",
      ],
      cta: "Start small",
      accent: "sky",
    },
    {
      name: "Full Website",
      price: "$3.5k",
      note: "Most popular",
      icon: Globe,
      features: [
        "Everything in Landing",
        "Up to 10 pages",
        "CMS integration",
        "Blog + newsletter",
        "1 month of support",
      ],
      cta: "Build together",
      accent: "lime",
      featured: true,
    },
    {
      name: "Product / SaaS",
      price: "Custom",
      note: "For teams",
      icon: Layers,
      features: [
        "Auth, billing & dashboards",
        "APIs & integrations",
        "Design system + docs",
        "Ongoing partnership",
      ],
      cta: "Talk to me",
      accent: "sky",
    },
  ];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-lime">
            <Zap className="h-3.5 w-3.5" /> Simple packages
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Work with me. <span className="text-gradient">Pick a lane.</span>
          </h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Transparent scope, fixed pricing, weekly deliverables — no surprises.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-3xl p-8 transition hover:-translate-y-1 ${
                p.featured
                  ? "bg-gradient-brand text-white shadow-2xl"
                  : "soft-card"
              }`}
            >
              {p.featured && (
                <div className="absolute right-4 top-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">
                  ★ Popular
                </div>
              )}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  p.featured ? "bg-white/20" : p.accent === "lime" ? "bg-lime/15 text-lime" : "bg-sky/15 text-sky"
                }`}
              >
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className={`mt-5 text-xl font-bold ${p.featured ? "text-white" : ""}`}>
                {p.name}
              </h3>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-4xl font-extrabold">{p.price}</span>
                <span className={`text-xs ${p.featured ? "text-white/80" : "text-muted-foreground"}`}>
                  {p.note}
                </span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${
                        p.featured ? "text-white" : "text-lime"
                      }`}
                    />
                    <span className={p.featured ? "text-white/90" : "text-foreground/80"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.02] ${
                  p.featured ? "bg-white text-sky" : "btn-lime"
                }`}
              >
                {p.cta} <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GitHub Activity ---------------- */
export function GithubActivity() {
  // Deterministic pseudo-random for a 7x18 heat grid
  const cells = Array.from({ length: 7 * 20 }, (_, i) => {
    const v = (Math.sin(i * 1.37) + 1) / 2;
    const level = v > 0.85 ? 4 : v > 0.65 ? 3 : v > 0.4 ? 2 : v > 0.18 ? 1 : 0;
    return level;
  });
  const shades = [
    "bg-muted",
    "bg-lime/25",
    "bg-lime/50",
    "bg-lime/75",
    "bg-lime",
  ];

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="soft-card grid gap-8 rounded-3xl p-8 md:grid-cols-[1.1fr_1fr] md:p-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-sky">
              <Github className="h-3.5 w-3.5" /> Open source
            </span>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              I code <span className="text-gradient">in public</span>.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Contributing to and maintaining libraries the community actually uses.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: Star, label: "Stars", value: "2.4k" },
                { icon: GitBranch, label: "Repos", value: "47" },
                { icon: Activity, label: "Streak", value: "128d" },
              ].map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-white p-4">
                  <s.icon className="h-4 w-4 text-sky" />
                  <div className="mt-2 text-2xl font-extrabold">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky hover:underline"
            >
              View GitHub profile <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-white p-5">
            <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
              <span>Contribution graph</span>
              <span>Last 20 weeks</span>
            </div>
            <div
              className="grid gap-1"
              style={{ gridTemplateColumns: "repeat(20, minmax(0, 1fr))" }}
            >
              {cells.map((lvl, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded-[3px] ${shades[lvl]}`}
                  title={`Level ${lvl}`}
                />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-muted-foreground">
              <span>Less</span>
              {shades.map((s, i) => (
                <span key={i} className={`h-2.5 w-2.5 rounded-[2px] ${s}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Awards ---------------- */
export function Awards() {
  const items = [
    { title: "Product of the Day", org: "Product Hunt", year: "2024", icon: Award },
    { title: "Site of the Month", org: "Awwwards", year: "2023", icon: Star },
    { title: "Top 100 Devs", org: "GitHub Trending", year: "2023", icon: TrendingUp },
    { title: "Design Excellence", org: "CSS Design Awards", year: "2022", icon: Sparkles },
  ];
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-semibold text-lime">
            <Award className="h-3.5 w-3.5" /> Recognition
          </span>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Awards & <span className="text-gradient">features</span>
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((a) => (
            <div
              key={a.title}
              className="soft-card group relative overflow-hidden rounded-2xl p-6 transition hover:-translate-y-1"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-lime/15 blur-2xl transition group-hover:bg-lime/25" />
              <a.icon className="h-6 w-6 text-sky" />
              <div className="mt-4 text-lg font-bold">{a.title}</div>
              <div className="mt-1 text-sm text-muted-foreground">{a.org}</div>
              <div className="mt-3 inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-xs font-semibold">
                <Clock className="h-3 w-3" /> {a.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Big Testimonial ---------------- */
export function BigTestimonial() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-white sm:p-16">
          <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-white/15 blur-3xl" />
          <Quote className="h-10 w-10 opacity-80" />
          <p className="mt-6 text-2xl font-semibold leading-relaxed sm:text-3xl">
            "Working with Guddu felt like adding a senior product engineer, designer and strategist
            to the team — all in one person. We shipped 3x faster and our conversion doubled."
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-white/20 text-lg font-bold">
              A
            </div>
            <div>
              <div className="font-semibold">Anika Sharma</div>
              <div className="text-sm text-white/80">Founder · Northlight Labs</div>
            </div>
            <div className="ml-auto flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white text-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
