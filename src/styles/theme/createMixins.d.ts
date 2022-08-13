/* eslint-disable*/
import { Mixins, MixinsOptions } from "@mui/material/styles/createMixins";

declare module "@mui/material/styles/createMixins" {
  interface Mixins {
    gradientBackground: CSSProperties;
    headerGlow: CSSProperties;
    button: CSSProperties;
    buttonSecondary: CSSProperties;
  }

  interface MixinsOptions {
    gradientBackground?: CSSProperties;
    headerGlow?: CSSProperties;
    button?: CSSProperties;
    buttonSecondary?: CSSProperties;
  }
}
