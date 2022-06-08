import { useState } from 'react';
import * as R from 'ramda';

export const useDropdownMenu = () => {
  const [state, setState] = useState<{
    isIcon?: boolean;
    isMenu?: boolean
  }>({
    isIcon: false,
    isMenu: false,
  });

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const toggleHamburgerMenu = () => {
    // click hamburger icon to open modal and change hamburger menu
    if ((state.isIcon) || (state.isMenu)) {
      handleSetState({
        isIcon: false,
        isMenu: false,
      });
    } else {
      // click hamburger icon to close modal and change hamburger munu
      handleSetState({
        isIcon: true,
        isMenu: true,
      });
    }
  };

  return {
    isIcon: state.isIcon,
    isMenu: state.isMenu,
    toggleHamburgerMenu,
  };
};
