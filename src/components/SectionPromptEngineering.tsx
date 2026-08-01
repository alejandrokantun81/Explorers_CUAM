import React from "react";
import { Terminal, BookOpen } from "lucide-react";
import { PromptArchitectModule } from "./PromptArchitectModule";

export const SectionPromptEngineering: React.FC = () => {
  return (
    <section id="sec-prompts" className="space-y-6">

      {/* Header Banner Explorers Canary Yellow Style */}
      <div className="bg-[#F5B800] border-2 border-[#D99A00] rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm text-gray-950">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F52BA] text-white text-xs font-bold shadow-2xs">
          <Terminal className="w-3.5 h-3.5" />
          <span>Nivel 1 - 3: Metodología Sistemática</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight font-heading">
          Ingeniería de Prompts
        </h2>
        <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed max-w-3xl">
          Un <strong>Prompt</strong> es el conjunto de instrucciones en lenguaje natural que orienta el espacio de probabilidad de un Modelo de Lenguaje. Aprende a estructurar prompts de alto rendimiento con la fórmula universal <strong>Rol + Tarea + Contexto + Restricciones</strong>.
        </p>
      </div>

      {/* Interactive Learning Module: Arquitecto Maestro de Prompts */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xs">
        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#0056D2]" />
            <span>Actividad de Refuerzo: Arquitecto Maestro de Prompts</span>
          </h3>
        </div>
        <div className="p-6">
          <PromptArchitectModule />
        </div>
      </div>
    </section>
  );
};
