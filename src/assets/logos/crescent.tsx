import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={28} height={28} rx={14} fill={`url(#${id}a`} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.062 3.365a10.808 10.808 0 0 1 9.235 5.184 5.632 5.632 0 0 0-5.71 5.626 5.624 5.624 0 0 0 5.71 5.626 10.814 10.814 0 0 1-9.429 5.183 10.821 10.821 0 0 1-9.239-5.515A10.806 10.806 0 0 1 8.681 4.797a10.821 10.821 0 0 1 5.38-1.432Z"
        fill="#FFC780"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.297 8.546A5.633 5.633 0 0 0 18.023 12a5.623 5.623 0 0 0 3.095 7.393 5.633 5.633 0 0 0 2.179.405l-.033.055a7.657 7.657 0 0 1-11.567-1.51 7.647 7.647 0 0 1 3.355-11.165 7.658 7.658 0 0 1 8.245 1.37v-.002Z"
        fill={`url(#${id}b`}
      />
      <defs>
        <linearGradient id={`${id}a`} x1={14} y1={0} x2={14} y2={28} gradientUnits="userSpaceOnUse">
          <stop stopColor="#1D100B" />
          <stop offset={1} stopColor="#513662" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1={16.88} y1={21.836} x2={16.88} y2={6.531} gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC780" />
          <stop offset={1} stopColor="#964B48" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SVGComponent;
