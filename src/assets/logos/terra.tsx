import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#fff" />
      <path
        d="M13.236 19.785c.495 1.829 2.265 3.224 3.158 3.17.031 0 3.39-.631 5.229-3.71 1.43-2.396.945-4.71-1-4.761-.693.052-8.312 1.818-7.387 5.301Z"
        fill={`url(#${id}a`}
      />
      <path
        d="M20.439 8.04a8.529 8.529 0 0 0-9.003-1.303 4.95 4.95 0 0 0-.544.267 4.764 4.764 0 0 0-.346.197h.03c-.349.24-.656.534-.91.873-2.441 3.23 5.766 5.593 10.16 5.6 2.022 1.454 2.59-4.094.613-5.635Z"
        fill={`url(#${id}b`}
      />
      <path
        d="M11.934 8.105c-1.129 1.7-4.89 2.899-5.51 2.712l.077-.156c.21-.418.452-.82.723-1.202A9.201 9.201 0 0 1 9.181 7.52c.23-.174.47-.336.717-.485a2.622 2.622 0 0 1 1.243-.346c1.676.031.8 1.385.793 1.385"
        fill={`url(#${id}c`}
      />
      <path
        d="M11.006 20.121c.083.534 0 2.643-.11 2.823-.094 0-.288.017-.856-.302a9 9 0 0 1-1.898-1.461 8.81 8.81 0 0 1-2.178-3.515 8.75 8.75 0 0 1-.346-1.385 9.149 9.149 0 0 1 0-2.926 8.934 8.934 0 0 1 .44-1.655c.647.865 1.385 1.648 2.04 2.52.654.873 1.443 2.19 1.613 2.48 1.039 1.797 1.226 2.909 1.305 3.442"
        fill={`url(#${id}d`}
      />
      <path
        d="M23.5 14.802a9.024 9.024 0 0 1-.627 3.314c-1.06 1.14-8.21-1.669-8.28-1.7-.98-.43-3.954-1.731-4.224-3.788-.374-2.954 5.592-5.011 8.22-5.09.316 0 1.275 0 1.833.47a9.004 9.004 0 0 1 3.078 6.794"
        fill={`url(#${id}e`}
      />
      <path
        d="M18.652 22.802c-.78.367-1.638.1-1.413-.662.426-1.458 4.156-2.957 4.99-3.037.1 0 .146.06.1.139a9.12 9.12 0 0 1-3.677 3.56Z"
        fill={`url(#${id}f`}
      />
      <defs>
        <linearGradient id={`${id}a`} x1={17.803} y1={22.954} x2={17.803} y2={14.484} gradientUnits="userSpaceOnUse">
          <stop stopColor="#4366C2" />
          <stop offset={0.15} stopColor="#3458B8" />
          <stop offset={0.4} stopColor="#2348AC" />
          <stop offset={0.67} stopColor="#193FA5" />
          <stop offset={1} stopColor="#163CA3" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1={15.442} y1={13.912} x2={15.442} y2={5.996} gradientUnits="userSpaceOnUse">
          <stop stopColor="#4366C2" />
          <stop offset={0.15} stopColor="#3458B8" />
          <stop offset={0.4} stopColor="#2348AC" />
          <stop offset={0.67} stopColor="#193FA5" />
          <stop offset={1} stopColor="#163CA3" />
        </linearGradient>
        <linearGradient id={`${id}c`} x1={6.421} y1={8.774} x2={12.169} y2={8.774} gradientUnits="userSpaceOnUse">
          <stop stopColor="#58C66B" />
          <stop offset={1} stopColor="#5491F6" />
        </linearGradient>
        <linearGradient id={`${id}d`} x1={5.493} y1={17.313} x2={11.041} y2={17.313} gradientUnits="userSpaceOnUse">
          <stop stopColor="#58C66B" />
          <stop offset={1} stopColor="#5491F6" />
        </linearGradient>
        <linearGradient id={`${id}e`} x1={10.351} y1={12.964} x2={23.5} y2={12.964} gradientUnits="userSpaceOnUse">
          <stop stopColor="#58C66B" />
          <stop offset={1} stopColor="#5491F6" />
        </linearGradient>
        <linearGradient id={`${id}f`} x1={17.208} y1={21.032} x2={22.354} y2={21.032} gradientUnits="userSpaceOnUse">
          <stop stopColor="#58C66B" />
          <stop offset={1} stopColor="#5491F6" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default SVGComponent;