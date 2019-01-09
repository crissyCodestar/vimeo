import React from 'react';
import { Grid, } from '@material-ui/core';
import '../CarouselSlides/carouselStyles.css';

const BgImage = ({img}) => (
  <Grid item className='image'>
    <div style={{backgroundImage: `url(${img})`}} className='blur_bg'>
    </div>
  </Grid>
)

export default BgImage
