# 🚨 Runbook - Gestión de Incidentes

## Objetivo

Este documento establece el procedimiento oficial para identificar, analizar, mitigar y resolver incidentes que afecten la disponibilidad, seguridad o funcionamiento del portafolio.

Su propósito es reducir el tiempo de respuesta, minimizar el impacto sobre los usuarios y documentar cada incidente para mejorar continuamente la plataforma.

---

# Definición de Incidente

Se considera un incidente cualquier evento que afecte alguno de los siguientes aspectos:

- Disponibilidad del sitio.
- Rendimiento.
- Seguridad.
- API de contacto.
- Servicios externos.
- Infraestructura.

---

# Flujo de Atención

Reporte

↓

Confirmar problema

↓

Clasificar severidad

↓

Diagnosticar

↓

Mitigar

↓

Resolver

↓

Documentar

↓

Implementar mejoras

---

# Niveles de Severidad

## SEV-1 (Crítico)

Impacto total.

Ejemplos

- Sitio caído.
- Error 500 generalizado.
- API completamente fuera de servicio.
- Exposición de información sensible.

Tiempo objetivo de respuesta:

15 minutos.

---

## SEV-2 (Alto)

Impacto importante.

Ejemplos

- Formulario de contacto no funciona.
- Resend no envía correos.
- Problemas con Upstash Redis.
- Lentitud significativa.

Tiempo objetivo:

30 minutos.

---

## SEV-3 (Medio)

Impacto parcial.

Ejemplos

- Error visual.
- Problemas responsive.
- Animaciones defectuosas.

Tiempo objetivo:

24 horas.

---

## SEV-4 (Bajo)

Mejoras menores.

Ejemplos

- Error ortográfico.
- Iconos.
- Ajustes visuales.
- Optimización.

Tiempo objetivo:

Próximo Sprint.

---

# Procedimiento de Diagnóstico

## Paso 1

Confirmar el incidente.

Preguntas:

- ¿El problema ocurre siempre?
- ¿Solo ocurre en un navegador?
- ¿Solo ocurre en producción?
- ¿También ocurre localmente?

---

## Paso 2

Verificar el despliegue.

Revisar:

- Último Deployment.
- Rama.
- Commit.
- Estado.

---

## Paso 3

Consultar Logs.

Verificar:

- Runtime Errors.
- Function Logs.
- Browser Console.

---

## Paso 4

Validar Servicios Externos.

Comprobar:

Resend

↓

Upstash Redis

↓

Vercel

---

## Paso 5

Verificar Variables de Entorno.

Confirmar:

RESEND_API_KEY

UPSTASH_REDIS_REST_URL

UPSTASH_REDIS_REST_TOKEN

CONTACT_EMAIL

---

# Incidentes Frecuentes

## El formulario no envía correos

Revisar:

- Variables de Resend.
- Logs de Vercel.
- Estado de Resend.
- Validaciones Backend.

---

## Error 429

Significado:

Rate Limiting activado.

Acción:

Esperar un minuto y volver a intentar.

---

## Error 500

Revisar:

- Logs.
- Variables.
- Build.
- Último commit.

---

## Build Fallido

Ejecutar:

```bash
npm run check
```

Corregir errores antes de volver a desplegar.

---

## Variables de Entorno

Verificar configuración en Vercel.

Nunca almacenar secretos en Git.

---

## Problemas de Rendimiento

Verificar:

- Vercel Speed Insights.
- Lighthouse.
- Tamaño de imágenes.
- Lazy Loading.
- Bundle Size.

---

# Herramientas de Diagnóstico

## Vercel

- Build Logs
- Runtime Logs
- Analytics
- Speed Insights

---

## GitHub

- Commits
- Pull Requests
- Historial

---

## Navegador

- DevTools
- Network
- Console
- Performance

---

## Auditorías

Ejecutar:

```bash
npm run check

npm audit
```

---

# Comunicación

Registrar:

| Campo                | Valor |
| -------------------- | ----- |
| Fecha                |       |
| Hora                 |       |
| Responsable          |       |
| Severidad            |       |
| Impacto              |       |
| Causa                |       |
| Solución             |       |
| Tiempo de resolución |       |

---

# Acciones Posteriores

Después de resolver:

- Actualizar CHANGELOG.
- Actualizar Backlog.
- Documentar causa raíz.
- Crear ADR si aplica.
- Implementar acciones preventivas.

---

# Checklist

- [ ] Incidente confirmado.
- [ ] Logs revisados.
- [ ] Variables verificadas.
- [ ] Servicios externos comprobados.
- [ ] Solución aplicada.
- [ ] Producción validada.
- [ ] Documentación actualizada.
- [ ] Causa raíz identificada.

---

# Historial

## v1.0.0

Primera versión del Runbook de Gestión de Incidentes.
