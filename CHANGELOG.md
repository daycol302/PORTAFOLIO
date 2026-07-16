# Changelog

Todos los cambios importantes de este proyecto serán documentados en este archivo.

Este proyecto sigue las recomendaciones de:

- [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
- [Semantic Versioning](https://semver.org/lang/es/)

---

# [Unreleased]

## Added

- Pendiente

## Changed

- Pendiente

## Fixed

- Pendiente

## Security

- Pendiente

---

# [1.0.0] - 2026-07-15

## Added

### Infraestructura

- Configuración inicial con Next.js 15.
- Arquitectura basada en Features.
- Configuración centralizada mediante `siteConfig`.
- Integración con Tailwind CSS.
- Configuración de TypeScript Strict.

### UI

- Navbar responsive.
- Hero principal.
- Sección Sobre mí.
- Sección Experiencia.
- Sección Proyectos.
- Sección Contacto.
- Footer.

### SEO

- Metadata dinámica.
- Open Graph.
- Twitter Cards.
- JSON-LD (Schema.org Person).
- Sitemap.
- Robots.
- Canonical URLs.
- Manifest Web.

### Formulario de Contacto

- API `/api/contact`.
- Integración con Resend.
- Validación Backend.
- Validación Frontend.
- Mensajes de error específicos.

### Seguridad

- Rate Limiting con Upstash Redis.
- Variables de entorno.
- HTTPS mediante Vercel.
- Protección contra spam.

### Calidad

- ESLint.
- Prettier.
- Husky.
- lint-staged.
- npm run check.

### Producción

- Deploy automático mediante Vercel.
- Vercel Analytics.
- Speed Insights.

### Documentación

- README.
- Roadmap.
- Arquitectura.
- Design System.
- ADR.
- Backlog.
- Estándares.
- Security Policy.
- Contributing Guide.

---

## Changed

- Optimización de estructura de carpetas.
- Mejora de componentes reutilizables.
- Optimización de imports.
- Organización por Features.

---

## Fixed

- Corrección del manejo de errores del formulario.
- Corrección de reglas ESLint.
- Corrección de tipos TypeScript.
- Corrección del proceso de Build.

---

## Security

- Validaciones Backend.
- Validaciones Frontend.
- Rate Limiting.
- Manejo seguro de variables de entorno.

---

# Versionado

El proyecto utiliza Semantic Versioning.

Formato:

MAJOR.MINOR.PATCH

Ejemplo:

1.0.0

---

## MAJOR

Cambios incompatibles.

Ejemplo:

2.0.0

---

## MINOR

Nuevas funcionalidades compatibles.

Ejemplo:

1.1.0

---

## PATCH

Correcciones de errores.

Ejemplo:

1.0.1

---

# Ejemplo de futuras versiones

## [1.1.0]

### Added

- Blog técnico.

### Changed

- Mejoras de rendimiento.

### Security

- Content Security Policy.

---

## [1.1.1]

### Fixed

- Corrección del formulario de contacto.

---

## [1.2.0]

### Added

- Dashboard administrativo.

---

## [2.0.0]

### Changed

- Migración completa a AWS.
- Nueva arquitectura Cloud Native.

---

# Referencias

https://keepachangelog.com/

https://semver.org/
