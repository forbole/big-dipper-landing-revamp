// import useTranslation from 'next-translate/useTranslation';
import { Layout, SectionBox } from '@components';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import Image from 'next/image';
import { StyledSectionLimit, StyledImageBox } from './styles';
// import { Slide1, Slide2 } from './components';
import { Slide1 } from './components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  slidesToScroll: 1,
  slidesToShow: 1,
};

const Home = () => {
  return (
    <Layout>
      <SectionBox sx={{ padding: '0', overflow: 'visible' }}>
        <StyledSectionLimit>
          <div className="logo">
            <Box className="slider">
              <Slider {...settings}>
                <Slide1 />
                {/* <Slide2 /> */}
              </Slider>
            </Box>
            <StyledImageBox>
              <Image
                src="/images/big-dipper-transparent.png"
                alt="Big Dipper"
                layout="intrinsic"
                width="482"
                height="452"
              />
            </StyledImageBox>
          </div>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Home;
