/* eslint-disable*/
import { Mixins, MixinsOptions } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    headerGlow: CSSInterpolation;
    button: CSSInterpolation;
    buttonSecondary: CSSInterpolation;
    blur02: CSSInterpolation;
    blur03: CSSInterpolation;
    blur04: CSSInterpolation;
  }

  interface MixinsOptions {
    headerGlow?: CSSInterpolation;
    button?: CSSInterpolation;
    buttonSecondary?: CSSInterpolation;
    blur02?: CSSInterpolation;
    blur03?: CSSInterpolation;
    blur04?: CSSInterpolation;
  }
}
