import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Carousel from '../Carousel';
import Arrow from '../Arrow';
import carouselContainerStyles from './CarouselContainerStyles';

class CarouselContainer extends Component {
  constructor() {
    super();
    this.state={}
  }

  render(){
    const {classes} = this.props
  return(
    <div>

      <Carousel title='Carousel'>

  {/*      <Grid container className={classes.item}>
          <Grid item xs={10}>
            <Paper>
              Photo
            </Paper>
          </Grid>
          <Grid item xs={10}>
            Title
          </Grid>
          <Grid item xs={10}>
            Description
          </Grid>
        </Grid>*/}
        <Typography variant="h2" gutterBottom className={classes.item}>
          Item 1
        </Typography>

        <Typography variant="h2" gutterBottom className={classes.item}>
          Item 2
        </Typography>
        <Typography variant="h2" gutterBottom className={classes.item}>
          Item 3
        </Typography>
      </Carousel>

    </div>
  )
}}
CarouselContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(carouselContainerStyles)(CarouselContainer);
