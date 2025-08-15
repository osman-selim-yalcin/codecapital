// src/AppRouter.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Home from "./views/Home";
import ProjectDetail from "./views/ProjectDetail";
import Projects from "./views/Projects";
import RootLayout from "./views/RootLayout";

function NotFound() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Sayfa bulunamadı</h1>
      <p className="text-sm text-[#A1A1AA]">Aradığın sayfa mevcut değil.</p>
    </div>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
