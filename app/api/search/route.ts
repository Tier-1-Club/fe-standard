import { createFromSource } from "fumadocs-core/search/server"

import { source } from "@/modules/docs/source"

export const { GET } = createFromSource(source)
