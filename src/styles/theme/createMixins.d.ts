/* eslint-disable*/
import { CSSInterpolation } from '@mui/material';
import { Mixins, MixinsOptions } from '@mui/material/styles/createMixins';

declare module '@mui/material/styles/createMixins' {
  interface Mixins {
    headerGlow: CSSObject;
    button: CSSObject;
    buttonSecondary: CSSObject;
    blur02: CSSObject;
    blur03: CSSObject;
    blur04: CSSObject;
  }

  interface MixinsOptions {
    headerGlow?: CSSObject;
    button?: CSSObject;
    buttonSecondary?: CSSObject;
    blur02?: CSSObject;
    blur03?: CSSObject;
    blur04?: CSSObject;
  }
}
