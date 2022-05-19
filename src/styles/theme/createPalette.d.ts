/* eslint-disable*/
import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface Custom {
        general: {
            white: string;
        },
    }

    interface PaletteOptions {
        custom?: Custom;
    }
    interface Palette {
        custom: Custom;
    }
}
