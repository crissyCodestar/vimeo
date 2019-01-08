import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import MainVideoCards from '../MainVideoCards';
import mainStyles from '../MainVideoCards/MainStyles';

const Main = ({mainInfo, classes}) => (
  <div className={classes.root}>
    <Grid container className={classes.container}>
      {mainInfo.map((video, index) =>
        <MainVideoCards
          key={index}
          index={index}
          video={video}
          media={video.media}
        />
      )}
    </Grid>
  </div>
)

export default withStyles(mainStyles)(Main);
