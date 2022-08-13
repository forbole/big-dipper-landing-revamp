import { styled } from '@mui/material/styles';
import { SectionLimit } from '@components';

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  '& .title': {
    marginBottom: theme.spacing(4),
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      marginBottom: theme.spacing(5),
    },
  },
}));
