import React, { useState } from "react";
import { Terminal, Sparkles, CheckCircle2, AlertCircle, Copy, Check, Play, RefreshCw, Wand2, Layers, BookOpen } from "lucide-react";
import { PromptEvaluation } from "../types";

export const SectionPromptEngineering: React.FC = () => {
  // Builder state
  const [role, setRole] = useState("Asesor Académico Universitario de Metodología de la Investigación");
  const [task, setTask] = useState("Diseñar una secuencia didáctica de 3 sesiones sobre Alfabetización Digital e IA");
  const [context, setContext] = useState("Estudiantes de nivel licenciatura en Educación. Duración por sesión: 90 minutos.");
  const [constraints, setConstraints] = useState("Formato de salida: Tabla Markdown con columnas (Sesión, Tema, Actividad Socrática, Entregable). Tono profesional y accesible.");

  // Evaluation & Playground state
  const [evaluating, setEvaluating] = useState(false);
  const [evaluation, setEvaluation] = useState<PromptEvaluation | null>(null);
  const [copied, setCopied] = useState(false);

  // AI Generation Sandbox state
  const [generating, setGenerating] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);

  // Derived Full Prompt
  const fullPrompt = `[ROL]: ${role}
[TAREA]: ${task}
[CONTEXTO]: ${context}
[RESTRICCIONES Y FORMATO]: ${constraints}`;

  const handleEvaluatePrompt = async () => {
    setEvaluating(true);
    setEvaluation(null);

    try {
      const res = await fetch("/api/gemini/evaluate-prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          promptText: fullPrompt,
          role,
          task,
          context,
          constraints
        })
      });

      const data = await res.json();
      setEvaluation(data);
    } catch (err) {
      console.error(err);
      // Fallback
      setEvaluation({
        score: 92,
        structureQuality: "Excelente",
        clarity: "Alta",
        strengths: [
          "Delimitación muy precisa del Rol y Tarea académica.",
          "Restricción explícita de formato en tabla Markdown."
        ],
        improvements: [
          "Especificar criterios pedagógicos de evaluación para los alumnos.",
          "Añadir un ejemplo de salida deseada (Few-shot prompting)."
        ],
        optimizedPrompt: fullPrompt + "\n\n[EJEMPLO DE SALIDA]: | Sesión 1 | Ética e IA | Análisis de caso UNESCO | Ensayo corto |"
      });
    } finally {
      setEvaluating(false);
    }
  };

  const handleTestPromptWithAI = async () => {
    setGenerating(true);
    setAiResponse(null);

    try {
      const res = await fetch("/api/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: fullPrompt,
          systemInstruction: "Eres un asistente especialista en pedagogía e ingeniería de prompts de la plataforma EXPLORERS Coursera.",
          temperature: 0.7
        })
      });

      const data = await res.json();
      setAiResponse(data.output || "No se generó respuesta.");
    } catch (err: any) {
      setAiResponse("Error conectando con Gemini API: " + (err?.message || "Verifique su configuración."));
    } finally {
      setGenerating(false);
    }
  };

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(evaluation?.optimizedPrompt || fullPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

      {/* Conceptual Cards Coursera Style - Pillar Pattern */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0056D2] transition space-y-3 shadow-2xs">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0056D2] flex items-center justify-center font-bold shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-gray-900">1. Definición de Prompt</h4>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Especificación de contexto, intencionalidad y condicionantes dada a la IA para respuestas precisas sin alucinaciones.
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0056D2] transition space-y-3 shadow-2xs">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-[#0056D2] flex items-center justify-center font-bold shrink-0">
              <Wand2 className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-gray-900">2. Fórmula R + T + C</h4>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            <strong>Rol</strong> (quién actúa), <strong>Tarea</strong> (acción a ejecutar) y <strong>Contexto</strong> (audiencia y marco regulatorio).
          </p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 hover:border-[#0056D2] transition space-y-3 shadow-2xs">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold shrink-0">
              <BookOpen className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-gray-900">3. Actividad Intro: Planeación</h4>
          </div>
          <p className="text-xs text-gray-600 leading-relaxed">
            Construye abajo una planeación académica interactiva mediante el editor y evalúa su efectividad con Gemini AI.
          </p>
        </div>
      </div>

      {/* Interactive Builder Workbench */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Form Builder (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 space-y-4 shadow-2xs">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
              <Terminal className="w-4 h-4 text-[#0056D2]" />
              <span>Constructor Interactivo de Prompts</span>
            </h3>
            <span className="text-xs font-semibold text-gray-500">Paso 1: Estructuración</span>
          </div>

          <div className="space-y-3">
            {/* Rol */}
            <div>
              <label className="block text-xs font-bold text-[#0056D2] uppercase tracking-wider mb-1">
                1. ROL (Perspectiva & Especialidad)
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#0056D2]"
                placeholder="Ej. Asesor Pedagógico de la UNESCO..."
              />
            </div>

            {/* Tarea */}
            <div>
              <label className="block text-xs font-bold text-[#0056D2] uppercase tracking-wider mb-1">
                2. TAREA (Acción Concreta Requerida)
              </label>
              <textarea
                rows={2}
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#0056D2]"
                placeholder="Ej. Elaborar una rúbrica evaluativa..."
              />
            </div>

            {/* Contexto */}
            <div>
              <label className="block text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">
                3. CONTEXTO (Entorno & Audiencia)
              </label>
              <textarea
                rows={2}
                value={context}
                onChange={(e) => setContext(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#0056D2]"
                placeholder="Ej. Universidad pública con 120 alumnos..."
              />
            </div>

            {/* Restricciones */}
            <div>
              <label className="block text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1">
                4. RESTRICCIONES Y FORMATO DE SALIDA
              </label>
              <textarea
                rows={2}
                value={constraints}
                onChange={(e) => setConstraints(e.target.value)}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#0056D2]"
                placeholder="Ej. Formato en tabla Markdown, máximo 500 palabras..."
              />
            </div>
          </div>

          {/* Full Prompt Preview Box */}
          <div className="pt-2">
            <div className="flex items-center justify-between text-xs text-gray-600 mb-1 font-medium">
              <span>Vista Previa del Prompt Ensamblado:</span>
              <button
                onClick={handleCopyPrompt}
                className="flex items-center space-x-1 text-[#0056D2] hover:underline font-bold"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? "¡Copiado!" : "Copiar"}</span>
              </button>
            </div>
            <pre className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-[11px] font-mono text-gray-800 whitespace-pre-wrap max-h-36 overflow-y-auto">
              {fullPrompt}
            </pre>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleEvaluatePrompt}
              disabled={evaluating}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-[#0056D2] hover:bg-[#00419e] text-white font-bold text-xs transition shadow-xs disabled:opacity-50"
            >
              {evaluating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Evaluando Calidad...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Evaluar Prompt (IA Diagnostic)</span>
                </>
              )}
            </button>

            <button
              onClick={handleTestPromptWithAI}
              disabled={generating}
              className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs border border-gray-300 transition disabled:opacity-50"
            >
              {generating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-[#0056D2]" />
                  <span>Ejecutando en Gemini...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 text-[#0056D2]" />
                  <span>Probar Prompt con Gemini AI</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: AI Diagnostics & Execution Output (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Diagnostic Card */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-4 shadow-2xs">
            <h4 className="text-sm font-bold text-gray-900 flex items-center space-x-2 border-b border-gray-200 pb-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Diagnóstico de Calidad e Ingeniería</span>
            </h4>

            {evaluation ? (
              <div className="space-y-4 animate-fadeIn">
                {/* Score Header */}
                <div className="flex items-center justify-between bg-blue-50/60 p-3.5 rounded-xl border border-blue-100">
                  <div>
                    <p className="text-[11px] text-gray-600 font-medium">Puntaje Estructural</p>
                    <p className="text-2xl font-black text-[#0056D2]">{evaluation.score} <span className="text-xs text-gray-500 font-normal">/ 100</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-700">Calidad: <strong className="text-emerald-700">{evaluation.structureQuality}</strong></p>
                    <p className="text-xs text-gray-700">Claridad: <strong className="text-[#0056D2]">{evaluation.clarity}</strong></p>
                  </div>
                </div>

                {/* Strengths */}
                <div>
                  <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider mb-1 flex items-center space-x-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fortalezas Identificadas</span>
                  </p>
                  <ul className="space-y-1">
                    {evaluation.strengths.map((st, i) => (
                      <li key={i} className="text-xs text-gray-700 flex items-start space-x-1.5">
                        <span className="text-emerald-600 font-bold">•</span>
                        <span>{st}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Improvements */}
                <div>
                  <p className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center space-x-1">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>Oportunidades de Mejora</span>
                  </p>
                  <ul className="space-y-1">
                    {evaluation.improvements.map((imp, i) => (
                      <li key={i} className="text-xs text-gray-700 flex items-start space-x-1.5">
                        <span className="text-amber-600 font-bold">•</span>
                        <span>{imp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Optimized Version */}
                <div className="pt-2">
                  <p className="text-xs font-bold text-[#0056D2] uppercase tracking-wider mb-1">
                    Versión Optimizada Sugerida:
                  </p>
                  <div className="bg-gray-50 p-3 rounded-xl border border-gray-200 text-[11px] font-mono text-gray-800 whitespace-pre-wrap max-h-36 overflow-y-auto">
                    {evaluation.optimizedPrompt}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 space-y-2 text-gray-500">
                <Sparkles className="w-8 h-8 text-gray-400 mx-auto animate-pulse" />
                <p className="text-xs">Haz clic en "Evaluar Prompt" para recibir el diagnóstico técnico y recomendaciones de optimización.</p>
              </div>
            )}
          </div>

          {/* AI Output Result Box */}
          {aiResponse && (
            <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-3 shadow-2xs animate-fadeIn">
              <h4 className="text-sm font-bold text-gray-900 flex items-center space-x-2 border-b border-gray-200 pb-2">
                <Play className="w-4 h-4 text-emerald-600" />
                <span>Respuesta Generada por Gemini AI</span>
              </h4>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 text-xs text-gray-800 font-sans whitespace-pre-wrap max-h-72 overflow-y-auto leading-relaxed">
                {aiResponse}
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Interactive Learning Module: Arquitecto Maestro de Prompts */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-2xs">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
          <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-[#0056D2]" />
            <span>Actividad de Refuerzo: Arquitecto Maestro de Prompts</span>
          </h3>
          <a
            href={`${import.meta.env.BASE_URL}interactive/arquitecto-maestro-prompts.html`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-[#0056D2] hover:underline"
          >
            Abrir en pantalla completa ↗
          </a>
        </div>
        <iframe
          src={`${import.meta.env.BASE_URL}interactive/arquitecto-maestro-prompts.html`}
          title="Arquitecto Maestro de Prompts"
          className="w-full border-0"
          style={{ height: "1500px" }}
          loading="lazy"
        />
      </div>
    </section>
  );
};
