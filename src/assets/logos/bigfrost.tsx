import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g className="light" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={14} cy={14} r={14} fill="#000" />
        <path d="M22.75 7.292h-4.375L5.25 20.417H14l8.75-13.125Z" fill={`url(#${id}a`} />
        <defs>
          <linearGradient id={`${id}a`} x1={14} y1={7.292} x2={14} y2={20.417} gradientUnits="userSpaceOnUse">
            <stop stopColor="#7AEDCF" />
            <stop offset={0.201} stopColor="#68CEFA" />
            <stop offset={0.403} stopColor="#689CF8" />
            <stop offset={0.602} stopColor="#AC57C0" />
            <stop offset={0.802} stopColor="#E65659" />
            <stop offset={1} stopColor="#F2C241" />
          </linearGradient>
        </defs>
      </g>
      <g className="dark" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={14} cy={14} r={14} fill="#fff" />
        <path d="M14 20.514H5.25L18.375 7.292h4.375L14 20.514Z" fill={`url(#${id}b`} />
        <defs>
          <linearGradient id={`${id}b`} x1={14} y1={7.292} x2={14} y2={20.514} gradientUnits="userSpaceOnUse">
            <stop stopColor="#12D5D5" />
            <stop offset={0.201} stopColor="#0BB0F8" />
            <stop offset={0.403} stopColor="#4584F5" />
            <stop offset={0.602} stopColor="#AC57C0" />
            <stop offset={0.802} stopColor="#E65659" />
            <stop offset={1} stopColor="#FFBF12" />
          </linearGradient>
        </defs>
      </g>
      <style>{`
.dark { display: none; }
.mode-dark .light { display: none; }
.mode-dark .dark { display: initial; }
`}</style>
    </svg>
  );
};

export default SVGComponent;
