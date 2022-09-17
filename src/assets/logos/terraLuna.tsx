import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <image
          width={56}
          height={56}
          id={`${id}a`}
          href="data:image/png;base64,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"
        />
      </defs>
      <use href={`${id}a`} />
    </svg>
  );
};

export default SVGComponent;
