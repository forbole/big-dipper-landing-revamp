import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill="#F2AF13" d="M28 14a14 14 0 0 1-14 14A14 14 0 0 1 0 14a14 14 0 0 1 28 0z" />
      <path
        opacity={0.95}
        d="M12.667 7.333H6a2 2 0 0 0-2 2v9.333a2 2 0 0 0 3.627 1.16l6.667-9.333a2 2 0 0 0-1.627-3.16ZM7.333 12a1.333 1.333 0 1 1 0-2.667 1.333 1.333 0 0 1 0 2.667Zm10.333 8a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333Z"
        fill="#0D0A03"
      />
      <path
        opacity={0.95}
        d="M24 9.333v9.333a2 2 0 0 1-1.816 1.994 2 2 0 0 1-2.151-1.628 2.205 2.205 0 0 1-.033-.365v-1.52A2 2 0 0 0 16.373 16l-1.04 1.46-1.673 2.347a2 2 0 0 1-3.24-2.34l6.667-9.333a2 2 0 0 1 1.58-.801H22a2 2 0 0 1 2 2Z"
        fill="#FFFDFA"
      />
    </svg>
  );
};

export default SVGComponent;