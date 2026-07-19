import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full bg-lime/25 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-40 h-[560px] w-[560px] rounded-full bg-sky/25 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      <div className="absolute bottom-0 left-1/3 h-[480px] w-[480px] rounded-full bg-lime/15 blur-3xl animate-blob" style={{ animationDelay: "6s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(11,18,32,0.06)_1px,transparent_0)] [background-size:32px_32px]" />
    </div>
  );
}

export function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (!show) return null;
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="btn-sky fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full transition hover:scale-110"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}

export function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky">{eyebrow}</p>
      <h1 className="mt-3 text-3xl font-extrabold text-foreground sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h1>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function PageShell({ children }: { children: React.ReactNode }) {
  return <section className="px-4 pt-32 pb-24">{children}</section>;
}
