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

export const getStakersFAQ = (t: Translate) => {
  return ([
    {
      question: t('stakers.one.question'),
      answer: t('stakers.one.answer'),
    },
  ]);
};

export const getValidatorsFAQ = (t: Translate) => {
  return ([
    {
      question: t('validators.one.question'),
      answer: t('validators.one.answer'),
    },
  ]);
};

export const getGovernanceFAQ = (t: Translate) => {
  return ([
    {
      question: t('governance.one.question'),
      answer: t('governance.one.answer'),
    },
  ]);
};

export const getContent = (selected: number, t: Translate) => {
  if (selected === 0) {
    return getBlockChainFAQ(t);
  }

  if (selected === 1) {
    return getStakersFAQ(t);
  }

  if (selected === 2) {
    return getValidatorsFAQ(t);
  }

  if (selected === 3) {
    return getGovernanceFAQ(t);
  }

  return [];
};
