import { Translate } from 'next-translate';

export const getMenuItems = (t: Translate) => ([
  t('blockchain.title'),
  t('stakers.title'),
  t('validators.title'),
  t('governance.title'),
]);
