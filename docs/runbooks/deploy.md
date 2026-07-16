# 🚀 Runbook - Despliegue a Producción

## Objetivo

Este documento describe el procedimiento oficial para publicar una nueva versión del portafolio en producción.

Su objetivo es garantizar despliegues seguros, repetibles y auditables.

---

# Arquitectura de Despliegue

Developer

↓

GitHub Repository

↓

Vercel Build

↓

Production Deployment

↓

Smoke Tests

↓

Usuarios

---

# Requisitos

Antes de desplegar verificar:

- Node.js instalado
- npm actualizado
- Acceso al repositorio
- Acceso al proyecto en Vercel
- Variables de entorno configuradas

---

# Variables de Entorno

Verificar que existan:

RESEND_API_KEY

UPSTASH_REDIS_REST_URL

UPSTASH_REDIS_REST_TOKEN

CONTACT_EMAIL

Nunca publicar secretos dentro del repositorio.

---

# Checklist Previo

Antes de cada despliegue ejecutar:

```bash
npm install
```

Actualizar dependencias

```bash
npm outdated
```

Ejecutar validaciones

```bash
npm run check
```

Debe finalizar sin errores.

---

# Flujo de Git

Verificar rama actual

```bash
git branch
```

Actualizar develop

```bash
git checkout develop

git pull origin develop
```

Fusionar cambios a master

```bash
git checkout master

git merge develop
```

Enviar cambios

```bash
git push origin master
```

---

# Deploy Automático

El despliegue se realiza automáticamente mediante Vercel cuando se detectan cambios en la rama principal.

Proceso:

Push

↓

GitHub

↓

Vercel Build

↓

Optimización

↓

Deploy

↓

Producción

---

# Validaciones Posteriores

Después del despliegue verificar:

Página principal

Formulario de contacto

Modo oscuro

Responsive

Animaciones

SEO

Manifest

Sitemap

Robots

Analytics

Speed Insights

---

# Smoke Test

Realizar las siguientes pruebas rápidas:

- Abrir la página principal.
- Navegar entre secciones.
- Enviar un formulario válido.
- Enviar un formulario inválido.
- Confirmar recepción del correo.
- Verificar consola del navegador.
- Confirmar ausencia de errores 500.

---

# Monitoreo

Revisar:

Vercel Logs

↓

Analytics

↓

Speed Insights

↓

GitHub

---

# Rollback

Si el despliegue presenta errores críticos:

Consultar:

docs/runbooks/rollback.md

---

# Registro del Deploy

Después de cada publicación registrar:

| Campo       | Valor             |
| ----------- | ----------------- |
| Fecha       |                   |
| Versión     |                   |
| Rama        |                   |
| Commit      |                   |
| Responsable |                   |
| Resultado   | Exitoso / Fallido |

---

# Buenas Prácticas

- Nunca desplegar código sin ejecutar `npm run check`.
- Mantener actualizado el CHANGELOG.
- Revisar variables de entorno.
- Verificar el despliegue en producción.
- Registrar la versión publicada.

---

# Historial

## v1.0.0

Primera versión del Runbook de despliegue.
