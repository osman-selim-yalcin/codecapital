import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find((x) => x.slug === slug);
  if (!p) return <div className="text-[#A1A1AA]">Proje bulunamadı.</div>;

  return (
    <article className="space-y-6">
      <img
        src={p.image}
        alt={p.title}
        className="aspect-video object-cover rounded border border-[#1F1F22]"
      />
      <h1 className="text-3xl font-semibold">{p.title}</h1>
      <p className="text-[#A1A1AA]">{p.summary}</p>

      <div>
        <h2 className="text-xl mb-2">Öne çıkanlar</h2>
        <ul className="list-disc pl-6 space-y-1 text-[#A1A1AA]">
          {p.highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="text-xs px-2 py-1 rounded border border-[#1F1F22] bg-[#0A0A0B]"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {p.repo && (
          <a
            href={p.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded bg-[#60A5FA] text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/40"
          >
            Repo
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded border border-[#1F1F22] hover:border-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/40"
          >
            Live
          </a>
        )}
        <Link
          to="/projects"
          className="px-3 py-1.5 rounded border border-[#1F1F22] hover:border-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/40"
        >
          Geri
        </Link>
      </div>
    </article>
  );
}
