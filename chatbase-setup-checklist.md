# 🤖 GUÍA PASO A PASO: Configuración Chatbase para BZK Omnimind

## 📋 CHECKLIST DE CONFIGURACIÓN

### ✅ PASO 1: Acceso a Chatbase
1. Ve a https://www.chatbase.co
2. Inicia sesión en tu cuenta
3. Busca tu agente: **EDbmwgJtj1wPLDADjfmNi**
4. Haz clic en "Edit" o "Configure"

### ✅ PASO 2: Configuración Básica
```
Nombre del Bot: BZK Assistant
Descripción: Asistente virtual de BZK Omnimind Corporation™
Idioma principal: Español
Idioma secundario: Inglés
```

### ✅ PASO 3: Subir Knowledge Base
1. Ve a la sección "Training Data" o "Knowledge Base"
2. Sube el archivo: `chatbot-knowledge-base.md`
3. Espera a que se procese (puede tomar 5-10 minutos)
4. Verifica que la información se cargó correctamente

### ✅ PASO 4: Configurar Personalidad
**En la sección "Instructions" o "System Prompt", pega:**

```
Eres el asistente virtual oficial de BZK Omnimind Corporation™, empresa líder en soluciones de inteligencia artificial.

PERSONALIDAD:
- Profesional pero amigable
- Experto en tecnología AI
- Orientado a soluciones
- Proactivo en generar leads

PRODUCTOS PRINCIPALES:
- SUPER DOB4 AI™: Sistema de análisis predictivo
- MaTRiX-AI™: Plataforma de gestión empresarial con IA

INFORMACIÓN DE CONTACTO:
- Email: bzukho1981@gmail.com
- Web: www.bzk-omnimind.it.com

INSTRUCCIONES:
1. Siempre identifícate como asistente de BZK Omnimind
2. Enfócate en nuestros productos AI
3. Ofrece demos y consultas gratuitas
4. Captura datos para leads calificados
5. Deriva consultas complejas al email corporativo
```

### ✅ PASO 5: Mensajes del Sistema

**Mensaje de Bienvenida:**
```
¡Hola! 👋 Soy el asistente virtual de **BZK Omnimind Corporation™**.

Estoy aquí para ayudarte con:
🤖 Información sobre nuestras soluciones de IA
💼 Consultas sobre SUPER DOB4 AI™ y MaTRiX-AI™
📊 Demos interactivos de nuestras tecnologías
🎯 Asesoramiento personalizado para tu empresa

¿En qué puedo ayudarte hoy?
```

**Mensaje de Fallback:**
```
Disculpa, no tengo esa información específica. 

Te conectaré con nuestro equipo:
📧 bzukho1981@gmail.com
🌐 www.bzk-omnimind.it.com
📞 Consulta gratuita de 30 minutos

¿Te gustaría que programe una llamada?
```

### ✅ PASO 6: Configurar Lead Capture

**En "Lead Collection" o configuración de formularios:**

**Campos a capturar:**
- Nombre completo
- Email
- Empresa
- Teléfono (opcional)
- Tipo de consulta
- Necesidad específica

**Trigger para captura:**
- Cuando mencionan "demo"
- Cuando preguntan "precio"
- Cuando dicen "contacto"
- Después de explicar productos

### ✅ PASO 7: Configurar Integraciones

**Notificaciones por email:**
- Email destino: bzukho1981@gmail.com
- Activar para: Nuevos leads, consultas urgentes
- Formato: Resumen de conversación + datos del lead

**Webhook (opcional):**
- Si tienes CRM, configura webhook para enviar leads automáticamente

### ✅ PASO 8: Configuración Avanzada

**Horarios de operación:**
- Chatbot: 24/7
- Derivación humana: L-V 9:00-18:00
- Mensaje fuera de horario: "Responderemos en horario laboral"

**Límites de conversación:**
- Máximo 20 mensajes por sesión
- Después de 3 preguntas sin resolver: Ofrecer contacto humano
- Timeout: 30 minutos de inactividad

### ✅ PASO 9: Testing y Validación

**Pruebas obligatorias:**
1. Pregunta sobre SUPER DOB4 AI™
2. Pregunta sobre precios
3. Solicitud de demo
4. Pregunta fuera del conocimiento base
5. Captura de lead completa

**Verificar:**
- Respuestas en español
- Tono profesional
- Captura de datos funciona
- Links a website correctos
- Email de derivación funciona

### ✅ PASO 10: Monitoreo y Optimización

**Dashboard a revisar semanalmente:**
- Número de conversaciones
- Leads capturados
- Preguntas más frecuentes
- Puntos donde se pierde el usuario

**Métricas clave:**
- Tasa de captura de leads: >15%
- Satisfacción del usuario: >4.0/5.0
- Resolución de primera respuesta: >70%

## 🚨 PUNTOS CRÍTICOS

### ⚠️ NO OLVIDES:
- [ ] Verificar que el agente ID es correcto: **EDbmwgJtj1wPLDADjfmNi**
- [ ] Subir el knowledge base completo
- [ ] Probar captura de leads
- [ ] Configurar notificaciones email
- [ ] Verificar links al sitio web

### 🎯 RESULTADOS ESPERADOS:
- Respuestas instantáneas sobre BZK Omnimind
- Captura automática de leads calificados
- Derivación inteligente a humanos
- Reducción de consultas básicas por email
- Mejor experiencia de usuario 24/7

## 📞 SOPORTE:
Si necesitas ayuda con la configuración:
- Email: bzukho1981@gmail.com
- Documentation: Usar archivos creados como referencia