import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g className="light" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={14} cy={14} r={14} fill={`url(#${id}a`} />
        <path
          d="M20.885 16.833h-9.75V11.54h-1.5v6.023c0 .4.338.73.75.73h8.544l-1.764 1.545H7.694v-8.756h9.75a.765.765 0 0 0 .5-.186l3.441-3.005a.724.724 0 0 0 .206-.8.763.763 0 0 0-.706-.473h-10.5c-.412 0-.75.33-.75.73v1.817h1.5V8.077h7.794l-1.764 1.546H6.944a.743.743 0 0 0-.75.73v10.214c0 .4.338.73.75.73h10.5a.766.766 0 0 0 .5-.186l3.441-3.004c.235-.2.309-.53.206-.802a.763.763 0 0 0-.706-.472Z"
          fill="#FE4350"
        />
        <defs>
          <linearGradient id={`${id}a`} x1={14} y1={0} x2={14} y2={28} gradientUnits="userSpaceOnUse">
            <stop stopColor="#0E213B" />
            <stop offset={1} stopColor="#02090F" />
          </linearGradient>
        </defs>
      </g>
      <g className="dark" width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx={14} cy={14} r={14} fill="#fff" />
        <path
          d="M20.885 16.833h-9.75V11.54h-1.5v6.023c0 .4.338.73.75.73h8.544l-1.764 1.545H7.694v-8.756h9.75a.765.765 0 0 0 .5-.186l3.441-3.005a.724.724 0 0 0 .206-.8.763.763 0 0 0-.706-.473h-10.5c-.412 0-.75.33-.75.73v1.817h1.5V8.077h7.794l-1.764 1.546H6.944a.743.743 0 0 0-.75.73v10.214c0 .4.338.73.75.73h10.5a.766.766 0 0 0 .5-.186l3.441-3.004c.235-.2.309-.53.206-.802a.763.763 0 0 0-.706-.472Z"
          fill="#FE4350"
        />
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