import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#000" />
      <path
        d="m7.636 21.713.031.026a9.988 9.988 0 0 0 8.921 1.918c4.184-1.12 7.034-4.735 7.379-8.815l.013-.168c-.44-.363-.8-.494-1.077-.395-7.182 2.56-12.271 5.039-15.267 7.434Z"
        fill="#4A3BE4"
      />
      <path
        d="m7.637 21.71.032.026a9.987 9.987 0 0 0 8.92 1.918c4.183-1.12 7.033-4.735 7.378-8.815l.013-.168c-.44-.361-.8-.494-1.077-.394-7.181 2.56-12.27 5.037-15.266 7.434Z"
        fill={`url(#${id}a`}
      />
      <path
        d="m23.002 18.352.06-.125a10 10 0 0 0-4.064-12.886 10.007 10.007 0 0 0-11.58 1.126c.004.62.139.992.406 1.118 5.787 2.746 10.315 4.62 12.336 6.161 2.162 1.649 3.11 3.184 2.842 4.606Z"
        fill="#B71E5E"
      />
      <path
        d="m23.002 18.352.06-.125a10 10 0 0 0-4.064-12.886 10.007 10.007 0 0 0-11.58 1.126c.004.62.139.992.406 1.118 5.787 2.746 10.315 4.62 12.336 6.161 2.162 1.649 3.11 3.184 2.842 4.606Z"
        fill={`url(#${id}b`}
      />
      <path
        d="m13.267 4.028-.137.011a10 10 0 0 0-2.523 19.368l.158.056c-.613-7.111-.746-12.015-.398-14.71.345-2.695 1.313-4.27 2.9-4.725Z"
        fill="#F15522"
      />
      <path
        d="m13.267 4.028-.137.011a10 10 0 0 0-2.523 19.368l.158.056c-.613-7.111-.746-12.015-.398-14.71.345-2.695 1.313-4.27 2.9-4.725Z"
        fill={`url(#${id}c`}
      />
      <path
        d="m7.636 21.713.032.026a10.073 10.073 0 0 0 3.636 1.891l.067.02-.508-4.096-.054.032c-.826.477-1.884 1.187-3.174 2.127Z"
        fill="#4A3BE4"
      />
      <defs>
        <linearGradient id={`${id}a`} x1={14.951} y1={21.085} x2={27.189} y2={13.471} gradientUnits="userSpaceOnUse">
          <stop stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
        <linearGradient id={`${id}b`} x1={16.682} y1={10.158} x2={0.093} y2={3.951} gradientUnits="userSpaceOnUse">
          <stop stopColor="#B71E5E" />
          <stop offset={1} />
        </linearGradient>
        <linearGradient id={`${id}c`} x1={10.013} y1={13.904} x2={15.046} y2={28.702} gradientUnits="userSpaceOnUse">
          <stop stopOpacity={0} />
          <stop offset={1} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SVGComponent;
