import { source } from '@/modules/docs/source';
import type { MetadataRoute } from 'next';

export const revalidate = false;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const url = (path: string): string => new URL(path, "https://frontend.tier1club.com").toString();

  return [
    {
      url: url('/'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: url('/showcase'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: url('/docs'),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...(await Promise.all(
      source.getPages().map(async (page) => {
        const { lastModified } = page.data;
        return {
          url: url(page.url),
          lastModified: lastModified ? new Date(lastModified) : undefined,
          changeFrequency: 'weekly',
          priority: 0.5,
        } as MetadataRoute.Sitemap[number];
      }),
    )),
  ];
}
