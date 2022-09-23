import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#fff" />
      <g clipPath={`url(#${id}a`} fillRule="evenodd" clipRule="evenodd">
        <path
          d="M14.322 15.614c5.877-.721 10.496-2.482 10.318-3.933-.178-1.45-5.086-2.042-10.963-1.32-5.877.721-10.497 2.482-10.318 3.933.178 1.45 5.086 2.042 10.963 1.32Z"
          fill="#fff"
          stroke="#979797"
          strokeWidth={0.977}
        />
        <path
          d="M14.262 15.2c5.52-.677 9.872-2.214 9.723-3.433-.15-1.219-4.746-1.657-10.265-.98-5.52.678-9.873 2.215-9.723 3.434.15 1.219 4.745 1.657 10.265.98Z"
          fill="#000002"
        />
        <path
          d="M13.924 19.002a6.544 6.544 0 0 0 6.23-4.556c.02-.06-.088.012-.29.074a22.72 22.72 0 0 1-2.01.5 59.343 59.343 0 0 1-3.995.65c-.693.083-2.106.159-3.326.201-.718.025-1.255.066-1.652.052-.277-.01-.556-.108-.489 0a6.484 6.484 0 0 0 5.532 3.08Z"
          fill="#6758FF"
        />
        <path
          d="M14.352 18.471c1.314 0 2.253-.773 2.253-.916 0-.142-.939.35-2.253.35-1.315 0-2.625-.143-2.625 0 0 .089.665.357 1.476.464.476.063.663.102 1.149.102Z"
          fill="#FF7FA7"
        />
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <path fill="#fff" transform="translate(3 9)" d="M0 0h22v10.056H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;