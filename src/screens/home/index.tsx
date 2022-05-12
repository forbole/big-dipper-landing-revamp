import useTranslation from 'next-translate/useTranslation';

const Home = () => {
  const { t } = useTranslation('common');
  console.log(t('hola'));
  console.log(t('test'));

  return (
    <>
      <div>hello world</div>
      <div>{t('hola')}</div>
    </>
  );
};

export default Home;
