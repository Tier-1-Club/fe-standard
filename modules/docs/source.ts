import { docs, meta } from '@/.source';
import { createMDXSource } from 'fumadocs-mdx';
import { loader } from 'fumadocs-core/source';
import { svgIcons } from '../ui/constant';
import { createSvgUse } from '@/components/SvgUse';

export const source = loader({
  baseUrl: '/docs',
  icon(icon) {
    if (icon && icon in svgIcons) return createSvgUse({ id: icon });
  },
  source: createMDXSource(docs, meta),
});
