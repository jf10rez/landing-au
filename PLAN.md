# Fase 1 — Plan de Arquitectura & Diseño
## Landing Page: Automatizaciones IA (n8n, OpenClaw, Agentes, Workflows)

**Enfoque:** Producto premium dark. Estética de operador técnico, no startup genérica de IA.  
**Estado:** Planificación — esperando aprobación para fase de build.

---

## 1. Principios de Diseño (Frontend-Design Skill)

- **Tono visual:** Industrial/técnico con filo agresivo. Dark mode absoluto, sin toggle.
- **Diferenciador clave:** El rojo `#FF0033` como único acento en un entorno obsidian. Nada de gradientes pastel, morados ni cian.
- **Movimiento:** Anime.js como motor único. Animaciones que "golpean", no que flotan suavemente. Staggers agresivos, easings con aceleración brusca.
- **Tipografía:** Nada de fuentes genéricas solitarias. Combinación de display agresiva + body técnica + mono para detalles.
- **Layouts:** Asimetría controlada, espaciado generoso, bordes de 1px con opacidad baja que "encienden" en rojo al hover.

---

## 2. Paleta Exacta (Design Tokens)

| Token | Valor HEX | Uso |
|-------|-----------|-----|
| `--bg-base` | `#0A0A0B` | Fondo raíz, hero, navbar |
| `--bg-surface` | `#111113` | Cards, secciones alternadas |
| `--bg-elevated` | `#161618` | Elevación sutil, hover states |
| `--bg-input` | `#1C1C1F` | Inputs, contenedores internos |
| `--border-default` | `rgba(255, 255, 255, 0.06)` | Bordes de cards, divisores |
| `--border-hover` | `rgba(255, 0, 51, 0.5)` | Borde en hover agresivo |
| `--text-primary` | `#F0F0F2` | Headings, body principal |
| `--text-secondary` | `#8A8A8F` | Descripciones, labels |
| `--text-tertiary` | `#52525B` | Metadata, captions |
| `--accent` | `#FF0033` | CTA, íconos activos, links, glows |
| `--accent-hover` | `#E6002D` | Hover de botones primarios |
| `--accent-dim` | `rgba(255, 0, 51, 0.15)` | Fondos de highlight sutil |
| `--accent-glow` | `rgba(255, 0, 51, 0.4)` | Box-shadows de focus/active |
| `--metric` | `#FFFFFF` | Números de resultados (puro, sin verde) |

### Easing Tokens
| Token | Valor | Uso |
|-------|-------|-----|
| `--ease-out-expo` | `cubicBezier(0.16, 1, 0.3, 1)` | Entradas principales (hero, secciones) |
| `--ease-out-back` | `cubicBezier(0.34, 1.56, 0.64, 1)` | Micro-interacciones, acordeón |
| `--ease-in-out-circ` | `cubicBezier(0.87, 0, 0.13, 1)` | Hover states agresivos |
| `--ease-linear` | `linear` | Líneas SVG, contadores |

---

## 3. Tipografía

| Rol | Fuente | Pesos | Uso |
|-----|--------|-------|-----|
| **Display & Body** | Geist Sans | 400, 500, 600, 700 | H1, H2, H3, body, botones, navegación. Técnica, moderna, sin aire gaming. |
| **Mono / Technical** | Geist Mono | 400, 500 | Labels, métricas, tags de stack, código, numeración. |

### Justificación: Geist vs Rajdhani
- **Rajdhani** evoca demasiado entorno futurista / gaming / HUD militar. En un contexto B2B de automatizaciones para empresas, puede restar credibilidad y percibirse como "juguete".
- **Geist** (diseñada por Vercel) es agresiva en su geometría y peso, pero mantiene una neutralidad técnica que transmite **precisión operativa** sin caer en clichés. Es la fuente que usan plataformas técnicas de alto nivel (Vercel, Next.js). Encaja perfecto con el tono "operador serio".
- Usar **Geist Sans** para todo el texto (display + body) mantiene coherencia máxima y reduce requests de fuente. **Geist Mono** cubre las necesidades de etiquetado técnico.

### Scale Tipográfica
- **Hero H1:** `clamp(3rem, 6vw, 6rem)` — Geist Sans 700, letter-spacing `-0.02em`, line-height `1.0`.
- **H2 Sección:** `clamp(2rem, 4vw, 3rem)` — Geist Sans 700, letter-spacing `-0.01em`.
- **H3 Card:** `1.5rem` — Geist Sans 600.
- **Body:** `1rem` (16px) — Geist Sans 400, line-height `1.6`.
- **Mono Label:** `0.75rem` (12px) — Geist Mono 500, letter-spacing `0.08em`, uppercase.
- **Metric Number:** `clamp(2.5rem, 5vw, 4rem)` — Geist Mono 500.

> Geist se carga vía `next/font/local` o el paquete `geist` (`npm install geist`), que expone `GeistSans` y `GeistMono` listas para Next.js con optimización automática.

---

## 4. Arquitectura de Carpetas (Next.js App Router)

```
landing-au/
├── app/
│   ├── layout.tsx                    # Server Component. Fonts, metadata, viewport, ld+json base.
│   ├── page.tsx                      # Server Component. Composición de todas las secciones.
│   ├── globals.css                   # Tailwind directives + CSS custom properties (tokens).
│   ├── sections/                     # Server Components por defecto. Cero lógica de cliente.
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── Products.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Stack.tsx
│   │   ├── UseCases.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── components/
│   │   ├── ui/                       # Primitives puros, estilizados con Tailwind.
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Container.tsx
│   │   │   └── StickyCTA.tsx         # Botón flotante "Agendar llamada" post-hero.
│   │   ├── animation/                # Client Components exclusivos. 'use client' obligatorio.
│   │   │   ├── TextReveal.tsx        # Ensamblaje letra por letra + glitch sutil.
│   │   │   ├── ScrollReveal.tsx      # Wrapper genérico con IntersectionObserver + anime.js.
│   │   │   ├── StaggerChildren.tsx   # Stagger para grids/listas.
│   │   │   ├── WorkflowSVG.tsx       # Líneas de flujo animadas (SVG paths).
│   │   │   ├── CountUp.tsx           # Contador numérico para métricas.
│   │   │   └── CursorFollower.tsx    # Cursor reactivo opcional en hero.
│   │   └── layout/
│   │       └── SectionWrapper.tsx    # Padding responsive, max-width, id para anclas.
│   ├── hooks/
│   │   ├── useAnime.ts               # Wrapper de anime.js con cleanup y reduced-motion.
│   │   └── useScrollProgress.ts      # Progreso de scroll normalizado para timelines.
│   ├── lib/
│   │   ├── utils.ts                  # cn() de shadcn / clsx + tailwind-merge.
│   │   └── animations.ts             # Configs reutilizables de anime.js (easings, duraciones).
│   ├── data/
│   │   ├── products.ts               # Array de productos (extensible sin refactor).
│   │   ├── stack.ts                  # Tecnologías del stack.
│   │   ├── useCases.ts               # Casos de uso con métricas.
│   │   ├── faq.ts                    # Preguntas frecuentes.
│   │   └── socialProof.ts            # Logos clientes.
│   └── types/
│       └── index.ts                  # Tipos globales (Product, UseCase, etc.).
├── public/
│   ├── images/
│   │   ├── logos/                    # Logos de clientes (SVG optimizados).
│   │   └── stack/                    # Iconos de n8n, OpenClaw, etc. (SVG).
│   └── og-image.jpg                  # Open Graph image (1200x630).
├── tsconfig.json
├── next.config.ts
└── package.json
```

---

## 5. Patrones de Next.js (next-best-practices)

- **Server Components por defecto:** Todas las `sections/` son Server Components. No hay `'use client'` en ellas.
- **Client Components mínimos:** Solo `components/animation/*`, Navbar (si necesita estado de scroll para blur) y FAQ (estado de acordeón). El resto es Server Side Rendering puro.
- **Metadata API:** `metadata` exportado en `layout.tsx` (static) y `page.tsx` (dynamic si es necesario). Incluir `openGraph`, `twitter`, `robots`.
- **next/font:** Cargar Geist Sans y Geist Mono vía el paquete `geist` (`import { GeistSans, GeistMono } from 'geist/font'`). Aplicar variables CSS en `globals.css`.
- **next/image:** Siempre para logos, avatares e iconos rasterizados. `priority` para LCP del hero.
- **Route Segments:** Una única ruta `/` (landing). No se necesitan rutas dinámicas aún.
- **CSS:** Tailwind CSS v4 con `@theme` en `globals.css`. Sin `tailwind.config.ts`. Tokens de color mapeados vía `--color-*` para integración nativa con Tailwind v4.
- **No Framer Motion:** Confirmado. Anime.js es el motor único.

---

## 6. Mapa de Animaciones por Sección (Anime.js Skill)

> **Nota técnica crítica:** Todas las instancias de anime.js deben respetar `prefers-reduced-motion`. Si está activo, se salta la animación y se muestra el estado final. Nunca dejar `autoplay: true` sin control de cleanup en React.

### 6.1 Navbar
- **Entrada:** `translateY(-20px → 0)`, `opacity(0 → 1)`, duración `800ms`, easing `easeOutExpo`.
- **Scroll:** Al pasar los `60px` de scroll, fondo cambia a `rgba(10,10,11,0.8)` con `backdrop-blur(12px)`. Transición CSS pura para performance.

### 6.2 Hero
- **H1 Text Reveal:** Cada letra del título es un `<span>` individual.
  - `translateY(110% → 0%)`, `opacity(0 → 1)`, stagger `30ms`, duración `1000ms`, easing `easeOutExpo`.
  - **Glitch sutil:** Al inicio de la animación (0ms → 80ms), dos pseudo-capas de texto (rojo `#FF0033` y blanco `#FFFFFF`) se desplazan `translateX(±4px)` con `opacity(0.8)` y luego desaparecen. Efecto de "interferencia" controlada.
- **Subtitle & CTA:** `translateY(20px → 0)`, `opacity(0 → 1)`, stagger entre elementos de `150ms`. Delay inicial `400ms` después del H1.
- **CTA Primary:** `scale(0.95 → 1)` + `opacity(0 → 1)`, easing `easeOutBack`, duración `600ms`.
- **Workflow Visual (SVG):**
  - Paths de conexión: animación de `stroke-dashoffset` (`100% → 0%`), duración `2000ms`, easing `easeInOutCirc`.
  - Nodos: `scale(0 → 1)` con easing `easeOutBack`, stagger `200ms`.
  - Pulso de datos: pequeños círculos que viajan por los paths (`anime.path()` o `offset-distance`), loop infinito suave, velocidad lenta.
- **Cursor Reactivo (opcional):** En desktop, círculo rojo de `12px` que sigue al mouse con `anime({ translateX, translateY, easing: 'easeOutCirc', duration: 400 })`. Se oculta en touch devices y si `prefers-reduced-motion`.

### 6.3 Social Proof
- **Grid de logos:** `opacity(0 → 1)`, `scale(0.9 → 1)`, stagger `60ms`, easing `easeOutExpo`.
- Trigger: IntersectionObserver (aparece una sola vez).

### 6.4 Productos (B2B & Agencias)
- **Layout:** Grid asimétrico o dos columnas con pesos visuales distintos.
- **Entrada:** `translateY(60px → 0)`, `opacity(0 → 1)`, `rotateX(10deg → 0)` (perspectiva sutil), stagger `120ms`, easing `easeOutExpo`.
- **Hover agresivo (micro-interacción):**
  - Borde: cambia a `rgba(255,0,51,0.5)` en `200ms`.
  - Card: `translateY(-4px)`, `box-shadow: 0 0 24px var(--accent-glow)`.
  - Scanline: pseudo-elemento absoluto con fondo rojo y `opacity(0.1)` que cruza la card horizontalmente (`translateX(-100% → 100%)`) en `400ms`, easing `easeInOutCirc`. Solo se ejecuta una vez por hover.
- **Tags técnicos:** JetBrains Mono, 12px uppercase. Al hover del tag, `background-color` cambia a `--accent-dim`.

### 6.5 Cómo Funciona (Diagrama) — Opción B Definitiva
- **Entrada por pasos:** `ScrollReveal` con stagger. Cada paso: `translateX(-30px → 0)` para los impares, `translateX(30px → 0)` para los pares, `opacity(0 → 1)`, stagger `200ms`, easing `easeOutExpo`.
- **Ilustración SVG estática** (no scroll-driven en v1): diagrama de flujo con nodos conectados por paths. Sin animación de scroll para mantener performance budget. Se evalúa en v2.

### 6.6 Stack Tecnológico
- **Grid de iconos:** Entrada con `scale(0.8 → 1)`, `opacity(0 → 1)`, stagger `80ms`, easing `easeOutBack`.
- **Hover:** `rotate(5deg)`, `scale(1.1)`, border bottom `2px solid var(--accent)`, duración `150ms`.

### 6.7 Casos de Uso / Resultados
- **Métricas (CountUp):** Al entrar en viewport, contador numérico de `0 → valor final`, duración `2000ms`, easing `easeOutExpo`. JetBrains Mono, color `#FFFFFF`.
- **Cards:** `ScrollReveal` básico. Cada card incluye: problema → solución → métrica.

### 6.8 Pricing / Agendar Llamada
- **Card principal:** Borde rojo permanente (más grueso, `2px`).
- **Glow pulsante:** Pseudo-elemento detrás del CTA con `scale(1 → 1.1)`, `opacity(0.4 → 0)`, loop infinito, duración `2000ms`. Atrae la atención sin ser invasivo.
- **Entrada:** `scale(0.95 → 1)`, `opacity(0 → 1)`, easing `easeOutBack`.

### 6.9 FAQ
- **Acordeón:** Altura animada con `anime({ height: [0, el.scrollHeight] })` o preferiblemente CSS `grid-template-rows: 0fr → 1fr` con `transition` (mejor performance). El icono `+` rota `45deg → 0deg` (se convierte en `×`) con `easeOutBack`, duración `300ms`.
- **Entrada de items:** Stagger `50ms`, `translateY(10px → 0)`, `opacity(0 → 1)`.

### 6.10 Sticky CTA (Flotante)
- **Trigger:** Aparece cuando el usuario scrollea más allá del Hero (`scrollY > viewport height * 0.8`). Oculto antes.
- **Entrada:** `translateX(120% → 0%)`, `opacity(0 → 1)`, duración `700ms`, easing `easeOutBack`.
- **Salida (si scrollea de vuelta al hero):** `translateX(0% → 120%)`, `opacity(1 → 0)`, duración `500ms`, easing `easeInExpo`.
- **Hover:** `scale(1.05)`, `box-shadow: 0 0 32px var(--accent-glow)`, duración `200ms`.
- **Position:** `fixed bottom-6 right-6 z-50`. Mobile: `bottom-4 right-4`.

### 6.11 Footer
- **Links:** Stagger `20ms`, `opacity(0 → 1)`.
- **Línea superior:** `scaleX(0 → 1)` desde el centro, duración `800ms`, easing `easeOutExpo`.

---

## 7. Componentes Reutilizables Clave

| Componente | Tipo | Descripción |
|------------|------|-------------|
| `Button` | UI | Variants: `primary` (fondo rojo), `secondary` (borde blanco), `ghost` (texto). Hover agresivo con `scale` y glow. |
| `Card` | UI | Fondo `--bg-surface`, borde `--border-default`, `border-radius: 12px`. Hover enciende borde rojo. |
| `Badge` | UI | Tag técnico. JetBrains Mono, 12px, fondo `--bg-elevated`, borde sutil. |
| `Container` | Layout | Max-width `1280px`, padding responsive, centrado. |
| `SectionWrapper` | Layout | `id` para anclas, padding vertical `clamp(80px, 10vh, 120px)`. |
| `TextReveal` | Animation (Client) | Recibe texto, lo fragmenta en spans, ejecuta anime.js stagger. Acepta glitch boolean. |
| `ScrollReveal` | Animation (Client) | Wrapper genérico. Observa intersección, dispara anime.js una sola vez. Acepta stagger, axis, delay. |
| `StaggerChildren` | Animation (Client) | Similar a ScrollReveal pero específico para listas/grids. |
| `WorkflowSVG` | Animation (Client) | Renderiza SVG de nodos y paths. Expone `play()` para ser controlado por scroll o auto. |
| `CountUp` | Animation (Client) | Contador numérico anime.js. Recibe `end`, `duration`, `suffix`. |
| `StickyCTA` | UI + Animation (Client) | Botón flotante "Agendar llamada". Controla visibilidad con scroll + anime.js entrada/salida. |

---

## 8. Datos Extensibles (Future-proof)

No hardcodear productos, stack o casos de uso en los componentes.

### 8.1 Estructura de `Product`
```typescript
interface Product {
  id: string;
  category: 'b2b' | 'agency' | string; // Permite nuevas categorías.
  title: string;
  description: string;
  features: string[];
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
}
```

### 8.2 Estructura de `UseCase`
```typescript
interface UseCase {
  id: string;
  clientType: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: number; suffix?: string }[];
}
```

> Al agregar un nuevo producto en el futuro, solo se añade un objeto al array en `data/products.ts`. El grid se adapta automáticamente.

---

## 9. Accesibilidad (AA Mínimo)

- **Motion:** Hook `useReducedMotion` que lee `window.matchMedia('(prefers-reduced-motion: reduce)')`. Si es true, todas las animaciones anime.js se configuran con `duration: 0` o se salta directamente al estado final.
- **Contraste:** Rojo `#FF0033` sobre negro `#0A0A0B` = ~5.8:1. Pasa AA para textos grandes (>18px o bold >14px). Body text en `#F0F0F2` = 18.5:1. Texto secundario `#8A8A8F` sobre `#0A0A0B` = ~4.6:1. Considerar `#9A9A9F` si se requiere AA para texto pequeño.
- **Focus:** `outline: 2px solid var(--accent)`, `outline-offset: 2px`. Visible en todos los elementos interactivos.
- **Semántica:**
  - 1 `<h1>` por página (Hero).
  - Jerarquía de headings descendente (`h2` en secciones, `h3` en cards).
  - `<nav>`, `<main>`, `<section>`, `<footer>`, `<article>` usados correctamente.
- **ARIA:**
  - `aria-expanded` en items de FAQ.
  - `aria-label` en iconos sin texto.
  - `role="img"` + `aria-label` en SVGs decorativos.

---

## 10. SEO Base (Preparación para Fase 3)

- **Metadata en `layout.tsx`:**
  - `title`: "Automatización IA para Empresas | [Nombre marca]"
  - `description`: Copy directo, sin clichés de IA. Incluye "n8n", "workflows", "agentes".
  - `openGraph`: type website, locale es_ES, imagen 1200x630.
  - `twitter`: card summary_large_image.
- **JSON-LD:** Organization + Service en `page.tsx`.
- **Performance:**
  - `next/image` con `sizes` para responsive.
  - `priority` en imagen hero/LCP.
  - Fonts con `display: swap`.
- **Semántica HTML:** Ver punto 9.

---

## 11. Stack Tecnológico del Proyecto

| Herramienta | Versión / Nota |
|-------------|----------------|
| Next.js | App Router, TypeScript estricto (`strict: true`). |
| React | 19 (o 18 según entorno). |
| Tailwind CSS | **v4.0.x** (última estable). CSS-first con `@theme` en `globals.css`. Sin `tailwind.config.ts`. Mejor performance de build, integración nativa con variables CSS, y cero-config por defecto. |
| Anime.js | v4 (`animejs` package). Motor principal de animaciones. |
| clsx / tailwind-merge | Para utilidad de clases dinámicas. |
| geist | Paquete npm para cargar Geist Sans y Geist Mono optimizadas para Next.js. |

---

## 12. Performance Budget (No Negociable)

| Métrica | Target | Estrategia |
|---------|--------|------------|
| **LCP** | < 2.0s | Hero sin imagen pesada; texto + SVG inline. `next/font` preload. `priority` solo si hay imagen crítica. |
| **CLS** | < 0.05 | Tamaños explícitos en SVGs, fonts con `size-adjust`, sin layouts shift por carga de imágenes. |
| **JS Initial** | < 150KB gzip | Server Components por defecto. Client Components lazy-loadados si es posible. Anime.js tree-shakeable. Sin Framer Motion. |
| **Animation Properties** | Solo `transform` + `opacity` | Nada de `width`, `height`, `top`, `left`, `margin`, `padding`. Fuerza GPU layer (`will-change: transform`). |
| **Reduced Motion** | Respeto absoluto | Hook `useReducedMotion` anula toda instancia de anime.js si está activo. Fallback instantáneo al estado final. |
| **Imágenes** | SVG preferido | Iconos y logos en SVG inline o `<Image>`. Nada de PNG/JPG sin `next/image` y `sizes`. |

---

## 13. Copywriting Base (Mini-Brief)

> Tono: directo, confiado, sin clichés de IA. Español neutro. El operador no vende "magia"; vende **sistemas que funcionan**.

### 13.1 Hero
- **Headline:**  
  *"Automatizaciones que no fallan."*  
  (Línea 2 opcional: *"Tu equipo no necesita más herramientas. Necesita que las herramientas trabajen solas."*)
- **Subheadline:**  
  *"Diseñamos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas en ventas, marketing y operaciones. Sin plantillas. Sin promesas vacías."*
- **CTA Primary:** *"Agendar una llamada"*  
- **CTA Secondary:** *"Ver cómo funciona"* (scroll a sección)

### 13.2 Productos

#### Card 1 — Automatizaciones B2B
- **Título:** *"Flujos de ventas y operaciones"*
- **Descripción:** *"Conectamos tu CRM, email, LinkedIn y calendario para que los leads se muevan solos. Prospección, seguimiento y reporting sin intervención manual."*
- **Tags:** `n8n`, `HubSpot / Salesforce`, `LinkedIn Automation`, `Email Sequences`, `CRM Sync`
- **CTA:** *"Ver flujos B2B"*

#### Card 2 — Automatizaciones para Agencias de Marketing
- **Título:** *"Operaciones para agencias"*
- **Descripción:** *"Reporting multi-cliente, generación de contenido, gestión de ads y social media — todo ejecutado por workflows programados. Tu equipo enfocado en estrategia, no en clicks."*
- **Tags:** `Meta Ads`, `Google Ads`, `Content Pipelines`, `Reporting`, `Social Posting`
- **CTA:** *"Ver flujos para agencias"*

### 13.3 Cómo Funciona (3 Pasos)
1. **Diagnóstico Operativo**  
   *"Mapeamos tus procesos actuales. Identificamos los puntos donde el tiempo se pierde y el dinero se filtra."*
2. **Construcción del Workflow**  
   *"Diseñamos el flujo con n8n, agentes de IA y las APIs de tus herramientas. Cada nodo tiene un propósito medible."*
3. **Entrega y Monitoreo**  
   *"No te dejamos solo. Entregamos el sistema documentado, capacitamos a tu equipo y monitoreamos que los números mejoren."*

---

## 14. Checklist de Aprobación

Antes de iniciar la Fase 2 (Build), confirmar:

- [x] Paleta y tipografía aprobadas. **Geist Sans + Geist Mono** elegidas por coherencia técnica y evitar aire gaming.
- [x] Arquitectura de carpetas aceptada.
- [x] Mapa de animaciones cubre las expectativas (Hero, StickyCTA, Productos, FAQ).
- [x] "Cómo funciona" usa **Opción B (stagger simple)** en v1.
- [x] **shadcn/ui descartado**. Componentes 100% custom.
- [x] **Tailwind CSS v4** confirmado. Sin `tailwind.config.ts`.
- [x] Performance budget aceptado (LCP < 2.0s, CLS < 0.05, JS < 150KB, solo transform/opacity).
- [x] Copywriting base aprobado (Hero, Productos, Cómo funciona).

---

**Siguiente paso:** Aprobación del usuario para iniciar Fase 2 (Build) con `caveman` + `animejs` + `next-best-practices` + `frontend-design` skills activas.
