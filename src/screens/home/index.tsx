// import useTranslation from 'next-translate/useTranslation';
import { Layout, SectionBox } from '@components';
import { StyledSectionLimit, StyledImage } from './styles';

const Home = () => {
  return (
    <Layout>
      <SectionBox sx={{ padding: '0' }}>
        <StyledSectionLimit>
          <div className="logo">
            <StyledImage
              src="/images/big-dipper-transparent.png"
              alt="Big Dipper"
              layout="intrinsic"
              width="603"
              height="565"
            />
          </div>
        </StyledSectionLimit>
      </SectionBox>
    </Layout>
  );
};

export default Home;
