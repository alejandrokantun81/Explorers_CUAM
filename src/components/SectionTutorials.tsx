import React, { useState } from "react";
import { tutorialsList } from "../data/tutorialsData";
import { Tutorial } from "../types";
import { Video, ExternalLink, Download, Play, CheckCircle, BookOpen, Search, X } from "lucide-react";

export const SectionTutorials: React.FC = () => {
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Todos");

  const categories = ["Todos", "Asistentes Personalizados", "Investigación & Análisis", "Flujos Audiovisuales", "Ingeniería Avanzada", "Integración Operativa", "Colaboración", "Automatización"];

  const filteredTutorials = activeCategory === "Todos"
    ? tutorialsList
    : tutorialsList.filter(t => t.category === activeCategory);

  return (
    <section id="sec-tutorials" className="space-y-6">
      
      {/* Header Banner Explorers Canary Yellow Style */}
      <div className="bg-[#F5B800] border-2 border-[#D99A00] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm text-gray-950">
        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F52BA] text-white text-xs font-bold shadow-2xs">
            <Video className="w-3.5 h-3.5" />
            <span>Biblioteca Multimedia • 8 Guías Paso a Paso</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight font-heading">
            Tutoriales en Video y Guías Google Docs
          </h2>
          <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed max-w-3xl">
            Accede a la colección de 8 tutoriales prácticos paso a paso. Cada módulo incluye reproducción de video explicativo en YouTube y enlace de descarga a las guías oficiales en Google Docs.
          </p>
        </div>

        {/* Categories Filter Bar Coursera Style */}
        <div className="pt-2 flex flex-wrap gap-2 border-t border-black/20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition shadow-2xs ${
                activeCategory === cat
                  ? "bg-[#0F52BA] text-white"
                  : "bg-white/80 text-gray-900 hover:bg-white border border-black/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tutorials Coursera Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTutorials.map((tut) => (
          <div
            key={tut.id}
            className="bg-white border border-gray-200 hover:border-[#0056D2] rounded-xl p-5 space-y-4 flex flex-col justify-between transition shadow-2xs group"
          >
            <div className="space-y-2">
              {/* Top Tag & Badge */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-[#0056D2] border border-blue-200">
                  {tut.category}
                </span>
                <span className="text-[10px] font-semibold text-gray-500">
                  Vídeo • {tut.badge}
                </span>
              </div>

              {/* Title & Tool */}
              <div>
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0056D2] transition leading-snug">
                  {tut.title}
                </h3>
                <p className="text-[11px] text-gray-500 font-medium mt-0.5">{tut.tool}</p>
              </div>

              <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                {tut.description}
              </p>
            </div>

            {/* Actions Coursera Style */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
              <button
                onClick={() => setSelectedTutorial(tut)}
                className="flex-1 flex items-center justify-center space-x-1.5 px-3 py-2 rounded-lg bg-[#0056D2] hover:bg-[#00419e] text-white text-xs font-bold transition"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Ver Vídeo</span>
              </button>

              <a
                href={tut.googleDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300 text-xs font-semibold transition"
                title="Descargar Tutorial en Google Docs"
              >
                <Download className="w-3.5 h-3.5 text-[#0056D2]" />
                <span>Docs</span>
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Video & Tutorial Modal Coursera Style */}
      {selectedTutorial && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white border border-gray-200 rounded-2xl max-w-3xl w-full p-6 space-y-5 shadow-2xl relative my-8 animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedTutorial(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-gray-100 text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div>
              <span className="text-xs font-bold text-[#0056D2] uppercase tracking-wider">
                {selectedTutorial.category} • {selectedTutorial.badge}
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1">{selectedTutorial.title}</h3>
              <p className="text-xs text-gray-600 mt-1">{selectedTutorial.description}</p>
            </div>

            {/* Video Player Frame / Embed */}
            <div className="aspect-video bg-black rounded-xl overflow-hidden border border-gray-300 relative flex items-center justify-center shadow-md">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${selectedTutorial.youtubeId}?autoplay=0&rel=0`}
                title={selectedTutorial.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>



            {/* Footer Modal Actions */}
            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <a
                href={selectedTutorial.googleDocsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-[#0056D2] hover:bg-[#00419e] text-white text-xs font-bold transition shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Abrir Guía Completa en Google Docs</span>
                <ExternalLink className="w-3 h-3 opacity-70" />
              </a>

              <button
                onClick={() => setSelectedTutorial(null)}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-semibold transition"
              >
                Cerrar
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
