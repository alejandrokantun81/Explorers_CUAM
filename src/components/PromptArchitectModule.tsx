import React, { useState } from "react";
import { Layers, Compass as RouteIcon, Milestone } from "lucide-react";

interface Pillar {
  id: string;
  icon: string;
  title: string;
  sub: string;
  text: string;
  example: string;
}

const pillars: Pillar[] = [
  {
    id: "persona",
    icon: "🎭",
    title: "1. Persona (Rol)",
    sub: "¿Quién debe ser la IA? Define la especialidad y el tono.",
    text: "Actúa como un experto senior en el dominio solicitado. Define la especialidad, el tono (formal/creativo) y los años de experiencia para filtrar el conocimiento de la IA.",
    example: '"Actúa como un experto en productividad y gestión del tiempo para crear un calendario de lanzamientos trimestral."'
  },
  {
    id: "background",
    icon: "🌍",
    title: "2. Background (Contexto)",
    sub: "¿Qué información previa debe conocer? Define el objetivo.",
    text: "Provee la información previa necesaria. Define el público meta, el escenario actual y por qué se está realizando la tarea.",
    example: '"El contexto es una startup de tecnología que lanzará su primera app móvil en 3 meses. El público son jóvenes profesionales."'
  },
  {
    id: "task",
    icon: "🎯",
    title: "3. Task (Tarea)",
    sub: "¿Cuál es la acción central? Utiliza verbos imperativos.",
    text: "La acción central. Debe ser una instrucción clara e imperativa. Define qué se espera obtener exactamente.",
    example: '"Diseña un calendario editorial detallado para redes sociales que incluya fechas, temas, canales y copy sugerido."'
  },
  {
    id: "constraints",
    icon: "🚧",
    title: "4. Constraints (Restricciones)",
    sub: "¿Qué tiene prohibido hacer? Define rieles de seguridad.",
    text: "Los límites del prompt. Prohibiciones, reglas de estilo o elementos que no deben aparecer bajo ninguna circunstancia.",
    example: '"No uses jerga excesivamente técnica. El calendario no debe exceder las 4 publicaciones por semana por canal."'
  },
  {
    id: "output",
    icon: "📦",
    title: "5. Output (Formato)",
    sub: "¿Cómo debe entregar el resultado? Estructura final.",
    text: "Cómo quieres recibir la información. Tablas, listas, código o un tono de voz específico en el texto.",
    example: '"Entrega el calendario en una tabla de Markdown con columnas para: Día, Tema, Canal y Responsable."'
  }
];

interface RouteOption {
  id: string;
  icon: string;
  title: string;
  fullTitle: string;
  cardDesc: string;
  desc: string;
  code: string;
  highlight?: boolean;
}

const routes: RouteOption[] = [
  {
    id: "atomic",
    icon: "⚡",
    title: "Prompt Atómico",
    fullTitle: "Prompt Atómico (Zero-shot)",
    cardDesc: "Tareas simples y directas (Zero-shot).",
    desc: "Usado para tareas rápidas donde el modelo ya tiene suficiente conocimiento implícito. No requiere ejemplos adicionales.",
    code: "Petición: 'Resume este párrafo en 3 puntos clave.'\nSalida: [Resumen directo]"
  },
  {
    id: "fewshot",
    icon: "📋",
    title: "Few-shot Prompt",
    fullTitle: "Few-shot Prompting",
    cardDesc: "Dando ejemplos de estructura y estilo.",
    desc: "Doy ejemplos de cómo quiero el resultado para que el modelo identifique el patrón. Ideal para calendarios o formatos únicos.",
    code: "Ejemplo 1: [Lunes: Reporte]       -> [Resultado X]\nEjemplo 2: [Martes: Analítica]   -> [Resultado Y]\nTarea:     [Miércoles: Lanzamiento] -> [La IA sigue el patrón]"
  },
  {
    id: "cot",
    icon: "🧠",
    title: "Cadena de Pensamiento",
    fullTitle: "Chain-of-Thought",
    cardDesc: "Para lógica y razonamiento por pasos.",
    desc: "Fuerza a la IA a razonar por pasos antes de dar la respuesta final. Ideal para planificación lógica compleja.",
    code: "Instrucción:\n  Paso 1: Evalúa la capacidad.\n  Paso 2: Prioriza tareas.\n  Paso 3: Asigna fechas al calendario."
  },
  {
    id: "mega",
    icon: "🏛️",
    title: "Megaprompt",
    fullTitle: "Megaprompt Sistémico",
    cardDesc: "Configuración sistémica para Proyectos.",
    desc: "Una arquitectura que combina todos los pilares para configurar un agente especializado dentro de un Proyecto o Gem.",
    code: "[PERSONA] + [CONTEXT] + [TASK]\n+ [CONSTRAINTS] + [OUTPUT_SPECS]",
    highlight: true
  }
];

interface Phase {
  id: number;
  badge: string;
  title: string;
  desc: string;
  action: string;
}

const timeline: Phase[] = [
  { id: 1, badge: "Inicio", title: "Fase 1: Descubrimiento", desc: "Pregunta al usuario por su objetivo real antes de proponer cualquier estructura.", action: "> ¿Qué tipo de calendario deseas crear?" },
  { id: 2, badge: "Lógica", title: "Fase 2: Diagnóstico", desc: "Sugiere la ruta (Atómica, Few-shot, etc.) según la complejidad del calendario solicitado.", action: "> Analizando si se requieren ejemplos previos para el formato..." },
  { id: 3, badge: "Diseño", title: "Fase 3: Extracción", desc: "Cuestionario de pilares: Persona (Rol), Background, Tarea y Restricciones del calendario.", action: "> Extrayendo variables de tiempo y recursos..." },
  { id: 4, badge: "Salida", title: "Fase 4: Borrador", desc: "Presentación del prompt final estructurado listo para ejecutar.", action: "> Generando bloque de código de alta precisión..." },
  { id: 5, badge: "Mejora", title: "Fase 5: Refinamiento", desc: "¿El calendario es muy denso? Ajustamos las restricciones y el formato.", action: "> Aplicando feedback iterativo..." }
];

type TabId = "pilares" | "rutas" | "protocolo";

export const PromptArchitectModule: React.FC = () => {
  const [tab, setTab] = useState<TabId>("pilares");
  const [activePillar, setActivePillar] = useState("persona");
  const [activeRoute, setActiveRoute] = useState("atomic");
  const [activePhase, setActivePhase] = useState(1);

  const pillar = pillars.find((p) => p.id === activePillar)!;
  const route = routes.find((r) => r.id === activeRoute)!;
  const phase = timeline.find((t) => t.id === activePhase)!;

  const tabs: { id: TabId; label: string; icon: React.ElementType }[] = [
    { id: "pilares", label: "Los 5 Pilares", icon: Layers },
    { id: "rutas", label: "Rutas de Diagnóstico", icon: RouteIcon },
    { id: "protocolo", label: "Protocolo (5 Fases)", icon: Milestone }
  ];

  return (
    <div className="space-y-5">
      {/* Tab Selector */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-3">
        {tabs.map((t) => {
          const Icon = t.icon;
          const isActive = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition ${
                isActive
                  ? "bg-[#0056D2] text-white shadow-xs"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{t.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Los 5 Pilares */}
      {tab === "pilares" && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
            Esta sección desglosa la taxonomía fundamental de un prompt perfecto. Haz clic en cada pilar para ver su definición y un <strong>ejemplo práctico</strong> de cómo implementarlo.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pillar Buttons */}
            <div className="space-y-3">
              {pillars.map((p) => {
                const isActive = p.id === activePillar;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActivePillar(p.id)}
                    className={`w-full flex items-center space-x-4 text-left p-4 rounded-xl border-2 transition ${
                      isActive
                        ? "bg-[#0056D2] border-[#0056D2] text-white shadow-md"
                        : "bg-white border-gray-200 text-gray-900 hover:border-[#0056D2]"
                    }`}
                  >
                    <span className="text-2xl shrink-0">{p.icon}</span>
                    <div>
                      <div className="text-sm font-bold">{p.title}</div>
                      <div className={`text-xs mt-0.5 ${isActive ? "text-blue-100" : "text-gray-500"}`}>{p.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Pillar Panel */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden h-max lg:sticky lg:top-4">
              <div className="flex items-center space-x-4 bg-[#0F52BA] px-6 py-5">
                <span className="text-3xl">{pillar.icon}</span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-blue-200">Pilar Activo</div>
                  <div className="text-lg font-bold text-white font-heading leading-snug">{pillar.title}</div>
                </div>
              </div>
              <div className="px-6 py-4 bg-white border-b border-gray-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-2">¿Qué es?</div>
                <p className="text-xs text-gray-700 leading-relaxed">{pillar.text}</p>
              </div>
              <div className="px-6 py-4 bg-amber-50">
                <div className="text-[10px] font-bold uppercase tracking-wider text-amber-800 mb-2">✦ Ejemplo Práctico</div>
                <p className="text-xs text-gray-800 font-medium italic leading-relaxed">{pillar.example}</p>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 bg-gray-50 border-t border-gray-100">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mr-1">Pilares:</span>
                {pillars.map((p) => (
                  <div
                    key={p.id}
                    className={`w-3 h-3 rounded-full transition ${p.id === activePillar ? "bg-[#0056D2] scale-125" : "bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Rutas de Diagnóstico */}
      {tab === "rutas" && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
            Haz clic en cada tipo de prompt para ver cuándo usarlo y su ejemplo práctico de implementación.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Active Route Panel */}
            <div className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden h-max lg:sticky lg:top-4 lg:order-2">
              <div className="flex items-center space-x-4 bg-emerald-800 px-6 py-5">
                <span className="text-3xl">{route.icon}</span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-200">Ruta Activa</div>
                  <div className="text-lg font-bold text-white font-heading leading-snug">{route.fullTitle}</div>
                </div>
              </div>
              <div className="px-6 py-4 bg-white border-b border-gray-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 mb-2">¿Cuándo usarlo?</div>
                <p className="text-xs text-gray-700 leading-relaxed">{route.desc}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#0056D2] mb-2">✦ Snippet de Ejemplo</div>
                <pre className="bg-white border border-gray-200 rounded-lg p-3 text-[11px] font-mono text-gray-700 whitespace-pre-wrap overflow-x-auto">
                  {route.code}
                </pre>
              </div>
            </div>

            {/* Route Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start lg:order-1">
              {routes.map((r) => {
                const isActive = r.id === activeRoute;
                return (
                  <div
                    key={r.id}
                    onClick={() => setActiveRoute(r.id)}
                    className={`p-5 rounded-xl border-2 cursor-pointer transition ${
                      isActive
                        ? "border-[#0056D2] bg-blue-50 shadow-md"
                        : r.highlight
                        ? "border-amber-200 bg-amber-50 hover:shadow-sm"
                        : "border-gray-200 bg-gray-50 hover:shadow-sm"
                    }`}
                  >
                    <div className="text-xl mb-2">{r.icon}</div>
                    <div className="text-sm font-bold text-gray-900 mb-1">{r.title}</div>
                    <p className="text-[11px] text-gray-600">{r.cardDesc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Protocolo de Interacción */}
      {tab === "protocolo" && (
        <div className="space-y-4 animate-fadeIn">
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
            El Arquitecto opera bajo un proceso estrictamente iterativo y consultivo. Navega por la línea de tiempo para descubrir cómo evoluciona la construcción de un prompt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Timeline */}
            <div className="md:col-span-1">
              <div className="relative border-l-4 border-gray-200 ml-2 pl-8 space-y-8">
                {timeline.map((t) => {
                  const isActive = t.id === activePhase;
                  return (
                    <div key={t.id} className="relative flex items-center min-h-[1.25rem]">
                      <button
                        onClick={() => setActivePhase(t.id)}
                        aria-label={t.title}
                        className={`absolute -left-[2.6rem] top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-4 border-white shadow shrink-0 transition ${
                          isActive ? "bg-[#0056D2] scale-110" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                      <button
                        onClick={() => setActivePhase(t.id)}
                        className={`text-left font-bold text-sm sm:text-base transition ${
                          isActive ? "text-[#0056D2]" : "text-gray-400 hover:text-[#0056D2]"
                        }`}
                      >
                        {t.title}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Phase Panel */}
            <div className="md:col-span-2">
              <div className="bg-[#0A2968] text-white rounded-2xl p-6 sm:p-8 shadow-lg min-h-[300px] flex flex-col justify-center">
                <span className="inline-block w-max bg-[#F5B800] text-gray-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                  {phase.badge}
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-heading mb-3 leading-snug">{phase.title}</h4>
                <p className="text-sm text-blue-100 leading-relaxed mb-5">{phase.desc}</p>
                <div className="bg-[#082866] border border-blue-900 rounded-lg p-4 font-mono text-xs text-emerald-300">
                  {phase.action}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
