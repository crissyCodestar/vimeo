import React from 'react';
import PropTypes from 'prop-types';
import { Grid, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../CarouselSlides/carouselStyles.css';
import carouselStyles from '../CarouselSlides/carouselStyles';


const VideoImages =({vidImg, classes, vidImgColor}) =>(
  <Grid item lg={3} md={6} xs={8} className={classes.containerImage}>
      <div className='overview'>
        <img src={vidImg} alt='link' className={classes.itemImage} />
        <div className='box' style={{background: `linear-gradient( transparent, 80%, ${vidImgColor})`}}/>
      </div>
  </Grid>
)

VideoImages.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(carouselStyles)(VideoImages);
