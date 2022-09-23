import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g className="light" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath={`url(#${id}a`}>
          <path
            d="M26.34 0H1.66A1.66 1.66 0 0 0 0 1.66v24.68C0 27.257.743 28 1.66 28h24.68A1.66 1.66 0 0 0 28 26.34V1.66A1.66 1.66 0 0 0 26.34 0Z"
            fill="#000"
          />
          <path
            d="M19 13.793a3.85 3.85 0 0 1-.471 1.885c-.314.56-.796 1.014-1.447 1.362-.65.348-1.458.522-2.422.522h-1.784V21.8H10V9.99h4.66c.942 0 1.738.163 2.388.489.65.325 1.139.773 1.464 1.345.325.572.488 1.228.488 1.969Zm-4.559 1.48c.55 0 .959-.128 1.228-.386.27-.258.404-.623.404-1.094 0-.47-.135-.835-.404-1.093-.27-.258-.678-.387-1.228-.387h-1.565v2.96h1.565Z"
            fill="#fff"
          />
          <path d="M19 7h-9v1.9h9V7Z" fill="#E50913" />
        </g>
        <defs>
          <clipPath id={`${id}a`}>
            <rect width={28} height={28} rx={14} fill="#fff" />
          </clipPath>
        </defs>
      </g>
      <g className="dark" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath={`url(#${id}a2`}>
          <path
            d="M26.34 0H1.66A1.66 1.66 0 0 0 0 1.66v24.68C0 27.257.743 28 1.66 28h24.68A1.66 1.66 0 0 0 28 26.34V1.66A1.66 1.66 0 0 0 26.34 0Z"
            fill="#fff"
          />
          <path
            d="M19 13.793a3.85 3.85 0 0 1-.471 1.885c-.314.56-.796 1.014-1.447 1.362-.65.348-1.458.522-2.422.522h-1.784V21.8H10V9.99h4.66c.942 0 1.738.163 2.388.489.65.325 1.139.773 1.464 1.345.325.572.488 1.228.488 1.969Zm-4.559 1.48c.55 0 .959-.128 1.228-.386.27-.258.404-.623.404-1.094 0-.47-.135-.835-.404-1.093-.27-.258-.678-.387-1.228-.387h-1.565v2.96h1.565Z"
            fill="#000"
          />
          <path d="M19 7h-9v1.9h9V7Z" fill="#E50913" />
        </g>
        <defs>
          <clipPath id={`${id}a2`}>
            <rect width={28} height={28} rx={14} fill="#fff" />
          </clipPath>
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