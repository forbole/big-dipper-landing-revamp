import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <circle cx={14} cy={14} r={14} fill="#fff" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="m10.513 5 10.132 17.5L24 16.645 17.224 5h-6.71Z"
          fill="#ED3524"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.513 16.974 14 22.5h6.974l-3.487-5.526h-6.974Z"
          fill="#AE1E23"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.487 10.526 4 16.513 7.487 22.5l7.04-11.974h-7.04Z"
          fill="#ED3524"
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