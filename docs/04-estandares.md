# 📐 Estándares de Desarrollo

## Objetivo

Este documento establece los estándares de desarrollo utilizados en el proyecto con el fin de garantizar consistencia, mantenibilidad, calidad y seguridad del código.

Todos los cambios realizados en el proyecto deberán cumplir estas directrices antes de ser integrados a la rama principal.

---

# Filosofía

El proyecto sigue una estrategia basada en:

- Código limpio (Clean Code)
- Principio KISS (Keep It Simple)
- Principio DRY (Don't Repeat Yourself)
- SOLID cuando aplica
- Separación de responsabilidades
- Desarrollo orientado al mantenimiento

---

# Estructura del Proyecto

Toda nueva funcionalidad debe respetar la estructura definida.

```

src/
├── app/
├── components/
├── config/
├── features/
├── hooks/
├── lib/
└── styles/

```

No se deben crear carpetas nuevas sin justificar la necesidad mediante una ADR.

---

# Organización por Features

Cada funcionalidad importante vive dentro de:

```

src/features

```

Ejemplo:

```

features/
contact/
projects/
experience/
about/

```

Cada feature debe contener únicamente los recursos relacionados con esa funcionalidad.

---

# Convenciones de Nombres

## Componentes

PascalCase

```

ContactForm.tsx

Navbar.tsx

ProjectCard.tsx

```

---

## Hooks

camelCase precedido por "use"

```

useTheme.ts

useScroll.ts

```

---

## Funciones

camelCase

```

sendEmail()

validateForm()

createMetadata()

```

---

## Variables

camelCase

```

userEmail

projectList

currentTheme

```

---

## Constantes

UPPER_SNAKE_CASE

```

MAX_REQUESTS

RATE_LIMIT

DEFAULT_THEME

```

---

# TypeScript

Se utiliza TypeScript en modo estricto.

Buenas prácticas:

- Evitar any.
- Utilizar unknown cuando corresponda.
- Tipar Props.
- Tipar respuestas de API.
- Utilizar interfaces o type según el caso.

---

# React

Cada componente debe:

- Tener una única responsabilidad.
- Ser reutilizable.
- Recibir datos mediante Props.
- Evitar lógica excesiva.
- Evitar componentes de más de 250 líneas.

---

# Imports

Orden recomendado:

1. React
2. Librerías externas
3. Componentes
4. Hooks
5. Configuración
6. Utilidades
7. Estilos

Ejemplo:

```tsx
import { useState } from 'react';

import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

import { siteConfig } from '@/config/site';

import { createMetadata } from '@/lib/seo';
```

---

# Estilos

Se utiliza exclusivamente Tailwind CSS.

No se permite:

- CSS Inline.
- Estilos duplicados.
- Clases innecesarias.

---

# Componentes

Todo componente reutilizable debe vivir en:

```

src/components

```

No deben duplicarse componentes existentes.

---

# Configuración

Toda configuración global debe centralizarse en:

```

src/config

```

Ejemplos:

- site.ts
- navigation.ts

---

# APIs

Las API Routes deben:

- Validar datos.
- Manejar errores.
- Responder JSON.
- No exponer información sensible.
- Utilizar variables de entorno.

---

# Seguridad

Todo nuevo desarrollo debe cumplir:

- Validación frontend.
- Validación backend.
- Variables de entorno.
- HTTPS.
- Protección contra spam.
- Rate Limiting cuando aplique.

---

# Calidad

Antes de integrar cambios se debe ejecutar:

```bash
npm run check
```

Este comando ejecuta:

- ESLint
- TypeScript
- Build

No se aceptan cambios que no superen estas validaciones.

---

# Git

## Branch Principal

master

Contiene únicamente versiones estables.

---

## Branch Desarrollo

develop

Integra nuevas funcionalidades antes de producción.

---

## Feature Branches

Formato:

```

feature/nombre-funcionalidad

```

Ejemplos:

```

feature/contact-api

feature/security-headers

feature/blog

```

---

# Flujo de Trabajo

```

master

↓

develop

↓

feature/*

↓

Pull Request

↓

Review

↓

Merge develop

↓

Merge master

↓

Deploy

```

---

# Commits

Se recomienda utilizar Conventional Commits.

Ejemplos:

```

feat: agregar formulario de contacto

fix: corregir validación del correo

docs: actualizar README

refactor: reorganizar arquitectura

style: aplicar prettier

test: agregar pruebas unitarias

chore: actualizar dependencias

```

---

# Documentación

Toda nueva funcionalidad deberá incluir:

- Actualización del README si aplica.
- Actualización del CHANGELOG.
- Actualización del Backlog.
- Nueva ADR si modifica la arquitectura.

---

# Auditorías

Antes de publicar una nueva versión se recomienda ejecutar:

- npm run check
- Lighthouse
- Mozilla Observatory
- Security Headers
- OWASP Dependency Check

---

# Checklist antes del Deploy

- Código compilando.
- ESLint sin errores.
- TypeScript sin errores.
- Build exitoso.
- Variables de entorno configuradas.
- Deploy Preview revisado.
- Documentación actualizada.
- CHANGELOG actualizado.

---

# Referencias

- Clean Code
- SOLID
- OWASP
- Next.js
- TypeScript
- Conventional Commits

---

# Historial de Cambios

## v1.0.0

Creación inicial del documento de estándares.
