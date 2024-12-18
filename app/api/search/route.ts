import { source } from '@/modules/docs/source';
import { createFromSource } from 'fumadocs-core/search/server';

export const { GET } = createFromSource(source);
