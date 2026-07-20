import { createFileRoute } from "@tanstack/react-router";
import { PageShell, SectionHeader } from "@/components/site/Shared";
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react";

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

function ContactPage() {
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
                { Icon: Mail, l: "hello@Guddu Kumar.dev", cls: "btn-lime" },
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
    </PageShell>
  );
}
