import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import carouselContainerStyle from './carouselContainerStyle';
import Arrow from '../Arrow';
import CarouselIndicator from '../CarouselIndicator';
import CarouselSlides from '../CarouselSlides';

class CarouselContainer extends Component {
  constructor() {
    super()
    this.state = {
      activeIndex: 0,
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
  }

  goToSlide(index){
    this.setState({
      activeIndex: index
    })
  }


  previousSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let { carouselInfo } = this.props;
    let childLength = carouselInfo.length;

    if(index < 1) {
      index = childLength;
    }

    --index;

    this.setState({
      activeIndex: index
    })
  }



  nextSlide(e){
    e.preventDefault();

    let index = this.state.activeIndex;
    let { carouselInfo } = this.props;
    let childLength = carouselInfo.length - 1;

    if(index === childLength){
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }

  render(){
    const {classes, carouselInfo} = this.props
    const { activeIndex } =this.state
  return(
    <div className={classes.root}>
      <Arrow
        direction='left'
        size='50'
        onClick={e => this.previousSlide(e)}
        />
      <Grid container>
        {carouselInfo.map((info, index) =>
          <CarouselSlides
            key={index}
            index={index}
            activeIndex={activeIndex}
            info={info}
            />
        )}
      </Grid>
      <Arrow
        direction='right'
        size='50'
        onClick={e => this.nextSlide(e)}
        />
      <List className={classes.carouselIndicators}>
        {carouselInfo.map((info, index) =>
          <CarouselIndicator
            key={index}
            index={index}
            activeIndex={activeIndex}
            isActive={activeIndex === index}
            info={info}
            media={info.media}
            onClick={e => this.goToSlide(index)}
            />
        )}
      </List>
    </div>
  )
}}
CarouselContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(carouselContainerStyle)(CarouselContainer);
