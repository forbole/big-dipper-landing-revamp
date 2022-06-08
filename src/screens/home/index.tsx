import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  SectionBox,
} from '@components';
import { useStyles } from './styles';

const Home = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  return (
    <Layout>
      <SectionBox>
        <div className={classes.root}>home page</div>
      </SectionBox>
    </Layout>
  );
};

export default Home;
