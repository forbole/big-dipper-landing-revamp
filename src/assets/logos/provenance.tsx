import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <rect width={28} height={28} rx={14} fill="#fff" />
        <g clipPath={`url(#${id}b`}>
          <path
            d="M14 27.533c7.474 0 13.533-6.059 13.533-13.533C27.533 6.526 21.474.467 14 .467 6.526.467.467 6.526.467 14c0 7.474 6.059 13.533 13.533 13.533Z"
            fill="#3F80F3"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14 .933C6.783.933.933 6.783.933 14c0 7.216 5.85 13.067 13.067 13.067 7.216 0 13.067-5.85 13.067-13.067C27.067 6.783 21.217.933 14 .933ZM0 14C0 6.268 6.268 0 14 0s14 6.268 14 14-6.268 14-14 14S0 21.732 0 14Z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m4.761 14 9.24-9.24 9.24 9.24L14 23.24 4.761 14Zm1.32 0 7.92 7.92 7.92-7.92L14 6.08 6.081 14Z"
            fill="#fff"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m12.35 13.01-3.3-3.3.66-.66 3.3 3.3-.66.66Zm5.94 5.94-4.62-4.62.66-.66 4.62 4.62-.66.66Z"
            fill="#fff"
          />
          <path fillRule="evenodd" clipRule="evenodd" d="m18.95 9.71-7.92 7.92-.66-.66 7.92-7.92.66.66Z" fill="#fff" />
        </g>
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <rect width={28} height={28} rx={14} fill="#fff" />
        </clipPath>
        <clipPath id={`${id}b`}>
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;
