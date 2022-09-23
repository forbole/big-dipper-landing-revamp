import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect width={28} height={28} rx={14} fill="#fff" />
      <path
        d="m16.27 12.467.042-.7-2.317-1.445-2.309 1.445.096 1.577h6.224l-.36 5.941h-7.294l-.15-2.485-.047-.764h1.792l.046.764.043.698h3.925l.143-2.367h-6.002l-.265-4.315 4.158-2.603 4.165 2.603-.1 1.651h-1.79Z"
        fill="#E1AB4C"
      />
      <path
        d="M17.813 19.463h-7.63l-.218-3.608h2.15l.085 1.463h3.598l.12-2.008H9.933l-.28-4.588 4.346-2.72 4.346 2.722-.117 1.929h-2.149l.048-.784L14 10.533l-2.124 1.33.08 1.299h6.24l-.382 6.301Zm-7.298-.356h6.959l.342-5.585h-6.202l-.114-1.85 2.5-1.56 2.498 1.56-.038.617h1.437l.084-1.377L14 8.422l-3.973 2.489.249 4.043H16.3l-.167 2.726h-4.264l-.09-1.462h-1.43l.167 2.888Z"
        fill="#E1AB4C"
      />
      <path
        d="M13.408 4.163 6.513 8.481a1.1 1.1 0 0 0-.515 1l.762 12.485A1.099 1.099 0 0 0 7.86 23h12.282a1.1 1.1 0 0 0 1.099-1.034l.761-12.491a1.101 1.101 0 0 0-.515-1l-6.912-4.312a1.097 1.097 0 0 0-1.167 0Zm5.887 17.232H8.702a.387.387 0 0 1-.388-.364L7.635 9.916a.392.392 0 0 1 .182-.354l5.976-3.741a.39.39 0 0 1 .413 0l5.979 3.738a.387.387 0 0 1 .181.353l-.678 11.114a.389.389 0 0 1-.393.365v.003Z"
        fill="#E1AB4C"
      />
    </svg>
  );
};

export default SVGComponent;
