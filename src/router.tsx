// src/AppRouter.tsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import ProjectDetail from "./views/ProjectDetail";
import Projects from "./views/Projects";
import RootLayout from "./views/RootLayout";
import Contact from "./views/Contact";
import About from "./views/About";

function NotFound() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Sayfa bulunamadı</h1>
      <p className="text-sm text-[#A9B1C3]">Aradığın sayfa mevcut değil.</p>
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
