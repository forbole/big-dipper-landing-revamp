// import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  SectionBox,
  SectionLimit,
} from '@components';
import { useStyles } from './styles';
import { Carousel } from './components';

const Home = () => {
  // const { t } = useTranslation('common');
  const classes = useStyles();

  return (
    <Layout>
      <SectionBox>
        <SectionLimit className={classes.root}>
          <h1>home page</h1>
          <Carousel />
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Home;
