import * as React from 'react';
import { SVGProps } from 'react';

const SVGComponent = (props: SVGProps<SVGSVGElement>) => {
  const id = React.useId();
  return (
    <svg width={28} height={28} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath={`url(#${id}a`} fill="#0033AD">
        <path d="M9.03 13.928c-.046.802.582 1.489 1.397 1.535h.088c.821 0 1.484-.652 1.479-1.46 0-.808-.663-1.46-1.485-1.455a1.47 1.47 0 0 0-1.478 1.38Zm-5.525-.375a.472.472 0 0 0-.505.444.474.474 0 0 0 .452.496.476.476 0 0 0 .504-.444.474.474 0 0 0-.451-.496Zm5.432-8.087a.472.472 0 0 0 .211-.635.488.488 0 0 0-.645-.208.466.466 0 0 0-.211.63.478.478 0 0 0 .645.213c-.006 0 0 0 0 0Zm1.502 2.58a.723.723 0 0 0 .328-.975.746.746 0 0 0-.991-.324.723.723 0 0 0-.329.976.746.746 0 0 0 .992.323ZM5.382 9.818a.62.62 0 0 0 .845-.173.598.598 0 0 0-.176-.831.62.62 0 0 0-.845.173.592.592 0 0 0 .176.831Zm.898 3.475a.733.733 0 0 0-.78.687.73.73 0 0 0 .697.768.733.733 0 0 0 .78-.687.733.733 0 0 0-.698-.768Zm-.816 4.889a.598.598 0 0 0-.27.808.617.617 0 0 0 .821.265c.3-.15.423-.508.27-.808a.619.619 0 0 0-.821-.265Zm2.875-6.395a.87.87 0 0 0 1.202-.249.841.841 0 0 0-.252-1.183.872.872 0 0 0-1.203.248.844.844 0 0 0 .253 1.184Zm9.122-3.799c.34.22.804.127 1.027-.207a.725.725 0 0 0-.211-1.01.752.752 0 0 0-1.027.207.714.714 0 0 0 .211 1.01Zm1.514-2.568c.223.144.516.08.663-.139a.464.464 0 0 0-.141-.652.485.485 0 0 0-.663.133.481.481 0 0 0 .14.658Zm-1.402 7.117c-.816-.046-1.52.571-1.56 1.373a1.463 1.463 0 0 0 1.395 1.536h.083a1.47 1.47 0 0 0 1.478-1.46c.006-.768-.61-1.409-1.396-1.45Zm-6.647-.855c.252.491.762.803 1.326.803.815 0 1.478-.652 1.478-1.46 0-.226-.053-.45-.158-.659a1.49 1.49 0 0 0-1.99-.646 1.452 1.452 0 0 0-.656 1.962Zm11.61-1.864c.3-.15.417-.514.264-.808a.616.616 0 0 0-.821-.26.598.598 0 0 0-.27.803.625.625 0 0 0 .827.265Zm-3.755.462a.85.85 0 0 0-.387 1.149.877.877 0 0 0 1.168.38.85.85 0 0 0 .387-1.148.882.882 0 0 0-1.168-.381Zm-4.84-5.08a.615.615 0 0 0 .646-.565.607.607 0 0 0-.575-.635.61.61 0 0 0-.646.56.614.614 0 0 0 .575.64Zm-.006 3.77a.855.855 0 1 0 .094-1.709.859.859 0 0 0-.915.808.859.859 0 0 0 .821.9Zm-4.716 8.75a.85.85 0 0 0 .387-1.149.877.877 0 0 0-1.168-.38.85.85 0 0 0-.387 1.148.877.877 0 0 0 1.168.381Zm5.28-7.498a1.44 1.44 0 0 0 .428 2.015 1.492 1.492 0 0 0 2.047-.422 1.44 1.44 0 0 0-.428-2.014 1.492 1.492 0 0 0-2.047.421Zm2.575 6.095a1.49 1.49 0 0 0-1.989-.646 1.444 1.444 0 0 0-.657 1.957 1.49 1.49 0 0 0 1.99.646 1.44 1.44 0 0 0 .662-1.945c0-.006 0-.006-.006-.012Zm2.587-.103a.872.872 0 0 0-1.202.248.841.841 0 0 0 .252 1.183c.405.26.945.15 1.203-.248a.843.843 0 0 0-.253-1.183Zm2.839-2.188a.73.73 0 0 0-.697-.768.733.733 0 0 0-.78.687.73.73 0 0 0 .698.768.74.74 0 0 0 .78-.687Zm2.048-.519a.472.472 0 0 0-.504.444.474.474 0 0 0 .451.496.476.476 0 0 0 .505-.444.478.478 0 0 0-.452-.496Zm-1.93 4.675a.62.62 0 0 0-.845.173.598.598 0 0 0 .176.831.62.62 0 0 0 .845-.173.592.592 0 0 0-.176-.831ZM9.02 22.58a.485.485 0 0 0-.664.133.468.468 0 0 0 .135.652c.223.144.516.08.663-.133a.459.459 0 0 0-.135-.652Zm10.043-.046a.472.472 0 0 0-.211.635c.117.23.41.323.645.208a.466.466 0 0 0 .211-.63.478.478 0 0 0-.645-.213c.006 0 0 0 0 0Zm-5.562-4.756a1.447 1.447 0 0 0-.428-2.02 1.5 1.5 0 0 0-2.053.42 1.442 1.442 0 0 0 .428 2.021c.24.156.522.237.81.237.504.006.968-.243 1.243-.658Zm-2.962 2.234a.752.752 0 0 0-1.027.207.725.725 0 0 0 .211 1.01c.34.22.804.127 1.027-.207a.715.715 0 0 0-.211-1.01Zm3.455 2.788a.615.615 0 0 0-.645.565c-.024.33.24.612.575.635a.61.61 0 0 0 .645-.56.614.614 0 0 0-.575-.64ZM14 19.03a.855.855 0 1 0-.094 1.709.863.863 0 0 0 .915-.808.859.859 0 0 0-.821-.9Zm3.561.924a.724.724 0 0 0-.323.981.747.747 0 0 0 .998.318.723.723 0 0 0 .328-.976.754.754 0 0 0-1.003-.323Z" />
      </g>
      <defs>
        <clipPath id={`${id}a`}>
          <path fill="#fff" transform="translate(3 4)" d="M0 0h22v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default SVGComponent;