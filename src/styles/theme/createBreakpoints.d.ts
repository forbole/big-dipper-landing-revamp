/* eslint-disable*/
import * as createBreakpoints from '@material-ui/core/styles/createBreakpoints';

declare module '@material-ui/core/styles/createBreakpoints' {
    interface BreakpointsOptions {
        limit?: number;
    }
    interface Breakpoints {
        limit: number;
    }
}
