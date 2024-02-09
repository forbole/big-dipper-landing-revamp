/* eslint-disable jsx-a11y/anchor-has-content */

/* eslint-disable jsx-a11y/control-has-associated-label */
import type { Translate } from "next-translate";
import Trans from "next-translate/Trans";
import Link from "next/link";

export const getMenuItems = (t: Translate) => [
  t("blockchain.title"),
  t("stakers.title"),
  t("validators.title"),
  t("governance.title"),
];

export const getBlockChainFAQ = (t: Translate) => [
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:blockchain.one.answer"
      />
    ),
    question: t("blockchain.one.question"),
  },
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:blockchain.two.answer"
      />
    ),
    question: t("blockchain.two.question"),
  },
];

export const getStakersFAQ = (t: Translate) => [
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:stakers.one.answer"
      />
    ),
    question: t("stakers.one.question"),
  },
  {
    answer: (
      <Trans
        components={{
          a: (
            <Link
              href="https://www.forbole.com/stake-now"
              rel="noreferrer"
              target="_blank"
            />
          ),
          b: <strong />,
          br: <br />,
        }}
        i18nKey="faq:stakers.two.answer"
      />
    ),
    question: t("stakers.two.question"),
  },
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:stakers.three.answer"
      />
    ),
    question: t("stakers.three.question"),
  },
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:stakers.four.answer"
      />
    ),
    question: t("stakers.four.question"),
  },
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:stakers.five.answer"
      />
    ),
    question: t("stakers.five.question"),
  },
];

export const getValidatorsFAQ = (t: Translate) => [
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:validators.one.answer"
      />
    ),
    question: t("validators.one.question"),
  },
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:validators.two.answer"
      />
    ),
    question: t("validators.two.question"),
  },
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:validators.three.answer"
      />
    ),
    question: t("validators.three.question"),
  },
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:validators.four.answer"
      />
    ),
    list: [
      {
        description: (
          <Trans
            components={{ b: <strong />, br: <br /> }}
            i18nKey="faq:validators.four.children.one.description"
          />
        ),
        title: t("validators.four.children.one.title"),
      },
      {
        description: (
          <Trans
            components={{ b: <strong />, br: <br /> }}
            i18nKey="faq:validators.four.children.two.description"
          />
        ),
        title: t("validators.four.children.two.title"),
      },
      {
        description: (
          <Trans
            components={{ b: <strong />, br: <br /> }}
            i18nKey="faq:validators.four.children.three.description"
          />
        ),
        title: t("validators.four.children.three.title"),
      },
      {
        description: (
          <Trans
            components={{ b: <strong />, br: <br /> }}
            i18nKey="faq:validators.four.children.four.description"
          />
        ),
        title: t("validators.four.children.four.title"),
      },
      {
        description: (
          <Trans
            components={{ b: <strong />, br: <br /> }}
            i18nKey="faq:validators.four.children.five.description"
          />
        ),
        title: t("validators.four.children.five.title"),
      },
      {
        description: (
          <Trans
            components={{ b: <strong />, br: <br /> }}
            i18nKey="faq:validators.four.children.six.description"
          />
        ),
        title: t("validators.four.children.six.title"),
      },
    ],
    question: t("validators.four.question"),
  },
];

export const getGovernanceFAQ = (t: Translate) => [
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:governance.one.answer"
      />
    ),
    question: t("faq:governance.one.question"),
  },
  {
    answer: (
      <Trans
        components={{ b: <strong />, br: <br /> }}
        i18nKey="faq:governance.two.answer"
      />
    ),
    question: t("faq:governance.two.question"),
  },
  {
    answer: (
      <Trans
        components={{
          a: (
            <Link
              href="https://www.youtube.com/watch?v=0JCbnug2tU4"
              rel="noreferrer"
              target="_blank"
            />
          ),
          b: <strong />,
          br: <br />,
        }}
        i18nKey="faq:governance.three.answer"
      />
    ),
    question: t("faq:governance.three.question"),
  },
];

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
