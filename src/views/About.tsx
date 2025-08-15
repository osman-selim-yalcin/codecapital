import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

type Person = {
  name: string;
  bio: string;
  skills: string[];
  email: string;
  github: string;
  linkedin: string;
  avatarUrl?: string; // varsa kullanırız, yoksa initials
};

const people: Person[] = [
  {
    name: "Osman Selim Yalçın",
    bio: "C tabanlı sistem projeleri, raycasting, Full-stack geliştirme, Unix araçları ve React/Next.js tarafında çalışmalar.",
    skills: ["C", "React", "Next.js", "Tailwind", "Nestjs", "Native"],
    email: "osmanyalcin989@gmail.com",
    github: "https://github.com/osman-selim-yalcin",
    linkedin: "https://linkedin.com/in/osman-yalçın-488078247",
  },
  {
    name: "Burak Mat",
    bio: "Full-stack geliştirme, DevOps ve performans odaklı web uygulamaları; socket tabanlı gerçek zamanlı deneyimler.",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "Docker", "CI/CD"],
    email: "burak.ali.mat@gmail.com",
    github: "https://github.com/burakmat",
    linkedin: "https://linkedin.com/in/burak-mat/",
  },
];

export default function AboutContact() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Hakkımızda & İletişim</h1>
        <p className="text-[#A1A1AA] max-w-3xl">
          CodeCapital, Osman Selim Yalçın ve Burak Mat tarafından geliştirilen
          açık kaynak ve ürün odaklı projelerin vitrini. Sistem programlama (C)
          ve modern web teknolojileri odağında üretim yapıyoruz.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {people.map((p, idx) => (
          <article
            key={p.name}
            className="group relative rounded-xl p-[1px] bg-gradient-to-br from-[#1F1F22] to-transparent hover:from-[#2a2a2f] transition"
          >
            {/* iç kart */}
            <div className="rounded-xl border border-[#1F1F22] bg-[#111113] p-6 h-full flex flex-col">
              {/* dekoratif arka plan  */}
              <div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-5 group-hover:opacity-10 transition"
                style={{
                  background:
                    idx % 2 === 0
                      ? "radial-gradient(600px 200px at 0% 0%, #60A5FA 10%, transparent 60%)"
                      : "radial-gradient(600px 200px at 100% 0%, #60A5FA 10%, transparent 60%)",
                }}
              />

              {/* üst: avatar + isim + kısa bio */}
              <div className="flex items-start gap-4 relative">
                <div className="min-w-0">
                  <h2 className="text-xl font-medium">{p.name}</h2>
                  <p className="text-[#A1A1AA] mt-1">{p.bio}</p>
                </div>
              </div>

              {/* ince ayraç */}
              <div className="my-5 h-px bg-gradient-to-r from-transparent via-[#1F1F22] to-transparent" />

              {/* skills */}
              <ul className="flex flex-wrap gap-2">
                {p.skills.map((s) => (
                  <li
                    key={s}
                    className="text-xs px-3 py-1 rounded border border-[#1F1F22] bg-[#0A0A0B]"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              {/* alt: ikonlu linkler */}
              <div className="mt-6 flex gap-3">
                <a
                  href={`mailto:${p.email}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1F22] text-[#60A5FA] hover:text-[#93C5FD] hover:border-[#2a2a2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]/40 transition"
                  aria-label={`${p.name} - Email`}
                  title="E-posta"
                >
                  <FaEnvelope size={16} />
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1F22] text-[#60A5FA] hover:text-[#93C5FD] hover:border-[#2a2a2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]/40 transition"
                  aria-label={`${p.name} - GitHub`}
                  title="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#1F1F22] text-[#60A5FA] hover:text-[#93C5FD] hover:border-[#2a2a2f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA]/40 transition"
                  aria-label={`${p.name} - LinkedIn`}
                  title="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
