# Arquitectura del portafolio

## Capas

- `src/app`: rutas de Next.js, metadatos y endpoints HTTP.
- `src/features`: cada sección del portafolio con sus componentes y datos.
- `src/components`: elementos reutilizables de interfaz y layout.
- `src/config`: identidad, navegación y enlaces globales.
- `src/lib`: utilidades compartidas.

## Flujo de datos

Los datos de perfil, experiencia y proyectos viven cerca de cada feature. Los
componentes los muestran sin contener información duplicada. Esto permite
actualizar contenido sin modificar la interfaz.

## Contacto

El formulario llama a `POST /api/contact`. El endpoint valida los datos y está
preparado para conectar un proveedor como Resend antes de publicar.
