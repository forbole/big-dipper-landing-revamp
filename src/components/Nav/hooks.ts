import { mergeDeepLeft } from "ramda";
import { useState } from "react";

export const useNav = () => {
  const [state, setState] = useState<{
    isMenu: boolean;
  }>({
    isMenu: false,
  });

  const handleSetState = (stateChange: typeof state) => {
    setState((prevState) => mergeDeepLeft(stateChange, prevState));
  };

  const toggleHamburgerMenu = () => {
    // click hamburger icon to open modal and change hamburger menu to show "X"
    if (!state.isMenu) {
      handleSetState({
        isMenu: true,
      });
    } else {
      // click hamburger icon to close modal and recover hamburger menu to default
      handleSetState({
        isMenu: false,
      });
    }
  };

  return {
    isMenu: state.isMenu,
    toggleHamburgerMenu,
  };
};
