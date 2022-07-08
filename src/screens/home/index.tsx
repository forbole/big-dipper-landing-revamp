// import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  SectionBox,
  SectionLimit,
} from '@components';
import { useStyles } from './styles';
import { CarouselComponent, SupportedNetworks } from './components';

const Home = () => {
  // const { t } = useTranslation('common');
  const classes = useStyles();

  return (
    <Layout>
      <SectionBox>
        <SectionLimit className={classes.root}>
          <CarouselComponent />
          <SupportedNetworks />
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Home;
