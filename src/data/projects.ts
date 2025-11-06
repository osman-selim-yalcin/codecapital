// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  category: "C" | "Web";
  summary: string;
  highlights: string[]; // 3–5 madde
  stack: string[]; // ["C", "Raycasting", "SDL2"...]
  image: string; // /public içinden
  repo?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "minishell",
    title: "minishell",
    category: "C",
    summary: "POSIX uyumlu mini shell, pipe/redirect ve built-in komutlar.",
    highlights: [
      "Pipeline & redirection desteği",
      "Job control ve sinyal yönetimi",
      "Bash benzeri parsing ve heredoc",
    ],
    stack: ["C", "Unix", "Parser", "Signals"],
    image: "/img/minishell.png",
    repo: "https://github.com/burakmat/minishell",
  },
  {
    slug: "cub3d",
    title: "cub3d",
    category: "C",
    summary: "Raycasting tabanlı 3D benzeri motor ve minimap.",
    highlights: [
      "DDA raycasting",
      "Performans optimizasyonu",
      "Minimap & collision",
    ],
    stack: ["C", "Raycasting", "Math"],
    image: "/img/cub3d.png",
    repo: "https://github.com/osman-selim-yalcin/cub3d",
  },
  {
    slug: "transcendence",
    title: "Transcendence",
    category: "Web",
    summary: "Real-time özellikli web app (auth, chat, oyun).",
    highlights: ["WebSocket/Socket.IO", "JWT auth", "Docker-compose"],
    stack: ["React", "Node", "Postgres", "Docker", "Nestjs", "Tailwind"],
    image: "/img/transcendence.png",
    repo: "https://github.com/osman-selim-yalcin/transcendence",
    demo: "https://www.kayiperde.com/",
  },
  {
    slug: "bartech",
    title: "Bartech",
    category: "Web",
    summary: "Kurumsal web sitesi, sade UI/UX.",
    highlights: [
      "React.js & Tailwind",
      "Bileşen kütüphanesi",
      "State yönetimi",
    ],
    stack: ["React", "Tailwind"],
    image: "/img/bartech.png",
    repo: "https://github.com/osman-selim-yalcin/bartech",
    demo: "https://www.westbar.com.tr/",
  },
  {
    slug: "kayi-perde",
    title: "Kayı Perde",
    category: "Web",
    summary: "Next.js vitrin, sade UI/UX.",
    highlights: ["Next.js & Tailwind", "Bileşen kütüphanesi", "State yönetimi"],
    stack: ["Next.js", "Tailwind", "MUI"],
    image: "/img/kayi.png",
    repo: "https://github.com/osman-selim-yalcin/kayiperde",
    demo: "https://www.kayiperde.com/",
  },
  {
    slug: "perdeno",
    title: "Perdeno — Curtain ERP",
    category: "Web",
    summary:
      "Gerçek bir işletme için geliştirilen ERP sistemi (sipariş, müşteri, faturalandırma, dashboard).",
    highlights: [
      "Dinamik widget tabanlı yönetici dashboard",
      "Sipariş, müşteri, ürün, ödeme modülleri",
      "AG-Grid + MobX ile yüksek performanslı UI",
    ],
    stack: ["Next.js", "React", "TypeScript", "MobX", "Supabase", "MUI"],
    image: "/img/perdeno.png", // <---- görseli buraya koy
    // repo: "https://github.com/osman-selim-yalcin/perdeno", // yoksa sil
    demo: "https://perdeno.com/", // yoksa sil
  },
  {
    slug: "amusicly",
    title: "Amusicly — AI Music & Video",
    category: "Web",
    summary:
      "Prompt → Suno AI ile müzik → Leonardo AI ile otomatik video oluşturma.",
    highlights: [
      "Django REST API + MongoDB pipeline",
      "AI müzik üretimi (Suno AI)",
      "AI video üretimi (Leonardo AI)",
      "React + MobX frontend",
    ],
    stack: ["Django", "MongoDB", "React", "MobX", "REST API", "AI APIs"],
    image: "/img/amusicly.png", // <---- görsel ekle
    // repo: "https://github.com/osman-selim-yalcin/amusicly", // repo varsa
    // demo: "", // demo varsa ekle
  },
  {
    slug: "topculab",
    title: "TopcuLab — Research Group Website",
    category: "Web",
    summary:
      "Doç. Dr. Aysun Güran Topcu’nun akademik araştırma grubu için modern landing page.",
    highlights: [
      "Minimal UI/UX + modern bileşen mimarisi",
      "Responsive tasarım (mobil/tablet/desktop)",
      "SEO & Lighthouse optimizasyonu",
    ],
    stack: ["Next.js", "React", "Tailwind", "MUI"],
    image: "/img/topculab.png", // görseli /public/img'e koy
    repo: "https://github.com/osman-selim-yalcin/topculab-react",
    demo: "https://topculab.com/", // gerçek domain neyse güncelle
  },
];
