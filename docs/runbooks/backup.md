# 💾 Runbook - Backup y Recuperación

## Objetivo

Este documento define la estrategia de respaldo y recuperación del proyecto para garantizar la continuidad operativa y minimizar la pérdida de información.

Aunque el proyecto no almacena información en una base de datos, existen activos críticos que deben protegerse.

---

# Activos Críticos

Los siguientes elementos son considerados críticos para la operación del proyecto:

- Código fuente.
- Historial Git.
- Variables de entorno.
- Configuración de Vercel.
- Configuración de Resend.
- Configuración de Upstash Redis.
- Documentación técnica.
- Releases.
- Tags.

---

# Arquitectura

Developer

↓

GitHub Repository

↓

Vercel

↓

Resend

↓

Upstash Redis

↓

Usuarios

---

# Estrategia de Respaldo

## Código Fuente

Repositorio principal:

GitHub

Frecuencia:

Cada commit.

Protección:

Repositorio remoto.

---

## Historial Git

El historial completo permanece almacenado en GitHub.

Incluye:

- Branches
- Commits
- Tags
- Pull Requests

---

## Variables de Entorno

Actualmente se utilizan:

RESEND_API_KEY

UPSTASH_REDIS_REST_URL

UPSTASH_REDIS_REST_TOKEN

CONTACT_EMAIL

Estas variables deben almacenarse únicamente en Vercel.

Nunca deben incluirse en:

- Git
- README
- Issues
- Pull Requests

---

## Documentación

Toda la documentación se encuentra versionada en Git.

Incluye:

README

Roadmap

Arquitectura

ADR

Runbooks

Backlog

Security

Contributing

Changelog

---

## Releases

Cada versión estable debe estar asociada a:

- Git Tag
- Release de GitHub
- CHANGELOG

---

# Recuperación

## Pérdida del equipo local

Procedimiento

Clonar repositorio

```bash
git clone https://github.com/daycol302/PORTAFOLIO.git
```

Instalar dependencias

```bash
npm install
```

Crear variables

```text
.env.local
```

Ejecutar

```bash
npm run dev
```

---

## Eliminación accidental del proyecto local

Recuperar desde GitHub.

No existe pérdida de información.

---

## Eliminación accidental en Vercel

Crear un nuevo proyecto.

Conectar el repositorio.

Configurar nuevamente:

- Variables
- Dominio
- Analytics

Realizar un nuevo despliegue.

---

## Pérdida de Variables

Ingresar a:

Vercel

↓

Settings

↓

Environment Variables

Restaurar desde el gestor seguro utilizado por el propietario.

---

# Frecuencia

| Activo        | Frecuencia           |
| ------------- | -------------------- |
| Código        | Cada commit          |
| GitHub        | Automático           |
| Variables     | Cada modificación    |
| Documentación | Cada cambio          |
| Releases      | Cada versión estable |

---

# Verificación

Después de cada cambio importante comprobar:

- Código sincronizado con GitHub.
- Variables configuradas.
- Build exitoso.
- Producción disponible.

---

# Buenas Prácticas

- No almacenar secretos en el repositorio.
- Mantener GitHub como fuente oficial del código.
- Utilizar ramas para nuevas funcionalidades.
- Crear Tags para cada versión estable.
- Actualizar el CHANGELOG antes de publicar.

---

# Escenarios de Recuperación

## Equipo nuevo

Tiempo estimado:

10 minutos.

---

## Restaurar producción

Tiempo estimado:

5 minutos.

---

## Restaurar una versión anterior

Consultar:

docs/runbooks/rollback.md

---

## Recuperar documentación

Disponible desde GitHub.

---

# Checklist

- [ ] Código respaldado en GitHub.
- [ ] Variables verificadas.
- [ ] Documentación actualizada.
- [ ] Tag creada.
- [ ] Release publicada.
- [ ] Producción validada.

---

# Historial

## v1.0.0

Primera versión del Runbook de Backup y Recuperación.
