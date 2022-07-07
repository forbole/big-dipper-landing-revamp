import {
  SectionLimit,
} from '@components';
import { useStyles } from './styles';

const Carousel = () => {
  const classes = useStyles();

  return (
    <SectionLimit className={classes.root}>
      <h1>carousel</h1>
    </SectionLimit>
  );
};

export default Carousel;
