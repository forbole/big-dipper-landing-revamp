import {
  SectionLimit,
} from '@components';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { useStyles } from './styles';

const CarouselComponent = () => {
  const classes = useStyles();

  return (
    <SectionLimit className={classes.root}>
      <h1>Carousel</h1>
    </SectionLimit>
  );
};

export default CarouselComponent;
