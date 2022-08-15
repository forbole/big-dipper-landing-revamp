import React from 'react';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { List, ListItemText } from '@mui/material';
import useTranslation from 'next-translate/useTranslation';
import { StyledListItemButton } from './styles';
import { getMenuItems } from './utils';

const MenuItems = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const items = getMenuItems();

  return (
    <List>
      {items.map((x) => {
        let isActive = false;
        if (x.url === router?.asPath) {
          isActive = true;
        }
        if (router?.asPath?.includes(x.url) && x.url !== '/') {
          isActive = true;
        }

        return (
          <Link href={x.url} key={x.key} passHref>
            <StyledListItemButton
              className={classnames({
                active: isActive,
              })}
            >
              <ListItemText primary={t(x.key)} />
            </StyledListItemButton>
          </Link>
        );
      })}
    </List>
  );
};

export default MenuItems;
