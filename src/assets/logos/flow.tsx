import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <path d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Z" fill="#00EF8B" />
        <path
          d="M20.132 11.816h-3.948v3.948h3.948v-3.948Zm-7.896 5.432c0 .812-.672 1.484-1.484 1.484a1.494 1.494 0 0 1-1.484-1.484c0-.812.672-1.484 1.484-1.484h1.484v-3.948h-1.484a5.437 5.437 0 0 0-5.432 5.432 5.437 5.437 0 0 0 5.432 5.432 5.437 5.437 0 0 0 5.432-5.432v-1.484h-3.948v1.484Z"
          fill="#fff"
        />
        <path
          d="M17.668 9.828h4.452V5.88h-4.452a5.437 5.437 0 0 0-5.432 5.432v.504h3.948v-.504c0-.812.672-1.484 1.484-1.484Z"
          fill="#fff"
        />
        <path d="M16.184 11.816h-3.948v3.948h3.948v-3.948Z" fill="#16FF99" />
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
