import { NavLink, Outlet } from "react-router-dom";
import Logo from "../components/Logo";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#EDEDED]">
      <header className="sticky top-0 z-50 border-b border-[#1F1F22] bg-[#0A0A0B]/80 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center gap-2 font-semibold tracking-tight focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/50 rounded"
          >
            <Logo className="h-6 w-6" />
            <span>CodeCapital</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-6 text-sm">
            <NavLink
              to="/projects"
              className="hover:text-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/50 rounded"
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/50 rounded"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-[#60A5FA] focus:outline-none focus:ring-2 focus:ring-[#60A5FA]/50 rounded"
            >
              Contact
            </NavLink>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <Outlet />
      </main>

      <footer className="border-t border-[#1F1F22]">
        <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-[#A1A1AA]">
          © {new Date().getFullYear()} Osman Selim Yalçın & Burak Mat · All
          rights reserved.
        </div>
      </footer>
    </div>
  );
}
