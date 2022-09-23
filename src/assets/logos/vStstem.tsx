import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#fff" />
      <g clipPath={`url(#${id}a`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.16 8h5.146a.16.16 0 0 1 .08.019.158.158 0 0 1 .056.054l6.265 10.016a.154.154 0 0 1 0 .17l-2.564 4.09a.159.159 0 0 1-.268 0L5.026 8.243a.158.158 0 0 1-.006-.161.158.158 0 0 1 .06-.06A.158.158 0 0 1 5.16 8Zm10.787 0h6.892c.03 0 .057.007.082.022a.158.158 0 0 1 .05.06c.014.025.02.053.02.082a.16.16 0 0 1-.02.079L19.53 13.74a.159.159 0 0 1-.268 0l-3.446-5.498a.158.158 0 0 1-.007-.161.159.159 0 0 1 .06-.06.158.158 0 0 1 .079-.022Z"
          fill="#FF8836"
        />
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <path fill="#fff" transform="translate(5 8)" d="M0 0h18v14.421H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;
