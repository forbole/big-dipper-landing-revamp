import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#fff" />
      <g clipPath={`url(#${id}a`}>
        <path
          d="M12.333 20.25a4.583 4.583 0 1 0 .001-9.166 4.583 4.583 0 0 0 0 9.166Zm0 1.667a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Z"
          fill="#FBCC5C"
        />
        <path
          d="M15.667 16.917a4.583 4.583 0 1 0 0-9.166 4.583 4.583 0 0 0 0 9.166Zm0 1.666a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5Z"
          fill="#35D07F"
        />
        <path
          d="M15.873 18.583c.434-.525.744-1.14.909-1.801a4.586 4.586 0 0 0 1.801-.909 6.202 6.202 0 0 1-.486 2.225 6.22 6.22 0 0 1-2.224.485Zm-4.655-7.365a4.585 4.585 0 0 0-1.801.909 6.187 6.187 0 0 1 .486-2.224 6.266 6.266 0 0 1 2.224-.486 4.563 4.563 0 0 0-.909 1.801Z"
          fill="#5EA33B"
        />
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <path fill="#fff" transform="translate(6.083 6.083)" d="M0 0h15.833v15.833H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;