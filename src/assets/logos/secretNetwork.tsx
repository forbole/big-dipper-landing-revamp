import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.9 4.102A13.904 13.904 0 0 0 14 0C6.281 0 0 6.28 0 14s6.28 14 14.001 14a13.9 13.9 0 0 0 9.899-4.102A13.905 13.905 0 0 0 28 14a13.9 13.9 0 0 0-4.1-9.898ZM14 27.032C6.816 27.031.97 21.184.97 14S6.816.969 14 .969C21.187.969 27.033 6.815 27.033 14c0 7.185-5.846 13.031-13.032 13.031Z"
        fill="#151A20"
      />
      <path
        d="M14.002 27.031C6.816 27.031.97 21.185.97 14 .97 6.815 6.816.969 14 .969c7.186 0 13.032 5.846 13.032 13.03 0 7.186-5.846 13.032-13.032 13.032Z"
        fill="#151A20"
      />
      <path
        d="M23.9 4.102A13.904 13.904 0 0 0 14 0C6.281 0 0 6.28 0 14s6.28 14 14.001 14a13.9 13.9 0 0 0 9.899-4.102A13.905 13.905 0 0 0 28 14a13.9 13.9 0 0 0-4.1-9.898ZM14 27.032C6.816 27.031.97 21.184.97 14S6.816.969 14 .969C21.187.969 27.033 6.815 27.033 14c0 7.185-5.846 13.031-13.032 13.031Z"
        fill="#fff"
      />
      <path
        d="M18.589 14.328c-.896-.801-2.069-1.336-3.205-1.853l-.009-.003c-2.004-.916-3.737-1.708-3.614-3.58.054-.714.572-1.145.997-1.378a3.688 3.688 0 0 1 1.909-.414c1.71.115 3.06.84 4.378 2.346l.078.092.093-.078.515-.448.092-.081-.081-.093c-1.47-1.685-3.065-2.533-5.016-2.664a2.743 2.743 0 0 0-.272-.012c-.059 0-.123 0-.19.003h-.084c-1.28 0-2.682.42-3.748 1.125-1.274.843-1.988 2.002-2.007 3.264-.05 3.071 2.46 4.104 4.675 5.02l.005.002.022.008c1.96.812 3.65 1.512 3.614 3.387-.017 1.238-1.786 1.92-3 1.92h-.171v.004c-1.811-.054-3.43-.835-4.81-2.316l-.083-.089-.09.081-.5.465-.09.084.084.09c1.567 1.687 3.501 2.594 5.595 2.62h.095c1.352 0 2.822-.364 3.93-.977 1.389-.76 2.198-1.865 2.282-3.113.095-1.372-.361-2.489-1.394-3.412Zm-6.5-2.67c.798.682 1.878 1.172 2.922 1.645l.02.008c1.106.51 2.152.991 2.911 1.66.84.74 1.195 1.596 1.12 2.696-.07 1.089-.88 1.817-1.615 2.256.142-.291.22-.607.23-.943.016-1.131-.418-2.035-1.33-2.769-.798-.64-1.856-1.074-2.88-1.497-2.131-.876-4.144-1.705-4.107-4.151.011-.94.576-1.831 1.593-2.506l.103-.067c-.12.263-.188.538-.204.826-.081 1.134.325 2.063 1.237 2.841Z"
        fill="#fff"
      />
    </svg>
  );
};

export default SVGComponent;