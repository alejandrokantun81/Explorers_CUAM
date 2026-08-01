import React, { useState } from "react";
import { FileText, Download, Copy, Check, Sparkles, BookOpen, Layers, ExternalLink, Search, Filter, Bookmark, FolderArchive, ArrowRight, Video } from "lucide-react";

interface Resource {
  id: string;
  title: string;
  category: "Workbook" | "Clase Virtual" | "Plantillas de Prompts" | "Guías & Manuales" | "Rúbricas de Evaluación" | "Infografías & Decálogos";
  description: string;
  format: "PDF" | "DOCX" | "PROMPT" | "ZIP" | "WORKBOOK" | "ACCESO VIRTUAL";
  downloads: number;
  tags: string[];
  contentPrompt?: string;
  linkUrl?: string;
  buttonText?: string;
  isExternalLink?: boolean;
}

const resourcesData: Resource[] = [
  {
    id: "res-1",
    title: "WORKBOOK EXPLORERS: LIBRO DE TRABAJO DOCENTE",
    category: "Workbook",
    description: "Cuaderno de trabajo oficial con ejercicios prácticos, actividades de reflexión, casos aplicados y guías de prompts para el programa de formación.",
    format: "PDF",
    downloads: 948,
    tags: ["Workbook", "Libro de Trabajo", "Formación Docente"],
    linkUrl: "https://docs.google.com",
    buttonText: "Descargar Libro de Trabajo"
  },
  {
    id: "res-2",
    title: "ACCESO A LA CLASE VIRTUAL EXPLORERS",
    category: "Clase Virtual",
    description: "Ingreso directo a las sesiones síncronas en vivo, aula virtual, grabaciones de clases y acompañamiento académico en tiempo real.",
    format: "ACCESO VIRTUAL",
    downloads: 1240,
    tags: ["Clase Virtual", "Sesiones en Vivo", "Aula Digital"],
    linkUrl: "https://meet.google.com",
    buttonText: "Acceder a la Clase Virtual",
    isExternalLink: true
  }
];

export const SectionDidacticResources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Todas");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["Todas", "Workbook", "Clase Virtual", "Plantillas de Prompts", "Guías & Manuales", "Rúbricas de Evaluación", "Infografías & Decálogos"];

  const filteredResources = resourcesData.filter(res => {
    const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "Todas" || res.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopyPrompt = (id: string, text?: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="sec-resources" className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-[#58C252] border-2 border-[#1D6D20] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm text-white">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#1D6D20] text-white text-xs font-bold shadow-2xs">
            <FolderArchive className="w-3.5 h-3.5" />
            <span>Biblioteca Pedagógica EXPLORERS</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight font-college">
            Recursos Didácticos
          </h2>
          <p className="text-xs sm:text-sm text-green-50 font-medium leading-relaxed">
            Descarga plantillas editables, guías de implementación, rúbricas de evaluación e instrumentos pedagógicos diseñados para enriquecer tu práctica docente con Inteligencia Artificial.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar recursos por título, palabra clave o etiqueta..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-white text-gray-900 rounded-xl text-xs font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1D6D20] shadow-2xs"
            />
          </div>
        </div>
      </div>

      {/* Categories Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
              selectedCategory === cat
                ? "bg-[#0F52BA] text-white shadow-xs"
                : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Resource Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredResources.map(res => (
          <div
            key={res.id}
            className="bg-white border border-gray-200 rounded-xl p-5 space-y-4 shadow-2xs hover:border-[#0F52BA] transition flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#0F52BA] font-bold text-[10px] uppercase tracking-wider">
                  {res.category}
                </span>
                <span className="px-2 py-0.5 rounded bg-gray-100 font-extrabold text-[10px] text-gray-700">
                  {res.format}
                </span>
              </div>

              <h3 className="font-bold text-sm text-gray-900 font-college leading-snug">
                {res.title}
              </h3>

              <p className="text-xs text-gray-600 leading-relaxed">
                {res.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {res.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-50 text-gray-500 border border-gray-100">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Prompt Preview Box if PROMPT format */}
            {res.format === "PROMPT" && res.contentPrompt && (
              <div className="bg-gray-900 text-green-400 p-3 rounded-lg text-[11px] font-mono space-y-2 border border-gray-800">
                <p className="line-clamp-3 leading-relaxed whitespace-pre-wrap text-gray-200">
                  {res.contentPrompt}
                </p>
                <div className="pt-2 border-t border-gray-800 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400">Prompt listo para Gemini / ChatGPT</span>
                  <button
                    onClick={() => handleCopyPrompt(res.id, res.contentPrompt)}
                    className="flex items-center space-x-1 px-2.5 py-1 bg-green-600 hover:bg-green-500 text-white font-sans font-bold text-[10px] rounded transition"
                  >
                    {copiedId === res.id ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>¡Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Card Actions */}
            <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[11px] text-gray-500 font-medium">
                {res.downloads} {res.format === "ACCESO VIRTUAL" ? "accesos" : "descargas"}
              </span>

              {res.format !== "PROMPT" && (
                <a
                  href={res.linkUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center space-x-1.5 px-3 py-1.5 bg-[#0F52BA] hover:bg-[#00419e] text-white text-xs font-bold rounded-lg transition shadow-2xs font-college"
                >
                  {res.isExternalLink ? (
                    <Video className="w-3.5 h-3.5" />
                  ) : (
                    <Download className="w-3.5 h-3.5" />
                  )}
                  <span>{res.buttonText || `Descargar ${res.format}`}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredResources.length === 0 && (
        <div className="bg-white border border-gray-200 rounded-xl p-8 text-center space-y-2">
          <BookOpen className="w-8 h-8 text-gray-400 mx-auto" />
          <p className="font-bold text-sm text-gray-700">No se encontraron recursos</p>
          <p className="text-xs text-gray-500">Prueba con otra búsqueda o selecciona una categoría diferente.</p>
        </div>
      )}

    </section>
  );
};
