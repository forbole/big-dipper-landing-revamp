import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <circle cx={14} cy={14} r={14} fill="#2F4581" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.059 6h3.457l3.575 3.479L17.287 6H21v3.479l-3.713 3.913L21 17.305V21h-3.713l-3.196-3.695L10.516 21H7.06L7 17.305l3.516-3.913-3.457-3.26V6Z"
          fill="#00D2FF"
        />
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;