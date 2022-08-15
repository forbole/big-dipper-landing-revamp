import { styled } from '@mui/material/styles';
import SectionLimit from '../section-limit';

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  '& .wrapper': {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '79px',
    padding: theme.spacing(2),
  },
  '& .logo': {
    height: '36px',
    display: 'block',
  },
  '& .wrapper > button': {
    height: '60px',
    position: 'absolute',
    padding: theme.spacing(5),
  },
  [theme.breakpoints.up('md')]: {
    '& .wrapper': {
      justifyContent: 'space-between',
    },
    '& .logo': {
      margin: theme.spacing(1),
    },
  },
}));
