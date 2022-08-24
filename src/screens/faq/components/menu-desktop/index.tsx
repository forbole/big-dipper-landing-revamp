import { FC, HTMLAttributes } from 'react';
import classnames from 'classnames';
import { Button } from '@mui/material';
import { MenuType } from '../../types';
import { StyledDiv } from './styles';

const MenuDesktop: FC<MenuType & HTMLAttributes<HTMLElement>> = ({
  className,
  handleChange,
  items,
  selected,
}) => {
  return (
    <StyledDiv className={className}>
      {items.map((x, i) => {
        return (
          <Button
            key={x}
            variant="contained"
            className={classnames('button', {
              'button--active': i === selected,
            })}
            onClick={() => handleChange?.(i)}
          >
            {x}
          </Button>
        );
      })}
    </StyledDiv>
  );
};

export default MenuDesktop;
