import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { NAV } from "./Nav";

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 px-4 py-12">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div>
          <Link to="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-[#0B1220]">R</span>
            <span className="text-gradient text-lg">Rohit</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Full Stack Developer, UI/UX Designer, and AI enthusiast crafting premium digital experiences.
          </p>
        </div>
        <div>
          <div className="text-sm font-semibold text-gradient">Quick Links</div>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link className="hover:text-sky" to={n.to}>{n.label}</Link>
              </li>
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
