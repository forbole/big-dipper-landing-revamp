import {
  SectionLimit,
} from '@components';
import Carousel from 'react-material-ui-carousel';
import { Button, Card } from '@mui/material';
import { useStyles } from './styles';

const CarouselComponent = () => {
  const classes = useStyles();

  return (
    <SectionLimit className={classes.root}>
      <div>
        <Carousel>
          <Card className="card-1">
            <h2>The Explorer for the Interchain</h2>
          </Card>
          <Card className="card-2">
            <h2>Real-time Interchain Explorer</h2>
            <p>View real-time status of different networks</p>
          </Card>
          <Card className="card-3">
            <h2>Users First</h2>
            <p>Best user experience with good-looking dashboard</p>
          </Card>
          <Card className="card-4">
            <h2>Ease of Use</h2>
            <p>Easy navigate the networks with all transactions’ details</p>
          </Card>
        </Carousel>
      </div>
    </SectionLimit>
  );
};

export default CarouselComponent;
