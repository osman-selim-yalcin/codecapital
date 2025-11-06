import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Projects() {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    let ls = [...projects];

    // Search (title / summary / stack)
    if (q.trim()) {
      const s = q.trim().toLowerCase();
      ls = ls.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          p.summary.toLowerCase().includes(s) ||
          p.stack.join(" ").toLowerCase().includes(s)
      );
    }

    // Default sort: title A→Z
    // ls.sort((a, b) => a.title.localeCompare(b.title));

    return ls;
  }, [q]);

  return (
    <section className="space-y-6">
      {/* Toolbar: only search */}
      <div className="flex w-full justify-end">
        <div className="relative w-full sm:w-auto sm:min-w-[320px]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search title, stack, summary…"
            className="w-full rounded-lg border border-[#1F1F22] bg-[#0D0D0F] px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-sky-400/30"
          />
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500">
            ⌘K
          </div>
        </div>
      </div>

      {/* Grid */}
      {list.length === 0 ? (
        <EmptyState query={q} onClear={() => setQ("")} />
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <Link
              key={p.slug}
              to={`/projects/${p.slug}`}
              className="group relative overflow-hidden rounded-xl border border-[#1F1F22] bg-gradient-to-b from-[#111113] to-[#0B0B0D] p-4 transition-transform duration-200 hover:-translate-y-0.5 hover:border-sky-500/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/30"
            >
              {/* Image */}
              <div className="relative mb-3 overflow-hidden rounded-lg border border-[#1F1F22]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-black/40 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Title & Summary */}
              <h3 className="mb-1.5 text-lg font-semibold tracking-tight text-zinc-100 group-hover:text-sky-400">
                {p.title}
              </h3>
              <p className="mb-3 line-clamp-2 text-sm text-zinc-400">
                {p.summary}
              </p>

              {/* Stack chips */}
              <ul className="mb-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <li
                    key={s}
                    className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300"
                  >
                    {s}
                  </li>
                ))}
                {p.stack.length > 4 && (
                  <li className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                    +{p.stack.length - 4}
                  </li>
                )}
              </ul>

              {/* Hover CTA */}
              <div className="flex items-center justify-between">
                <div className="translate-y-1 text-sm font-medium text-sky-400 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  View project →
                </div>
              </div>

              {/* subtle glow */}
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(600px circle at 0% 0%, rgba(56,189,248,0.12), transparent 40%)",
                }}
              />
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}

/* ---- Empty State ---- */
function EmptyState({
  query,
  onClear,
}: {
  query: string;
  onClear: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-[#1F1F22] bg-[#0D0D0F] px-6 py-16 text-center">
      <div className="mb-2 text-2xl">🤔</div>
      <h4 className="mb-1 text-lg font-semibold text-zinc-100">
        Sonuç bulunamadı
      </h4>
      <p className="mb-4 max-w-md text-sm text-zinc-400">
        “{query}” için eşleşme yok. Farklı bir anahtar kelime deneyebilirsin.
      </p>
      <button
        onClick={onClear}
        className="rounded-lg border border-[#1F1F22] bg-[#111113] px-3 py-2 text-sm text-zinc-200 transition hover:border-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/30"
      >
        Aramayı temizle
      </button>
    </div>
  );
}
