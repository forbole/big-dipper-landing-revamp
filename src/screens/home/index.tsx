import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div>hello world</div>
      <div>{t('hola')}</div>
    </>
  );
};

export default Home;
