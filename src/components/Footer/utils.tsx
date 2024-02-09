import {
  GithubIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon,
} from "@/src/components/icons";
import * as LINKS from "@/src/utils/links";

import type { IconType, LinkType } from "./types";

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
