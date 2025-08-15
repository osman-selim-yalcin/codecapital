// src/pages/Projects.tsx
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const tags = ["All", "C", "Web"] as const;

export default function Projects() {
  const [tag, setTag] = useState<(typeof tags)[number]>("All");
  const list = useMemo(
    () =>
      tag === "All" ? projects : projects.filter((p) => p.category === tag),
    [tag]
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`px-3 py-1.5 rounded border ${
              tag === t
                ? "bg-[#CBB8A2] text-[#0B0F14] border-[#CBB8A2]"
                : "border-[#1F2733] text-[#E6E9EF] hover:border-[#6EE7F9]"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
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
