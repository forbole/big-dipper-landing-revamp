import classnames from 'classnames';
import { FC } from 'react';
import useStyles from './useStyles';
import Box, { BoxProps } from '@mui/material/Box';

/**
 * A functional component that takes in children and className as props.
 * @param  - FC<BoxProps>
 * @returns A styled div with the children and className passed in as props.
 */
const ContentBox: FC<BoxProps> = ({ className, ...props }) => {
  const styles = useStyles();
  return <Box className={classnames(className, 'contentbox__container')} {...props} css={styles.root} />;
};

export default ContentBox;
