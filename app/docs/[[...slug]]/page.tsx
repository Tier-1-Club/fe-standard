import { Popup, PopupContent, PopupTrigger } from "fumadocs-twoslash/ui"
import { Accordion, Accordions } from "fumadocs-ui/components/accordion"
import { Callout } from "fumadocs-ui/components/callout"
import { Tab, Tabs } from "fumadocs-ui/components/tabs"
import { TypeTable } from "fumadocs-ui/components/type-table"
import defaultMdxComponents from "fumadocs-ui/mdx"
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from "fumadocs-ui/page"
import { notFound } from "next/navigation"
import type { ComponentProps, FC } from "react"

import { source } from "@/modules/docs/source"
import { createMetadata } from "@/modules/seo/metadata"
import { metadataImage } from "@/modules/seo/metadata-image"

export const dynamicParams = false
export const revalidate = false

export default async function Page(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const path = `apps/docs/content/docs/${page.file.path}`
  const { body: MDX, toc, lastModified } = await page.data.load()

  return (
    <DocsPage
      toc={toc}
      full={page.data.full}
      lastUpdate={lastModified}
      tableOfContent={{
        style: "clerk",
        single: false
      }}
      editOnGithub={{
        repo: "fe-standard",
        owner: "Tier-1-Club",
        sha: "main",
        path
      }}
    >
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={{
            ...defaultMdxComponents,
            Popup,
            PopupContent,
            PopupTrigger,
            Tabs,
            Tab,
            TypeTable,
            blockquote: Callout as unknown as FC<ComponentProps<"blockquote">>,
            Accordion,
            Accordions
          }}
        />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  return source.generateParams()
}

export async function generateMetadata(props: { params: Promise<{ slug?: string[] }> }) {
  const params = await props.params
  const page = source.getPage(params.slug)
  if (!page) notFound()

  const description = page.data.description ?? "The place for the top FE Engineer"

  return createMetadata(
    metadataImage.withImage(page.slugs, {
      title: page.data.title,
      description,
      openGraph: {
        url: `/docs/${page.slugs.join("/")}`
      }
    })
  )
}
