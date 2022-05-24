import { useState } from 'react';

export const useMenuMobile = (handleSel) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
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
