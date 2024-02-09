import type { ComponentProps } from "react";

import type HorizontalMenubar from "../HorizontalMenubar";

export interface MenuDesktopProps
  extends ComponentProps<typeof HorizontalMenubar> {
  isMenu: boolean;
  toggleHamburgerMenu: () => void;
}
