# 🤝 Contributing Guide

## Portafolio Profesional - Daynover García Zapata

---

# Objetivo

Este documento define el proceso de contribución para mantener la calidad, consistencia y estabilidad del proyecto.

Todo cambio debe seguir estas directrices antes de ser integrado a la rama principal.

---

# Filosofía

Este proyecto busca mantener:

- Código limpio
- Arquitectura consistente
- Documentación actualizada
- Revisiones de código
- Calidad antes que velocidad

---

# Requisitos

Antes de comenzar asegúrate de tener instalado:

- Node.js 22+
- npm
- Git

Verificar versiones:

```bash
node -v
npm -v
git --version
```

---

# Instalación

Clonar el repositorio

```bash
git clone https://github.com/daycol302/PORTAFOLIO.git
```

Entrar al proyecto

```bash
cd PORTAFOLIO
```

Instalar dependencias

```bash
npm install
```

Crear archivo de variables

```text
.env.local
```

Ejemplo

```env
RESEND_API_KEY=

UPSTASH_REDIS_REST_URL=

UPSTASH_REDIS_REST_TOKEN=

CONTACT_EMAIL=
```

Iniciar proyecto

```bash
npm run dev
```

---

# Flujo de Trabajo

El proyecto utiliza Git Flow simplificado.

```
master
│
└── develop
      │
      ├── feature/contact-api
      ├── feature/security
      ├── feature/blog
      └── feature/testing
```

---

# Crear una nueva funcionalidad

Actualizar develop

```bash
git checkout develop

git pull origin develop
```

Crear rama

```bash
git checkout -b feature/nombre-funcionalidad
```

Ejemplo

```bash
git checkout -b feature/security-headers
```

---

# Desarrollo

Durante el desarrollo:

- Mantener commits pequeños.
- Escribir código limpio.
- Seguir los estándares del proyecto.
- Evitar código duplicado.

---

# Validaciones

Antes de realizar un commit ejecutar:

```bash
npm run check
```

Este comando ejecuta:

- ESLint
- TypeScript
- Build de producción

No se deben integrar cambios con errores.

---

# Formato del Código

Aplicar formato automáticamente:

```bash
npm run format
```

Corregir problemas de ESLint

```bash
npm run lint:fix
```

---

# Commits

El proyecto utiliza Conventional Commits.

Ejemplos

```text
feat: agregar formulario de contacto

fix: corregir validación del correo

docs: actualizar README

refactor: reorganizar arquitectura

style: aplicar prettier

test: agregar pruebas unitarias

chore: actualizar dependencias
```

---

# Pull Requests

Antes de abrir un Pull Request verificar:

- Proyecto compila
- npm run check exitoso
- Documentación actualizada
- CHANGELOG actualizado
- Sin conflictos

---

# Revisión de Código

Todo Pull Request debe revisar:

- Legibilidad
- Arquitectura
- Seguridad
- Rendimiento
- Consistencia
- Documentación

---

# Checklist

Antes del Merge

- Código compilando
- ESLint sin errores
- Build exitosa
- Variables configuradas
- Documentación actualizada
- Changelog actualizado

---

# Documentación

Toda nueva funcionalidad deberá actualizar cuando aplique:

- README.md
- CHANGELOG.md
- BACKLOG
- ADR
- Documentación técnica

---

# Estándares

Consultar

docs/05-estandares.md

---

# Arquitectura

Consultar

docs/01-arquitectura.md

---

# Seguridad

Consultar

SECURITY.md

---

# Roadmap

Consultar

docs/00-roadmap.md

---

# Definition of Done (DoD)

Una tarea se considera finalizada únicamente cuando cumple todos los siguientes criterios:

- [x] El código compila sin errores.
- [x] `npm run check` finaliza correctamente.
- [x] Se añadieron o actualizaron pruebas (cuando aplique).
- [x] La documentación fue actualizada.
- [x] El CHANGELOG refleja el cambio.
- [x] No existen secretos en el código.
- [x] La funcionalidad fue probada manualmente.
- [x] El despliegue de vista previa (Preview Deployment) fue verificado.

# Código de Conducta

Se espera que toda interacción sea:

- Profesional
- Respetuosa
- Colaborativa
- Constructiva

---

# Historial

## v1.0.0

Primera versión de la guía de contribución.
