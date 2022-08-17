import { keyframes, styled } from '@mui/material/styles';
import { SectionLimit } from '@components';
import Image from 'next/image';

export const StyledSectionLimit = styled(SectionLimit)({
  '& .logo': {
    width: '100%',
    textAlign: 'center',
    maxWidth: '100%',
    maxHeight: '565px',
    background: 'url("/images/background/stars.png")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% auto',
    backgroundPosition: '50% 50%',
  },
});

const breathing = keyframes`
50% {
  transform: scale(1.02);
}
`;

export const StyledImage = styled(Image)({
  transform: 'scale(1)',
  mixBlendMode: 'screen',
  animation: `${breathing} 3s infinite ease`,
});
