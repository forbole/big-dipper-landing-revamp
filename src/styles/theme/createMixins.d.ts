/* eslint-disable*/
import * as createMixins from '@material-ui/core/styles/createMixins';

declare module '@material-ui/core/styles/createMixins' {
    interface MixinsOptions {
        gradientBackground?: CSSProperties;
        headerGlow?: CSSProperties;
        button?: CSSProperties;
        buttonSecondary?: CSSProperties;
    }

    interface Mixins {
        gradientBackground: CSSProperties;
        headerGlow: CSSProperties;
        button: CSSProperties;
        buttonSecondary: CSSProperties;
    }
}
