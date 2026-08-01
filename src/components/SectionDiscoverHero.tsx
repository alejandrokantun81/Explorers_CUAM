import React from "react";
import { Compass, BookOpen, Terminal, Video, ArrowRight, Play, CheckCircle2, Award, Sparkles, FolderArchive } from "lucide-react";

interface HeroProps {
  onNavigateSection: (secId: string) => void;
  completedCount: number;
}

export const SectionDiscoverHero: React.FC<HeroProps> = ({ onNavigateSection, completedCount }) => {
  return (
    <section id="sec-discover" className="space-y-8">
      
      {/* Top Welcome Title Banner */}
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight font-college">
          Bienvenido a EXPLORERS
        </h1>
      </div>

      {/* Main Hero Banner Container - Image representing AI & Education */}
      <div className="w-full rounded-2xl overflow-hidden flex justify-center items-center bg-white shadow-xs p-1 border border-gray-100 select-none">
        <img
          src={new URL('../assets/images/explorers_banner.png', import.meta.url).href}
          alt="EXPLORERS Ecosistema de Innovación Educativa"
          className="w-full h-auto object-contain rounded-2xl max-h-[550px] select-none pointer-events-none"
          referrerPolicy="no-referrer"
          draggable={false}
          onError={(e) => {
            e.currentTarget.src = "/explorers_banner.png";
          }}
        />
      </div>

      {/* Level Roadmap Grid Coursera Style */}
      <div className="space-y-4 text-center">
        <h2 className="text-lg font-bold text-gray-900 font-college">Programa y Secciones del Módulo</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          
          {/* Section 2 Card */}
          <div
            onClick={() => onNavigateSection("sec-literacy")}
            className="bg-[#58C252] border-2 border-[#1D6D20] hover:bg-[#4eb348] rounded-xl p-5 space-y-3 cursor-pointer transition shadow-sm group text-white flex flex-col items-center justify-between text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1D6D20]/30 text-white flex items-center justify-center font-bold mx-auto">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="w-full text-center">
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:underline transition font-college">
                Alfabetización Digital
              </h3>
            </div>
            <div className="pt-2 flex items-center justify-center text-xs font-bold text-white font-college">
              <span>Ver Lecturas</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Section 3 Card */}
          <div
            onClick={() => onNavigateSection("sec-prompts")}
            className="bg-[#58C252] border-2 border-[#1D6D20] hover:bg-[#4eb348] rounded-xl p-5 space-y-3 cursor-pointer transition shadow-sm group text-white flex flex-col items-center justify-between text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1D6D20]/30 text-white flex items-center justify-center font-bold mx-auto">
              <Terminal className="w-5 h-5" />
            </div>
            <div className="w-full text-center">
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:underline transition font-college">
                Ingeniería de Prompts
              </h3>
            </div>
            <div className="pt-2 flex items-center justify-center text-xs font-bold text-white font-college">
              <span>Construir Prompts</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Section 4 Card */}
          <div
            onClick={() => onNavigateSection("sec-tutorials")}
            className="bg-[#58C252] border-2 border-[#1D6D20] hover:bg-[#4eb348] rounded-xl p-5 space-y-3 cursor-pointer transition shadow-sm group text-white flex flex-col items-center justify-between text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1D6D20]/30 text-white flex items-center justify-center font-bold mx-auto">
              <Video className="w-5 h-5" />
            </div>
            <div className="w-full text-center">
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:underline transition font-college">
                Tutoriales
              </h3>
            </div>
            <div className="pt-2 flex items-center justify-center text-xs font-bold text-white font-college">
              <span>Ver Vídeos</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </div>

          {/* Section 6 Card - Recursos Didácticos */}
          <div
            onClick={() => onNavigateSection("sec-resources")}
            className="bg-[#58C252] border-2 border-[#1D6D20] hover:bg-[#4eb348] rounded-xl p-5 space-y-3 cursor-pointer transition shadow-sm group text-white flex flex-col items-center justify-between text-center"
          >
            <div className="w-10 h-10 rounded-lg bg-[#1D6D20]/30 text-white flex items-center justify-center font-bold mx-auto">
              <FolderArchive className="w-5 h-5" />
            </div>
            <div className="w-full text-center">
              <h3 className="text-base sm:text-lg font-extrabold text-white group-hover:underline transition font-college">
                Recursos Didácticos
              </h3>
            </div>
            <div className="pt-2 flex items-center justify-center text-xs font-bold text-white font-college">
              <span>Ver Recursos</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition" />
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

