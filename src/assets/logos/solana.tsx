import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g className="light" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath={`url(#${id}a`}>
          <path d="M14 0c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0Z" fill="#000" />
          <path
            d="m22.143 18.246-2.717 2.913a.628.628 0 0 1-.46.201H6.086a.316.316 0 0 1-.231-.53l2.714-2.914a.63.63 0 0 1 .46-.2h12.88a.314.314 0 0 1 .234.53Zm-2.717-5.868a.636.636 0 0 0-.46-.201H6.086a.315.315 0 0 0-.231.53l2.714 2.915a.636.636 0 0 0 .46.201h12.88a.316.316 0 0 0 .23-.53l-2.713-2.915Zm-13.34-2.093h12.88a.626.626 0 0 0 .46-.201l2.717-2.913a.315.315 0 0 0-.234-.531H9.029a.629.629 0 0 0-.46.2L5.855 9.755a.316.316 0 0 0 .231.53Z"
            fill={`url(#${id}b`}
          />
        </g>
        <defs>
          <linearGradient id={`${id}b`} x1={7.159} y1={21.711} x2={20.665} y2={6.485} gradientUnits="userSpaceOnUse">
            <stop offset={0.08} stopColor="#9945FF" />
            <stop offset={0.3} stopColor="#8752F3" />
            <stop offset={0.5} stopColor="#5497D5" />
            <stop offset={0.6} stopColor="#43B4CA" />
            <stop offset={0.72} stopColor="#28E0B9" />
            <stop offset={0.97} stopColor="#19FB9B" />
          </linearGradient>
          <clipPath id={`${id}a`}>
            <path fill="#fff" d="M0 0h28v28H0z" />
          </clipPath>
        </defs>
      </g>
      <g className="dark" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath={`url(#${id}c`}>
          <path d="M14 0c7.732 0 14 6.268 14 14s-6.268 14-14 14S0 21.732 0 14 6.268 0 14 0Z" fill="#fff" />
          <path
            d="m22.143 18.246-2.717 2.913a.628.628 0 0 1-.46.201H6.086a.316.316 0 0 1-.231-.53l2.714-2.914a.63.63 0 0 1 .46-.2h12.88a.314.314 0 0 1 .234.53Zm-2.717-5.868a.636.636 0 0 0-.46-.201H6.086a.315.315 0 0 0-.231.53l2.714 2.915a.636.636 0 0 0 .46.201h12.88a.316.316 0 0 0 .23-.53l-2.713-2.915Zm-13.34-2.093h12.88a.626.626 0 0 0 .46-.201l2.717-2.913a.315.315 0 0 0-.234-.531H9.029a.629.629 0 0 0-.46.2L5.855 9.755a.316.316 0 0 0 .231.53Z"
            fill={`url(#${id}d`}
          />
        </g>
        <defs>
          <linearGradient id={`${id}d`} x1={7.159} y1={21.711} x2={20.665} y2={6.485} gradientUnits="userSpaceOnUse">
            <stop offset={0.08} stopColor="#9945FF" />
            <stop offset={0.3} stopColor="#8752F3" />
            <stop offset={0.5} stopColor="#5497D5" />
            <stop offset={0.6} stopColor="#43B4CA" />
            <stop offset={0.72} stopColor="#28E0B9" />
            <stop offset={0.97} stopColor="#19FB9B" />
          </linearGradient>
          <clipPath id={`${id}c`}>
            <path fill="#fff" d="M0 0h28v28H0z" />
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
