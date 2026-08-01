import React, { useState } from "react";
import { Compass, BookOpen, Terminal, Video, TestTube, Sparkles, Menu, X, Shield, Award } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenAuditModal: () => void;
  completedActivitiesCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  onOpenAuditModal,
  completedActivitiesCount
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "sec-discover", label: "Inicio / Visión", icon: Compass },
    { id: "sec-literacy", label: "2. Alfabetización Digital", icon: BookOpen },
    { id: "sec-prompts", label: "3. Ingeniería Prompts", icon: Terminal },
    { id: "sec-tutorials", label: "4. Tutoriales Google", icon: Video },
    { id: "sec-lab", label: "5. Laboratorio (Retos)", icon: TestTube }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Tag */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveSection("sec-discover")}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-md shadow-cyan-500/20">
              <Compass className="w-6 h-6 text-white animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-extrabold text-lg tracking-wider bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  EXPLORERS
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  LEVEL 01
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">DISCOVER • Competencias IA en Educación</p>
            </div>
          </div>

          {/* Navigation Items (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Progress Counter Badge */}
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium text-slate-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Avance Lab: <strong className="text-amber-400">{completedActivitiesCount}/5</strong></span>
            </div>

            {/* Senior UI Architecture Review Modal Trigger */}
            <button
              onClick={onOpenAuditModal}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-xs font-semibold transition shadow-sm"
              title="Ver Diagnóstico de Arquitectura UI & Heurísticas WCAG"
            >
              <Shield className="w-3.5 h-3.5 text-indigo-300" />
              <span>Revisión UI Architect</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={onOpenAuditModal}
              className="p-2 rounded-lg bg-indigo-900/40 text-indigo-300 text-xs font-semibold border border-indigo-700/50"
              title="UI Audit"
            >
              <Shield className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                <span>{item.label}</span>
              </button>
            );
          })}
          <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400 px-2">
            <span>Retos Completados:</span>
            <span className="font-bold text-amber-400">{completedActivitiesCount} de 5</span>
          </div>
        </div>
      )}
    </header>
  );
};
