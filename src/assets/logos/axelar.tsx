import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <rect width={28} height={28} rx={14} fill="#fff" />
        <circle cx={14} cy={14} r={14} fill="#fff" />
        <path
          d="m15.046 12.535 5.494-5.463L18.456 5l-4.452 4.427L9.552 5 7.467 7.072l5.495 5.463c.288.287.665.43 1.042.43s.754-.143 1.042-.43ZM23 18.371l-4.452-4.426L23 9.518l-2.084-2.072-5.495 5.462a1.458 1.458 0 0 0 0 2.073l5.495 5.463L23 18.37Zm-9.004.099 4.452 4.426 2.085-2.072-5.495-5.463a1.48 1.48 0 0 0-2.084 0L7.46 20.824l2.084 2.072 4.452-4.426Zm-1.417-3.482a1.461 1.461 0 0 0 0-2.072L7.085 7.453 5 9.525l4.453 4.427L5 18.378l2.084 2.073 5.495-5.463Z"
          fill="#000"
        />
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <rect width={28} height={28} rx={14} fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;