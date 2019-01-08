import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Arrow from '../Arrow';
import carouselStyles from './carouselStyles';
import './carouselStyles.css';
let colors = ['#a4004a', '#4a72ed', '#63c3ac', '#bb8134', '#a2a2a2']

const CarouselSlides =({title, children, classes, index, activeIndex, info, media })=>(

<div className={classes.root}>
  {console.log(info)}
  <div
    className={
      index === activeIndex
      ? classes.carouselItemActive
      : classes.carouselItem
    } >
    <div className='image'>
      <div style={{backgroundImage: '  linear-gradient(rgba(0, 0, 0, 0.45), rgba(55, 0, 0, 0.45)),url(' + info.media.link + ')'}} className='blur_bg'/>
    </div>
    <Grid container className={classes.root}>
      <Grid item lg={4} xs={10} >
        <img src={info.media.link} alt='link' className={classes.itemImage}/>
      </Grid>
      <Grid item lg={4} xs={10}>
      <Typography  variant="h4" gutterBottom className={classes.title}>{info.title}</Typography>
        <Typography style={{color: colors[index]}} className={classes.description}>{info.description}</Typography>
      </Grid>
    </Grid>
  </div>
</div>
)


CarouselSlides.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(carouselStyles)(CarouselSlides);
