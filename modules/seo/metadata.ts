import type { Metadata } from "next/types"

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: "https://frontent.tier1club.com",
      images: "/banner.png",
      siteName: "Frontend Tier 1",
      ...override.openGraph
    },
    twitter: {
      card: "summary_large_image",
      creator: "@tier1club",
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: "/banner.png",
      ...override.twitter
    }
  }
}
