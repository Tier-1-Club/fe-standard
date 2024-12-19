'use client';

import type { StringEnum } from '@techmely/types';
import React, { type FC, type SVGAttributes, useEffect, useState } from 'react';

import type { svgIcons } from '@/modules/ui/constant';

export const SvgUse: FC<SvgUseProps> = ({ role, customPath, id, label, ...rest }) => {
	const [svgPath, setSvgPath] = useState(`/images/svg/common.svg#${id}`);

	useEffect(() => {
		if (customPath) setSvgPath(`${customPath}#${id}`);
	}, [customPath, id]);

	return (
		<svg role="img" aria-label={label || 'Present Icon'} {...rest}>
			<use href={svgPath} />
		</svg>
	);
};

interface SvgUseProps extends SVGAttributes<SVGElement> {
	id: StringEnum<(typeof svgIcons)[number]>;
	label?: string;
	customPath?: string;
}

export function createSvgUse(props: SvgUseProps) {
	return (
		<div className="rounded-md border bg-gradient-to-b from-secondary p-1 shadow-sm">
			<SvgUse {...props} />
		</div>
	);
}
