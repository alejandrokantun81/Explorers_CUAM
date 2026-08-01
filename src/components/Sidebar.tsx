import React, { useState } from "react";
import { Compass, BookOpen, Terminal, Video, TestTube, Shield, Award, ChevronLeft, ChevronRight, Menu, X, CheckCircle2, Circle, GraduationCap, BarChart2, FileText, MessageSquare, Info, Bookmark, FolderArchive } from "lucide-react";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (sec: string) => void;
  onOpenAuditModal: () => void;
  completedActivitiesCount: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  onOpenAuditModal,
  completedActivitiesCount
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [materialExpanded, setMaterialExpanded] = useState(true);

  const navItems = [
    {
      id: "sec-discover",
      label: "Inicio",
      badge: "Inicio",
      icon: Compass,
      type: "Inicio del módulo",
      time: "15 min"
    },
    {
      id: "sec-literacy",
      label: "Alfabetización Digital",
      badge: "UNESCO",
      icon: BookOpen,
      type: "3 Lecturas",
      time: "25 min"
    },
    {
      id: "sec-prompts",
      label: "Ingeniería de Prompts",
      badge: "Nivel 1-3",
      icon: Terminal,
      type: "2 Ejercicios",
      time: "30 min"
    },
    {
      id: "sec-tutorials",
      label: "Tutoriales",
      badge: "8 Guías",
      icon: Video,
      type: "7 Vídeos",
      time: "45 min"
    },
    {
      id: "sec-lab",
      label: "Laboratorio Práctico",
      badge: "5 Retos",
      icon: TestTube,
      type: "5 Evaluación",
      time: "60 min"
    },
    {
      id: "sec-resources",
      label: "Recursos Didácticos",
      badge: "6 Recursos",
      icon: FolderArchive,
      type: "Descargas & Prompts",
      time: "10 min"
    }
  ];

  return (
    <>
      {/* Mobile Top Header Bar for Coursera */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setActiveSection("sec-discover")}>
          <div className="bg-[#0056D2] text-white font-black text-lg px-2.5 py-0.5 rounded tracking-tighter">
            coursera
          </div>
          <span className="text-xs font-bold text-gray-700 border-l border-gray-300 pl-2">Anáhuac Online</span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={onOpenAuditModal}
            className="p-1.5 rounded bg-blue-50 text-[#0056D2] border border-blue-200 text-xs font-medium flex items-center space-x-1"
            title="Auditoría UI"
          >
            <Shield className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-1.5 rounded bg-gray-100 text-gray-700 hover:bg-gray-200"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex">
          <div className="w-80 bg-white h-full p-4 flex flex-col justify-between overflow-y-auto border-r border-gray-200">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                <div className="flex items-center space-x-2">
                  <span className="text-[#0056D2] font-black text-xl">coursera</span>
                  <span className="text-xs font-semibold text-gray-500">• UNESCO</span>
                </div>
                <button onClick={() => setMobileOpen(false)} className="text-gray-500 hover:text-gray-900">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Course Title Header */}
              <div className="bg-blue-50/60 p-3 rounded-lg border border-blue-100 space-y-1">
                <div className="flex items-center space-x-1.5 text-[11px] font-bold text-[#0056D2] uppercase tracking-wider">
                  <GraduationCap className="w-4 h-4" />
                  <span>Anáhuac Online • UNESCO</span>
                </div>
                <p className="font-bold text-sm text-gray-900 leading-snug">
                  EXPLORERS Level 01: Discover
                </p>
              </div>

              {/* Nav Items */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-gray-800 px-1 uppercase tracking-wider">Material de Curso</p>
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  const isCompleted = idx < completedActivitiesCount;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveSection(item.id);
                        setMobileOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-lg text-xs transition flex items-start space-x-3 border ${
                        isActive
                          ? "bg-[#EBF3FF] border-[#0056D2] text-[#0056D2] font-bold"
                          : "bg-white border-transparent text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      ) : isActive ? (
                        <div className="w-4 h-4 rounded-full border-2 border-[#0056D2] flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-2 h-2 rounded-full bg-[#0056D2]"></div>
                        </div>
                      ) : (
                        <Circle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                      )}
                      <div className="flex-1">
                        <p className="leading-tight">{item.label}</p>
                        <p className="text-[10px] text-gray-500 mt-1 font-normal">{item.type} • {item.time}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-3">
              <button
                onClick={() => {
                  onOpenAuditModal();
                  setMobileOpen(false);
                }}
                className="w-full flex items-center justify-center space-x-2 py-2 px-3 rounded-md bg-[#0056D2] text-white text-xs font-bold hover:bg-[#00419e] transition"
              >
                <Shield className="w-4 h-4" />
                <span>Auditoría UI Senior</span>
              </button>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileOpen(false)}></div>
        </div>
      )}

      {/* Desktop Coursera Left Sidebar */}
      <aside
        className={`hidden lg:flex flex-col justify-between bg-[#0F52BA] text-white border-r border-[#082866] sticky top-0 h-screen transition-all duration-200 z-30 shadow-md ${
          collapsed ? "w-20" : "w-80 xl:w-88 shrink-0"
        }`}
      >
        <div>
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-blue-700/60">
            {!collapsed ? (
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <h1 className="font-extrabold text-base sm:text-lg text-white leading-snug font-college tracking-wide">
                    Menú
                  </h1>
                  <button
                    onClick={() => setCollapsed(true)}
                    className="text-blue-200 hover:text-white p-1.5 rounded hover:bg-white/10 transition shrink-0 ml-1"
                    title="Colapsar menú"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <button
                  onClick={() => setCollapsed(false)}
                  className="p-2 rounded bg-white/10 text-white hover:bg-white/20 transition"
                  title="Expandir menú"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>

          {/* Collapsible Material de Curso Menu */}
          <div className="p-4 space-y-5 overflow-y-auto max-h-[calc(100vh-180px)]">
            {!collapsed && (
              <div className="flex items-center justify-between text-xs font-bold text-blue-100 px-2 cursor-pointer hover:text-white" onClick={() => setMaterialExpanded(!materialExpanded)}>
                <span className="uppercase tracking-wider text-xs sm:text-sm text-blue-200 font-extrabold font-college">Material de Curso</span>
                <ChevronLeft className={`w-5 h-5 text-blue-200 transition-transform ${materialExpanded ? "-rotate-90" : "rotate-0"}`} />
              </div>
            )}

            {(materialExpanded || collapsed) && (
              <nav className="space-y-2">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.id;
                  const isCompleted = idx < completedActivitiesCount;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      title={collapsed ? item.label : undefined}
                      className={`w-full flex items-start text-left rounded-xl p-3 sm:p-3.5 transition-all text-sm font-medium group relative ${
                        isActive
                          ? "bg-white text-[#0F52BA] font-bold shadow-md scale-[1.01]"
                          : "text-blue-100 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {/* Radio/Check indicator */}
                      <div className="mt-0.5 shrink-0">
                        {isCompleted ? (
                          <CheckCircle2 className={`w-5 h-5 ${isActive ? "text-emerald-600" : "text-emerald-300"}`} />
                        ) : isActive ? (
                          <div className="w-5 h-5 rounded-full border-2 border-[#0F52BA] flex items-center justify-center bg-white">
                            <div className="w-2.5 h-2.5 rounded-full bg-[#0F52BA]"></div>
                          </div>
                        ) : (
                          <Circle className="w-5 h-5 text-blue-300 group-hover:text-white" />
                        )}
                      </div>

                      {!collapsed && (
                        <div className="ml-3 flex-1 min-w-0">
                          <p className="truncate text-sm sm:text-base font-bold leading-tight">{item.label}</p>
                          <p className={`text-xs font-medium mt-1 ${isActive ? "text-blue-900" : "text-blue-200"}`}>
                            {item.type} • {item.time}
                          </p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </nav>
            )}
          </div>
        </div>


      </aside>
    </>
  );
};
