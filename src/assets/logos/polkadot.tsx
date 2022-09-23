import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <circle cx={14} cy={14} r={14} fill="#fff" />
        <path
          d="M14 8.409c1.904 0 3.447-.898 3.447-2.005C17.447 5.297 15.904 4.4 14 4.4c-1.903 0-3.446.897-3.446 2.004S12.097 8.41 14 8.41Zm0 15.103c1.904 0 3.447-.897 3.447-2.004S15.904 19.503 14 19.503c-1.903 0-3.446.898-3.446 2.005 0 1.107 1.543 2.004 3.446 2.004ZM9.197 11.184c.952-1.649.946-3.434-.013-3.988-.96-.554-2.509.333-3.46 1.982-.952 1.648-.946 3.433.013 3.987.96.554 2.509-.333 3.46-1.981Zm13.079 7.55c.952-1.648.946-3.433-.013-3.987-.958-.553-2.507.335-3.459 1.983-.951 1.648-.946 3.433.013 3.987.959.553 2.507-.334 3.459-1.983ZM9.184 20.716c.96-.553.966-2.339.014-3.987-.952-1.649-2.501-2.536-3.46-1.982-.96.554-.966 2.34-.014 3.988.951 1.648 2.5 2.535 3.46 1.982Zm13.08-7.55c.959-.554.965-2.339.013-3.987-.952-1.648-2.5-2.536-3.46-1.983-.958.554-.964 2.339-.012 3.987.952 1.649 2.5 2.536 3.46 1.983Z"
          fill="#E6007A"
        />
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <path fill="#fff" d="M0 0h28v28H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;