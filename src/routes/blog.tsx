import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import { ArrowRight, ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
    d: "Lessons from shipping design systems at scale.",
    tag: "Design",
    date: "Jul 10",
  },
  {
    t: "The AI-native product loop",
    d: "How AI is reshaping the way we build products.",
    tag: "AI",
    date: "Jun 22",
  },
  {
    t: "React Server Components in practice",
    d: "Patterns I use in production Next.js apps.",
    tag: "Engineering",
    date: "May 04",
  },
];

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
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Blog" title="Latest Articles" />
        <div className="grid gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <a
              key={p.t}
              href="#"
              className="soft-card group flex flex-col rounded-3xl p-6 transition hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-sky/20 to-lime/25" />
              <div className="mt-4 flex items-center gap-2 text-xs">
                <span className="rounded-full bg-lime/20 px-2 py-0.5 font-semibold text-[#4c6d10]">
                  {p.tag}
                </span>
                <span className="text-muted-foreground">{p.date}</span>
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
      </div>

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
    </PageShell>
  );
}
