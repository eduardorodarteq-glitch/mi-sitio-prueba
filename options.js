// COSMOS Catalog v3.0 — editable desde la app (Editor)

window.ACS_DEFAULTS = {
  version: "v3.0-cosmos",

  // Campos (siempre: búsqueda + Personalizado)
  fields: [
    { id:"intent", label:"Intención principal", type:"select", required:true, options:[
      "Captar leads",
      "Vender / cobrar",
      "Reservas / citas",
      "Informar / autoridad",
      "Soporte / atención",
      "Automatizar procesos",
      "Branding / presencia"
    ], help:"Qué quieres lograr realmente." },

    { id:"artifactMain", label:"Tipo principal", type:"select", required:true, options:[
      "Web (sitio/landing)",
      "App (web app)",
      "Workflow (automatización)",
      "Contenido (video/guion)",
      "Imágenes (branding/ads)",
      "Mixto (varios)"
    ], help:"Qué tipo de proyecto es." },

    { id:"niche", label:"Nicho / industria", type:"select", required:true, options:[
      "Abogados / legal",
      "Restaurante / comida",
      "Gimnasio / fitness",
      "Clínica / salud",
      "Ecommerce / tienda",
      "Servicios locales",
      "SaaS / software",
      "Educación / cursos",
      "Inmobiliaria",
      "Eventos / bodas"
    ], help:"El giro del negocio." },

    { id:"brand", label:"Marca / nombre", type:"text", required:true, placeholder:"Ej: García y Asociados", help:"Nombre del proyecto/negocio." },

    { id:"audience", label:"Audiencia", type:"select", required:false, options:[
      "Público general",
      "B2B (empresas)",
      "B2C (consumidor final)",
      "Local (ciudad)",
      "Nicho específico"
    ], help:"A quién va dirigido." },

    { id:"offer", label:"Oferta / propuesta", type:"text", required:false, placeholder:"Ej: Asesoría legal integral con respuesta en 24h", help:"Qué vendes/entregas." },

    { id:"level", label:"Nivel de entrega", type:"select", required:true, options:[
      "Demo (mostrar rápido)",
      "MVP (funcional)",
      "Pro (cliente real)",
      "Agencia (entregable completo)"
    ], help:"Define profundidad." },

    { id:"constraints", label:"Restricciones", type:"select", required:true, options:[
      "Sin instalar, barato, web-only (recomendado)",
      "Máxima calidad aunque sea más complejo",
      "Rápido primero, optimizar después",
      "Sin servicios externos (todo local)",
      "Permitir servicios externos (Calendly/Forms/etc)"
    ], help:"Reglas de tu mundo." },

    { id:"iaTarget", label:"IA destino (dónde lo pegarás)", type:"select", required:true, options:[
      "Cualquier IA (agnóstico)",
      "ChatGPT",
      "Claude",
      "Gemini",
      "Copilot (asistencia code)",
      "Midjourney/SD (imágenes)",
      "Suno (música)"
    ], help:"Para adaptar compatibilidad." },

    { id:"style", label:"Estilo visual/copy", type:"select", required:true, options:[
      "Corporate premium",
      "Minimal limpio",
      "Moderno tech",
      "Elegante oscuro",
      "Creativo / bold"
    ], help:"Look & feel." },

    { id:"colors", label:"Colores", type:"select", required:true, options:[
      "Elige tú según estilo",
      "Azul / blanco (confianza)",
      "Negro / dorado (lujo)",
      "Verde / blanco (salud)",
      "Rojo / negro (energía)"
    ], help:"Paleta." },

    { id:"city", label:"Ciudad (SEO local)", type:"text", required:false, placeholder:"Ej: Ciudad Juárez", help:"Si aplica SEO local." },

    { id:"whatsapp", label:"WhatsApp (internacional)", type:"text", required:false, placeholder:"Ej: 5216561234567", help:"Sin +, sin espacios." },

    { id:"services", label:"Servicios/features (coma)", type:"text", required:false, placeholder:"Ej: Civil, Mercantil, Laboral", help:"Lista rápida." },

    { id:"seoKeywords", label:"SEO keywords (coma)", type:"text", required:false, placeholder:"Ej: abogados en juarez, derecho laboral...", help:"Opcional." },

    { id:"notesExtra", label:"Notas extra (brief)", type:"textarea", required:false, placeholder:"Ej: explica como primaria, no uses librerías, etc.", help:"Cualquier cosa clave." }
  ],

  // Artefactos (multi-salida)
  artifacts: [
    { id:"art_master", label:"Prompt (MASTER/META/META²)", desc:"Prompt final listo para pegar. COSMOS decide estrategia.", default:true },
    { id:"art_workflow", label:"Workflow blueprint", desc:"Paso a paso para n8n/Make/Zapier/ManyChat según caso.", default:false },
    { id:"art_codebase", label:"Código base (index.html)", desc:"Genera plantilla web completa con módulos activados (local).", default:true },
    { id:"art_integrations", label:"Guía Integraciones", desc:"Instrucciones ultra detalladas: WhatsApp, Forms, Calendly, pagos, analytics.", default:true },
    { id:"art_seo_legal", label:"SEO + Legal", desc:"Meta tags, OG, schema + Privacidad/Términos/Aviso legal.", default:true },
    { id:"art_assets", label:"Assets (prompts)", desc:"Prompts para imágenes/música/video según proyecto.", default:false }
  ],

  // Módulos (para web/código base)
  modules: [
    { id:"mod_whatsapp", label:"WhatsApp flotante", desc:"Botón flotante con número editable.", default:true },
    { id:"mod_form", label:"Formulario (local + guía)", desc:"Formulario con validación + instrucciones Forms/EmailJS.", default:true },
    { id:"mod_agenda", label:"Agenda / citas", desc:"Sección + guía Calendly/Google.", default:false },
    { id:"mod_pay", label:"Pagos", desc:"Placeholder + guía Stripe/MercadoPago.", default:false },
    { id:"mod_analytics", label:"Analytics", desc:"Guía GA4 + eventos CTA.", default:false },
    { id:"mod_chat", label:"Bot / ayuda", desc:"Bot local simple para explicar la página.", default:false },
    { id:"mod_media", label:"Música + galería", desc:"Audio local opcional + galería.", default:false },
    { id:"mod_seo", label:"SEO", desc:"Meta tags + OG + schema + tips sitemap.", default:true },
    { id:"mod_legal", label:"Legal", desc:"Privacidad/Términos/Aviso legal (plantilla).", default:true },
    { id:"mod_access", label:"Accesibilidad", desc:"Buenas prácticas A11y.", default:true },
    { id:"mod_perf", label:"Performance", desc:"Peso, lazy, cache tips.", default:true }
  ],

  // Herramientas recomendadas (para guías)
  tools: {
    forms: ["Google Forms (embed)", "EmailJS (sin backend)"],
    agenda: ["Calendly (embed)", "Google Calendar appointment schedule"],
    payments: ["Stripe Checkout (link)", "MercadoPago (links de pago)"],
    analytics: ["Google Analytics 4 (GA4)"],
    workflows: ["n8n (selfhost opcional)", "Make", "Zapier", "ManyChat"]
  }
};
