import React from 'react';
import PropTypes from 'prop-types';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import arrowStyles from './arrowStyles';

 const Arrow = ({direction, onClick, size, classes}) => (
<div>
    {
      direction === 'left' ?
      <a
        href='#'
        onClick={onClick}
        className={classes.root}
      >
        <ArrowBackIos style={{fontSize: size || 40}}/>
          </a>
        :
        <a
          href='#'
          onClick={onClick}
          className={classes.right}
        >
        <ArrowForwardIos style={{fontSize: size || 40}}/>
        </a>
    }

</div>
);

Arrow.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
};

export default withStyles(arrowStyles)(Arrow);
