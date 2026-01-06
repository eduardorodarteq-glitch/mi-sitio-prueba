window.ACS_GUIDES = {
  howToUseHTML: `
  <h3>Cómo usar COSMOS (rápido)</h3>
  <ol>
    <li>Llena lo mínimo: <b>Intención</b>, <b>Tipo</b>, <b>Nicho</b>, <b>Marca</b>, <b>Nivel</b>, <b>Restricciones</b>.</li>
    <li>Selecciona qué <b>artefactos</b> quieres (prompt, código base, SEO/legal, etc.).</li>
    <li>Activa módulos (WhatsApp, Form, SEO...).</li>
    <li><b>Generar</b>. COSMOS decide MASTER/META/META² y te lo explica con puntajes.</li>
    <li>Usa pestañas para copiar solo lo que necesitas.</li>
  </ol>

  <h4>Qué significa la estrategia</h4>
  <ul>
    <li><b>MASTER:</b> directo, rápido, bajo riesgo/ambigüedad.</li>
    <li><b>META:</b> alto riesgo/alta complejidad: fabrica un prompt robusto primero.</li>
    <li><b>META²:</b> supervisor: decide y hace preguntas críticas si falta info.</li>
  </ul>
  `,

  integrationsHTML: `
  <h3>Guía Integraciones (ultra paso a paso)</h3>

  <h4>0) Regla de oro</h4>
  <ol>
    <li>Primero que tu página funcione <b>sin integraciones</b>.</li>
    <li>Luego agrega <b>1 integración</b> a la vez.</li>
    <li>Después de cada integración: prueba y haz commit.</li>
  </ol>

  <h4>1) WhatsApp flotante</h4>
  <p><b>Dato clave:</b> número internacional sin + ni espacios. México: 52 + (a veces 1) + número.</p>
  <ol>
    <li>En el código base generado busca <code>WA_NUMBER</code>.</li>
    <li>Pega tu número.</li>
    <li>Guarda, recarga.</li>
  </ol>
  <p><b>Prueba:</b> clic → abre chat correcto.</p>

  <h4>2) Formulario (sin backend)</h4>
  <p><b>Opción A — Google Forms (más fácil):</b></p>
  <ol>
    <li>Abre Google Forms → crea formulario.</li>
    <li>Botón <b>Enviar</b> → icono <b>&lt;&gt;</b> (Insertar HTML).</li>
    <li>Copia el <code>&lt;iframe&gt;</code>.</li>
    <li>Pégalo en tu sección contacto (o reemplaza el form local).</li>
  </ol>

  <p><b>Opción B — EmailJS (pro, sin backend):</b></p>
  <ol>
    <li>Entra a EmailJS (web) → Sign up.</li>
    <li>Agrega <b>Email Service</b> (Gmail u otro).</li>
    <li>Crea <b>Email Template</b> con campos: name, email, message.</li>
    <li>Copia: <b>SERVICE_ID</b>, <b>TEMPLATE_ID</b>, <b>PUBLIC_KEY</b>.</li>
    <li>Pégalos en tu JS donde diga EMAILJS_KEYS.</li>
    <li>Prueba enviando y revisa bandeja.</li>
  </ol>

  <h4>3) Agenda / Citas</h4>
  <p><b>Calendly:</b></p>
  <ol>
    <li>Crea evento (15/30 min).</li>
    <li>Share → Add to website → embed.</li>
    <li>Pega el embed en tu sección Agenda.</li>
  </ol>

  <p><b>Google Calendar:</b></p>
  <ol>
    <li>Calendar → Appointment schedule.</li>
    <li>Hazlo público y copia el link.</li>
    <li>En tu web: botón “Reservar” abre ese link.</li>
  </ol>

  <h4>4) Pagos (sin volverte loco)</h4>
  <p><b>Stripe Checkout (rápido):</b> crea links de pago y pon botón a ese link.</p>
  <p><b>MercadoPago:</b> links de pago para demo. Producción requiere integración.</p>

  <h4>5) Analytics</h4>
  <ol>
    <li>Crea propiedad GA4.</li>
    <li>Copia el script y pégalo en <code>&lt;head&gt;</code>.</li>
    <li>Prueba: Realtime en GA4.</li>
    <li>Eventos CTA: dispara <code>gtag('event','click_cta')</code> en botones clave.</li>
  </ol>

  <h4>6) SEO + Legal</h4>
  <p>SEO recomendado: title/description/OG + schema JSON-LD. Legal: plantillas (no reemplaza abogado).</p>
  `
};
