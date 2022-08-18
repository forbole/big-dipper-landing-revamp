import { keyframes, styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import { SectionLimit } from '@components';

export const StyledSectionLimit = styled(SectionLimit)(({ theme }) => ({
  '& .logo': {
    width: '100%',
    textAlign: 'center',
    maxWidth: '100%',
    position: 'relative',
    background: 'url("/images/background/stars.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '95% auto',
    backgroundPosition: '50% 50%',
    [theme.breakpoints.up('md')]: {
      backgroundSize: '100% auto',
    },
    '& .slider': {
      position: 'absolute',
      zIndex: 1,
      left: 50,
      right: 50,
      top: 0,
      bottom: 0,
      '& .slick-slider': {
        height: '85%',
      },
      '& .slick-list': {
        height: '100%',
      },
      '& .slick-track': {
        height: '100%',
      },
      '& .slick-slide': {
        position: 'relative',
      },
      '& .slick-arrow': {
        transform: 'scale(1.5)',
        textShadow: '2px 2px rgba(0,0,0,0.1)',
      },
      '& .slick-dots li button:before': {
        color: theme.palette.secondary.contrastText,
        opacity: 0.95,
        transform: 'scale(1.2)',
        textShadow: '1px 1px rgba(0,0,0,0.1)',
      },
      '& .slick-dots li.slick-active button:before': {
        color: 'red',
      },
    },
  },
}));

const breathing = keyframes`
50% {
  transform: scale(0.98);
}
`;

export const StyledImageBox = styled(Box)(({ theme }) => ({
  transform: 'scale(1)',
  mixBlendMode: 'screen',
  padding: `0 ${theme.spacing(5)}`,
  animation: `${breathing} 3s infinite ease`,
}));
