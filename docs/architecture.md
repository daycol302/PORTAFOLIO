# Arquitectura

El proyecto usa Next.js App Router y una organización Feature First. `src/app` reúne rutas y metadata; `src/features` agrupa cada sección por dominio; `src/components` contiene UI y layout reutilizables; `src/config`, `src/lib` y `src/types` centralizan configuración, utilidades y contratos.

Los providers globales viven en `src/components/providers` y `src/i18n/provider.tsx`. El flujo de UI es: página → feature → componentes → datos/configuración. Las features no dependen entre sí; los elementos compartidos se promueven a `components`.

La capa i18n se mantiene independiente del diseño: `dictionary.ts` contiene textos, el provider entrega estado tipado y el selector persiste la preferencia. Esto permite incorporar idiomas sin alterar la estructura visual.
