import { Tutorial } from "../types";

export const tutorialsList: Tutorial[] = [
  {
    id: "tut-gem",
    title: "Gem - Google Gemini",
    tool: "Google Gemini (Gems)",
    category: "Asistentes Personalizados",
    description: "Aprende a configurar Gems personalizados con instrucciones del sistema, personalidad académica y bases de conocimiento específicas para asesorías universitarias.",
    youtubeId: "NlABP3Q39SQ", // YouTube video ID provided by user
    googleDocsUrl: "https://drive.google.com/file/d/1QlisGJB7WlHpw_TXZN9PrURQVAwQB3LS/view?usp=sharing",
    badge: "Oficial Google",
    keyCommands: [
      "@gemini crear gem",
      "Definir Rol + Tarea + Límites",
      "Probar en Sandbox de Instrucciones"
    ],
    steps: [
      "Ingresa a gemini.google.com y selecciona la pestaña 'Gems' en el panel lateral.",
      "Haz clic en 'Nuevo Gem' e ingresa el Nombre del Asistente Académico.",
      "Configura las Instrucciones del Sistema estructuradas con Rol, Audiencia Objetivo y Restricciones.",
      "Guarda y comparte la liga del Gem con tus estudiantes o equipo de investigación."
    ]
  },
  {
    id: "tut-notebook",
    title: "Investiga con Notebook",
    tool: "Google NotebookLM",
    category: "Investigación & Análisis",
    description: "Convierte tus PDFs, documentos de Google y notas en una base de conocimiento interactiva con citación exacta y generación de resúmenes de audio.",
    youtubeId: "YqDPg3TWaHw",
    googleDocsUrl: "https://drive.google.com/file/d/1-quljpIOKhX0sIFScYEYdcONQvFBSA_e/view?usp=sharing",
    badge: "Laboratorio IA",
    keyCommands: [
      "Subir Fuentes PDF/URL",
      "Generar Resumen de Audio (Deep Dive)",
      "Crear Guía de Estudio / Puntos Clave"
    ],
    steps: [
      "Abre notebooklm.google.com e inicia un nuevo cuaderno de investigación.",
      "Sube hasta 50 fuentes (archivos PDF, diapositivas, URLs de sitios web o documentos).",
      "Haz preguntas directas en el chat. Cada respuesta incluirá citas numeradas a la página exacta.",
      "Genera la 'Guía de Estudio', matriz comparativa o resumen de audio con un solo clic."
    ]
  },
  {
    id: "tut-flow",
    title: "Flow - Google Gemini",
    tool: "Google Gemini Flow",
    category: "Flujos Audiovisuales",
    description: "Aprende a integrar prompts en cadena para generación de guiones, diagramas visuales y prompts de medios interactivos con la suite Gemini.",
    youtubeId: "dQw4w9WgXcQ",
    googleDocsUrl: "https://drive.google.com/file/d/1QlisGJB7WlHpw_TXZN9PrURQVAwQB3LS/view?usp=sharing",
    badge: "Productividad",
    keyCommands: [
      "Prompt en Cadena (Chain-of-thought)",
      "Exportación a Slides y Docs",
      "Análisis Multimodal de Diagramas"
    ],
    steps: [
      "Diseña la secuencia: 1) Investigación teórica, 2) Estructura de guion, 3) Prompts visuales.",
      "Pide a Gemini formatear la salida como tabla interactiva con tiempos y descripciones de escena.",
      "Aplica iteración refinada solicitando cambios específicos de tono o público objetivo."
    ]
  },
  {
    id: "tut-aistudio",
    title: "Diseña sitios web con AI Studio",
    tool: "Google AI Studio",
    category: "Ingeniería Avanzada",
    description: "Prototipado profesional de prompts con selección de modelos (Gemini 3.6 Flash, Pro), ajuste de temperatura, System Instructions y exportación de código.",
    youtubeId: "emZnrPfVvXY",
    googleDocsUrl: "https://drive.google.com/file/d/1B5CgAjX4F2EPJgU6qnsMy5-dv3bgPvRW/view?usp=sharing",
    badge: "Desarrollador",
    keyCommands: [
      "Ajustar Temperatura (0.0 - 1.0)",
      "Añadir System Instructions",
      "Get Code (Node.js / Python / cURL)"
    ],
    steps: [
      "Accede a aistudio.google.com con tu cuenta institucional o personal.",
      "Selecciona 'Create New Prompt' y elige el modelo adecuado (e.g. Gemini 3.6 Flash).",
      "Define la System Instruction en el panel superior y agrega 'Few-Shot Examples'.",
      "Prueba los parámetros de creatividad (temperature) y exporta el prompt en formato JSON/Code."
    ]
  },
  {
    id: "tut-askgemini",
    title: 'Crea Skills con "Pregunta a Gemini"',
    tool: "Google Workspace Ask Gemini",
    category: "Integración Operativa",
    description: "Uso de Gemini integrado en Google Docs, Gmail, Sheets y Slides para redacción asistida, síntesis de correos y análisis de datos en tiempo real.",
    youtubeId: "RTlLMq55iq0",
    googleDocsUrl: "https://drive.google.com/file/d/1Dile-6yqj4cDlOGnrRXulB1ReX5iunUC/view?usp=sharing",
    badge: "Workspace",
    keyCommands: [
      "@Gemini resume este documento",
      "Redacta un correo en tono formal",
      "Genera tabla comparativa en Sheets"
    ],
    steps: [
      "Abre cualquier documento en Google Docs o correo en Gmail.",
      "Haz clic en el icono estrella de Gemini en la esquina superior derecha.",
      "Solicita resúmenes, borradores de respuesta o reescritura de párrafos directamente sobre el archivo.",
      "Acepta e inserta el texto generado en tu flujo de trabajo."
    ]
  },
  {
    id: "tut-espacios",
    title: "Creación de Espacios - Quick",
    tool: "Quick Spaces",
    category: "Colaboración",
    description: "Guía rápida para configurar espacios de trabajo digitales colaborativos con IA compartida para equipos docentes y grupos de investigación.",
    youtubeId: "syEoSDPQd2Y",
    googleDocsUrl: "https://drive.google.com/file/d/1Cer2JI_TpzZBzlO15uzqEEmGEB2ijFA3/view?usp=sharing",
    badge: "Quick",
    keyCommands: [
      "Crear Espacio de Trabajo",
      "Asignar Roles de Miembro",
      "Compartir Repositorio de Prompts"
    ],
    steps: [
      "Accede a la pestaña Espacios y selecciona 'Crear Nuevo Espacio Académico'.",
      "Invita a profesores o investigadores asignando permisos de edición o lectura.",
      "Establece carpetas de prompts compartidos y plantillas evaluativas sincronizadas."
    ]
  },
  {
    id: "tut-agentes",
    title: "Agentes - Quick",
    tool: "Quick AI Agents",
    category: "Automatización",
    description: "Configuración de agentes de IA autónomos de respuesta rápida para atención a dudas de alumnos, revisión de requisitos y validaciones automáticas.",
    youtubeId: "nyz9fUZ_lW0",
    googleDocsUrl: "https://drive.google.com/file/d/1tJtUmO67Z0rseSWyEfjun04xGv4MN_wP/view?usp=sharing",
    badge: "Quick",
    keyCommands: [
      "Agente de Evaluación APA 7",
      "Agente de FAQ Docente",
      "Conectar con Webhook/Google Forms"
    ],
    steps: [
      "Selecciona 'Nuevo Agente Quick' y define su propósito principal.",
      "Suba la base de preguntas frecuentes y reglamentos de la materia.",
      "Habilite el modo de prueba para verificar las respuestas antes de publicarlo en el sitio."
    ]
  },
  {
    id: "tut-conectores",
    title: "Creación de Conectores - Quick",
    tool: "Quick Connectors",
    category: "Integración Operativa",
    description: "Guía rápida para la creación y configuración de conectores de datos con la suite de Google Gemini e integración de servicios externos.",
    youtubeId: "8BeGAtkIG8k",
    googleDocsUrl: "https://drive.google.com/file/d/1nvT-SEfgCsvp4f7--wT1JlnDTHtkEoS2/view?usp=sharing",
    badge: "Quick",
    keyCommands: [
      "Crear Conector de Datos",
      "Configurar Schema & Autenticación",
      "Vincular con Prompts y Agentes"
    ],
    steps: [
      "Accede a la pestaña de Integraciones y haz clic en 'Nuevo Conector Quick'.",
      "Configura el Endpoint, claves de autenticación y métodos de petición (GET/POST).",
      "Define el esquema de datos en formato JSON para la interpretación por Gemini.",
      "Guarda y prueba el conector realizando una consulta de diagnóstico."
    ]
  },
  {
    id: "tut-investigacion-quick",
    title: "Investigación en Quick",
    tool: "Quick Research",
    category: "Investigación & Análisis",
    description: "Aprende a utilizar el módulo de investigación de Quick para explorar fuentes, sintetizar hallazgos y generar reportes estructurados con respaldo de IA dentro del ecosistema Quick.",
    youtubeId: "",
    googleDocsUrl: "https://drive.google.com/file/d/1xKC_1ZJIUZiMX4xB0V39hhi2KYmHImrz/view?usp=sharing",
    badge: "Quick",
    keyCommands: [
      "Iniciar Nueva Investigación",
      "Definir Alcance y Fuentes",
      "Exportar Reporte de Hallazgos"
    ],
    steps: [
      "Accede a la pestaña Investigación dentro de Quick y selecciona 'Nueva Investigación'.",
      "Define el tema, alcance y fuentes preferidas (internas, web o documentos cargados).",
      "Revisa los hallazgos sintetizados con citas y ajusta el enfoque si es necesario.",
      "Exporta el reporte final en el formato requerido para tu equipo o institución."
    ]
  }
];
