import {
  SectionLimit,
} from '@components';
import { useStyles } from './styles';

const SupportedNetworks = () => {
  const classes = useStyles();

  return (
    <SectionLimit className={classes.root}>
      <h1>SupportedNetworks</h1>
    </SectionLimit>
  );
};

export default SupportedNetworks;
