import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <path d="M14 28c7.732 0 14-6.268 14-14S21.732 0 14 0 0 6.268 0 14s6.268 14 14 14Z" fill="#1F1F2D" />
        <path
          d="M14 17.36a3.36 3.36 0 1 0 0-6.72 3.36 3.36 0 0 0 0 6.72ZM9.408 14a3.36 3.36 0 0 0-3.36-3.36v6.72A3.36 3.36 0 0 0 9.408 14Zm9.184 0a3.36 3.36 0 0 0 3.36 3.36v-6.72a3.36 3.36 0 0 0-3.36 3.36ZM14 9.408a3.36 3.36 0 0 0 3.36-3.36h-6.72A3.36 3.36 0 0 0 14 9.408Zm-4.592-3.36h-3.36v3.36a3.36 3.36 0 0 0 3.36-3.36Zm12.544 3.36v-3.36h-3.36a3.36 3.36 0 0 0 3.36 3.36ZM14 18.592a3.36 3.36 0 0 0-3.36 3.36h6.72a3.36 3.36 0 0 0-3.36-3.36Zm-7.952 0v3.36h3.36c0-.891-.984-2.376-.984-2.376s-1.485-.984-2.376-.984Zm12.544 3.36h3.36v-3.36a3.36 3.36 0 0 0-3.36 3.36Z"
          fill="#F25F57"
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
