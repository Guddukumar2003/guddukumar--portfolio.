import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import { ArrowRight, ChevronLeft, ChevronRight, Quote, Search, Mail, Clock, Tag } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Guddu Kumar" },
      {
        name: "description",
        content: "Articles on design systems, AI, and modern web engineering.",
      },
      { property: "og:title", content: "Blog — Guddu Kumar" },
      {
        property: "og:description",
        content: "Articles on design systems, AI, and modern web engineering.",
      },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

const posts = [
  {
    t: "Designing systems that scale",
    d: "Lessons from shipping design systems at scale across 12+ product surfaces.",
    tag: "Design",
    date: "Jul 10",
    read: "6 min",
  },
  {
    t: "The AI-native product loop",
    d: "How AI is reshaping the way we build products and what shipping fast really means now.",
    tag: "AI",
    date: "Jun 22",
    read: "8 min",
  },
  {
    t: "React Server Components in practice",
    d: "Patterns I use in production Next.js apps, plus the gotchas nobody talks about.",
    tag: "Engineering",
    date: "May 04",
    read: "10 min",
  },
  {
    t: "Type-safe forms without the pain",
    d: "A pragmatic setup with Zod, React Hook Form and shadcn — copy-paste friendly.",
    tag: "Engineering",
    date: "Apr 18",
    read: "5 min",
  },
  {
    t: "Motion that means something",
    d: "Micro-interactions that guide attention instead of showing off.",
    tag: "Design",
    date: "Mar 30",
    read: "4 min",
  },
  {
    t: "Building your first AI agent",
    d: "A weekend project template for shipping a real agentic tool.",
    tag: "AI",
    date: "Mar 12",
    read: "9 min",
  },
];

const tags = ["All", "Design", "AI", "Engineering"] as const;

const testimonials = [
  {
    q: "Guddu Kumar delivered beyond expectations. Clean code, thoughtful design, incredible attention to detail.",
    n: "Aarav Mehta",
    r: "CTO, Nova Labs",
  },
  {
    q: "One of the best engineers I've worked with. Ships fast without ever compromising quality.",
    n: "Priya Sharma",
    r: "Product Lead, Pixel",
  },
  {
    q: "A rare mix of designer and developer. Our conversion rate doubled after the redesign.",
    n: "Kabir Singh",
    r: "Founder, Loop",
  },
];

function BlogPage() {
  const [i, setI] = useState(0);
  const [tag, setTag] = useState<(typeof tags)[number]>("All");
  const [q, setQ] = useState("");

  const filtered = posts.filter(
    (p) =>
      (tag === "All" || p.tag === tag) &&
      (q === "" || p.t.toLowerCase().includes(q.toLowerCase())),
  );
  const [featured, ...rest] = filtered;

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Blog"
          title="Latest Articles"
          sub="Notes on design, AI, and shipping modern web products."
        />

        {/* Search + tags */}
        <div className="mb-10 flex flex-col items-center gap-4">
          <div className="soft-card flex w-full max-w-md items-center gap-2 rounded-full px-4 py-2">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search articles..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setTag(t)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  tag === t ? "btn-sky" : "soft-card text-muted-foreground hover:text-sky"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Featured */}
        {featured && (
          <a
            href="#"
            className="soft-card group mb-14 grid gap-0 overflow-hidden rounded-3xl transition hover:-translate-y-1 md:grid-cols-5"
          >
            <div className="relative aspect-[16/10] bg-gradient-to-br from-sky/25 via-white to-lime/30 md:col-span-2 md:aspect-auto" />
            <div className="flex flex-col p-8 md:col-span-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-sky">
                Featured · {featured.tag}
              </span>
              <h2 className="mt-2 text-2xl font-bold text-foreground transition group-hover:text-gradient sm:text-3xl">
                {featured.t}
              </h2>
              <p className="mt-3 text-muted-foreground">{featured.d}</p>
              <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> {featured.read}
                </span>
                <span>{featured.date}</span>
              </div>
              <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-sky">
                Read article <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </a>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          {rest.map((p) => (
            <a
              key={p.t}
              href="#"
              className="soft-card group flex flex-col rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-sky/20 to-lime/25" />
              <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-2 py-0.5 font-semibold text-[#4c6d10]">
                  <Tag className="h-3 w-3" /> {p.tag}
                </span>
                <span className="text-muted-foreground">{p.date}</span>
                <span className="ml-auto inline-flex items-center gap-1 text-muted-foreground">
                  <Clock className="h-3 w-3" /> {p.read}
                </span>
              </div>
              <h2 className="mt-3 font-bold text-foreground transition group-hover:text-gradient">
                {p.t}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-sky">
                Read more <ArrowRight className="h-3 w-3 transition group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="soft-card mt-8 rounded-3xl p-10 text-center text-sm text-muted-foreground">
            No articles match that search yet — try another keyword.
          </div>
        )}
      </div>

      {/* Testimonials */}
      <div className="mx-auto mt-24 max-w-4xl">
        <SectionHeader eyebrow="Testimonials" title="Kind Words From Clients" />
        <div className="soft-card relative rounded-3xl p-8 sm:p-12">
          <Quote className="absolute right-8 top-8 h-12 w-12 text-lime/40" />
          <p className="text-lg leading-relaxed text-foreground/90 sm:text-xl">
            "{testimonials[i].q}"
          </p>
          <div className="mt-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="btn-lime grid h-11 w-11 place-items-center rounded-full font-bold">
                {testimonials[i].n[0]}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">{testimonials[i].n}</div>
                <div className="text-xs text-muted-foreground">{testimonials[i].r}</div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                aria-label="Prev"
                onClick={() => setI((i - 1 + testimonials.length) % testimonials.length)}
                className="soft-card grid h-9 w-9 place-items-center rounded-lg hover:text-sky"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                aria-label="Next"
                onClick={() => setI((i + 1) % testimonials.length)}
                className="soft-card grid h-9 w-9 place-items-center rounded-lg hover:text-sky"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mx-auto mt-24 max-w-6xl">
        <SectionHeader eyebrow="Explore" title="Browse by topic" />
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            { t: "Design", d: "Systems, motion, and craft.", cls: "btn-lime" },
            { t: "AI", d: "LLMs, agents and product patterns.", cls: "btn-sky" },
            { t: "Engineering", d: "React, Next.js, TypeScript deep dives.", cls: "btn-lime" },
          ].map((c) => (
            <div key={c.t} className="soft-card rounded-3xl p-6 transition hover:-translate-y-1">
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${c.cls}`}>
                <Tag className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-gradient">{c.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="mx-auto mt-24 max-w-4xl">
        <div className="soft-card overflow-hidden rounded-3xl p-10 text-center sm:p-14">
          <span className="btn-sky mx-auto grid h-12 w-12 place-items-center rounded-xl">
            <Mail className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-2xl font-bold text-gradient sm:text-3xl">
            Get one article, once a week
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
            Short essays on design, AI and the web. No spam, unsubscribe anytime.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row"
          >
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-sky/60 focus:ring-2 focus:ring-sky/20"
            />
            <button className="btn-lime rounded-xl px-5 py-3 text-sm font-semibold">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </PageShell>
  );
}
