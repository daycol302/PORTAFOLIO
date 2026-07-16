# 🚀 Portafolio - Daynover García Zapata

Portafolio profesional desarrollado con **Next.js 15**, **React 19**, **TypeScript** y **Tailwind CSS**, diseñado para presentar mi experiencia, proyectos y habilidades como Desarrollador Full Stack.

## ✨ Características

- ⚡ Next.js App Router
- 🎨 Diseño responsive
- 🌙 Modo oscuro
- 📧 Formulario de contacto con Resend
- 🛡️ Rate Limiting con Upstash Redis
- 🔍 SEO optimizado (Metadata, Sitemap, Robots, JSON-LD)
- 📈 Preparado para Vercel Analytics
- ♿ Accesibilidad y buenas prácticas

## 🛠️ Tecnologías

### Frontend

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

### Backend

- Next.js Route Handlers
- Resend
- Upstash Redis

### DevOps

- GitHub
- Vercel
- Husky
- ESLint
- TypeScript

## 📂 Arquitectura

```text
src/
├── app/
├── components/
├── config/
├── features/
├── hooks/
├── lib/
├── providers/
├── services/
├── styles/
├── types/
└── utils/
```

## ⚙️ Variables de entorno

Crea un archivo `.env.local`:

```env
RESEND_API_KEY=
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
CONTACT_EMAIL=
```

## 🚀 Instalación

```bash
git clone https://github.com/daycol302/PORTAFOLIO.git

cd PORTAFOLIO

npm install

npm run dev
```

## ✅ Verificación

```bash
npm run check
```

Este comando ejecuta:

- ESLint
- TypeScript
- Build de producción

## ☁️ Despliegue

El proyecto está preparado para desplegarse en **Vercel** con integración continua desde GitHub.

## 📧 API Contact

El formulario utiliza:

- Validación de datos
- Resend
- Upstash Redis
- Rate Limiting
- Manejo de errores

## 📈 Roadmap

- [x] Responsive
- [x] SEO
- [x] Formulario
- [x] Rate Limiting
- [x] Resend
- [ ] Sentry
- [ ] Analytics
- [ ] Dominio personalizado

## 👨‍💻 Autor

**Daynover García Zapata**

LinkedIn: _(tu enlace)_

GitHub: https://github.com/daycol302
