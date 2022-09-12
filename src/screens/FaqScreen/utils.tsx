/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Translate } from 'next-translate';
import Trans from 'next-translate/Trans';
import LinkAnchor from '~src/components/LinkAnchor';

export const getMenuItems = (t: Translate) => [
  t('blockchain.title'),
  t('stakers.title'),
  t('validators.title'),
  t('governance.title'),
];

export const getBlockChainFAQ = (t: Translate) => {
  return [
    {
      question: t('blockchain.one.question'),
      answer: (
        <Trans
          i18nKey="faq:blockchain.one.answer"
          components={[<b key={0} />]}
        />
      ),
    },
    {
      question: t('blockchain.two.question'),
      answer: t('blockchain.two.answer'),
    },
  ];
};

export const getStakersFAQ = (t: Translate) => {
  return [
    {
      question: t('stakers.one.question'),
      answer: t('stakers.one.answer'),
    },
    {
      question: t('stakers.two.question'),
      answer: (
        <Trans
          i18nKey="faq:stakers.two.answer"
          components={[
            <LinkAnchor
              href="https://www.forbole.com/stake-now"
              target="_blank"
              rel="noreferrer"
              key={0}
            />,
          ]}
        />
      ),
    },
    {
      question: t('stakers.three.question'),
      answer: t('stakers.three.answer'),
    },
    {
      question: t('stakers.four.question'),
      answer: t('stakers.four.answer'),
    },
    {
      question: t('stakers.five.question'),
      answer: t('stakers.five.answer'),
    },
  ];
};

export const getValidatorsFAQ = (t: Translate) => {
  return [
    {
      question: t('validators.one.question'),
      answer: t('validators.one.answer'),
    },
    {
      question: t('validators.two.question'),
      answer: t('validators.two.answer'),
    },
    {
      question: t('validators.three.question'),
      answer: t('validators.three.answer'),
    },
    {
      question: t('validators.four.question'),
      answer: t('validators.four.answer'),
      list: [
        {
          title: t('validators.four.children.one.title'),
          description: t('validators.four.children.one.description'),
        },
        {
          title: t('validators.four.children.two.title'),
          description: t('validators.four.children.two.description'),
        },
        {
          title: t('validators.four.children.three.title'),
          description: t('validators.four.children.three.description'),
        },
        {
          title: t('validators.four.children.four.title'),
          description: t('validators.four.children.four.description'),
        },
        {
          title: t('validators.four.children.five.title'),
          description: t('validators.four.children.five.description'),
        },
        {
          title: t('validators.four.children.six.title'),
          description: t('validators.four.children.six.description'),
        },
      ],
    },
  ];
};

export const getGovernanceFAQ = (t: Translate) => {
  return [
    {
      question: t('governance.one.question'),
      answer: t('governance.one.answer'),
    },
    {
      question: t('governance.two.question'),
      answer: t('governance.two.answer'),
    },
    {
      question: t('governance.three.question'),
      answer: (
        <Trans
          i18nKey="faq:governance.three.answer"
          components={[
            <LinkAnchor
              href="https://www.youtube.com/watch?v=0JCbnug2tU4"
              target="_blank"
              rel="noreferrer"
              key={0}
            />,
          ]}
        />
      ),
    },
  ];
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
