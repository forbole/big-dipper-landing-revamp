import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
  SectionBox,
  SectionLimit,
} from '@components';
import { useStyles } from './styles';

const Home = () => {
  const { t } = useTranslation('common');
  const classes = useStyles();

  return (
    <Layout>
      <SectionBox>
        <SectionLimit className={classes.root}>
          <div>home page</div>
        </SectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Home;
