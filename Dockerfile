# syntax=docker/dockerfile:1

# =============================================================================
# landing-au — Dockerfile de Producción Multi-Stage (pnpm)
# =============================================================================
# Objetivo: Imagen mínima, segura y optimizada para Next.js 16 App Router
# con output standalone. Usa pnpm para instalación rápida y reproducible.
# Preparado para SSR, Server Actions y futuras APIs.
# =============================================================================

# -----------------------------------------------------------------------------
# Stage 1: Base — Dependencias
# -----------------------------------------------------------------------------
FROM node:20-alpine AS base
WORKDIR /app

# Instalar pnpm globalmente (versión ligera, ~5MB)
# Usamos corepack para reproducibilidad exacta del packageManager field
RUN corepack enable && corepack prepare pnpm@10.33.4 --activate

# Instalar dependencias del sistema necesarias para build nativo (si aplica)
# Actualmente no se necesitan, pero se deja para futuras integraciones (prisma, bcrypt, etc.)
RUN apk add --no-cache libc6-compat && \
    addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Copiar manifiestos de dependencias primero para cacheo de capas
COPY package.json pnpm-lock.yaml ./

# -----------------------------------------------------------------------------
# Stage 2: Builder — Compilación de la aplicación
# -----------------------------------------------------------------------------
FROM base AS builder
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copiar el código fuente completo
COPY . .

# Variables de entorno de build (no secretos, solo configuración)
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# Build de Next.js
RUN pnpm run build

# -----------------------------------------------------------------------------
# Stage 3: Runner — Imagen de producción final
# -----------------------------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

# Crear usuario no-root para seguridad
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001 -G nodejs

# Deshabilitar telemetry de Next.js
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Solo copiar lo necesario para standalone
# 1. El servidor standalone de Next.js
# 2. Archivos estáticos
# 3. Assets públicos
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Healthcheck — verifica que el endpoint /api/health responda correctamente
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000/api/health', (r) => r.statusCode === 200 ? process.exit(0) : process.exit(1)).on('error', () => process.exit(1))" || exit 1

# Cambiar a usuario no-root
USER nextjs

# Exponer el puerto (documentación, no binding)
EXPOSE 3000

# Comando de inicio
CMD ["node", "server.js"]
