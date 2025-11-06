import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <section className="space-y-12">
      {/* --- HERO --- */}
      <div className="relative overflow-hidden rounded-2xl border border-[#1F1F22] bg-[#0B0B0D]">
        {/* decorative bg */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 60% at 20% 20%, rgba(56,189,248,0.20), transparent 50%), radial-gradient(50% 50% at 80% 0%, rgba(99,102,241,0.14), transparent 45%), radial-gradient(40% 40% at 90% 90%, rgba(16,185,129,0.12), transparent 40%)",
          }}
        />
        <div className="relative px-6 py-14 text-center md:px-12 md:py-20">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Osman Selim Yalçın
            <br />
            <span className="text-zinc-500 text-2xl md:text-4xl">×</span>
            <br />
            <span className="opacity-80">Burak Mat</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-zinc-400 md:text-base">
            İki geliştirici;{" "}
            <span className="text-zinc-300">C tabanlı sistem projeleri</span> ve
            <span className="text-zinc-300"> modern web uygulamaları</span>{" "}
            üzerine üretim yapıyoruz.
          </p>

          <div className="mt-6 flex justify-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center rounded-lg bg-sky-400 px-4 py-2 text-sm font-medium text-black transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
            >
              Projeler
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-sky-400/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
            >
              Hakkımızda
            </Link>
          </div>

          {/* subtle divider */}
          <div className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <p className="mx-auto mt-3 text-xs text-zinc-500">
            Öne çıkan projelerden bir seçki
          </p>
        </div>
      </div>

      {/* --- FEATURED GRID --- */}
      <div className="grid gap-6 md:grid-cols-3">
        {featured.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#0D0D0F] p-4 transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/30"
          >
            {/* gradient border glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 rounded-xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "radial-gradient(500px circle at 0% 0%, rgba(56,189,248,0.12), transparent 40%)",
              }}
            />

            {/* image */}
            <div className="relative mb-3 overflow-hidden rounded-lg border border-white/10">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="aspect-video w-full object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              {/* category badge */}
              <div className="absolute left-2 top-2 rounded-full border border-white/10 bg-black/50 px-2 py-0.5 text-xs text-zinc-200 backdrop-blur">
                {p.category}
              </div>
            </div>

            {/* title + summary */}
            <h3 className="mb-1.5 line-clamp-1 text-lg font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-sky-400">
              {p.title}
            </h3>
            <p className="mb-3 line-clamp-2 text-sm text-zinc-400">
              {p.summary}
            </p>

            {/* stack chips (ilk 3) */}
            <ul className="mb-4 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 3).map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300"
                >
                  {s}
                </li>
              ))}
              {p.stack.length > 3 && (
                <li className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                  +{p.stack.length - 3}
                </li>
              )}
            </ul>

            {/* footer cta */}
            <div className="flex items-center justify-between">
              <span className="translate-y-1 text-sm font-medium text-sky-400 opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                Detayları gör →
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* --- secondary cta --- */}
      <div className="flex items-center justify-center gap-3">
        <Link
          to="/projects"
          className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 transition hover:border-sky-400/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
        >
          Tüm projeleri görüntüle
        </Link>
      </div>
    </section>
  );
}
