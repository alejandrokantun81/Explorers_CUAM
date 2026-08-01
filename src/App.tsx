import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { CourseraTopBar } from "./components/CourseraTopBar";
import { SectionDiscoverHero } from "./components/SectionDiscoverHero";
import { SectionDigitalLiteracy } from "./components/SectionDigitalLiteracy";
import { SectionPromptEngineering } from "./components/SectionPromptEngineering";
import { SectionTutorials } from "./components/SectionTutorials";
import { SectionLabActivities } from "./components/SectionLabActivities";
import { SectionDidacticResources } from "./components/SectionDidacticResources";
import { DesignAuditModal } from "./components/DesignAuditModal";
import { Award } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("sec-discover");
  const [completedActivities, setCompletedActivities] = useState<number[]>([]);
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const handleCompleteActivity = (id: number) => {
    if (!completedActivities.includes(id)) {
      setCompletedActivities(prev => [...prev, id]);
    }
  };

  const sectionTitles: Record<string, string> = {
    "sec-discover": "EXPLORERS Level 01: Discover",
    "sec-literacy": "Section 2: Alfabetización Digital & Gobernanza Ética",
    "sec-prompts": "Section 3: Ingeniería de Prompts (Level 1-3)",
    "sec-tutorials": "Section 4: Tutoriales en Video y Guías Google Docs",
    "sec-lab": "Section 5: Laboratorio de Aplicación y Retos Prácticos",
    "sec-resources": "Section 6: Recursos Didácticos para Docentes"
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA] text-gray-800 font-sans antialiased flex flex-col">
      
      {/* Top Global Navigation Bar (Coursera Bar) */}
      <CourseraTopBar
        onOpenAuditModal={() => setAuditModalOpen(true)}
        activeSectionTitle={sectionTitles[activeSection] || "Mi Aprendizaje"}
      />

      {/* Main Container Layout */}
      <div className="flex-1 flex flex-col lg:flex-row w-full min-w-0">
        
        {/* Left Sidebar (Coursera Course Material Bar) */}
        <Sidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          onOpenAuditModal={() => setAuditModalOpen(true)}
          completedActivitiesCount={completedActivities.length}
        />

        {/* Center Main Content Canvas */}
        <main className="flex-1 min-w-0 p-4 sm:p-5 lg:p-6 w-full space-y-6 max-w-7xl">
          
          {/* Active Section Body */}
          {activeSection === "sec-discover" && (
            <SectionDiscoverHero
              onNavigateSection={setActiveSection}
              completedCount={completedActivities.length}
            />
          )}

          {activeSection === "sec-literacy" && (
            <SectionDigitalLiteracy />
          )}

          {activeSection === "sec-prompts" && (
            <SectionPromptEngineering />
          )}

          {activeSection === "sec-tutorials" && (
            <SectionTutorials />
          )}

          {activeSection === "sec-lab" && (
            <SectionLabActivities
              completedActivities={completedActivities}
              onCompleteActivity={handleCompleteActivity}
            />
          )}

          {activeSection === "sec-resources" && (
            <SectionDidacticResources />
          )}

        </main>

      </div>

      {/* Coursera Footer */}
      <footer className="border-t border-gray-200 bg-white py-6 px-6 text-xs text-gray-600 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-[#0056D2] font-black text-lg tracking-tighter">coursera</span>
            <span className="text-gray-400">•</span>
            <span className="font-bold text-gray-800">Anáhuac Online & UNESCO</span>
          </div>
          <p className="text-center text-gray-500 text-[11px]">
            © 2026 Coursera Inc. Marco Institucional UNESCO (Consenso de Beijing) • Gemini AI Models
          </p>
          <div className="flex items-center space-x-2 text-[11px] text-[#0056D2] font-bold">
            <Award className="w-4 h-4 text-[#0056D2]" />
            <span>Progreso del Curso: {Math.round((completedActivities.length / 5) * 100)}%</span>
          </div>
        </div>
      </footer>

      {/* UI Architect Senior Audit Modal */}
      <DesignAuditModal
        isOpen={auditModalOpen}
        onClose={() => setAuditModalOpen(false)}
      />

    </div>
  );
}
