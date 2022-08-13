/* eslint-disable*/
import { Breakpoint, BreakpointsOptions } from "@mui/system/createTheme/createBreakpoints";

declare module "@mui/system/createTheme/createBreakpoints" {
  interface Breakpoints {
    limit: number;
  }
  interface BreakpointsOptions {
    limit?: number;
  }
}
