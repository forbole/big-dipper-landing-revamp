import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#fff" />
      <g clipPath={`url(#${id}a`}>
        <path
          d="m18.134 7.841-2.863 4.253c-.197.29.183.64.457.397l2.817-2.454c.077-.062.183-.016.183.09v7.669c0 .107-.137.152-.198.076L10.003 7.658A1.408 1.408 0 0 0 8.89 7.14h-.304A1.46 1.46 0 0 0 7.14 8.603v10.793a1.463 1.463 0 0 0 2.71.763l2.863-4.253c.198-.29-.182-.64-.456-.397l-2.818 2.44c-.076.06-.182.015-.182-.092v-7.653c0-.107.137-.152.198-.076l8.527 10.214a1.43 1.43 0 0 0 1.112.518h.304c.807 0 1.462-.655 1.462-1.463V8.602c0-.807-.655-1.463-1.462-1.463-.518 0-.99.26-1.264.701Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <path fill="#fff" transform="translate(7.14 7.14)" d="M0 0h13.72v13.72H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;