import { createMetadataImage } from "fumadocs-core/server"
import { source } from "@/modules/docs/source"
export const metadataImage = createMetadataImage({
  source,
  imageRoute: "og"
})
