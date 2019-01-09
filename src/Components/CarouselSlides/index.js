import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Grid, } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import carouselStyles from './carouselStyles';
import './carouselStyles.css';
import { Button } from '../Button';
import BgImage from '../BgImage';
import VideoImages from '../VideoImages';
let colors = ['rgb(162,162,162)', 'rgb(51,145,196)', 'rgb(99,195,172)', 'rgb(193,136,61)', 'rgb(173,173,104)']


const CarouselSlides =({classes, index, activeIndex, info })=>(

<Grid container className={classes.root} >
  <Grid item
    className={
      index === activeIndex
      ? classes.carouselItemActive
      : classes.carouselItem
    } >

    <div className='layer' style={{backgroundColor:colors[index]}}/>
      <BgImage img={info.media.link}/>

    <Grid container xs={12} className={classes.infoContainer}>
      <VideoImages
        vidImg={info.media.link}
        vidImgColor={colors[index]}/>
        {/*Info*/}
      <Grid container md={5} xs={9} className={classes.gridItem}>
        <Grid item md={12}  xs={12}>
          <Typography  variant="h5"  className={classes.title}>{info.title}</Typography>
        </Grid>
        <Grid item lg={12}  xs={12} gutterBottom={true} className={classes.descriptionContainer} >
          <Typography variant="body1"  className={classes.description}>{info.description}</Typography>
        </Grid>
        {/*Buttons*/}
        <Grid container xs={12} md={12} spacing={16}>
          <Grid item xs={6} sm={4} md={5} lg={4} className={classes.button}>
            <Button text='Buy Now' colorValue='warning' color={colors[index]} />
          </Grid>
          <Grid item xs={6} sm={4} md={5} lg={4} className={classes.button}>
            <Button text='Watch Trailer' link={info.media.link_with_play_button}/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>
)


CarouselSlides.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(carouselStyles)(CarouselSlides);
