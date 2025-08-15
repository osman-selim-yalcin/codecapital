import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const tags = ["All", "C", "Web"] as const;

export default function Projects() {
  const [tag, setTag] = useState<(typeof tags)[number]>("All");
  const list = useMemo(
    () => (tag === "All" ? projects : projects.filter((p) => p.category === tag)),
    [tag]
  );

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`px-3 py-1.5 rounded border focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/40 ${
              tag === t
                ? "bg-[#60A5FA] text-black border-[#60A5FA]"
                : "border-[#1F1F22] text-[#EDEDED] hover:border-[#60A5FA]"
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
