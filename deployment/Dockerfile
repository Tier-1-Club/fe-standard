FROM oven/bun as base

WORKDIR /app

ARG NEXT_PUBLIC_APP_VERSION
ENV NEXT_PUBLIC_APP_VERSION ${NEXT_PUBLIC_APP_VERSION}

ARG NEXT_PUBLIC_NODE_ENV
ENV NEXT_PUBLIC_NODE_ENV ${NEXT_PUBLIC_NODE_ENV}

ARG NEXT_PUBLIC_BASE_API_URL
ENV NEXT_PUBLIC_BASE_API_URL ${NEXT_PUBLIC_BASE_API_URL}

ARG NODE_ENV=production
ENV NODE_ENV ${NODE_ENV}

ARG PORT
ENV PORT ${PORT}

ARG HOSTNAME
ENV HOSTNAME ${HOSTNAME}

ENV NEXT_TELEMETRY_DISABLED=1

USER bun

WORKDIR /tier1/frontend

COPY --chown=bun . .

RUN bun install --production --frozen-lockfile

FROM oven/bun

USER bun

WORKDIR /tier1/frontend

COPY --from=base --chown=bun /tier1/frontend/node_modules ./node_modules
# Copying the production-ready application code, so it's one of few required artifacts
COPY --from=base --chown=bun /tier1/frontend/.next ./.next
COPY --from=base --chown=bun /tier1/frontend/next.config.mjs ./next.config.mjs
COPY --from=base --chown=bun /tier1/frontend/next-sitemap.config.js ./next-sitemap.config.js
COPY --from=base --chown=bun /tier1/frontend/public ./public
COPY --from=base --chown=bun /tier1/frontend/package.json ./package.json

EXPOSE $PORT

CMD ["bun", "run", "start"]
