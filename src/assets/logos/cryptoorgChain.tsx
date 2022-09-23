import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <path d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Z" fill="#103F68" />
        <path
          d="m13.982 4.39 8.33 4.798v9.625l-8.32 4.812-.067-.017-8.238-4.795V9.188l8.238-4.797h.057Zm-.027.997L6.562 9.69v8.62l7.392 4.303.903-.522 6.58-3.784V9.693l-6.58-3.806-.902-.5ZM7.708 14.67l2.188-1.636 1.935 1.236v2.222l1.464 1.41-.001.662-1.41 1.321h-1.191L7.709 14.67h-.001Zm6.915 3.896-.003-.665 1.459-1.409v-2.223l1.914-1.25 2.184 1.652-2.97 5.2h-1.175l-1.409-1.305Zm-2.074-4.296-.712-1.865h4.233l-.698 1.865.207 2.084-1.634.003-1.614.003.218-2.09Zm1.396-2.376-4.023-.002.748-3.342h6.53l.788 3.346-4.043-.002Z"
          fill="#fff"
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
