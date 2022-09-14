import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import classnames from 'classnames';
import useTranslation from 'next-translate/useTranslation';
import Head from 'next/head';
import { FC, LegacyRef, useCallback, useRef, useState } from 'react';
import Slider from 'react-slick';
import { Layout } from '~src/components';
import SectionBox from '~src/components/SectionBox';
import SectionLimit from '~src/components/SectionLimit';
import NetworksPanel from './components/NetworksPanel';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';
import type { HomeProps } from './types';
import useStyles from './useStyles';
/* A React component that renders the Homepage. */
const Home: FC<HomeProps> = ({ networkList }) => {
  const sliderRef: LegacyRef<Slider> = useRef(null);
  const handleSlideLeft = useCallback(() => {
    sliderRef.current?.slickPrev();
  }, []);
  const handleSlideRight = useCallback(() => {
    sliderRef.current?.slickNext();
  }, []);
  const [sliding, setSliding] = useState(false);
  const [slide, setSlide] = useState(0);
  const beforeChange = useCallback(() => setSliding(true), []);
  const afterChange = useCallback((current: number) => {
    setSlide(current);
    setSliding(false);
  }, []);
  const { t } = useTranslation('common');
  const styles = useStyles();

  return (
    <Layout css={styles.layout}>
      <Head>
        <title>{t('bigDipper')}</title>
      </Head>
      <div className="home_slider-container" css={[styles.slider]}>
        <Fab className="home__slider-left" onClick={handleSlideLeft}>
          <KeyboardArrowLeftIcon />
        </Fab>
        <Fab className="home__slider-right" onClick={handleSlideRight}>
          <KeyboardArrowRightIcon />
        </Fab>
        <Box
          className={classnames({
            [`home__slide${slide}`]: true,
            home__sliding: sliding,
          }, 'home__slider')}
        >
          <Slider
            dots
            slidesToScroll={1}
            slidesToShow={1}
            arrows={false}
            beforeChange={beforeChange}
            afterChange={afterChange}
            ref={sliderRef}
            useTransform={false}
          >
            <Slide1 />
            <Slide2 />
            <Slide3 />
            <Slide4 />
          </Slider>
        </Box>
      </div>
      <SectionBox className="home__section-box" css={styles.root}>
        <SectionLimit>
          <NetworksPanel networkList={networkList} />
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Home;
