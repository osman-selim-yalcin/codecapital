// src/pages/About.tsx
export default function About() {
  return (
    <section className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold">Hakkımda</h1>
        <p className="text-[#A9B1C3] max-w-3xl">
          Merhaba, ben <span className="text-[#6EE7F9]">Osman Selim Yalçın</span>. 
          Bilgisayar mühendisliği öğrencisiyim ve sistem programlama (C) ile 
          modern web geliştirme (React, Next.js) alanlarında çalışıyorum.
          Projelerimde performans, ölçeklenebilirlik ve temiz kod 
          prensiplerini önceliklendiririm.
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-medium mb-4">Teknolojiler & Beceriler</h2>
        <div className="flex flex-wrap gap-2">
          {[
            "C", "C++", "React", "Next.js", "Tailwind CSS",
            "Node.js", "Express", "PostgreSQL", "MongoDB",
            "Docker", "Git", "Linux"
          ].map(skill => (
            <span key={skill} className="text-xs px-3 py-1 rounded border border-[#1F2733] bg-[#12171F]">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-medium mb-4">Eğitim</h2>
        <ul className="list-disc pl-6 text-[#A9B1C3] space-y-1">
          <li>Bilgisayar Mühendisliği - Doğuş Üniversitesi</li>
          <li>Erasmus Programı - (Katılım planı)</li>
        </ul>
      </div>
    </section>
  );
}
