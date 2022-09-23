import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.033 9.18v9.776h-9.776V9.18h9.776Zm-3.257 3.262h-3.257l-.005 3.257h3.262v-3.257Zm-9.781-.005H5.738v3.257h3.257v-3.257Z"
        fill="#BB2D40"
      />
    </svg>
  );
};

export default SVGComponent;