/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Translate } from "next-translate";
import Trans from "next-translate/Trans";
import Link from "next/link";

export const getMenuItems = (t: Translate) => [
  t("blockchain.title"),
  t("stakers.title"),
  t("validators.title"),
  t("governance.title"),
];

export const getBlockChainFAQ = (t: Translate) => {
  return [
    {
      question: t("blockchain.one.question"),
      answer: (
        <Trans
          i18nKey="faq:blockchain.one.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("blockchain.two.question"),
      answer: (
        <Trans
          i18nKey="faq:blockchain.two.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
  ];
};

export const getStakersFAQ = (t: Translate) => {
  return [
    {
      question: t("stakers.one.question"),
      answer: (
        <Trans
          i18nKey="faq:stakers.one.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("stakers.two.question"),
      answer: (
        <Trans
          i18nKey="faq:stakers.two.answer"
          components={{
            b: <strong />,
            br: <br />,
            a: (
              <Link
                href="https://www.forbole.com/stake-now"
                target="_blank"
                rel="noreferrer"
              />
            ),
          }}
        />
      ),
    },
    {
      question: t("stakers.three.question"),
      answer: (
        <Trans
          i18nKey="faq:stakers.three.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("stakers.four.question"),
      answer: (
        <Trans
          i18nKey="faq:stakers.four.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("stakers.five.question"),
      answer: (
        <Trans
          i18nKey="faq:stakers.five.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
  ];
};

export const getValidatorsFAQ = (t: Translate) => {
  return [
    {
      question: t("validators.one.question"),
      answer: (
        <Trans
          i18nKey="faq:validators.one.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("validators.two.question"),
      answer: (
        <Trans
          i18nKey="faq:validators.two.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("validators.three.question"),
      answer: (
        <Trans
          i18nKey="faq:validators.three.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("validators.four.question"),
      answer: (
        <Trans
          i18nKey="faq:validators.four.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
      list: [
        {
          title: t("validators.four.children.one.title"),
          description: (
            <Trans
              i18nKey="faq:validators.four.children.one.description"
              components={{ b: <strong />, br: <br /> }}
            />
          ),
        },
        {
          title: t("validators.four.children.two.title"),
          description: (
            <Trans
              i18nKey="faq:validators.four.children.two.description"
              components={{ b: <strong />, br: <br /> }}
            />
          ),
        },
        {
          title: t("validators.four.children.three.title"),
          description: (
            <Trans
              i18nKey="faq:validators.four.children.three.description"
              components={{ b: <strong />, br: <br /> }}
            />
          ),
        },
        {
          title: t("validators.four.children.four.title"),
          description: (
            <Trans
              i18nKey="faq:validators.four.children.four.description"
              components={{ b: <strong />, br: <br /> }}
            />
          ),
        },
        {
          title: t("validators.four.children.five.title"),
          description: (
            <Trans
              i18nKey="faq:validators.four.children.five.description"
              components={{ b: <strong />, br: <br /> }}
            />
          ),
        },
        {
          title: t("validators.four.children.six.title"),
          description: (
            <Trans
              i18nKey="faq:validators.four.children.six.description"
              components={{ b: <strong />, br: <br /> }}
            />
          ),
        },
      ],
    },
  ];
};

export const getGovernanceFAQ = (t: Translate) => {
  return [
    {
      question: t("faq:governance.one.question"),
      answer: (
        <Trans
          i18nKey="faq:governance.one.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("faq:governance.two.question"),
      answer: (
        <Trans
          i18nKey="faq:governance.two.answer"
          components={{ b: <strong />, br: <br /> }}
        />
      ),
    },
    {
      question: t("faq:governance.three.question"),
      answer: (
        <Trans
          i18nKey="faq:governance.three.answer"
          components={{
            b: <strong />,
            br: <br />,
            a: (
              <Link
                href="https://www.youtube.com/watch?v=0JCbnug2tU4"
                target="_blank"
                rel="noreferrer"
              />
            ),
          }}
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
