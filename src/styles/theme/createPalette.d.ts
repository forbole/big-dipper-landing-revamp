/* eslint-disable*/
import { TypeBackground } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    mobileMenu: string;
    activeMenuItem: string;
    desktopMenu: string;
  }
}
