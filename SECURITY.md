# 🔐 Security Policy

## Portafolio Profesional - Daynover García Zapata

---

# Objetivo

La seguridad es uno de los pilares fundamentales de este proyecto.

Este documento describe las medidas implementadas para proteger la aplicación, la infraestructura y la información procesada durante su funcionamiento.

También establece el procedimiento para reportar vulnerabilidades de forma responsable.

---

# Estado de Seguridad

| Control              | Estado |
| -------------------- | :----: |
| HTTPS                |   ✅   |
| Variables de Entorno |   ✅   |
| Validación Backend   |   ✅   |
| Validación Frontend  |   ✅   |
| Rate Limiting        |   ✅   |
| Protección Spam      |   ✅   |
| TypeScript Strict    |   ✅   |
| ESLint               |   ✅   |
| Dependabot           |   ⏳   |
| CodeQL               |   ⏳   |
| CSP                  |   ⏳   |
| Security Headers     |   ⏳   |
| Sentry               |   ⏳   |
| SonarCloud           |   ⏳   |

---

# Arquitectura de Seguridad

Usuario

↓

HTTPS

↓

Vercel Edge Network

↓

Next.js

↓

API Contact

↓

Validación

↓

Rate Limiting

↓

Resend API

---

# Medidas Implementadas

## HTTPS

Toda la comunicación entre cliente y servidor utiliza HTTPS mediante certificados administrados por Vercel.

No se aceptan conexiones inseguras.

---

## Variables de Entorno

Las credenciales nunca son almacenadas dentro del repositorio.

Actualmente se utilizan:

RESEND_API_KEY

UPSTASH_REDIS_REST_URL

UPSTASH_REDIS_REST_TOKEN

CONTACT_EMAIL

Todas son administradas desde Vercel Environment Variables.

---

## Validación Frontend

El formulario valida:

- Nombre
- Correo electrónico
- Asunto
- Mensaje

Estas validaciones mejoran la experiencia del usuario pero no sustituyen la validación del servidor.

---

## Validación Backend

Todos los datos recibidos por la API son validados nuevamente.

Se verifica:

- Campos requeridos
- Longitud mínima
- Longitud máxima
- Formato del correo
- Datos inválidos

Si la información no cumple las reglas establecidas, la API devuelve errores específicos.

---

## Protección contra Spam

El endpoint implementa Rate Limiting mediante Upstash Redis.

Configuración actual:

5 solicitudes por minuto por dirección IP.

Las solicitudes adicionales reciben respuesta HTTP 429.

---

## Manejo Seguro de Errores

Los errores internos no exponen información sensible.

Las respuestas entregadas al cliente contienen únicamente información necesaria para comprender el problema.

No se revelan:

- Stack traces
- Variables
- Tokens
- Configuración interna

---

## API Segura

El endpoint:

POST

/api/contact

Implementa:

- Validación completa
- Rate Limiting
- Manejo de errores
- Variables de entorno
- Respuesta JSON

---

## Dependencias

Las dependencias son administradas mediante npm.

Antes de actualizar una dependencia se recomienda ejecutar:

npm audit

npm audit fix

---

## Calidad del Código

Antes de cada despliegue se ejecuta:

npm run check

Este proceso valida:

- ESLint
- TypeScript
- Build de producción

---

## Secretos

Ninguna API Key debe almacenarse en:

- Código fuente
- Commits
- Pull Requests
- Issues

Todas las credenciales se administran mediante Variables de Entorno.

---

## Amenazas Consideradas

### Spam

Mitigado mediante:

- Rate Limiting

---

### Datos Inválidos

Mitigado mediante:

- Validaciones Backend

---

### Errores de Usuario

Mitigado mediante:

- Validaciones Frontend

---

### Exposición de Secretos

Mitigado mediante:

- Variables de entorno

---

### Ataques por Fuerza Bruta

Mitigado mediante:

- Rate Limiting

---

# Próximas Mejoras

Se encuentran planificadas las siguientes implementaciones:

- Content Security Policy (CSP)
- Security Headers
- Trusted Types
- Dependabot
- CodeQL
- SonarCloud
- Sentry
- OWASP Dependency Check

---

# Reportar Vulnerabilidades

Si identifica una vulnerabilidad de seguridad, por favor absténgase de divulgarla públicamente.

Puede reportarla mediante:

Correo:

tu_correo@ejemplo.com

GitHub Issues:

(únicamente para vulnerabilidades no críticas)

---

# Historial

## v1.0.0

Primera versión de la política de seguridad.
