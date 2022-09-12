import Link, { LinkProps } from 'next/link';
import { FC, forwardRef, PropsWithChildren, RefAttributes } from 'react';

// eslint-disable-next-line react/display-name
const LinkAnchor: FC<
  PropsWithChildren<LinkProps & JSX.IntrinsicElements['a']> &
    RefAttributes<HTMLAnchorElement>
> = forwardRef(function _(
  {
    children,
    href,
    as,
    replace,
    soft,
    scroll,
    shallow,
    passHref: _,
    prefetch,
    locale,
    legacyBehavior,
    ...props
  },
  ref
) {
  return (
    <Link
      href={href}
      as={as}
      replace={replace}
      soft={soft}
      scroll={scroll}
      shallow={shallow}
      passHref
      prefetch={prefetch}
      locale={locale}
      legacyBehavior={legacyBehavior}
    >
      <a {...props} ref={ref}>
        {children}
      </a>
    </Link>
  );
});

// eslint-disable-next-line react/display-name
export default LinkAnchor;
