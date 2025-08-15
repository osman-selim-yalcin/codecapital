// src/layouts/RootLayout.tsx
import { Outlet, NavLink } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E6E9EF]">
      <header className="sticky top-0 z-50 border-b border-[#1F2733] bg-[#0B0F14]/80 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink to="/" className="font-semibold tracking-tight">
            codeCapital
          </NavLink>
          <div className="flex items-center gap-6 text-sm">
            <NavLink to="/projects" className="hover:text-[#6EE7F9]">Projects</NavLink>
            <NavLink to="/about" className="hover:text-[#6EE7F9]">About</NavLink>
            <NavLink to="/contact" className="hover:text-[#6EE7F9]">Contact</NavLink>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-[#1F2733]">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-[#A9B1C3]">
          © {new Date().getFullYear()} Osman Selim Yalçın · All rights reserved.
        </div>
      </footer>
    </div>
  );
}
