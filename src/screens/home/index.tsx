import useTranslation from 'next-translate/useTranslation';
import {
  Layout,
} from '@components';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <div>home page</div>
    </Layout>
  );
};

export default Home;
