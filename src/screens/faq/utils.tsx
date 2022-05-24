import { Translate } from 'next-translate';
import Trans from 'next-translate/Trans';

export const getMenuItems = (t: Translate) => ([
  t('blockchain.title'),
  t('stakers.title'),
  t('validators.title'),
  t('governance.title'),
]);

export const getBlockChainFAQ = (t: Translate) => {
  return ([
    {
      question: t('blockchain.one.question'),
      answer: (
        <Trans
          i18nKey="faq:blockchain.one.answer"
          components={[
            <b />,
          ]}
        />
      ),
    },
    {
      question: t('blockchain.two.question'),
      answer: t('blockchain.two.answer'),
    },
  ]);
};

export const getContent = (selected: number, t: Translate) => {
  if (selected === 0) {
    return getBlockChainFAQ(t);
  }

  return [];
};
