import { useState } from "react";

export const useMenuMobile = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick: React.EventHandler<React.MouseEvent<HTMLElement>> = (
    event,
  ) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return {
    anchorEl,
    handleClick,
    handleClose,
  };
};
