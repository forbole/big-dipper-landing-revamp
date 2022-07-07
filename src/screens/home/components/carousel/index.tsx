import {
  SectionLimit,
} from '@components';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Button, Card } from '@mui/material';
import { useStyles } from './styles';
import { carouselData } from './utils';

const CarouselComponent = () => {
  const classes = useStyles();

  return (
    <SectionLimit className={classes.root}>
      <div>
        <Carousel>
          {carouselData.map((item) => (
            <Card key={item.image}>
              <h2>{item.key}</h2>
              <p>{item.details}</p>

              <Button className="CheckButton">
                Check it out!
              </Button>
            </Card>
          ))}
        </Carousel>
      </div>
    </SectionLimit>
  );
};

export default CarouselComponent;
