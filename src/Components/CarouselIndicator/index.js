import React, { Component } from 'react';
import { ListItem} from '@material-ui/core';
import carouselIndicatorStyle from './carouselIndicatorStyle';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const CarouselIndicator = ({index, activeIndex, classes, onClick}) => (
  <div>

      <ListItem className={classes.root}>
        <a
          className={
            index === activeIndex
            ? classes.carouselIndicatorActive
            : classes.carouselIndicator
          }
          onClick={onClick}
        />
      </ListItem>

  </div>
)

CarouselIndicator.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(carouselIndicatorStyle)(CarouselIndicator);
