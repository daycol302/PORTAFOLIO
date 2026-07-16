# 🔄 Runbook - Rollback de Producción

## Objetivo

Este documento describe el procedimiento para restaurar una versión estable del sistema cuando un despliegue en producción presenta fallos críticos.

El objetivo es minimizar el tiempo de indisponibilidad y garantizar la continuidad del servicio.

---

# ¿Cuándo realizar un Rollback?

Ejecutar un rollback únicamente cuando exista alguna de las siguientes situaciones:

- Error 500 en producción.
- El formulario de contacto deja de funcionar.
- El sitio no carga correctamente.
- Se detecta una vulnerabilidad crítica.
- El Build fue exitoso pero la aplicación falla.
- El rendimiento disminuye significativamente.
- Se publica una versión incorrecta.

---

# Arquitectura

Usuario

↓

Vercel Production

↓

Deploy Actual ❌

↓

Rollback

↓

Deploy Anterior ✅

↓

Usuarios

---

# Tiempo Objetivo

Objetivo de recuperación (RTO)

Menor a 5 minutos.

Pérdida de información (RPO)

0 minutos.

No existe pérdida de datos ya que el proyecto no almacena información persistente.

---

# Procedimiento

## Paso 1

Ingresar al Dashboard de Vercel.

---

## Paso 2

Seleccionar el proyecto.

PORTAFOLIO

---

## Paso 3

Abrir la pestaña:

Deployments

---

## Paso 4

Ubicar el último Deployment estable.

Verificar:

- Fecha
- Commit
- Rama
- Estado

---

## Paso 5

Seleccionar:

Promote to Production

---

## Paso 6

Esperar la propagación.

Normalmente demora menos de un minuto.

---

## Paso 7

Verificar producción.

---

# Validaciones posteriores

Comprobar:

- Página principal.
- Hero.
- Navbar.
- Modo oscuro.
- Proyectos.
- Contacto.
- API.
- Formulario.
- Responsive.
- SEO.

---

# Smoke Test

Ejecutar:

- Abrir la página.
- Navegar por todas las secciones.
- Enviar formulario válido.
- Enviar formulario inválido.
- Confirmar correo recibido.
- Revisar consola.
- Revisar Analytics.

---

# Investigación

Después del rollback:

NO volver a desplegar inmediatamente.

Primero identificar:

- Commit responsable.
- Error introducido.
- Logs.
- Variables.
- Dependencias.

---

# Causas Comunes

## Variables de entorno

Verificar:

- RESEND_API_KEY
- UPSTASH_REDIS_REST_URL
- UPSTASH_REDIS_REST_TOKEN
- CONTACT_EMAIL

---

## Dependencias

Ejecutar:

```bash
npm audit

npm outdated
```

---

## Build

Ejecutar localmente:

```bash
npm run check
```

Debe finalizar correctamente.

---

## Logs

Consultar:

- Vercel Logs
- Function Logs
- Browser Console

---

# Comunicación

Registrar el incidente.

| Campo                  | Valor |
| ---------------------- | ----- |
| Fecha                  |       |
| Versión afectada       |       |
| Commit                 |       |
| Responsable            |       |
| Tiempo de recuperación |       |
| Causa raíz             |       |
| Acciones correctivas   |       |

---

# Prevención

Después del incidente:

- Actualizar CHANGELOG.
- Actualizar Backlog.
- Documentar la causa.
- Crear ADR si fue un cambio arquitectónico.
- Agregar pruebas si aplica.

---

# Checklist

Antes de cerrar el incidente:

- [ ] Producción estable.
- [ ] Formulario funcionando.
- [ ] Sin errores en consola.
- [ ] Variables verificadas.
- [ ] Documentación actualizada.
- [ ] Causa identificada.
- [ ] Acciones preventivas registradas.

---

# Historial

## v1.0.0

Primera versión del Runbook de Rollback.

## Postmortem del Incidente

### Resumen

Descripción breve del problema.

### Impacto

¿Qué funcionalidades se vieron afectadas?

### Causa raíz

¿Qué originó el incidente?

### Solución aplicada

¿Qué se hizo para recuperar el servicio?

### Acciones preventivas

¿Qué cambios se implementarán para evitar que vuelva a ocurrir?

### Responsable

Nombre del responsable.

### Fecha de cierre

DD/MM/AAAA
