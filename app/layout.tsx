import './global.css';

import type { Viewport } from 'next';
import type { ReactNode } from 'react';

import { createMetadata } from '@/modules/seo/metadata';

import { Body } from './layout.client';
import { AppProvider } from './providers';

export const metadata = createMetadata({
	title: {
		template: '%s | Frontend Tier 1',
		default: 'Frontend Tier 1'
	},
	description: 'The Next.js framework for building documentation sites',
	metadataBase: new URL('https://frontend.tier1club.com')
});

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: dark)', color: '#0A0A0A' },
		{ media: '(prefers-color-scheme: light)', color: '#fff' }
	]
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Body>
				<AppProvider>{children}</AppProvider>
			</Body>
		</html>
	);
}
