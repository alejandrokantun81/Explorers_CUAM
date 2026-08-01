import React, { useState } from "react";
import { labActivitiesList } from "../data/activitiesData";
import { ActivityChallenge, StudentSubmission } from "../types";
import { TestTube, Clock, FileText, Sparkles, CheckCircle2, Play, Download, Award, ChevronRight, Copy, Check, Send, AlertCircle, RefreshCw } from "lucide-react";

interface SectionLabActivitiesProps {
  completedActivities: number[];
  onCompleteActivity: (actId: number) => void;
}

export const SectionLabActivities: React.FC<SectionLabActivitiesProps> = ({
  completedActivities,
  onCompleteActivity
}) => {
  const [activeActivityId, setActiveActivityId] = useState<number>(1);
  const currentActivity = labActivitiesList.find(a => a.id === activeActivityId) || labActivitiesList[0];

  // Submission Form State
  const [studentName, setStudentName] = useState("");
  const [institution, setInstitution] = useState("");
  const [submissionContent, setSubmissionContent] = useState("");
  const [generatingWithAI, setGeneratingWithAI] = useState(false);
  const [aiDraft, setAiDraft] = useState<string | null>(null);
  const [copiedTemplate, setCopiedTemplate] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Switch activity reset
  const handleSelectActivity = (id: number) => {
    setActiveActivityId(id);
    setSubmissionContent("");
    setAiDraft(null);
    setSubmitted(completedActivities.includes(id));
  };

  // AI Assistant for Activity Output Draft
  const handleGenerateAIDraft = async () => {
    setGeneratingWithAI(true);
    setAiDraft(null);

    let systemInstruction = "";
    let prompt = "";

    if (currentActivity.id === 1) {
      // Gems Builder
      systemInstruction = "Eres un especialista en arquitectura de Gems de Google Gemini para educación.";
      prompt = `Genera las System Instructions completas para un Gem de Asesor Académico Universitario sobre ${submissionContent || "Metodología de la Investigación"}. Incluye Rol, Tarea, Contexto, Restricciones Socráticas y 3 Preguntas de Inicio.`;
    } else if (currentActivity.id === 2) {
      // Documentación Científica
      systemInstruction = "Eres un analista bibliométrico experto en NotebookLM y Deep Research.";
      prompt = `Genera una Matriz Comparativa de Investigación en formato Markdown con 3 artículos científicos sobre IA en Educación, incluyendo Autor/Año, Metodología, Hallazgos y 2 Brechas Teóricas identificadas.`;
    } else if (currentActivity.id === 3) {
      // APA 7
      systemInstruction = "Eres un editor académico certificado en la 7ma edición de Normas APA.";
      prompt = `Redacta un esquema y borrador de Ensayo Académico en Norma APA 7 sobre 'Ética y Gobernanza de la IA según el Consenso de Beijing'. Incluye Portada, Citas parentéticas, Citas narrativas y 3 Referencias con sangría francesa.`;
    } else if (currentActivity.id === 4) {
      // Audiovisual NanoBanana / Video Flow
      systemInstruction = "Eres un director de arte y diseñador de prompts cinematográficos para modelos como NanoBanana y Veo/Video Flow.";
      prompt = `Genera un Guion Técnico Audiovisual de 60 segundos en tabla Markdown con 4 escenas sobre 'Sinergia Humano-IA'. Para cada escena incluye: Locución de audio y Prompt Cinematográfico en inglés técnico (8k, photorealistic, 35mm lens, volumetric lighting).`;
    } else {
      // Presentación Final
      systemInstruction = "Eres un evaluador del Programa EXPLORERS.";
      prompt = `Sintetiza el Portafolio de Evidencias de Nivel 01 DISCOVER para el estudiante '${studentName || "Docente Explorer"}', consolidando el Gem Asesor, la Matriz de Investigación, el Ensayo APA 7 y la Propuesta Audiovisual en un informe ejecutivo de acreditación.`;
    }

    try {
      const res = await fetch("/api/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, systemInstruction, temperature: 0.7 })
      });
      const data = await res.json();
      setAiDraft(data.output || "Generación completada.");
      setSubmissionContent(data.output || "");
    } catch (err: any) {
      setAiDraft("Error al generar borrador: " + (err?.message || "Verifique la API."));
    } finally {
      setGeneratingWithAI(false);
    }
  };

  const handleSubmitDeliverable = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !submissionContent.trim()) {
      alert("Por favor completa tu Nombre y el Contenido de la Entrega.");
      return;
    }

    onCompleteActivity(currentActivity.id);
    setSubmitted(true);
  };

  const handleCopyTemplatePrompt = () => {
    navigator.clipboard.writeText(currentActivity.templatePrompt);
    setCopiedTemplate(true);
    setTimeout(() => setCopiedTemplate(false), 2000);
  };

  return (
    <section id="sec-lab" className="space-y-6">
      
      {/* Header Banner Explorers Canary Yellow Style */}
      <div className="bg-[#F5B800] border-2 border-[#D99A00] rounded-2xl p-6 sm:p-8 space-y-3 shadow-sm text-gray-950">
        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#0F52BA] text-white text-xs font-bold shadow-2xs">
          <TestTube className="w-3.5 h-3.5" />
          <span>Entorno Práctico de Acreditación</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight font-heading">
          Laboratorio de Aplicación (Actividades Prácticas)
        </h2>
        <p className="text-xs sm:text-sm text-gray-900 font-medium leading-relaxed max-w-3xl">
          Aplica los conocimientos de las secciones anteriores resolviendo los 5 retos académicos. Genera tus entregables interactivos, evalúa su alineación y acredita tu avance del Nivel 01 DISCOVER.
        </p>
      </div>

      {/* Activity Selector Tabs Coursera Style */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {labActivitiesList.map((act) => {
          const isDone = completedActivities.includes(act.id);
          const isSelected = act.id === activeActivityId;
          return (
            <button
              key={act.id}
              onClick={() => handleSelectActivity(act.id)}
              className={`p-3.5 rounded-xl text-left border transition flex flex-col justify-between space-y-2 ${
                isSelected
                  ? "bg-[#EBF3FF] border-[#0056D2] text-[#0056D2] shadow-2xs font-bold"
                  : isDone
                  ? "bg-white border-emerald-300 text-gray-800 hover:border-emerald-500"
                  : "bg-white border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#0056D2]">
                  Reto 0{act.id}
                </span>
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Clock className="w-3.5 h-3.5 text-gray-400" />
                )}
              </div>
              <h4 className="text-xs font-bold leading-snug line-clamp-2 text-gray-900">{act.title}</h4>
              <span className="text-[10px] text-gray-500">{act.duration}</span>
            </button>
          );
        })}
      </div>

      {/* Main Activity Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Activity Details & Guidelines (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-gray-200 rounded-2xl p-6 space-y-5 shadow-2xs">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-[#0056D2]">
              <span>{currentActivity.duration}</span>
              <span>•</span>
              <div className="flex flex-wrap gap-1">
                {currentActivity.toolSet.map((t, i) => (
                  <span key={i} className="px-1.5 py-0.5 rounded bg-gray-100 text-[10px] text-gray-700 border border-gray-200 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mt-2">{currentActivity.title}</h3>
            <p className="text-xs text-[#0056D2] font-semibold mt-0.5">{currentActivity.subtitle}</p>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">{currentActivity.description}</p>
          </div>

          {/* Instructions List */}
          <div className="space-y-2 pt-2 border-t border-gray-200">
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
              Guía de Ejecución:
            </h4>
            <ul className="space-y-1">
              {currentActivity.instructions.map((inst, i) => (
                <li key={i} className="text-xs text-gray-700 flex items-start space-x-2">
                  <span className="text-[#0056D2] font-bold shrink-0">•</span>
                  <span>{inst}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Template Prompt */}
          <div className="space-y-2 pt-2 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                Plantilla Prompt Recomendada:
              </h4>
              <button
                onClick={handleCopyTemplatePrompt}
                className="text-[11px] font-bold text-[#0056D2] hover:underline flex items-center space-x-1"
              >
                {copiedTemplate ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedTemplate ? "Copiado" : "Copiar"}</span>
              </button>
            </div>
            <pre className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-[11px] font-mono text-gray-800 whitespace-pre-wrap max-h-36 overflow-y-auto">
              {currentActivity.templatePrompt}
            </pre>
          </div>

          {/* Rubric Table */}
          <div className="space-y-2 pt-2 border-t border-gray-200">
            <h4 className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Criterios de Evaluación (Rúbrica):
            </h4>
            <div className="space-y-1.5">
              {currentActivity.rubric.map((r, i) => (
                <div key={i} className="bg-gray-50/80 p-2.5 rounded-lg border border-gray-200 text-xs">
                  <div className="flex justify-between font-bold text-gray-900">
                    <span>{r.criteria}</span>
                    <span className="text-[#0056D2]">{r.weight}</span>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-0.5">{r.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Delivery Workbench Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 space-y-5 shadow-2xs flex flex-col justify-between">
          <form onSubmit={handleSubmitDeliverable} className="space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
                <FileText className="w-4 h-4 text-[#0056D2]" />
                <span>Módulo de Entrega y Generación de Entregable</span>
              </h3>
              {completedActivities.includes(currentActivity.id) && (
                <span className="px-2.5 py-0.5 rounded bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200 flex items-center space-x-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Acreditado</span>
                </span>
              )}
            </div>

            {/* Student Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Nombre del Estudiante / Docente *
                </label>
                <input
                  type="text"
                  required
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#0056D2]"
                  placeholder="Ej. Dr. Alejandro Kantún"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  Institución Educativa
                </label>
                <input
                  type="text"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#0056D2]"
                  placeholder="Ej. Universidad EXPLORERS / UNESCO"
                />
              </div>
            </div>

            {/* AI Generator Button */}
            <div className="bg-blue-50/60 p-3.5 rounded-xl border border-blue-100 space-y-2">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-[#0056D2] flex items-center space-x-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Asistente de Redacción Asistida con Gemini AI</span>
                  </h4>
                  <p className="text-[11px] text-gray-600">Genera un primer borrador alineado a la rúbrica del reto actual.</p>
                </div>
                <button
                  type="button"
                  onClick={handleGenerateAIDraft}
                  disabled={generatingWithAI}
                  className="px-3 py-2 rounded-lg bg-[#0056D2] hover:bg-[#00419e] text-white font-bold text-xs transition flex items-center space-x-1.5 disabled:opacity-50"
                >
                  {generatingWithAI ? (
                    <>
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>Generando...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Generar Borrador</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Deliverable Content Textarea */}
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                Entregable Final ({currentActivity.deliverable}) *
              </label>
              <textarea
                required
                rows={10}
                value={submissionContent}
                onChange={(e) => setSubmissionContent(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-xl p-3 text-xs text-gray-900 font-mono focus:outline-none focus:border-[#0056D2] leading-relaxed"
                placeholder="Escribe o pega aquí el contenido de tu entregable final..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-[#0056D2] hover:bg-[#00419e] text-white font-bold text-xs transition shadow-xs flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Registrar y Acreditar Reto 0{currentActivity.id}</span>
              </button>
            </div>
          </form>

          {/* Success Banner */}
          {submitted && (
            <div className="mt-4 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs space-y-1 animate-fadeIn">
              <div className="flex items-center space-x-2 font-bold text-sm">
                <Award className="w-5 h-5 text-emerald-600" />
                <span>¡Reto Acreditado Exitosamente!</span>
              </div>
              <p>Tu entrega ha sido evaluada y registrada en el panel de avances de EXPLORERS Nivel 01.</p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
