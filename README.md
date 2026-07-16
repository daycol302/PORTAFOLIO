# 🚀 Daynover Portfolio

> Portafolio profesional desarrollado con Next.js 15, TypeScript y una arquitectura modular orientada por funcionalidades (Feature-Based Architecture). Diseñado bajo principios de rendimiento, seguridad, mantenibilidad y escalabilidad.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![React](https://img.shields.io/badge/React-19-61DAFB)
![License](https://img.shields.io/badge/License-MIT-green)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)
![Status](https://img.shields.io/badge/Status-Production-success)

---

# 📖 Descripción

Este proyecto corresponde a mi portafolio profesional como desarrollador Full Stack.

No fue construido únicamente para mostrar proyectos, sino como una aplicación moderna que refleja buenas prácticas de ingeniería de software, incluyendo:

- Arquitectura modular.
- Calidad de código.
- Seguridad.
- SEO.
- Accesibilidad.
- Observabilidad.
- Despliegue continuo.

El objetivo es demostrar tanto habilidades de desarrollo como de diseño de software y operaciones.

---

# ✨ Características

- Arquitectura Feature-Based
- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- Animaciones con Framer Motion
- SEO avanzado
- JSON-LD
- Sitemap
- Robots.txt
- API Contact
- Resend
- Rate Limiting con Upstash Redis
- Vercel Analytics
- Speed Insights
- Responsive Design
- Dark Mode
- Validaciones frontend y backend
- ESLint + Prettier
- Husky + lint-staged

---

# 🏗 Arquitectura

El proyecto sigue una arquitectura modular basada en funcionalidades.

```

src/
│
├── app/
├── components/
├── config/
├── features/
├── hooks/
├── lib/
└── styles/

```

Documentación completa:

📄 docs/01-arquitectura.md

---

# 🛠 Stack Tecnológico

| Tecnología       | Uso           |
| ---------------- | ------------- |
| Next.js 15       | Framework     |
| React 19         | UI            |
| TypeScript       | Tipado        |
| Tailwind CSS     | Estilos       |
| Framer Motion    | Animaciones   |
| Resend           | Emails        |
| Upstash Redis    | Rate Limiting |
| Vercel           | Hosting       |
| Vercel Analytics | Métricas      |
| ESLint           | Calidad       |
| Husky            | Git Hooks     |

---

# 🚀 Instalación

```bash
git clone ...

npm install

npm run dev
```

---

# ⚙ Variables de entorno

```
RESEND_API_KEY=

CONTACT_EMAIL=

UPSTASH_REDIS_REST_URL=

UPSTASH_REDIS_REST_TOKEN=
```

---

# 📜 Scripts

```
npm run dev

npm run build

npm run lint

npm run lint:fix

npm run typecheck

npm run check
```

---

# 🔐 Seguridad

El proyecto implementa:

- Validación frontend
- Validación backend
- Rate Limiting
- Variables de entorno
- Security Headers
- CSP (pendiente de implementación)
- HTTPS
- Protección contra spam

Más información:

📄 SECURITY.md

---

# 📊 Calidad

Antes de cada despliegue se ejecuta:

- ESLint
- TypeScript
- Build
- Husky
- lint-staged

---

# 🌐 Despliegue

Producción:

https://portafolio-ten-nu-85.vercel.app

Proveedor:

Vercel

---

# 📚 Documentación

| Documento                | Descripción         |
| ------------------------ | ------------------- |
| docs/00-roadmap.md       | Roadmap             |
| docs/01-arquitectura.md  | Arquitectura        |
| docs/02-design-system.md | Sistema de diseño   |
| docs/03-decisiones.md    | Decisiones técnicas |
| docs/04-backlog.md       | Backlog             |
| docs/05-estandares.md    | Estándares          |

---

# 🗺 Roadmap

Consultar:

docs/00-roadmap.md

---

# 📄 Licencia

Este proyecto se distribuye bajo una licencia **All Rights Reserved**.

Su código fuente puede consultarse con fines educativos, pero no puede copiarse, redistribuirse o comercializarse sin autorización del autor.

Consulte el archivo **LICENSE** para más información.
