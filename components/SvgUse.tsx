"use client";

import type { svgIcons } from "@/modules/ui/constant";
import type { StringEnum } from "@techmely/types";
import React, { useEffect, useState, type FC, type SVGAttributes } from "react";

export const SvgUse: FC<SvgUseProps> = ({ role, customPath, id, label, ...rest }) => {
  const [svgPath, setSvgPath] = useState(`/images/svg/common.svg#${id}`);

  useEffect(() => {
    if (customPath) setSvgPath(`${customPath}#${id}`);
  }, [customPath, id]);

  return (
    // biome-ignore lint/nursery/useSemanticElements: We need this
    <svg role="img" aria-label={label || "Present Icon"} {...rest}>
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
