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
    stack: ["React", "Node", "Postgres", "Docker"],
    image: "/img/transcendence.png",
    repo: "https://github.com/osman-selim-yalcin/transcendence",
   demo: "https://www.kayiperde.com/",
  },
  {
    slug: "bartech",
    title: "Bartech",
    category: "Web",
    summary: "Dashboard, grafikler ve yönetim paneli.",
    highlights: ["Role-based auth", "Charting", "REST API"],
    stack: ["React", "Express", "MongoDB"],
    image: "/img/bartech.png",
    repo: "https://github.com/osman-selim-yalcin/bartech",
    demo: "https://www.westbar.com.tr/",

  },
  {
    slug: "kayi-perde",
    title: "Kayı Perde",
    category: "Web",
    summary: "Next.js vitrin, sipariş akışları ve sade UI/UX.",
    highlights: ["Next.js & Tailwind", "Bileşen kütüphanesi", "State yönetimi"],
    stack: ["Next.js", "Tailwind", "MUI"],
    image: "/img/kayi.png",
    repo: "https://github.com/osman-selim-yalcin/kayiperde",
    demo: "https://www.kayiperde.com/",
  },
];
