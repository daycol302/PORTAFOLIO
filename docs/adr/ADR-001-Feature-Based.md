# ADR-001

# Arquitectura Feature-Based

## Estado

Aceptada

---

## Fecha

2026-07-16

---

## Contexto

El proyecto requería una organización del código que permitiera escalar nuevas funcionalidades sin aumentar el acoplamiento entre módulos.

Una estructura basada únicamente en carpetas por tipo (components, hooks, utils) dificulta el crecimiento cuando el proyecto incorpora múltiples dominios funcionales.

---

## Opciones consideradas

### Organización por tipo

components/

hooks/

utils/

lib/

---

### Organización por páginas

Cada página contiene todos sus componentes.

---

### Organización por funcionalidades

Cada dominio funcional posee su propio módulo independiente.

---

## Decisión

Se adoptó una arquitectura Feature-Based.

Cada funcionalidad mantiene agrupados sus componentes, lógica y recursos relacionados.

Ejemplo:

src/features/contact

src/features/projects

src/features/experience

---

## Consecuencias

### Positivas

Mayor mantenibilidad.

Mayor escalabilidad.

Menor acoplamiento.

Facilidad para incorporar nuevas funcionalidades.

Código más organizado.

### Negativas

Mayor cantidad de carpetas.

Curva de aprendizaje inicial para nuevos colaboradores.

---

## Referencias

Feature-Sliced Design

Next.js Architecture
