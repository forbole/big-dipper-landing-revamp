/* eslint-disable*/
import { Palette, PaletteOptions } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Custom {
    general: {
      [key: string]: string;
    };
    fonts: {
      [key: string]: string;
    };
  }

  interface Palette {
    custom: Custom;
  }

  interface PaletteOptions {
    custom?: Custom;
  }
}
