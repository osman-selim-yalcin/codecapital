// src/pages/Home.tsx
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);
  return (
    <section className="space-y-10">
      <div className="text-center space-y-5">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Full‑Stack Developer & C Systems Enthusiast
        </h1>
        <p className="text-[#A9B1C3] max-w-2xl mx-auto">
          Performans odaklı C projeleri ve modern web uygulamalarıyla
          ilgileniyorum.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            to="/projects"
            className="px-4 py-2 rounded-md bg-[#CBB8A2] text-[#0B0F14] hover:opacity-90"
          >
            Projelerime göz at
          </Link>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-md border border-[#1F2733] hover:border-[#6EE7F9]"
          >
            İletişim
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featured.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group rounded-lg border border-[#1F2733] bg-[#12171F] p-4 hover:border-[#6EE7F9]"
          >
            <img
              src={p.image}
              alt={p.title}
              className="aspect-video object-cover rounded mb-3"
            />
            <div className="text-sm text-[#A9B1C3]">{p.category}</div>
            <h3 className="text-lg font-medium group-hover:text-[#6EE7F9]">
              {p.title}
            </h3>
            <p className="text-sm text-[#A9B1C3]">{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
