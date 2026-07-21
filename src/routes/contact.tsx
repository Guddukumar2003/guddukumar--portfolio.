import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Guddu Kumar" },
      {
        name: "description",
        content:
          "Get in touch with Guddu Kumar for freelance projects, collaborations, or a quick hello.",
      },
      { property: "og:title", content: "Contact — Guddu Kumar" },
      {
        property: "og:description",
        content:
          "Get in touch with Guddu Kumar for freelance projects, collaborations, or a quick hello.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

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

const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Mostly 0-to-1 web products, design systems, and AI-powered tools. I especially love working with early-stage founders.",
  },
  {
    q: "What's your typical timeline?",
    a: "Small projects ship in 1–2 weeks. Larger builds usually take 4–8 weeks. I always share a clear plan up front.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — most of my clients are in the US, EU or UK. I overlap with most time zones for a few hours daily.",
  },
  {
    q: "How do you price your work?",
    a: "Fixed-scope quotes for defined projects, or weekly retainers for ongoing work. Always transparent, no surprises.",
  },
];

const budgets = ["<$1k", "$1k–$5k", "$5k–$15k", "$15k+"];
const services = ["Web app", "Landing page", "Design system", "AI feature", "Consulting"];

function ContactPage() {
  const [open, setOpen] = useState<number | null>(0);
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title="Let's Build Something"
          sub="Have a project in mind? Drop a message — I usually reply within a day."
        />
        <div className="grid gap-6 lg:grid-cols-5">
          <div className="soft-card rounded-3xl p-8 lg:col-span-2">
            <h2 className="text-lg font-bold text-gradient">Get in touch</h2>
            <div className="mt-6 space-y-4 text-sm">
              {[
                { Icon: Mail, l: "hello@guddukumar.dev", cls: "btn-lime" },
                { Icon: Phone, l: "+91 98765 43210", cls: "btn-sky" },
                { Icon: MapPin, l: "Bengaluru, India", cls: "btn-lime" },
                { Icon: Clock, l: "Mon–Fri · 10:00 – 19:00 IST", cls: "btn-sky" },
              ].map(({ Icon, l, cls }) => (
                <div key={l} className="flex items-center gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-xl ${cls}`}>
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-foreground/90">{l}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-border bg-muted/60 p-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-lime">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                Available for new projects
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Booking August & September. Reply within 24 hours on weekdays.
              </p>
            </div>

            <div className="mt-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Elsewhere
              </div>
              <div className="mt-3 flex gap-2">
                {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="soft-card grid h-10 w-10 place-items-center rounded-xl transition hover:text-sky"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="soft-card grid gap-4 rounded-3xl p-8 lg:col-span-3"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Name" placeholder="Your name" required />
              <Field label="Email" type="email" placeholder="you@email.com" required />
            </div>
            <Field label="Subject" placeholder="Project inquiry" />

            <div>
              <label className="text-xs font-semibold text-muted-foreground">Service</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {services.map((s) => (
                  <label
                    key={s}
                    className="soft-card cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition has-[:checked]:btn-sky"
                  >
                    <input type="radio" name="service" className="sr-only" />
                    {s}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground">Budget</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {budgets.map((b) => (
                  <label
                    key={b}
                    className="soft-card cursor-pointer rounded-full px-3 py-1.5 text-xs font-semibold text-muted-foreground transition has-[:checked]:btn-lime"
                  >
                    <input type="radio" name="budget" className="sr-only" />
                    {b}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-muted-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="Tell me about your project..."
                className="mt-1.5 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-sky/60 focus:ring-2 focus:ring-sky/20"
              />
            </div>
            <button className="btn-lime group inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:scale-[1.01]">
              {sent ? (
                <>
                  <CheckCircle2 className="h-4 w-4" /> Message sent
                </>
              ) : (
                <>
                  Send Message <Send className="h-4 w-4 transition group-hover:translate-x-1" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Options */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              Icon: MessageSquare,
              t: "Quick chat",
              d: "For questions, ideas, or just to say hi.",
              a: "Send an email",
              cls: "btn-lime",
            },
            {
              Icon: Calendar,
              t: "Book a call",
              d: "30-minute intro call to scope your project.",
              a: "Schedule now",
              cls: "btn-sky",
            },
            {
              Icon: Send,
              t: "Start a project",
              d: "Fixed-scope quote within 48 hours.",
              a: "Fill the form",
              cls: "btn-lime",
            },
          ].map((o) => (
            <div key={o.t} className="soft-card rounded-3xl p-6 transition hover:-translate-y-1">
              <span className={`grid h-11 w-11 place-items-center rounded-xl ${o.cls}`}>
                <o.Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-bold text-foreground">{o.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{o.d}</p>
              <a
                href="#"
                className="mt-4 inline-flex text-xs font-semibold text-sky hover:underline"
              >
                {o.a} →
              </a>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <SectionHeader eyebrow="FAQ" title="Frequently asked" />
          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((f, i) => (
              <div key={f.q} className="soft-card overflow-hidden rounded-2xl">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-sm font-semibold text-foreground">{f.q}</span>
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-full text-lg font-bold transition ${
                      open === i ? "btn-sky rotate-45" : "btn-lime"
                    }`}
                  >
                    +
                  </span>
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  );
}
