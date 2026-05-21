# SEO Pendientes — Operador IA Landing

> Documento vivo. Marcar como `[x]` cuando se resuelva cada ítem.  
> Última actualización: Fase 3 (SEO Audit) — post-build crítico.

---

## Pendientes de Marca / Identidad (Bloquean validación final)

- [ ] **Nombre final de la empresa**: "Operador IA" es placeholder. Actualizar en:
  - `app/layout.tsx` → `metadata.title`, `metadata.description`, `metadata.openGraph.siteName`, `metadata.authors`
  - `app/page.tsx` → JSON-LD `Organization.name`, `Service.provider.name`
  - `app/sections/Footer.tsx` → copyright text, logo text
  - `app/sections/Navbar.tsx` → logo text
  - `public/robots.txt` → dominio en `Sitemap:`
  - `app/sitemap.ts` → `url`

- [ ] **Dominio real**: Reemplazar `https://operador-ia.com` en:
  - `app/layout.tsx` → `metadataBase`, `openGraph.url`
  - `app/page.tsx` → JSON-LD `Organization.url`
  - `public/robots.txt` → `Sitemap:`
  - `app/sitemap.ts` → `url`

- [ ] **Logo en alta resolución**: Subir `/public/logo.png` (recomendado 512×512 mínimo) para JSON-LD `Organization.logo`. Actualizar URL absoluta en `app/page.tsx`.

---

## Pendientes de Contenido / Copy

- [ ] **Social proof real**: Reemplazar nombres placeholder en `app/data/socialProof.ts` ("TechFlow", "ScaleOps", etc.) por nombres reales de clientes. Esto impacta directamente E-E-A-T (Trust).

- [ ] **Casos de uso reales**: Actualizar `app/data/useCases.ts` con datos reales de clientes (problema, solución, métricas verificables). Considerar añadir `author` o `source` por caso.

- [ ] **FAQ adicionales**: Extender `app/data/faq.ts` según preguntas reales que reciban por email/chat. Mínimo 6-8 items para rich snippets robustos.

- [ ] **Descripción de servicios**: Refinar `app/page.tsx` JSON-LD `Service.description` para que coincida exactamente con el value prop final.

---

## Pendientes de Assets

- [ ] **OG Image**: Crear `/public/og-image.jpg` (1200×630 px, < 200KB).  
  Especificaciones: fondo `#0A0A0B`, tipografía Geist Sans, acento `#FF0033`. Sin texto demasiado pequeño (mín 30px).  
  Asegurar que `metadata.openGraph.images[0].alt` en `layout.tsx` sea descriptivo.

- [ ] **Favicon / Apple touch icon**: Añadir `icon` e `apple-touch-icon` en `app/layout.tsx` metadata o archivos en `/app/` (Next.js convención).

---

## Pendientes de Estructura / Escalabilidad

- [ ] **Página About / Equipo**: Crítico para E-E-A-T. Google evalúa quién está detrás del servicio. Mínimo: foto, nombre, credenciales técnicas.

- [ ] **Página de términos / privacidad**: Obligatorio para trust signals. Link desde footer.

- [ ] **Blog / Recursos**: Para construir topical authority en "automatización n8n", "workflows IA", "CRM automation". Landing sola no compite a largo plazo.

- [ ] **Páginas de servicio individuales**: Considerar rutas `/automatizacion-b2b`, `/automatizacion-agencias` para targeting específico (programmatic SEO).

---

## Pendientes Técnicos Post-Launch

- [ ] **Google Search Console**: Verificar propiedad del dominio. Submit sitemap. Monitorear "Index Coverage" y "Core Web Vitals".

- [ ] **Bing Webmaster Tools**: Submit sitemap. Bing tiene cuota de mercado significativa en LATAM/Europa.

- [ ] **Google Rich Results Test**: Validar JSON-LD (Organization, Service, FAQPage) después de deploy.

- [ ] **PageSpeed Insights**: Validar LCP < 2.5s, CLS < 0.1, INP < 200ms en mobile + desktop.

- [ ] **Calendly URL real**: Actualizar `app/sections/Pricing.tsx` Button href de `https://calendly.com` a URL específica.

- [ ] **Social links reales**: Actualizar `app/sections/Footer.tsx` y JSON-LD `sameAs` con URLs reales de LinkedIn y Twitter/X.

- [ ] **Menú hamburguesa mobile**: `Navbar.tsx` oculta links en mobile (`hidden md:flex`). Añadir menú toggle para UX y mobile-first indexing.

- [ ] **Reviews / Testimonios schema**: Una vez se tengan reseñas reales, añadir `Review` o `AggregateRating` al JSON-LD.

- [ ] **LocalBusiness schema** (si aplica): Si el servicio tiene componente local o presencia física, añadir `LocalBusiness` con `address`, `geo`, `openingHours`.

- [ ] **Hreflang** (si se expande a otros idiomas): Si se añade inglés o portugués, implementar `alternates.languages` en metadata y sitemap con `<xhtml:link>`.

---

## Opciones de Deploy

- [ ] **Revisar `output` mode**: Actualmente `output: "standalone"` en `next.config.ts`. Para hosting estático (Cloudflare Pages, Netlify, Vercel sin server), considerar `output: "export"` + `distDir: "dist"` para máxima performance global y cero costo de servidor.

---

## Notas de Mantenimiento

- Revisar este documento cada 30 días post-launch.
- Prioridad 1: Marca + dominio + OG image (bloquean lanzamiento).
- Prioridad 2: About + social proof real (bloquean E-E-A-T).
- Prioridad 3: Blog + páginas de servicio (bloquean escalabilidad orgánica).
