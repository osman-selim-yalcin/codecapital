import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <section className="space-y-10">
      <div className="text-center space-y-5">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Osman Selim Yalçın & Burak Mat
        </h1>
        <p className="text-[#A1A1AA] max-w-2xl mx-auto">
          İki geliştirici, C tabanlı sistem projeleri ve modern web
          uygulamaları.
        </p>
        <div className="flex justify-center gap-3">
          <Link
            to="/projects"
            className="px-4 py-2 rounded-md bg-[#60A5FA] text-black hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/50"
          >
            Projeler
          </Link>
          <Link
            to="/about"
            className="px-4 py-2 rounded-md border border-[#1F1F22] hover:border-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/50"
          >
            Hakkımızda
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {featured.map((p) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="group rounded-lg border border-[#1F1F22] bg-[#111113] p-4 hover:border-[#60A5FA] transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/30"
          >
            <img
              src={p.image}
              alt={p.title}
              className="aspect-video object-cover rounded mb-3 border border-[#1F1F22]"
            />
            <div className="text-sm text-[#A1A1AA]">{p.category}</div>
            <h3 className="text-lg font-medium group-hover:text-[#60A5FA]">
              {p.title}
            </h3>
            <p className="text-sm text-[#A1A1AA]">{p.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
