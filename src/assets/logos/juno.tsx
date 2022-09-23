import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`}>
        <path d="M14 27c7.18 0 13-5.82 13-13S21.18 1 14 1 1 6.82 1 14s5.82 13 13 13Z" fill="#000" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 1.005C6.812 1.005.995 6.828.995 14c0 7.172 5.817 12.995 13.005 12.995 7.188 0 13.005-5.823 13.005-12.995 0-7.172-5.817-12.995-13.005-12.995ZM0 14C0 6.263 6.273 0 14 0s14 6.263 14 14-6.273 14-14 14S0 21.737 0 14Z"
          fill="#fff"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 2.569c-6.32 0-11.437 5.122-11.437 11.433 0 6.312 5.117 11.433 11.437 11.433 6.32 0 11.437-5.121 11.437-11.433C25.437 7.691 20.32 2.57 14 2.57ZM2 14.002C2 7.371 7.376 2 14 2c6.625 0 12 5.37 12 12.002 0 6.632-5.375 12.002-12 12.002-6.624 0-12-5.37-12-12.002Z"
          fill="#F0827D"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.41 9.146a.416.416 0 0 0-.404-.427.416.416 0 0 0-.404.427V11.1l-1.49-1.571a.389.389 0 0 0-.57 0v.001a.445.445 0 0 0 0 .604l1.475 1.557-2.236-.002a.416.416 0 0 0-.405.427c0 .236.18.427.404.428l2.255.002-1.488 1.579a.445.445 0 0 0 .001.604.389.389 0 0 0 .572 0l1.482-1.573v4.122h-.824a.416.416 0 0 0-.405.426c0 .237.181.428.404.428l.825.001v.88c0 .235.18.427.404.427a.416.416 0 0 0 .404-.427v-.88l.79.001c.223 0 .404-.19.404-.426a.416.416 0 0 0-.404-.428l-.79-.001V13.16l1.48 1.561a.389.389 0 0 0 .572 0 .445.445 0 0 0 0-.605l-1.489-1.57 2.237.002c.223 0 .404-.19.404-.427a.416.416 0 0 0-.403-.428l-2.23-.002 1.475-1.565a.445.445 0 0 0 0-.604h-.001a.389.389 0 0 0-.572 0l-1.473 1.564v-1.94Z"
          fill="#fff"
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