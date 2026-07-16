# ☁️ Infraestructura

## Objetivo

Este documento describe la arquitectura actual del proyecto y la evolución prevista hacia una infraestructura Cloud escalable utilizando servicios administrados de AWS.

---

# Arquitectura Actual

Actualmente el proyecto utiliza una arquitectura Serverless basada en Vercel.

```text
Usuario

↓

Internet

↓

Vercel Edge Network

↓

Next.js 15

↓

API /contact

↓

Resend API

↓

Upstash Redis
```

### Componentes

| Componente    | Tecnología       |
| ------------- | ---------------- |
| Frontend      | Next.js 15       |
| Hosting       | Vercel           |
| Runtime       | Serverless       |
| Correo        | Resend           |
| Rate Limiting | Upstash Redis    |
| DNS           | Vercel           |
| SSL           | Automático       |
| Analytics     | Vercel Analytics |
| Performance   | Speed Insights   |

---

# Ventajas

- Deploy automático.
- Escalabilidad automática.
- HTTPS administrado.
- CDN global.
- Baja latencia.
- Sin administración de servidores.

---

# Limitaciones

La arquitectura actual es suficiente para un portafolio, pero presenta limitaciones para aplicaciones empresariales.

Entre ellas:

- Dependencia de un único proveedor.
- Control limitado sobre la infraestructura.
- Personalización reducida de la red.
- Integración parcial con servicios cloud avanzados.

---

# Arquitectura Objetivo

El objetivo futuro consiste en migrar progresivamente hacia AWS manteniendo una arquitectura moderna basada en servicios administrados.

```text
Internet

↓

Route53

↓

CloudFront

↓

AWS WAF

↓

Application Load Balancer

↓

Next.js

↓

Lambda

↓

S3

↓

CloudWatch

↓

SES

↓

DynamoDB
```

---

# Servicios Planeados

## Route 53

Gestión del dominio.

Responsabilidades:

- DNS
- Routing
- Health Checks

---

## CloudFront

Red global de distribución de contenido.

Beneficios:

- Caché
- Baja latencia
- Protección DDoS
- Compresión

---

## AWS WAF

Firewall de aplicaciones.

Protección contra:

- SQL Injection
- XSS
- Bots
- Fuerza Bruta

---

## Application Load Balancer

Distribución de tráfico.

Funciones:

- Balanceo
- Health Checks
- SSL

---

## Lambda

Procesamiento Serverless.

Casos de uso:

- Formularios
- APIs
- Automatizaciones

---

## Amazon S3

Almacenamiento.

Utilización prevista:

- Imágenes
- Documentación
- Backups
- Assets

---

## CloudWatch

Observabilidad.

Funciones:

- Logs
- Métricas
- Alarmas
- Dashboards

---

## IAM

Gestión de identidades.

Aplicación del principio:

Least Privilege.

---

## AWS Secrets Manager

Almacenamiento seguro de:

- API Keys
- Tokens
- Secretos

---

## SES

Servicio de correo.

Posible reemplazo futuro de Resend.

---

## DynamoDB

Persistencia de datos.

Uso futuro para:

- Blog
- Comentarios
- Formularios
- Métricas

---

# Principios Arquitectónicos

La evolución de la infraestructura seguirá estos principios:

- Infrastructure as Code.
- Alta disponibilidad.
- Escalabilidad horizontal.
- Observabilidad.
- Seguridad por defecto.
- Automatización.
- Costos controlados.

---

# Objetivos

## Corto Plazo

- Consolidar Vercel.
- Mejorar documentación.
- Implementar GitHub Actions.

---

## Mediano Plazo

- Dominio personalizado.
- Cloudflare.
- Monitoreo avanzado.

---

## Largo Plazo

Migración parcial hacia AWS.

---

# Estado

| Servicio   | Estado |
| ---------- | ------ |
| GitHub     | ✅     |
| Vercel     | ✅     |
| Next.js    | ✅     |
| Resend     | ✅     |
| Upstash    | ✅     |
| CloudFront | 🔜     |
| Route53    | 🔜     |
| WAF        | 🔜     |
| CloudWatch | 🔜     |
| IAM        | 🔜     |
| S3         | 🔜     |
| Lambda     | 🔜     |

---

# Historial

## v1.0.0

Primera versión del documento de infraestructura.
