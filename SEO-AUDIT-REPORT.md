# SEO Audit Report — Ilaxus (ilaxus.com)

> **Fecha:** 2026-06-05
> **Auditor:** SEO Technical Specialist + Content Strategist
> **Alcance:** Landing page completa (`/`) + infraestructura técnica
> **Dominio objetivo:** ilaxus.com (actualmente placeholder `operador-ia.com`)

---

## Resumen Ejecutivo

| Métrica | Estado |
|---------|--------|
| Indexabilidad | ✅ Robusta (robots.txt + sitemap + canonical + robots meta) |
| Metadata | ⚠️ Placeholder — requiere cambio de dominio y marca |
| Semántica HTML | ✅ Excelente (H1 único, jerarquía correcta, `<main>` + `<section>`) |
| Structured Data | ⚠️ Bueno — falta Product schema, BreadcrumbList, WebSite |
| Performance (teórica) | ✅ Óptima — sin imágenes estáticas, CSS crítico inline, sin JS bloqueante |
| Accesibilidad | ✅ Bueno — `prefers-reduced-motion`, ARIA labels, contraste AA+ |
| Contenido/Keywords | ⚠️ Necesita ajuste — H1 no contiene keyword primaria transaccional |
| E-E-A-T | ❌ Sin página About, social proof placeholder, sin blog |

**Top 3 prioridades críticas:**
1. Cambiar dominio/marca de `operador-ia.com` → `ilaxus.com` en metadata, JSON-LD, sitemap, robots.txt
2. Crear `/public/og-image.jpg` (1200×630px) y `/public/logo.png`
3. Añadir páginas About + Términos para E-E-A-T

---

## 1. Auditoría Técnica SEO

### 1.1 Metadata

| Elemento | Estado Actual | Problemas Detectados | Recomendación | Prioridad |
|----------|---------------|----------------------|---------------|-----------|
| `<title>` | `Automatizaciones que no fallan \| Operador IA` | Marca placeholder. No incluye keyword primaria transaccional ("automatización de procesos" o "automatización B2B"). 58 chars — aceptable. | Cambiar a: `Automatización de Procesos B2B con IA | Ilaxus` (53 chars) | **P0** |
| `<meta description>` | `Diseñamos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas en ventas, marketing y operaciones. Sin plantillas. Sin promesas vacías.` | Buen copy. 172 chars — excede 160 recomendado. Marca placeholder ausente. | Recortar a 155 chars. Ver sección 3. | **P0** |
| `og:title` / `og:description` | Igual que title/description | OK pero hereda los mismos problemas | Actualizar junto con title/description | **P0** |
| `og:image` | `/og-image.jpg` | **El archivo NO existe en `/public/`**. Esto rompe los rich previews en WhatsApp, Telegram, LinkedIn, Twitter. | Crear imagen 1200×630px. Ver specs abajo. | **P0** |
| `twitter:card` | `summary_large_image` | Correcto | Sin cambios | — |
| `twitter:image` | `/og-image.jpg` | Mismo problema que og:image | Reutilizar og-image.jpg | **P0** |
| `canonical` | `https://operador-ia.com` | Dominio placeholder | Cambiar a `https://ilaxus.com` | **P0** |
| `robots` | `index: true, follow: true` | Correcto | Sin cambios | — |
| `metadataBase` | `new URL("https://operador-ia.com")` | Placeholder | Cambiar a `https://ilaxus.com` | **P0** |
| `keywords` meta | Array de 8 terms | Bajo peso SEO en 2026. Termina como ruido si no se alinea con contenido real. | Refinar keywords a solo 5-6 términos de alta relevancia. | P2 |
| `authors` | `[{ name: "Operador IA" }]` | Placeholder | Cambiar a `[{ name: "Ilaxus" }]` | **P0** |

### 1.2 Semántica HTML

| Elemento | Estado Actual | Problemas Detectados | Recomendación | Prioridad |
|----------|---------------|----------------------|---------------|-----------|
| H1 único | ✅ `Automatizaciones que no fallan.` en Hero | No incluye keyword primaria de forma explícita. "Automatizaciones" es genérico. | Cambiar a incluir keyword transaccional. Ver sección 5. | P1 |
| Jerarquía H2-H3 | ✅ Correcta: H2 en cada section header, H3 en cards | Ninguno | Sin cambios | — |
| `<main>` | ✅ Envuelve todas las secciones menos Navbar/Footer | Correcto | Sin cambios | — |
| `<section>` | ✅ Cada bloque usa `SectionWrapper` con `as="section"` + `id` | Correcto | Sin cambios | — |
| `<nav>` | ✅ Navbar usa `<nav>` semántico | Links hidden en mobile (`hidden md:flex`) — sin hamburger menu | Añadir menú mobile toggle. Crítico para mobile-first indexing. | **P0** |
| `<footer>` | ✅ Usa `<footer>` semántico | Ninguno | Sin cambios | — |
| `<header>` | ❌ No se usa `<header>` | Navbar usa `<nav>` directamente (correcto). Hero no tiene `<header>`. | Opcional: envolver Hero en `<header>` si es el hero principal. | P2 |

### 1.3 Performance (Core Web Vitals)

| Métrica | Budget | Estimación Actual | Estado | Evidencia |
|---------|--------|-------------------|--------|-----------|
| **LCP** | < 2.5s | ~1.5-2.0s | ✅ | No hay imágenes estáticas (solo SVG inline). H1 de texto es LCP. Geist font se self-hosts. Tailwind v4 tree-shaken. |
| **CLS** | < 0.1 | ~0.02-0.05 | ✅ | `next/font` con `font-display: swap` (built-in). Tailwind no inyecta CSS dinámico. SVG tiene viewBox fijo. Sin ads ni iframes. |
| **INP** | < 200ms | ~50-80ms | ✅ | Solo event handlers: scroll (passive), FAQ toggle (instantáneo), anime.js (GPU-only: transform + opacity). |
| **TTFB** | < 800ms | Depende del hosting | ⚠️ | `output: "standalone"` — necesita medir en producción. |

**Hallazgos de performance:**

| Factor | Estado | Recomendación |
|--------|--------|---------------|
| Imágenes | ✅ No hay imágenes `<img>`. SVG inline. | Cuando se añadan imágenes: usar `next/image` con WebP/AVIF, `loading="lazy"`, `alt` descriptivo. |
| Fonts | ✅ Geist via `next/font`. `font-display: swap` built-in. | Sin cambios. |
| JS | ✅ anime.js se carga en Client Components. Sin JS bloqueante en Server Components. | Sin cambios. |
| CSS | ✅ Tailwind v4 tree-shaken. Critical CSS inline por defecto (Next.js). | Sin cambios. |
| Caché | ⚠️ Sin headers de caché explícitos (solo `next.config.ts` security headers). | Añadir `Cache-Control` para assets estáticos: `public, max-age=31536000, immutable`. |
| Animaciones | ✅ `prefers-reduced-motion` global en CSS + `useReducedMotion()` hook en JS. | Sin cambios. |

### 1.4 Accesibilidad

| Elemento | Estado | Problemas | Recomendación |
|----------|--------|-----------|---------------|
| Contraste | ✅ AA+ garantizado: `#F0F0F2` texto sobre `#0A0A0B` bg = ratio 17.4:1 | Ninguno | — |
| `prefers-reduced-motion` | ✅ CSS global + hook React en cada componente animado | Ninguno | — |
| Alt texts | ✅ SVG tiene `aria-label="Diagrama de workflow automatizado"` | No hay `<img>` tags. Cuando se añadan, usar `alt` descriptivos con keywords. | — |
| ARIA labels | ✅ `aria-expanded` en FAQ, `aria-label` en CountUp | Ninguno | — |
| Keyboard nav | ⚠️ FAQ toggle focusable con `focus-visible:ring`. Navbar links focusables. | Navbar links hidden en mobile sin toggle. | Requiere menú hamburguesa para móvil. |
| Semantic HTML | ✅ `<nav>`, `<main>`, `<section>`, `<footer>` | Ninguno | — |

### 1.5 Structured Data

| Schema | Estado | Validación | Recomendación |
|--------|--------|------------|---------------|
| Organization | ✅ Implementado en `page.tsx` | Nombre, URL y logo usan placeholder. `sameAs` apunta a `#`. | Actualizar con datos reales. |
| Service | ✅ Implementado | Description genérico. Sin `offers`. | Refinar. Añadir `Product` para cada servicio. |
| FAQPage | ✅ Implementado dinámicamente desde `faq.ts` | Bien estructurado. | Verificar en Rich Results Test post-deploy. |
| BreadcrumbList | ❌ No implementado | Single-page no lo requiere estrictamente, pero ayuda. | Implementar. |
| WebSite | ❌ No implementado | Útil para `SiteNavigationElement`. | Implementar. |
| Product | ❌ No implementado | Crítico — hay dos productos claros (B2B + Agencias). | Implementar en JSON-LD. |

### 1.6 Indexabilidad

| Elemento | Estado | Detalle |
|----------|--------|---------|
| `robots.txt` | ✅ | `Allow: /` + `Sitemap: https://operador-ia.com/sitemap.xml`. Dominio placeholder. |
| `sitemap.xml` | ✅ | Generado vía `app/sitemap.ts`. Single URL. Dominio placeholder. |
| `canonical` | ✅ | Self-referencing en `/`. Dominio placeholder. |
| `noindex` | ✅ | No hay páginas con noindex. |

---

## 2. Estrategia de Palabras Clave

> **Nota:** Volúmenes estimados para mercado hispanohablante (LATAM + España) basados en tendencias de Google Keyword Planner, SEMrush y Ahrefs para el nicho B2B/SaaS/automatización. Los valores son aproximados — validar con herramienta paga antes de invertir en contenido.

### 2.1 Primary Keywords (P0 — H1, title, hero)

| Keyword | Vol. Estimado (mensual) | Competencia | Intención | Prioridad | Dónde Usarla |
|---------|------------------------|-------------|-----------|-----------|--------------|
| `automatización de procesos empresariales` | 1,300 – 1,900 | Alta | Comercial/Transaccional | ⭐⭐⭐ | Title, H1, H2 Hero |
| `automatización B2B` | 2,900 – 4,400 | Media-Alta | Comercial | ⭐⭐⭐ | Title, H2 Productos, description |
| `workflows con IA` | 1,600 – 2,400 | Media | Comercial/Informacional | ⭐⭐ | H2, body Hero, description |

### 2.2 Secondary Keywords (P1 — H2, H3, body copy)

| Keyword | Vol. Estimado (mensual) | Competencia | Intención | Prioridad | Dónde Usarla |
|---------|------------------------|-------------|-----------|-----------|--------------|
| `n8n para empresas` | 480 – 720 | Baja | Comercial | ⭐⭐⭐ | Stack, H3, body |
| `automatización para agencias de marketing` | 590 – 880 | Baja-Media | Comercial | ⭐⭐⭐ | H2 Productos (agencia), description |
| `automatizar procesos con n8n` | 880 – 1,300 | Baja-Media | Comercial | ⭐⭐⭐ | HowItWorks, Stack |
| `automatización sin código` | 2,900 – 4,400 | Media-Alta | Comercial | ⭐⭐ | FAQ, body |
| `workflows personalizados` | 720 – 1,100 | Baja | Comercial/Transaccional | ⭐⭐ | H2, body |
| `automatización CRM` | 1,900 – 2,900 | Media | Comercial | ⭐⭐ | Product tags, features |
| `agentes de IA para automatización` | 590 – 880 | Baja | Comercial/Informacional | ⭐⭐ | Stack, FAQ |
| `automatizar ventas B2B` | 390 – 590 | Baja | Transaccional | ⭐⭐ | Product B2B description |

### 2.3 Long-Tail Keywords (P2 — FAQ, casos de uso, blog)

| Keyword | Vol. Estimado (mensual) | Competencia | Intención | Dónde Usarla |
|---------|------------------------|-------------|-----------|--------------|
| `cómo automatizar prospección B2B con n8n` | 90 – 170 | Muy Baja | Informacional | Blog post |
| `n8n vs make vs zapier para empresas` | 170 – 320 | Baja | Comercial/Comparación | Blog post |
| `automatizar reporting agencias marketing` | 50 – 110 | Muy Baja | Comercial | Caso de uso, blog |
| `conectar CRM con n8n` | 210 – 390 | Baja | Informacional/Comercial | FAQ, blog |
| `workflows de email automation con ia` | 140 – 260 | Baja | Comercial | Product B2B, blog |
| `automatización de leads B2B` | 260 – 480 | Baja-Media | Comercial | Product B2B features |
| `cuánto cuesta automatizar procesos empresariales` | 50 – 110 | Muy Baja | Transaccional | FAQ, Pricing |
| `automatizar inventario shopify amazon` | 90 – 170 | Muy Baja | Comercial | Casos de uso |
| `consultor n8n freelance` | 170 – 320 | Baja | Transaccional | About, footer |
| `implementación n8n empresa` | 70 – 140 | Muy Baja | Comercial | HowItWorks |
| `automatización multi-cliente agencia` | 30 – 70 | Muy Baja | Comercial | Product Agencias |
| `workflows documentados n8n` | 40 – 90 | Muy Baja | Informacional | Blog, recursos |
| `automatizar sincronización CRM ERP` | 50 – 110 | Muy Baja | Comercial | Casos de uso E-commerce |
| `qué es n8n automatización` | 390 – 720 | Media | Informacional | Blog (top of funnel) |
| `mejor herramienta para automatizar procesos B2B` | 70 – 140 | Baja | Comercial | Blog comparativa |

### 2.4 Mapa de Intención por Página

| Sección/URL | Intención Objetivo | Keywords Primarias | Keywords Secundarias |
|-------------|-------------------|-------------------|---------------------|
| `/` (Home) | Comercial | automatización de procesos B2B, workflows con IA | n8n para empresas, workflows personalizados |
| `/#productos` | Comercial | automatización B2B, automatización agencias | automatización de leads, reporting automático |
| `/#como-funciona` | Informacional → Comercial | automatizar procesos con n8n | implementación n8n, consultor automatización |
| `/#casos` | Comercial | — | automatización CRM, sincronización inventario, prospección B2B |
| `/#pricing` | Transaccional | — | cuánto cuesta automatizar procesos, consultor n8n |
| `/#faq` | Informacional → Comercial | — | conectar CRM con n8n, automatización sin código, n8n para empresas |

---

## 3. Optimización de Metadata On-Page

### 3.1 Home (`/`) — Código para `app/layout.tsx`

```tsx
import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://ilaxus.com"),
  title: "Automatización de Procesos B2B con IA | Ilaxus",
  description:
    "Automatizamos workflows empresariales con n8n y agentes de IA. Sin plantillas. Diseño a medida de tu arquitectura. Agenda una auditoría gratuita.",
  keywords: [
    "automatización de procesos",
    "automatización B2B",
    "workflows con IA",
    "n8n para empresas",
    "automatización agencias marketing",
    "Ilaxus",
  ],
  authors: [{ name: "Ilaxus" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://ilaxus.com",
    siteName: "Ilaxus",
    title: "Automatización de Procesos B2B con IA | Ilaxus",
    description:
      "Automatizamos workflows empresariales con n8n y agentes de IA. Sin plantillas. Diseño a medida para tu arquitectura.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ilaxus — Automatización de procesos empresariales con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatización de Procesos B2B con IA | Ilaxus",
    description:
      "Workflows empresariales con n8n y agentes de IA. Sin plantillas. A medida de tu arquitectura.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0B",
  width: "device-width",
  initialScale: 1,
};
```

### 3.2 Comparativa: Antes vs Después

| Campo | Antes (Placeholder) | Después (Optimizado) |
|-------|---------------------|---------------------|
| Title | `Automatizaciones que no fallan \| Operador IA` (58 chars) | `Automatización de Procesos B2B con IA \| Ilaxus` (53 chars) |
| Description | 172 chars, sin CTA | 155 chars, incluye CTA: "Agenda una auditoría gratuita" |
| Keywords | 8 términos genéricos | 6 términos de alta intención comercial |
| OG Image alt | `Operador IA - Automatizaciones` | `Ilaxus — Automatización de procesos empresariales con IA` |
| Site name | `Operador IA` | `Ilaxus` |
| Author | `Operador IA` | `Ilaxus` |

---

## 4. Structured Data (JSON-LD)

### 4.1 Código Completo para `app/page.tsx`

Reemplazar el objeto `jsonLd` actual con:

```tsx
import { products } from "@/app/data/products";
import { faq } from "@/app/data/faq";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Organization
    {
      "@type": "Organization",
      name: "Ilaxus",
      url: "https://ilaxus.com",
      logo: "https://ilaxus.com/logo.png",
      description:
        "Automatización de procesos empresariales con IA. Diseñamos workflows con n8n, agentes de IA y APIs adaptados a tu arquitectura de negocio.",
      email: "contacto@ilaxus.com",
      sameAs: [
        "https://linkedin.com/company/ilaxus",
        "https://twitter.com/ilaxus",
      ],
      founder: {
        "@type": "Person",
        name: "[Nombre del fundador]",
      },
    },

    // 2. WebSite con SiteNavigationElement
    {
      "@type": "WebSite",
      url: "https://ilaxus.com",
      name: "Ilaxus — Automatización de Procesos B2B",
      description:
        "Automatizamos workflows empresariales con n8n y agentes de IA. Sin plantillas.",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://ilaxus.com/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      hasPart: [
        {
          "@type": "SiteNavigationElement",
          name: "Productos",
          url: "https://ilaxus.com/#productos",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Cómo funciona",
          url: "https://ilaxus.com/#como-funciona",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Casos",
          url: "https://ilaxus.com/#casos",
        },
        {
          "@type": "SiteNavigationElement",
          name: "Agendar",
          url: "https://ilaxus.com/#pricing",
        },
      ],
    },

    // 3. Product — Automatización B2B
    {
      "@type": "Product",
      name: "Automatización de ventas y operaciones B2B",
      description:
        "Workflows de prospección, CRM, secuencias de email y reporting para equipos comerciales B2B. Integración con HubSpot, Salesforce, LinkedIn y más.",
      category: "Business Process Automation",
      brand: {
        "@type": "Brand",
        name: "Ilaxus",
      },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: "Proyecto a medida según diagnóstico",
        },
        availability: "https://schema.org/InStock",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Motor de automatización",
          value: "n8n",
        },
        {
          "@type": "PropertyValue",
          name: "Integraciones",
          value: "HubSpot, Salesforce, Pipedrive, LinkedIn, APIs REST",
        },
      ],
    },

    // 4. Product — Automatización para Agencias
    {
      "@type": "Product",
      name: "Automatización para agencias de marketing",
      description:
        "Reporting multi-cliente automatizado, pipelines de contenido con IA, optimización de campañas y publicación cross-platform para agencias de marketing.",
      category: "Marketing Automation",
      brand: {
        "@type": "Brand",
        name: "Ilaxus",
      },
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          description: "Proyecto a medida según diagnóstico",
        },
        availability: "https://schema.org/InStock",
      },
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "Motor de automatización",
          value: "n8n",
        },
        {
          "@type": "PropertyValue",
          name: "Integraciones",
          value: "Meta Ads, Google Ads, Analytics, plataformas de contenido",
        },
      ],
    },

    // 5. Service (paraguas)
    {
      "@type": "Service",
      name: "Automatización de procesos empresariales con IA",
      description:
        "Diseñamos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas en ventas, marketing y operaciones. Arquitectura a medida.",
      provider: {
        "@type": "Organization",
        name: "Ilaxus",
        url: "https://ilaxus.com",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "España",
        },
        {
          "@type": "Country",
          name: "México",
        },
        {
          "@type": "Country",
          name: "Colombia",
        },
        {
          "@type": "Country",
          name: "Argentina",
        },
        {
          "@type": "Country",
          name: "Chile",
        },
      ],
      serviceType: "Business Process Automation",
      termsOfService: "https://ilaxus.com/terminos",
    },

    // 6. FAQPage — dinámico desde faq.ts
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },

    // 7. BreadcrumbList
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://ilaxus.com",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Automatización de Procesos B2B",
          item: "https://ilaxus.com/#productos",
        },
      ],
    },
  ],
};
```

### 4.2 Validación

- **Rich Results Test:** https://search.google.com/test/rich-results (ejecutar post-deploy)
- **Schema Markup Validator:** https://validator.schema.org/
- Schemas cubiertos: `Organization`, `WebSite`, `Product` (×2), `Service`, `FAQPage`, `BreadcrumbList`, `SearchAction`, `SiteNavigationElement`

---

## 5. Optimización de Contenido Existente

### 5.1 Hero — H1 y subtitle

| Campo | Texto Actual | Texto Optimizado | Keyword Insertada |
|-------|-------------|------------------|-------------------|
| H1 | `Automatizaciones que no fallan.` | `Automatización de procesos sin plantillas.` | «automatización de procesos» — primary keyword |
| Subtitle | `Diseñamos workflows con n8n, agentes de IA y APIs para eliminar tareas repetitivas en ventas, marketing y operaciones. Sin plantillas. Sin promesas vacías.` | `Workflows con IA que se acoplan a tu arquitectura. n8n, agentes personalizados y APIs — sin forzar herramientas que no necesitás.` | «workflows con IA», «n8n» |

> **Nota:** "Sin promesas vacías" removido — suena defensivo. El tono debe ser confiado, no reactivo.

### 5.2 Productos — Títulos y descripciones

| Sección | Texto Actual | Texto Optimizado | Keyword Insertada |
|---------|-------------|------------------|-------------------|
| Label B2B | `Automatización B2B` | Sin cambios — correcto | — |
| Título Card B2B | `Flujos de ventas y operaciones` | `Automatización de ventas y prospección B2B` | «automatización B2B», «ventas B2B» |
| Descripción B2B | `Conectamos tu CRM, email, LinkedIn y calendario para que los leads se muevan solos. Prospección, seguimiento y reporting sin intervención manual.` | `Workflows que conectan CRM, email, LinkedIn y calendario. Leads que se mueven solos: prospección, scoring y seguimiento automatizado.` | «workflows», «automatizado» |
| Label Agencias | `Para Agencias` | `Automatización para Agencias` | «automatización para agencias» |
| Título Card Agencias | `Operaciones para agencias` | `Automatización para agencias de marketing` | «automatización para agencias de marketing» |
| Descripción Agencias | `Reporting multi-cliente, generación de contenido, gestión de ads y social media — todo ejecutado por workflows programados. Tu equipo enfocado en estrategia, no en clicks.` | `Reporting multi-cliente, contenido con IA, ads y social media — todo ejecutado por workflows. Tu equipo en estrategia, no en tareas repetitivas.` | «workflows», «reporting», «IA» |

### 5.3 HowItWorks

| Campo | Texto Actual | Texto Optimizado | Keyword Insertada |
|-------|-------------|------------------|-------------------|
| Título H2 | `Cómo funciona` | `Cómo automatizamos tus procesos` | «automatizar procesos» |
| Step 01 Title | `Diagnóstico Operativo` | `Diagnóstico Operativo` (sin cambios) | — |
| Step 02 Title | `Construcción del Workflow` | `Construcción del Workflow` (sin cambios) | — |
| Step 03 Title | `Entrega y Monitoreo` | `Entrega y Monitoreo` (sin cambios) | — |

### 5.4 Stack

| Campo | Texto Actual | Texto Optimizado | Keyword Insertada |
|-------|-------------|------------------|-------------------|
| H2 | `Conectamos lo que ya usás` | `n8n + las herramientas que ya tenés` | «n8n» — keyword secundaria |

### 5.5 FAQ — Preguntas

| # | Pregunta Actual | Pregunta Optimizada | Keyword Capturada |
|---|----------------|--------------------|--------------------|
| Q1 | `¿Qué herramientas usan?` | `¿Qué herramientas de automatización usan?` | «herramientas de automatización» |
| Q3 | `¿Necesito saber código?` | `¿Necesito saber programar para automatizar procesos?` | «automatizar procesos» |
| Q4 | `¿Y si una API cambia o falla?` | Sin cambios — buena pregunta diferenciadora | — |
| Q6 (nueva) | *No existe* | `¿Cuánto cuesta automatizar procesos empresariales?` | «cuánto cuesta automatizar procesos» |
| Q7 (nueva) | *No existe* | `¿Con qué CRMs se integran sus workflows?` | «workflows CRM», «integración CRM» |

> **Acción:** Añadir Q6 y Q7 a `app/data/faq.ts`. Mínimo 6-8 FAQs para rich snippets robustos.

### 5.6 Pricing

| Campo | Texto Actual | Texto Optimizado |
|-------|-------------|------------------|
| H2 | `Agendá una llamada de diagnóstico` | Sin cambios — buen copy transaccional |
| P | `Sin compromiso. 30 minutos para mapear tus procesos y ver si hay margen de automatización.` | `Sin compromiso. 30 minutos para mapear tus procesos y detectar dónde la automatización genera más ROI.` |

---

## 6. Recomendaciones de Performance SEO

### 6.1 Acciones Inmediatas (P0-P1)

#### A. Caché Headers

Añadir a `next.config.ts` headers existentes:

```ts
// Dentro del array de headers en next.config.ts:
{
  source: "/:path*.{jpg,jpeg,png,webp,avif,gif,svg,ico,woff2,css,js}",
  headers: [
    {
      key: "Cache-Control",
      value: "public, max-age=31536000, immutable",
    },
  ],
},
{
  source: "/",
  headers: [
    {
      key: "Cache-Control",
      value: "public, max-age=3600, must-revalidate",
    },
  ],
},
```

#### B. HSTS Header

Añadir a headers existentes:

```ts
{
  key: "Strict-Transport-Security",
  value: "max-age=63072000; includeSubDomains; preload",
},
```

#### C. OG Image — Especificaciones

Crear `/public/og-image.jpg`:
- **Dimensiones:** 1200×630px
- **Formato:** JPEG, < 200KB
- **Fondo:** `#0A0A0B`
- **Tipografía:** Geist Sans, color `#F0F0F2`
- **Acento:** `#FF0033` para elementos de diseño
- **Texto sugerido:** "Ilaxus — Automatización de Procesos B2B con IA" (mín 30px para legibilidad)
- **Elemento visual:** Diagrama de nodos/edges estilizado (consistente con WorkflowSVG)

#### D. Logo para JSON-LD

Crear `/public/logo.png`:
- **Dimensiones:** 512×512px mínimo (Google recomienda esto para Organization logo)
- **Formato:** PNG con transparencia
- **Diseño:** Logo de Ilaxus en formato cuadrado

### 6.2 Acciones Programadas (P2)

| Acción | Justificación | Implementación |
|--------|--------------|----------------|
| Next.js `headers()` para HTML | Añadir `X-Robots-Tag` dinámico para páginas que no deban indexarse en el futuro | `next.config.ts` |
| `_headers` o `vercel.json` | Si el deploy es en Vercel/Cloudflare, configurar headers a nivel CDN | Archivo de configuración del host |
| Lazy loading en imágenes futuras | Cuando se añadan imágenes a casos de uso o blog | `next/image` con `loading="lazy"` por defecto |
| WebP/AVIF para todas las imágenes | `next.config.ts` ya configurado: `formats: ["image/avif", "image/webp"]` | Sin cambios |

### 6.3 Verificación Post-Deploy

```bash
# Validar performance
npx lighthouse https://ilaxus.com --view

# Validar Core Web Vitals
# Usar PageSpeed Insights: https://pagespeed.web.dev/

# Validar Robots.txt
curl https://ilaxus.com/robots.txt

# Validar Sitemap
curl https://ilaxus.com/sitemap.xml

# Validar headers de seguridad
curl -I https://ilaxus.com
```

---

## 7. Plan de Contenido Adicional

### 7.1 Blog Posts — Top of Funnel (Captura Long-Tail)

| Título | Keyword Objetivo | Vol. Est. | Formato |
|--------|-----------------|-----------|---------|
| `Cómo automatizar prospección B2B con n8n: guía paso a paso` | cómo automatizar prospección B2B con n8n | 90-170 | Tutorial con capturas |
| `n8n vs Make vs Zapier: ¿Cuál es mejor para empresas en 2026?` | n8n vs make vs zapier para empresas | 170-320 | Comparativa técnica |
| `Qué es n8n y cómo funciona: la guía definitiva para automatizar procesos` | qué es n8n automatización | 390-720 | Guía introductoria |
| `Automatización de reporting para agencias de marketing: ahorrá 85% del tiempo` | automatizar reporting agencias marketing | 50-110 | Caso de uso + tutorial |
| `Conectar HubSpot con n8n: workflows de CRM automation sin código` | conectar CRM con n8n | 210-390 | Tutorial técnico |
| `Automatización sin código para empresas: 5 workflows que podés implementar hoy` | automatización sin código empresarial | — | Listicle + ejemplos |

### 7.2 Páginas de Servicio — Middle/Bottom Funnel

| URL Propuesta | Keyword Objetivo | Contenido |
|---------------|-----------------|-----------|
| `/automatizacion-b2b` | automatización B2B, automatizar ventas B2B | Detalle del servicio B2B, caso de uso SaaS, pricing, FAQ específico |
| `/automatizacion-agencias` | automatización para agencias de marketing | Detalle del servicio agencias, caso de uso marketing, stack, FAQ |
| `/casos/saas-b2b` | automatización prospección B2B | Caso de estudio SaaS B2B completo (problema → solución → métricas → testimonio) |
| `/casos/agencia-marketing` | automatizar reporting agencias | Caso de estudio agencia completo |
| `/casos/ecommerce` | automatizar inventario shopify | Caso de estudio e-commerce completo |

### 7.3 Páginas Trust (E-E-A-T)

| URL | Contenido | Prioridad |
|-----|----------|-----------|
| `/about` | Quiénes somos, founder bio, stack técnico, metodología de trabajo | **P0** — crítico para E-E-A-T |
| `/terminos` | Términos y condiciones del servicio | **P0** — trust signal para Google |
| `/privacidad` | Política de privacidad | **P0** — trust signal |
| `/contacto` | Formulario + email + LinkedIn | P1 |

### 7.4 Recursos y Lead Magnets

| Recurso | Formato | Keyword |
|---------|---------|---------|
| `Guía: 10 workflows de n8n para empresas B2B` | PDF descargable | n8n para empresas |
| `Plantilla: diagnóstico de automatización` | Notion/Google Sheets | automatización de procesos empresariales |
| `Checklist: 20 procesos que toda agencia debería automatizar` | PDF / Blog post | automatización para agencias de marketing |

---

## 8. Plan de Acción Priorizado

### P0 — Crítico (Bloquea lanzamiento o indexación)

| # | Acción | Archivo(s) | Esfuerzo |
|---|--------|-----------|----------|
| 1 | Cambiar dominio `operador-ia.com` → `ilaxus.com` en metadata, JSON-LD, sitemap, robots.txt | `layout.tsx`, `page.tsx`, `sitemap.ts`, `robots.txt` | 15 min |
| 2 | Cambiar nombre "Operador IA" → "Ilaxus" en Navbar y Footer | `Navbar.tsx`, `Footer.tsx` | 5 min |
| 3 | Crear `/public/og-image.jpg` (1200×630px) | Nuevo archivo | Diseño: 2h |
| 4 | Crear `/public/logo.png` (512×512px) | Nuevo archivo | Diseño: 1h |
| 5 | Añadir menú mobile hamburguesa a `Navbar.tsx` | `Navbar.tsx` | 1-2h |
| 6 | Crear página `/about` (E-E-A-T) | Nueva ruta | 3-4h |
| 7 | Crear páginas `/terminos` y `/privacidad` | Nuevas rutas | 2h |
| 8 | Actualizar URL de Calendly real en `Pricing.tsx` | `Pricing.tsx` | 1 min |
| 9 | Actualizar social links reales en Footer y JSON-LD `sameAs` | `Footer.tsx`, `page.tsx` | 5 min |
| 10 | Validar JSON-LD en Google Rich Results Test post-deploy | — | 30 min |

### P1 — Alto Impacto (Mejora directa de ranking)

| # | Acción | Archivo(s) | Esfuerzo |
|---|--------|-----------|----------|
| 11 | Optimizar H1 del Hero con keyword primaria | `Hero.tsx` | 5 min |
| 12 | Optimizar títulos y descripciones de productos | `Products.tsx` | 10 min |
| 13 | Añadir 2 FAQs adicionales (Q6, Q7) | `faq.ts` | 10 min |
| 14 | Optimizar títulos de FAQ existentes | `faq.ts` | 5 min |
| 15 | Implementar nuevo JSON-LD completo (reemplazar actual) | `page.tsx` | 15 min |
| 16 | Añadir headers de caché y HSTS a `next.config.ts` | `next.config.ts` | 10 min |
| 17 | Reemplazar social proof placeholder por clientes reales | `socialProof.ts` | 5 min |
| 18 | Implementar imágenes `next/image` con `alt` descriptivos donde aplique | Varios | 1-2h |

### P2 — Mediano Plazo (Escalabilidad orgánica)

| # | Acción | Esfuerzo |
|---|--------|----------|
| 19 | Publicar primer blog post: `n8n vs Make vs Zapier para empresas` | 4-6h |
| 20 | Crear páginas de servicio `/automatizacion-b2b` y `/automatizacion-agencias` | 6-8h |
| 21 | Publicar blog post: `Cómo automatizar prospección B2B con n8n` | 4-6h |
| 22 | Crear casos de estudio detallados (páginas individuales) | 3h c/u |
| 23 | Configurar Google Search Console + Bing Webmaster Tools | 2h |
| 24 | Implementar Google Analytics 4 (GA4) para tracking de conversión | 2h |
| 25 | Añadir `LocalBusiness` schema si aplica | 30 min |
| 26 | Planificar primer lead magnet (guía/checklist descargable) | 4h |

---

## 9. Notas Técnicas

### 9.1 Next.js 16 Consideraciones

- `metadata` export funciona en Server Components (`layout.tsx`) ✅ — ya implementado
- `sitemap.ts` usando `MetadataRoute.Sitemap` ✅ — ya implementado
- `robots.txt` estático en `/public/` ✅ — ya implementado
- `alternates.canonical` ✅ — ya implementado
- `alternates.languages` para hreflang si se expande a inglés/portugués en el futuro
- **No usar `generateMetadata()`** en layout (no soportado en Next.js 16 — usar export estático)

### 9.2 Tailwind v4

- No `tailwind.config.ts` — todo en `globals.css` con `@theme inline`
- `@tailwindcss/postcss` como plugin en `postcss.config.mjs`

### 9.3 Deploy

- `output: "standalone"` — compatible con Docker, Vercel, Railway, Fly.io
- Para máximo rendimiento SEO, considerar CDN global (Cloudflare, Vercel Edge)
- Si se necesita SSG estático: cambiar a `output: "export"` + `distDir: "dist"`

---

## Apéndice A: Checklist de Verificación Pre-Launch

```
[ ] Dominio ilaxus.com configurado y sirviendo HTTPS
[ ] SSL certificate válido (Let's Encrypt o automático del host)
[ ] HTTP → HTTPS redirect funcionando (301)
[ ] www → non-www redirect (o viceversa, consistente)
[ ] metadataBase actualizado a https://ilaxus.com
[ ] OG Image renderiza correctamente en:
    [ ] https://www.opengraph.xyz
    [ ] Twitter Card Validator
    [ ] WhatsApp / Telegram preview
[ ] JSON-LD pasa:
    [ ] https://search.google.com/test/rich-results
    [ ] https://validator.schema.org/
[ ] robots.txt accesible: https://ilaxus.com/robots.txt
[ ] sitemap.xml accesible: https://ilaxus.com/sitemap.xml
[ ] Lighthouse score > 90 en Performance / SEO / Accessibility / Best Practices
[ ] PageSpeed Insights: LCP < 2.5s, CLS < 0.1, INP < 200ms
[ ] No broken links internos
[ ] Canonical tag self-referencing en /
[ ] Google Search Console: propiedad verificada + sitemap submitido
[ ] Bing Webmaster Tools: sitemap submitido
[ ] `prefers-reduced-motion` funcionando en macOS Accessibility settings
[ ] Keyboard navigation completa (Tab por todas las secciones interactivas)
[ ] Menú mobile funcional y links accesibles en viewport < 768px
```

---

## Apéndice B: Referencias y Herramientas

| Recurso | URL |
|---------|-----|
| Google Rich Results Test | https://search.google.com/test/rich-results |
| Schema Markup Validator | https://validator.schema.org/ |
| PageSpeed Insights | https://pagespeed.web.dev/ |
| Open Graph Debugger | https://www.opengraph.xyz |
| Google Search Console | https://search.google.com/search-console |
| Bing Webmaster Tools | https://www.bing.com/webmasters |
| Next.js Metadata Docs | `node_modules/next/dist/docs/` |
| schema.org/Product | https://schema.org/Product |
| schema.org/FAQPage | https://schema.org/FAQPage |
| schema.org/Organization | https://schema.org/Organization |

---

> **Fin del reporte.** Próximo paso: implementar P0 (#1-10). Tiempo estimado total P0: ~8-10 horas incluyendo diseño de assets.
