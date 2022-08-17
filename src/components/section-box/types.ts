import { MUIStyledCommonProps } from '@mui/system';
import { StyledSection } from './styles';

export type SectionBoxProps = {
  main?: boolean;
} & MUIStyledCommonProps &
  React.ComponentProps<typeof StyledSection>;
