import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/experience", label: "Experience" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between rounded-2xl px-4 py-3">
          <Link to="/" className="flex items-center gap-2 font-bold">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-brand text-white">
              #
            </span>
            <span className="text-gradient text-lg">Guddu Kumar</span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-foreground bg-muted" }}
                className="rounded-lg px-3 py-1.5 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/contact"
            className="btn-lime hidden rounded-xl px-8 py-2 text-sm font-semibold transition hover:opacity-90 md:inline-flex"
          >
            Hire Me
          </Link>
          <button
            className="grid h-9 w-9 place-items-center rounded-lg text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {open && (
          <div className="glass mt-2 flex flex-col rounded-2xl p-2 md:hidden">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-foreground bg-muted" }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
