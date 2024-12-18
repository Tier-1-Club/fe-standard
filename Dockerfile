FROM oven/bun as base

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

EXPOSE 5000

CMD ["bun", "run", "start"]
