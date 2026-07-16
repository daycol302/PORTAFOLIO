# 🎨 Design System

## Objetivo

Este documento define las reglas visuales y de experiencia de usuario del proyecto.

Su propósito es garantizar consistencia entre todos los componentes de la aplicación, facilitar el mantenimiento y permitir la incorporación de nuevas funcionalidades sin afectar la identidad visual del sistema.

---

# Principios de Diseño

Durante el desarrollo del proyecto se establecieron los siguientes principios:

- Consistencia visual
- Simplicidad
- Accesibilidad
- Responsividad
- Reutilización de componentes
- Animaciones discretas
- Alto contraste
- Experiencia moderna

---

# Identidad Visual

El diseño busca transmitir una imagen profesional, moderna y tecnológica.

Se evita el exceso de elementos decorativos para priorizar la lectura del contenido y la navegación.

---

# Paleta de Colores

Los colores son administrados mediante variables CSS y utilizados desde Tailwind CSS.

## Colores principales

| Uso        | Variable     |
| ---------- | ------------ |
| Background | --background |
| Foreground | --foreground |
| Primary    | --primary    |
| Secondary  | --secondary  |
| Border     | --border     |
| Muted      | --muted      |
| Accent     | --accent     |

El proyecto soporta:

- Light Mode
- Dark Mode

mediante next-themes.

---

# Tipografía

Fuente principal:

Geist Sans

Fuente monoespaciada:

Geist Mono

Las fuentes son cargadas mediante:

Next Fonts

lo que mejora el rendimiento y evita Layout Shift.

---

# Espaciado

Se sigue una escala uniforme utilizando Tailwind CSS.

Ejemplo:

```
p-2

p-4

p-6

p-8

gap-4

gap-6

gap-8
```

No se utilizan valores arbitrarios salvo casos muy específicos.

---

# Bordes

El proyecto utiliza bordes redondeados para generar una apariencia moderna.

Ejemplos:

```
rounded-lg

rounded-xl

rounded-2xl
```

---

# Sombras

Las sombras se utilizan únicamente para reforzar la jerarquía visual.

No forman parte de la identidad principal del sistema.

---

# Layout

La aplicación utiliza una estructura responsive basada en Flexbox y Grid.

Principios:

- Mobile First
- Responsive
- Máximo ancho controlado
- Espaciado consistente

---

# Componentes

Todos los componentes reutilizables se encuentran dentro de:

```
src/components
```

Cada componente debe cumplir:

- Una única responsabilidad.
- Props tipadas.
- Sin lógica innecesaria.
- Reutilizable.
- Accesible.

---

# Botones

Los botones utilizan el componente compartido Button.

Características:

- Estados hover.
- Focus visible.
- Disabled.
- Iconos.
- Variantes.

No se crean botones directamente utilizando HTML salvo casos excepcionales.

---

# Cards

Las tarjetas representan bloques de contenido.

Se utiliza el componente:

Card

Características:

- Padding uniforme.
- Bordes suaves.
- Responsive.
- Compatible con Dark Mode.

---

# Formularios

Los formularios siguen un patrón uniforme.

Cada campo posee:

- Label
- Placeholder
- Validación
- Estados de error
- Feedback al usuario

La validación ocurre tanto en frontend como backend.

---

# Iconografía

El proyecto utiliza:

Lucide React

Razones:

- Liviano.
- SVG.
- Tree Shaking.
- Consistencia visual.

---

# Animaciones

Las animaciones son implementadas mediante:

Framer Motion

Principios:

- Duraciones cortas.
- Sin bloquear interacción.
- Sin animaciones innecesarias.
- Aparición progresiva del contenido.

---

# Accesibilidad

Durante el desarrollo se siguen buenas prácticas de accesibilidad.

Incluyendo:

- HTML semántico.
- Labels.
- Contraste adecuado.
- Navegación por teclado.
- Focus visible.
- aria-live.
- Roles cuando son necesarios.

---

# Responsive Design

La aplicación fue diseñada utilizando Mobile First.

Breakpoints utilizados:

| Tamaño      | Tailwind |
| ----------- | -------- |
| Mobile      | default  |
| Small       | sm       |
| Medium      | md       |
| Large       | lg       |
| Extra Large | xl       |

---

# Convenciones

Todos los componentes deben:

- Mantener consistencia visual.
- Utilizar componentes existentes antes de crear nuevos.
- Respetar la paleta de colores.
- Respetar los espaciados.
- Ser compatibles con Dark Mode.

---

# Componentes Futuros

Las nuevas funcionalidades deberán integrarse utilizando el mismo sistema visual.

Se evitarán estilos inline y componentes duplicados.

---

# Auditoría

El sistema de diseño será revisado periódicamente verificando:

- Consistencia.
- Accesibilidad.
- Responsive.
- Rendimiento.
- Compatibilidad con Dark Mode.

---

# Referencias

- Tailwind CSS
- Radix UI
- Framer Motion
- Next Fonts
- WCAG 2.2

---

# Historial de Cambios

## v1.0.0

Creación inicial del Design System.
