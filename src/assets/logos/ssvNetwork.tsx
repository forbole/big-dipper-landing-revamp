import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={14} cy={14} r={14} fill="#033A5D" />
      <path
        opacity={0.62}
        d="m11.66 19.235 2.27-2.798a.592.592 0 0 1 .92 0l2.27 2.798a.59.59 0 0 1 0 .747l-2.27 2.799a.592.592 0 0 1-.92 0l-2.27-2.799a.59.59 0 0 1 0-.747Z"
        fill="#1BA5F8"
      />
      <path
        d="m15.187 12.392 2.27-2.8a.591.591 0 0 1 .92 0l2.271 2.8a.59.59 0 0 1 0 .746l-2.27 2.799a.592.592 0 0 1-.92 0l-2.27-2.799a.591.591 0 0 1 0-.746Zm-7.055 0 2.27-2.8a.591.591 0 0 1 .92 0l2.271 2.8a.59.59 0 0 1 0 .746l-2.27 2.799a.592.592 0 0 1-.92 0l-2.27-2.799a.591.591 0 0 1 0-.746Zm3.528-4.374 2.27-2.799a.591.591 0 0 1 .92 0l2.27 2.799a.59.59 0 0 1 0 .747l-2.27 2.798a.59.59 0 0 1-.92 0l-2.27-2.798a.59.59 0 0 1 0-.747Z"
        fill="#1BA5F8"
      />
    </svg>
  );
};

export default SVGComponent;
