import { styled } from '@mui/material/styles';
import { SectionLimit } from '@components';

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  '& .title': {
    marginBottom: theme.spacing(2),
    textAlign: 'center',
    [theme.breakpoints.up('lg')]: {
      textAlign: 'left',
      marginBottom: theme.spacing(2),
    },
  },

  '& .intro': {
    marginBottom: theme.spacing(2),
  },

  '& .MuiTypography-h3': {
    marginBottom: theme.spacing(2),
    color: theme.palette.secondary.main,
    '&:not(:first-child)': {
      marginTop: theme.spacing(6),
    },
  },

  '& .MuiTypography-h4': {
    marginBottom: theme.spacing(2),
  },
  '& .key': {
    fontWeight: 500,
  },
  '& ul': {
    marginLeft: theme.spacing(2),
  },
  '& li': {
    marginBottom: theme.spacing(2),
  },
  '& .description': {
    marginBottom: theme.spacing(3),
  },
  '& .indent': {
    marginLeft: theme.spacing(2),
  },
}));
