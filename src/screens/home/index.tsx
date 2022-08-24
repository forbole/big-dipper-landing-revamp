// import useTranslation from 'next-translate/useTranslation';
import { Layout, SectionBox } from '@components';
import { StyledSectionLimit } from './styles';

const Home = () => {
  return (
    <Layout>
      <SectionBox>
        <StyledSectionLimit>
          <h1>home page</h1>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Home;
