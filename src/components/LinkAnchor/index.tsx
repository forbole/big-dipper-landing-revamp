import Link, { LinkProps } from 'next/link';
import { FC, PropsWithChildren } from 'react';

// eslint-disable-next-line react/display-name
const LinkAnchor: FC<PropsWithChildren<LinkProps & JSX.IntrinsicElements['a']>> = (
  {
    children,
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref: _,
    prefetch,
    locale,
    legacyBehavior,
    ...props
  }
) => {
  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      prefetch={prefetch}
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      <a {...props}>
        {children}
      </a>
    </Link>
  );
};

// eslint-disable-next-line react/display-name
export default LinkAnchor;
