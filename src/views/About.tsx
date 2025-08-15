export default function About() {
  return (
    <section className="space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold">Hakkımızda</h1>
        <p className="text-[#A1A1AA] max-w-3xl">
          codeCapital, Osman Selim Yalçın ve Burak Mat tarafından geliştirilen
          açık kaynak ve ürün odaklı projelerin vitrini. Sistem programlama (C)
          ve modern web teknolojileri odağında üretim yapıyoruz.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <article className="rounded border border-[#1F1F22] bg-[#111113] p-5">
          <h2 className="text-xl font-medium">Osman Selim Yalçın</h2>
          <p className="text-[#A1A1AA] mt-2">
            C tabanlı sistem projeleri, raycasting, Unix araçları ve
            React/Next.js tarafında çalışmalar.
          </p>
          <ul className="flex flex-wrap gap-2 mt-4">
            {["C", "React", "Next.js", "Tailwind", "Docker", "Linux"].map(
              (s) => (
                <li
                  key={s}
                  className="text-xs px-3 py-1 rounded border border-[#1F1F22] bg-[#0A0A0B]"
                >
                  {s}
                </li>
              )
            )}
          </ul>
        </article>

        <article className="rounded border border-[#1F1F22] bg-[#111113] p-5">
          <h2 className="text-xl font-medium">Burak Mat</h2>
          <p className="text-[#A1A1AA] mt-2">
            Full-stack geliştirme, DevOps ve performans odaklı web uygulamaları;
            socket tabanlı gerçek zamanlı deneyimler.
          </p>
          <ul className="flex flex-wrap gap-2 mt-4">
            {[
              "Node.js",
              "Express",
              "PostgreSQL",
              "MongoDB",
              "Docker",
              "CI/CD",
            ].map((s) => (
              <li
                key={s}
                className="text-xs px-3 py-1 rounded border border-[#1F1F22] bg-[#0A0A0B]"
              >
                {s}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
