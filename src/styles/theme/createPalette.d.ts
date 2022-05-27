/* eslint-disable*/
import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface Custom {
        general: {
            [key: string]: string;
        },
        fonts: {
            [key: string]: string;
        },
    }

    interface PaletteOptions {
        custom?: Custom;
    }
    interface Palette {
        custom: Custom;
    }
}
