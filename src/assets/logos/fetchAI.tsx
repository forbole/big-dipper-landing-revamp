import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#202944" />
      <path fill="#fff" d="M5 5.857h16.286v16.286H5z" />
      <path
        d="M5 5v18h18V5H5zm6.293 2.088h1.683v1.728h-1.683V7.088zm-4.244 0h1.756v1.728H7.049V7.088zm1.683 4.176v1.728H6.976v-1.728h1.756zm-.44 9.504h-.731v-.648h.659v.648h.073zm.513-3.456H7.049v-1.656h1.756v1.656zm3.732 3.456h-.659v-.648h.659v.648zm0-4.032h-.659v-.648h.659v.648zm.512-3.672h-1.756v-1.728h1.756v1.728zm3.732 7.704h-.659v-.648h.659v.648zm0-4.032h-.659v-.648h.659v.648zm0-4.248h-.659v-.648h.659v.648zm.585-3.672H15.61V7.088h1.756v1.728zm3.732 11.952h-.659v-.648h.659v.648zm0-4.032h-.659v-.648h.659v.648zm0-4.248h-.659v-.648h.659v.648zm0-4.176h-.659v-.648h.659v.648z"
        fill="#202944"
      />
    </svg>
  );
};

export default SVGComponent;
