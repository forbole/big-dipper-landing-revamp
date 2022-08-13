import { styled } from '@mui/material/styles';
import { ContentBox } from '@components';

export const StyledContentBox = styled(ContentBox)(({ theme }) => ({
  '& .faq__wrapper:not(:last-child)': {
    marginBottom: theme.spacing(2),
  },
  '& .question': {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
  },
  '& .list': {
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  '& .list__title': {
    marginBottom: theme.spacing(1),
    color: theme.palette.secondary.main,
  },
  '& .list__title--bullet': {
    color: theme.palette.custom.fonts.one,
    marginRight: theme.spacing(1),
  },
  '& .list__item:not(:last-child)': {
    marginBottom: theme.spacing(3),
  },
}));
