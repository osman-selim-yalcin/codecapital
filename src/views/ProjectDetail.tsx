// src/pages/ProjectDetail.tsx
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const p = projects.find(x => x.slug === slug);
  if (!p) return <div>Proje bulunamadı.</div>;

  return (
    <article className="space-y-6">
      <img src={p.image} alt={p.title} className="aspect-video object-cover rounded border border-[#1F2733]" />
      <h1 className="text-3xl font-semibold">{p.title}</h1>
      <p className="text-[#A9B1C3]">{p.summary}</p>

      <div>
        <h2 className="text-xl mb-2">Öne çıkanlar</h2>
        <ul className="list-disc pl-6 space-y-1 text-[#A9B1C3]">
          {p.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {p.stack.map(s => (
          <span key={s} className="text-xs px-2 py-1 rounded border border-[#1F2733] bg-[#0B0F14]">{s}</span>
        ))}
      </div>

      <div className="flex gap-3">
        {p.repo && <a href={p.repo} target="_blank" className="px-3 py-1.5 rounded bg-[#CBB8A2] text-[#0B0F14]">Repo</a>}
        {p.demo && <a href={p.demo} target="_blank" className="px-3 py-1.5 rounded border border-[#1F2733] hover:border-[#6EE7F9]">Demo</a>}
        <Link to="/projects" className="px-3 py-1.5 rounded border border-[#1F2733]">Geri</Link>
      </div>
    </article>
  );
}
