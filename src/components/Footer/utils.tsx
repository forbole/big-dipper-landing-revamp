import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/src/components/icons";
import * as LINKS from "@/src/utils/links";

import type { IconType, LinkType } from "./types";

export const bdLinks: LinkType[] = [
  {
    key: "about",
    url: LINKS.ABOUT,
  },
  {
    key: "faq",
    url: LINKS.FAQ,
  },
  {
    key: "donation",
    url: LINKS.DONATION,
  },
  {
    external: true,
    key: "docs",
    url: LINKS.DOCS,
  },
];

export const forboleLinks: LinkType[] = [
  {
    external: true,
    key: "stakeNow",
    url: LINKS.STAKE_NOW,
  },
  {
    external: true,
    key: "networks",
    url: LINKS.NETWORKS,
  },
  {
    external: true,
    key: "blog",
    url: LINKS.BLOG,
  },
];

export const socialLinks: IconType[] = [
  {
    className: "twitter",
    component: <TwitterIcon />,
    url: LINKS.TWITTER,
  },
  {
    className: "telegram",
    component: <TelegramIcon />,
    url: LINKS.TELEGRAM,
  },
  {
    className: "github",
    component: <GithubIcon />,
    url: LINKS.GITHUB,
  },
  {
    className: "linkedin",
    component: <LinkedinIcon />,
    url: LINKS.LINKEDIN,
  },
];

export const termsLinks: LinkType[] = [
  {
    key: "termsAndConditions",
    url: LINKS.TERMS_AND_CONDITIONS,
  },
  {
    key: "privacyPolicy",
    url: LINKS.PRIVACY_POLICY,
  },
];
