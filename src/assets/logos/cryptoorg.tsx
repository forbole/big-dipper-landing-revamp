import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m5.25 8.66 8.89-5.16 8.892 5.16v10.272l-8.891 5.16-8.891-5.16V8.66Zm2.626 1.52 6.265-3.64.016.01 6.249 3.63v7.186l-6.265 3.64-6.265-3.594V10.18Zm6.265 8.384 4.192-2.396v-4.79L14.14 8.981l-4.146 2.395v4.791l4.146 2.396Z"
        fill="#002D74"
      />
    </svg>
  );
};

export default SVGComponent;
