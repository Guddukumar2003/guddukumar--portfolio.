import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from "lucide-react";

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

function Home() {
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
  );
}
