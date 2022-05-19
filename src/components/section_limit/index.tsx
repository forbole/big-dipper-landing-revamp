import React from 'react';

/**
 * Helper component to restraint content
 * from going past a certain width
 * @returns
 */
const SectionLimit: React.FC<{children: React.ReactNode} & ComponentDefault> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default SectionLimit;
