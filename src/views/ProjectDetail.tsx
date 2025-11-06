import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const p = useMemo(() => projects.find((x) => x.slug === slug), [slug]);
  const [copied, setCopied] = useState(false);

  if (!p)
    return (
      <div className="space-y-4 rounded-xl border border-[#1F1F22] bg-[#0D0D0F] p-6 text-center">
        <h2 className="text-xl font-semibold text-zinc-100">
          Proje bulunamadı
        </h2>
        <p className="text-zinc-400">
          Aradığın proje mevcut değil ya da link değişmiş olabilir.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:border-sky-400/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
        >
          Projelere dön
        </Link>
      </div>
    );

  const onCopy = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <article className="space-y-8">
      {/* --- Breadcrumb / Header Bar --- */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <nav className="text-sm text-zinc-400">
          <Link to="/" className="hover:text-zinc-200">
            Home
          </Link>
          <span className="mx-2 text-zinc-600">/</span>
          <Link to="/projects" className="hover:text-zinc-200">
            Projects
          </Link>
          <span className="mx-2 text-zinc-600">/</span>
          <span className="text-zinc-200">{p.title}</span>
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate(-1)}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-sky-400/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
          >
            Geri
          </button>
          <button
            onClick={onCopy}
            className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 transition hover:border-sky-400/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
            aria-live="polite"
          >
            {copied ? "Kopyalandı!" : "Linki kopyala"}
          </button>
        </div>
      </div>

      {/* --- HERO IMAGE --- */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10">
        <img
          src={p.image}
          alt={p.title}
          className="aspect-video w-full object-cover"
          loading="lazy"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-sky-500/10"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 md:p-6">
          <span className="mb-2 inline-flex items-center rounded-full border border-white/10 bg-black/40 px-2 py-0.5 text-xs text-zinc-200 backdrop-blur">
            {p.category}
          </span>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-4xl">
            {p.title}
          </h1>
        </div>
      </div>

      {/* --- BODY: 2 Columns --- */}
      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* LEFT: summary + highlights + stack */}
        <div className="space-y-8">
          {/* Summary */}
          <section className="rounded-xl border border-white/10 bg-[#0D0D0F] p-5">
            <h2 className="mb-2 text-xl font-semibold text-zinc-100">Özet</h2>
            <p className="text-sm leading-6 text-zinc-400">{p.summary}</p>
          </section>

          {/* Highlights */}
          <section className="rounded-xl border border-white/10 bg-[#0D0D0F] p-5">
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">
              Öne çıkanlar
            </h2>
            <ul className="space-y-2">
              {p.highlights.map((h, i) => (
                <li key={i} className="flex gap-2 text-sm text-zinc-300">
                  <span className="mt-1 select-none">✅</span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Stack */}
          <section className="rounded-xl border border-white/10 bg-[#0D0D0F] p-5">
            <h2 className="mb-3 text-xl font-semibold text-zinc-100">
              Teknolojiler
            </h2>
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li
                  key={s}
                  className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300"
                >
                  {s}
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* RIGHT: sticky actions / meta */}
        <aside className="space-y-6">
          <div className="sticky top-4 space-y-6">
            {/* Actions card */}
            <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#101014] to-[#0B0B0D] p-5">
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                Proje bağlantıları
              </h3>
              <div className="flex flex-wrap gap-3">
                {p.repo && (
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg bg-sky-400 px-3 py-2 text-sm font-medium text-black transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/50"
                  >
                    Repo
                  </a>
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-sky-400/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
                  >
                    Live
                  </a>
                )}
                <Link
                  to="/projects"
                  className="inline-flex items-center rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-zinc-200 transition hover:border-sky-400/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40"
                >
                  Projelere dön
                </Link>
              </div>
            </div>

            {/* Meta card */}
            <div className="rounded-xl border border-white/10 bg-[#0D0D0F] p-5">
              <h3 className="mb-3 text-lg font-semibold text-zinc-100">
                Proje bilgisi
              </h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li className="flex items-center justify-between gap-3">
                  <span>Slug</span>
                  <code className="rounded border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-zinc-300">
                    {p.slug}
                  </code>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>Kategori</span>
                  <span className="text-zinc-200">{p.category}</span>
                </li>
                <li className="flex items-center justify-between gap-3">
                  <span>Stack</span>
                  <span className="truncate text-zinc-200">
                    {p.stack.slice(0, 3).join(", ")}
                    {p.stack.length > 3 ? ` +${p.stack.length - 3}` : ""}
                  </span>
                </li>
              </ul>

              {/* subtle divider + glow */}
              <div className="mx-auto my-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <div
                aria-hidden
                className="pointer-events-none -mx-5 -mb-5 mt-2 h-16 rounded-b-xl opacity-70"
                style={{
                  background:
                    "radial-gradient(300px circle at 100% 0%, rgba(56,189,248,0.10), transparent 40%)",
                }}
              />
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
