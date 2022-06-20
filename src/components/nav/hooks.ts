import { useState } from 'react';
import * as R from 'ramda';

export const useNav = () => {
  const [state, setState] = useState<{
    isIcon: boolean;
    isMenu: boolean
  }>({
    isIcon: true,
    isMenu: false,
  });

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => R.mergeDeepLeft(stateChange, prevState));
  };

  const toggleHamburgerMenu = () => {
    // click hamburger icon to open modal and change hamburger menu to show "X"
    if ((state.isIcon) || (!state.isMenu)) {
      handleSetState({
        isIcon: false,
        isMenu: true,
      });
    } else {
      // click hamburger icon to close modal and recover hamburger munu to default
      handleSetState({
        isIcon: true,
        isMenu: false,
      });
    }
  };

  return {
    isIcon: state.isIcon,
    isMenu: state.isMenu,
    toggleHamburgerMenu,
  };
};
