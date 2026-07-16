# 🏗 Arquitectura del Proyecto

## Objetivo

Este documento describe la arquitectura del portafolio profesional, las decisiones de diseño adoptadas, la organización del código y el flujo de comunicación entre los diferentes componentes del sistema.

El objetivo principal es garantizar que el proyecto sea:

- Escalable
- Mantenible
- Seguro
- Fácil de extender
- Fácil de comprender para nuevos desarrolladores

---

# Principios de Arquitectura

Durante el desarrollo del proyecto se adoptaron los siguientes principios de ingeniería:

- Separación de responsabilidades (Separation of Concerns)
- Arquitectura basada en funcionalidades (Feature-Based Architecture)
- Componentes reutilizables
- Configuración centralizada
- Tipado estricto con TypeScript
- Configuración desacoplada del código
- Código orientado al mantenimiento

Cada módulo tiene una única responsabilidad y evita dependencias innecesarias con otros módulos del sistema.

---

# Arquitectura General

El proyecto está construido utilizando Next.js 15 con App Router como framework principal.

La aplicación está desplegada sobre la infraestructura Edge de Vercel.

```

Internet

↓

Vercel Edge Network

↓

Next.js 15

↓

App Router

↓

React Components

↓

Features

↓

Servicios externos

↓

Resend

↓

Upstash Redis

```

---

# Arquitectura Física

```

Cliente

↓

Vercel CDN

↓

Next.js

├── Server Components

├── Client Components

├── API Routes

↓

Servicios

├── Resend

└── Upstash Redis

```

---

# Arquitectura por Capas

La aplicación está organizada en diferentes capas.

## Presentación

Responsable de la interfaz gráfica.

Incluye:

- Layout
- Navbar
- Hero
- Contact
- Experience
- Projects

---

## Componentes Compartidos

Componentes reutilizables.

Ejemplo:

```

Button

Card

ThemeProvider

Icons

```

---

## Features

Cada funcionalidad importante vive en su propio módulo.

```

features/

hero/

about/

contact/

projects/

experience/

```

Cada Feature contiene únicamente el código relacionado con dicha funcionalidad.

---

## Configuración

Toda la configuración global del proyecto se encuentra centralizada.

Ejemplos:

```

config/

site.ts

navigation.ts

```

Esto evita duplicación de información.

---

## Utilidades

Funciones auxiliares.

```

lib/

seo.ts

utils.ts

```

---

# Flujo de Datos

El siguiente diagrama describe el flujo del formulario de contacto.

```

Usuario

↓

Formulario

↓

Validación HTML

↓

Validación React

↓

POST /api/contact

↓

Validación Backend

↓

Rate Limiting

↓

Resend

↓

Correo

↓

Respuesta JSON

↓

Usuario

```

---

# Comunicación entre Componentes

Los componentes únicamente intercambian información mediante Props.

No existe comunicación directa entre módulos independientes.

Esto reduce el acoplamiento.

---

# API

Actualmente la aplicación expone una única API.

```

POST /api/contact

```

Responsabilidades:

- Validar datos
- Limitar peticiones
- Enviar correo
- Responder errores
- Registrar eventos

---

# Dependencias Externas

El proyecto integra los siguientes servicios:

## Resend

Servicio utilizado para el envío de correos electrónicos.

Razones:

- API sencilla
- Excelente integración con Next.js
- Alta disponibilidad

---

## Upstash Redis

Utilizado para implementar Rate Limiting.

Permite:

- Limitar spam
- Reducir abuso
- Proteger la API

---

## Vercel

Proveedor de infraestructura.

Funciones:

- Hosting
- CDN
- SSL
- Deploy automático
- Analytics
- Speed Insights

---

# Organización del Código

La estructura del proyecto sigue el siguiente patrón:

```

src/

app/

components/

config/

features/

hooks/

lib/

styles/

```

Cada carpeta posee una responsabilidad claramente definida.

---

# Escalabilidad

La arquitectura fue diseñada para facilitar la incorporación de nuevas funcionalidades.

Agregar un nuevo módulo implica únicamente crear una nueva carpeta dentro de:

```

features/

```

sin modificar la estructura existente.

---

# Seguridad

La arquitectura incorpora:

- Validaciones frontend
- Validaciones backend
- Variables de entorno
- Rate Limiting
- HTTPS
- Headers de seguridad
- Protección contra spam

---

# Rendimiento

El proyecto fue optimizado considerando:

- Server Components
- Lazy Loading
- Optimización de imágenes
- Metadata dinámica
- Code Splitting
- Caché proporcionada por Vercel

---

# Observabilidad

La aplicación incorpora herramientas para el monitoreo de producción.

Actualmente:

- Vercel Analytics
- Speed Insights

Futuras integraciones:

- SonarCloud
- Sentry
- CloudWatch (AWS)

---

# Riesgos Conocidos

Actualmente existen las siguientes mejoras planificadas:

- Implementación de Content Security Policy (CSP)
- Auditorías automáticas
- Pipeline CI/CD
- Pruebas automatizadas

---

# Evolución Arquitectónica

Versión inicial

↓

Arquitectura por Features

↓

API protegida

↓

Deploy en Vercel

↓

Observabilidad

↓

Hardening de Seguridad

↓

Integración Cloud

---

# Referencias

Next.js

React

TypeScript

Vercel

Resend

Upstash

OWASP Top 10

---

# Historial de Cambios

Versión 1.0.0

Documento inicial de arquitectura.
