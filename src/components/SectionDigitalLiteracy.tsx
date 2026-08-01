import React, { useState } from "react";
import { unescoContext, unescoStance, humanAiSynergy } from "../data/unescoData";
import { ShieldCheck, GraduationCap, Cpu, FlaskConical, Globe, BookOpen, Brain, Sparkles, CheckCircle, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  GraduationCap,
  Cpu,
  FlaskConical
};

export const SectionDigitalLiteracy: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"beijing" | "stance" | "synergy">("beijing");

  return (
    <section id="sec-literacy" className="space-y-6">
      
      {/* Header Banner Explorers Canary Yellow Style */}
      <div className="bg-[#F5B800] border-2 border-[#D99A00] rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm text-gray-950">
        <div className="space-y-2 max-w-3xl">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F52BA] text-white text-xs font-bold shadow-2xs">
            <Globe className="w-3.5 h-3.5" />
            <span>Marco Institucional de Referencia UNESCO</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight font-heading">
            Alfabetización Digital & Gobernanza Ética
          </h2>
          <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed">
            Comprender el contexto global del Consenso de Beijing de la UNESCO y la postura oficial para integrar Inteligencia Artificial en educación mediante el fortalecimiento del juicio crítico y la sinergia humano-máquina.
          </p>
        </div>

        {/* Coursera Tab Selection */}
        <div className="pt-2 flex flex-wrap gap-2 border-b border-black/20">
          <button
            onClick={() => setActiveTab("beijing")}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-t-lg text-xs font-bold transition border-b-2 ${
              activeTab === "beijing"
                ? "bg-[#0F52BA] border-[#0A2968] text-white shadow-xs"
                : "border-transparent text-gray-900 hover:bg-black/10"
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Consenso de Beijing</span>
          </button>
          <button
            onClick={() => setActiveTab("stance")}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-t-lg text-xs font-bold transition border-b-2 ${
              activeTab === "stance"
                ? "bg-[#0F52BA] border-[#0A2968] text-white shadow-xs"
                : "border-transparent text-gray-900 hover:bg-black/10"
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Postura UNESCO</span>
          </button>
          <button
            onClick={() => setActiveTab("synergy")}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-t-lg text-xs font-bold transition border-b-2 ${
              activeTab === "synergy"
                ? "bg-[#0F52BA] border-[#0A2968] text-white shadow-xs"
                : "border-transparent text-gray-900 hover:bg-black/10"
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>Inteligencia Humana + IA</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Consenso de Beijing */}
      {activeTab === "beijing" && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-gray-900">{unescoContext.title}</h3>
              <p className="text-xs text-gray-500 mt-0.5">{unescoContext.subtitle} • {unescoContext.declarationDate}</p>
            </div>
            <span className="hidden sm:inline-block px-3 py-1 text-xs font-bold rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
              Marco Regulatorio Internacional
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {unescoContext.pillars.map((pillar) => {
              const IconComp = iconMap[pillar.icon] || ShieldCheck;
              return (
                <div key={pillar.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0056D2] transition space-y-3 shadow-2xs">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0056D2] flex items-center justify-center font-bold shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-gray-900">{pillar.title}</h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">{pillar.description}</p>
                  <div className="pt-2 border-t border-gray-100 text-xs text-gray-700">
                    <strong className="text-[#0056D2] font-semibold">Aplicación Práctica: </strong>
                    {pillar.details}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Postura UNESCO */}
      {activeTab === "stance" && (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{unescoStance.title}</h3>
            <p className="text-xs text-gray-500 mt-0.5">{unescoStance.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {unescoStance.sections.map((sec, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl p-5 space-y-3 flex flex-col justify-between shadow-2xs">
                <div>
                  <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold rounded bg-blue-50 text-[#0056D2] border border-blue-200 mb-2">
                    {sec.badge}
                  </span>
                  <h4 className="text-sm font-bold text-gray-900">{sec.title}</h4>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">{sec.content}</p>
                </div>
                <div className="pt-3 border-t border-gray-100 text-xs text-emerald-700 flex items-center space-x-1 font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Alineado con ODS 4 UNESCO</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Sinergia Humana + IA */}
      {activeTab === "synergy" && (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{humanAiSynergy.title}</h3>
            <p className="text-xs text-gray-600 mt-0.5">{humanAiSynergy.description}</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-5 space-y-4 shadow-2xs">
            <div className="space-y-3">
              {humanAiSynergy.features.map((feat, idx) => (
                <div key={idx} className="grid grid-cols-1 lg:grid-cols-3 gap-4 bg-gray-50/80 border border-gray-200 p-4 rounded-xl items-center">
                  
                  {/* Human Role */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-amber-800 uppercase tracking-wider flex items-center space-x-1">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Aporte Humano (Docente / Investigador)</span>
                    </div>
                    <p className="text-xs font-bold text-gray-900">{feat.human}</p>
                  </div>

                  {/* AI Role */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-[#0056D2] uppercase tracking-wider flex items-center space-x-1">
                      <Cpu className="w-3.5 h-3.5" />
                      <span>Potencial del Sistema de IA</span>
                    </div>
                    <p className="text-xs font-bold text-gray-900">{feat.ai}</p>
                  </div>

                  {/* Synergy Outcome */}
                  <div className="space-y-1 lg:border-l lg:border-gray-200 lg:pl-4">
                    <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center space-x-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Resultado Sinergético</span>
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed">{feat.synergy}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
