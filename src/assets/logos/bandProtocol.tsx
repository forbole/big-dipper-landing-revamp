import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <path
          d="M14 28C6.268 28 0 21.732 0 14S6.268 0 14 0s14 6.268 14 14c-.003 7.732-6.271 14-14 14Z"
          fill="#4520E6"
        />
        <path
          d="M18.663 11.459c0-.992-.486-1.87-1.233-2.408l2.016-2.016-1.205.005-1.603 1.603a2.95 2.95 0 0 0-.944-.153h-5.516v7.812l6.64-6.64c.598.375.998 1.041.998 1.8a2.125 2.125 0 0 1-2.122 2.121h-.175l-7.39 7.39h1.2l1.45-1.45h4.915a2.967 2.967 0 0 0 1.525-5.513 2.988 2.988 0 0 0 1.444-2.551Zm-7.637 2.794V9.337h4.668c.08 0 .158.006.236.014l-4.904 4.902Zm6.79 2.296c0 1.17-.953 2.122-2.122 2.122h-4.069l4.227-4.227a2.12 2.12 0 0 1 1.964 2.105Z"
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
