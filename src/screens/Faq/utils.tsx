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
      answer: <Trans i18nKey="faq:blockchain.one.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('blockchain.two.question'),
      answer: <Trans i18nKey="faq:blockchain.two.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
  ];
};

export const getStakersFAQ = (t: Translate) => {
  return [
    {
      question: t('stakers.one.question'),
      answer: <Trans i18nKey="faq:stakers.one.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('stakers.two.question'),
      answer: (
        <Trans
          i18nKey="faq:stakers.two.answer"
          components={[
            <b key={0} />,
            <br key={1} />,
            <LinkAnchor href="https://www.forbole.com/stake-now" target="_blank" rel="noreferrer" key={2} />,
          ]}
        />
      ),
    },
    {
      question: t('stakers.three.question'),
      answer: <Trans i18nKey="faq:stakers.three.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('stakers.four.question'),
      answer: <Trans i18nKey="faq:stakers.four.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('stakers.five.question'),
      answer: <Trans i18nKey="faq:stakers.five.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
  ];
};

export const getValidatorsFAQ = (t: Translate) => {
  return [
    {
      question: t('validators.one.question'),
      answer: <Trans i18nKey="faq:validators.one.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('validators.two.question'),
      answer: <Trans i18nKey="faq:validators.two.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('validators.three.question'),
      answer: <Trans i18nKey="faq:validators.three.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('validators.four.question'),
      answer: <Trans i18nKey="faq:validators.four.answer" components={[<b key={0} />, <br key={1} />]} />,
      list: [
        {
          title: t('validators.four.children.one.title'),
          description: (
            <Trans i18nKey="faq:validators.four.children.one.description" components={[<b key={0} />, <br key={1} />]} />
          ),
        },
        {
          title: t('validators.four.children.two.title'),
          description: (
            <Trans i18nKey="faq:validators.four.children.two.description" components={[<b key={0} />, <br key={1} />]} />
          ),
        },
        {
          title: t('validators.four.children.three.title'),
          description: (
            <Trans i18nKey="faq:validators.four.children.three.description" components={[<b key={0} />, <br key={1} />]} />
          ),
        },
        {
          title: t('validators.four.children.four.title'),
          description: (
            <Trans i18nKey="faq:validators.four.children.four.description" components={[<b key={0} />, <br key={1} />]} />
          ),
        },
        {
          title: t('validators.four.children.five.title'),
          description: (
            <Trans i18nKey="faq:validators.four.children.five.description" components={[<b key={0} />, <br key={1} />]} />
          ),
        },
        {
          title: t('validators.four.children.six.title'),
          description: (
            <Trans i18nKey="faq:validators.four.children.six.description" components={[<b key={0} />, <br key={1} />]} />
          ),
        },
      ],
    },
  ];
};

export const getGovernanceFAQ = (t: Translate) => {
  return [
    {
      question: t('faq:governance.one.question'),
      answer: <Trans i18nKey="faq:governance.one.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('faq:governance.two.question'),
      answer: <Trans i18nKey="faq:governance.two.answer" components={[<b key={0} />, <br key={1} />]} />,
    },
    {
      question: t('faq:governance.three.question'),
      answer: (
        <Trans
          i18nKey="faq:governance.three.answer"
          components={[
            <b key={0} />,
            <br key={1} />,
            <LinkAnchor href="https://www.youtube.com/watch?v=0JCbnug2tU4" target="_blank" rel="noreferrer" key={2} />,
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
