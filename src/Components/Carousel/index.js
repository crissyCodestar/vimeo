import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Arrow from '../Arrow';
import carouselStyles from './CarouselStyles';


class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      currentPosition: 0,
    }
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.goToSlide = this.goToSlide.bind(this);
  }

  goToSlide(index){
    this.setState({
      currentPosition: index
    })
  }

  // getPosition(index){
  //   const { currentPosition } = this.state;
  //   const { children } = this.props;
  //   const numOfItems = children.length || 1;
  //
  //    if (index - currentPosition < 0 ){
  //     return numOfItems - Math.abs(index - currentPosition)
  //   }
  //     return index - currentPosition
  // }



  // previousSlide(){
  //   const { currentPosition } = this.state;
  //   const { children } = this.props;
  //   const lastIndex = children.length - 1;
  //   const shouldIndexReset = currentPosition === 0;
  //   const index = shouldIndexReset ? lastIndex : currentPosition - 1;
  //
  //   this.setState({
  //     currentPosition: index
  //   })
  //   console.log(currentPosition)
  // }

  previousSlide(e) {
    e.preventDefault();

    let index = this.state.currentPosition;
    let { children } = this.props;
    let childLength = children.length;

    if(index < 1) {
      index = childLength;
    }

    --index;

    this.setState({
      currentPosition: index
    })
  }

  // nextSlide(){
  //   const { currentPosition } = this.state;
  //   const { children } = this.props;
  //   const lastIndex = children.length - 1;
  //   const shouldIndexReset = currentPosition === lastIndex;
  //   const index = shouldIndexReset ? 0 : currentPosition + 1;
  //
  //   this.setState({
  //     currentPosition: index
  //   })
  //   console.log(currentPosition, shouldIndexReset)
  // }


  nextSlide(e){
    e.preventDefault();

    let index = this.state.currentPosition;
    let { children } = this.props;
    let childLength = children.length - 1;

    if(index === childLength){
      index = -1;
    }

    ++index;

    this.setState({
      currentPosition: index
    });
  }

  render(){
    const {title, children, classes } = this.props
    return(
      <div>
      <Grid item xs={1} lg={1}>
        <Arrow
          direction='left'
          size= '40'
          onClick={this.previousSlide}/>
      </Grid>
      <Grid item xs={1} lg={1}>
        <Arrow
          direction='right'
          size='40'
          onClick={this.nextSlide}/>
          </Grid>
        <Grid container className={classes.wrapper}>
          <Grid item className={classes.carouselContainer}>


            {children.map((child, index)=> (
              <Grid item xs={12} lg={12}
                key={index}
                index={index}
                style={{backgroundColor:'blue'}} className={classes.carouselItem}>
                { child }
              </Grid>
            ))}

          </Grid>
        </Grid>
      </div>
    )
  }
}

Carousel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default withStyles(carouselStyles)(Carousel);
