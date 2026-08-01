import { ActivityChallenge } from "../types";

export const labActivitiesList: ActivityChallenge[] = [
  {
    id: 1,
    title: "Actividad 1: Asesor Académico",
    subtitle: "Diseño y Construcción de un Gem Especializado para Tutorías",
    duration: "45 min",
    deliverable: "System Prompt + Enlace al Gem Asesor Académico Creado",
    toolSet: ["Google Gemini", "Gems Builder", "AI Studio"],
    description: "Crear un asistente virtual personalizado ('Gem') configurado con instrucciones precisas del sistema para brindar orientación a alumnos de licenciatura en metodología de investigación sin darles las respuestas directamente.",
    instructions: [
      "Paso 1: Define la materia y el perfil del estudiante (ej. Metodología de la Investigación - 4to semestre).",
      "Paso 2: Diseña la System Instruction usando la fórmula ROL + TAREA + CONTEXTO + RESTRICCIONES (Socrático).",
      "Paso 3: Configura el Gem en gemini.google.com ingresando las instrucciones creadas.",
      "Paso 4: Realiza al menos 3 pruebas dialécticas para verificar que el Gem pregunte antes de dar respuestas directas.",
      "Paso 5: Copia la instrucción final y la URL del Gem en el panel de entrega."
    ],
    templatePrompt: `[ROL]: Actúas como un Asesor Académico Universitario de Metodología de la Investigación experto en el enfoque Socrático.
[TAREA]: Guía al estudiante a formular su Pregunta de Investigación y Objetivos Específicos.
[CONTEXTO]: Estudiantes de educación superior elaborando sus proyectos de titulación o tesinas.
[RESTRICCIONES]:
1. NUNCA redactes la pregunta final por el alumno; realiza preguntas guía para que él las deduzca.
2. Si el tema es demasiado amplio, pide delimitar población, espacio geográfico y período temporal.
3. Mantén un tono alentador, profesional y exigente académicamente.
[FORMATO]: Responde en máximo 3 párrafos cortos terminando siempre con una pregunta de reflexión.`,
    rubric: [
      { criteria: "Estructura del Prompt", weight: "30%", description: "Cumple con Rol, Tarea, Contexto y Restricciones explícitas." },
      { criteria: "Estrategia Pedagógica", weight: "40%", description: "Demuestra un enfoque socrático/guía sin sustituir el pensamiento del estudiante." },
      { criteria: "Pruebas de Campo", weight: "30%", description: "Evidencia de interacción con respuestas consistentes y sin alucinaciones." }
    ]
  },
  {
    id: 2,
    title: "Actividad 2: Documentación Científica",
    subtitle: "Análisis Sistemático con NotebookLM y Deep Research",
    duration: "60 min",
    deliverable: "Matriz Comparativa de Fuentes Científicas + Guía de Estudio",
    toolSet: ["NotebookLM", "Deep Research", "Google Docs"],
    description: "Utilizar NotebookLM para cargar un corpus de 3 a 5 artículos científicos en PDF sobre IA en Educación, extrayendo metodología, muestra, hallazgos principales y vacíos de conocimiento con citas textuales automáticas.",
    instructions: [
      "Paso 1: Selecciona 3 artículos científicos en PDF o enlaces académicos sobre IA en Educación.",
      "Paso 2: Crea un cuaderno nuevo en NotebookLM y sube las fuentes documentales.",
      "Paso 3: Solicita a NotebookLM generar una 'Matriz Síntesis' indicando: Autor/Año, Metodología, Hallazgos y Limitaciones.",
      "Paso 4: Haz clic en 'Guía de Estudio' y genera el resumen de audio explicativo de 5 minutos.",
      "Paso 5: Exporta la matriz comparativa con citas en formato de texto a tu reporte."
    ],
    templatePrompt: `Genera una matriz comparativa en tabla Markdown de las fuentes cargadas con las siguientes columnas:
1. Autor(es) y Año
2. Enfoque Metodológico (Cualitativo/Cuantitativo/Mixto)
3. Muestra o Población Estudiada
4. Principales Hallazgos en Alfabetización Digital
5. Cita Textual de Respaldo [Número de Cita]

Al final, redacta un párrafo de síntesis identificando 2 brechas teóricas no resueltas por la literatura.`,
    rubric: [
      { criteria: "Rigor Documental", weight: "35%", description: "Inclusión de al menos 3 fuentes académicas arbitradas correctamente vinculadas." },
      { criteria: "Trazabilidad de Citas", weight: "35%", description: "Uso adecuado de los marcadores de cita generados por NotebookLM." },
      { criteria: "Análisis Crítico", weight: "30%", description: "Identificación clara de limitaciones y brechas en la literatura analizada." }
    ]
  },
  {
    id: 3,
    title: "Actividad 3: Asesor Investigación",
    subtitle: "Redacción y Formateo de Ensayo Académico en Norma APA 7",
    duration: "50 min",
    deliverable: "Ensayo Académico Completo en APA 7 con Citas en Texto y Bibliografía",
    toolSet: ["Google Gemini", "APA 7 Validator", "Ask Gemini"],
    description: "Escribir un ensayo crítico estructurado de 1,200 palabras sobre la integración de la IA según el Consenso de Beijing de la UNESCO, aplicando estrictamente la 7ma edición de Normas APA para citas e historial bibliográfico.",
    instructions: [
      "Paso 1: Define el título del ensayo y la tesis central sobre Ética e IA en Educación.",
      "Paso 2: Utiliza el generador interactivo APA 7 para estructurar Introducción, Desarrollo (3 argumentos), Discusión y Conclusión.",
      "Paso 3: Valida las citas en texto (Parentéticas y Narrativas) según la norma de la American Psychological Association.",
      "Paso 4: Genera la sección de Referencias con sangría francesa y formato correcto de DOI.",
      "Paso 5: Somete el texto al verificado de coherencia para descargar la versión final."
    ],
    templatePrompt: `Actúa como Editor Académico experto en la 7ma Edición de Normas APA.
Revisa y formatea el siguiente texto de ensayo asegurando:
1. Portada con formato académico institucional.
2. Encabezados Nivel 1, 2 y 3 configurados en negrita y alineación correspondiente.
3. Citación parentética (Apellido, Año, p. XX) para citas textuales y (Apellido, Año) para paráfrasis.
4. Lista de Referencias ordenada alfabéticamente con sangría francesa de 1.27 cm.
5. Verificación de tono científico objetivo e impersonal (tercera persona).`,
    rubric: [
      { criteria: "Cumplimiento APA 7", weight: "40%", description: "Precisión estricta en citas parentéticas, narrativas y formato de referencias." },
      { criteria: "Argumentación y Tesis", weight: "35%", description: "Postura clara articulada con los principios del Consenso de Beijing de la UNESCO." },
      { criteria: "Redacción Académica", weight: "25%", description: "Cohesión sintáctica, claridad conceptual y ausencia de vaguedades." }
    ]
  },
  {
    id: 4,
    title: "Actividad 4: Producción Audiovisual",
    subtitle: "Storyboarding y Generación de Prompts con NanoBanana + Video Flow",
    duration: "40 min",
    deliverable: "Guion Audiovisual + Prompts Prometeo/Veo para 4 Escenas Educativas",
    toolSet: ["NanoBanana (Gemini Flash Image)", "Video Flow", "Google Gemini"],
    description: "Diseñar la preproducción de un video educativo de 60 segundos sobre Alfabetización Digital. Crear las instrucciones de toma (prompts fotográficos y cinematográficos) para modelos de generación visual.",
    instructions: [
      "Paso 1: Redacta la locución en off (Voiceover) de 60 segundos dividida en 4 bloques de 15s.",
      "Paso 2: Para cada bloque, genera un Prompt Visual Cinematográfico especificando: Sujeto, Iluminación, Encuadre (Cose/Medium shot), Estilo y Movimiento de cámara.",
      "Paso 3: Genera imágenes de prueba con NanoBanana (Gemini Flash Image) para verificar consistencia estética.",
      "Paso 4: Ensambla el Storyboard en formato de tabla de producción audiovisual.",
      "Paso 5: Guarda la plantilla de prompts lista para procesamiento en modelos de video."
    ],
    templatePrompt: `Crea un guion técnico audiovisual en tabla de 4 columnas:
- Escena y Tiempo (00:00 - 00:15)
- Guion de Audio / Locución en Off
- Descripción de Imagen y Estética
- Prompt Cinematográfico para IA (Inglés técnico: 8k resolution, cinematic lighting, 35mm lens, photorealistic, hyper-detailed)

Tema: "La Sinergia Humano-IA en la Universidad del Futuro".`,
    rubric: [
      { criteria: "Coherencia Narrativa", weight: "30%", description: "El mensaje de audio y la propuesta visual se complementan de manera armónica." },
      { criteria: "Calidad de Prompts de Imagen", weight: "40%", description: "Uso de vocabulario fotográfico profesional (encuadre, lente, iluminación, estilo)." },
      { criteria: "Formato Audiovisual", weight: "30%", description: "Guion técnico estructurado en tiempos utilizables para producción real." }
    ]
  },
  {
    id: 5,
    title: "Actividad 5: Presentación Final",
    subtitle: "Integración de Elementos Visuales y Matriz de Competencias",
    duration: "30 min",
    deliverable: "Portafolio Digital Integrado de Nivel 01 + Certificado de Módulo",
    toolSet: ["Google AI Studio", "Google Slides", "EXPLORERS Dashboard"],
    description: "Consolidar todas las evidencias generadas en las actividades 1 a 4 en una presentación ejecutiva de impacto visual con el marco de competencias del Nivel 01 DISCOVER.",
    instructions: [
      "Paso 1: Reúne el Gem creado (Act. 1), la Matriz de Investigación (Act. 2), el Ensayo APA 7 (Act. 3) y el Storyboard (Act. 4).",
      "Paso 2: Utiliza la plantilla de portafolio para organizar la narrativa del proyecto.",
      "Paso 3: Aplica los principios de jerarquía visual y contraste revisados en la teoría del diseño.",
      "Paso 4: Realiza la autoevaluación final de competencias en el panel interactivo.",
      "Paso 5: Descarga o genera tu constancia acreditada del Módulo LEVEL 01 - DISCOVER."
    ],
    templatePrompt: `Sintetiza mi portafolio de evidencias de la formación EXPLORERS Nivel 01 en una estructura de 5 diapositivas ejecutivas:
Diapositiva 1: Título del Proyecto e Impacto Educativo
Diapositiva 2: Mi Asistente Gem (Propósito e Instrucción Clave)
Diapositiva 3: Hallazgos de Investigación Científica (Resumen Matriz)
Diapositiva 4: Postura Ética y Ensayo APA 7
Diapositiva 5: Propuesta Audiovisual y Conclusiones de Aprendizaje`,
    rubric: [
      { criteria: "Consolidación de Evidencias", weight: "40%", description: "Entrega completa de las 4 actividades previas con estándares de calidad." },
      { criteria: "Diseño e Impacto Visual", weight: "30%", description: "Aplicación de jerarquía tipográfica, espacio en blanco y contraste adecuado." },
      { criteria: "Reflexión Metacognitiva", weight: "30%", description: "Capacidad de argumentar el valor de la IA en la propia práctica profesional." }
    ]
  }
];
