import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import mainStyles from './MainStyles';

const MainVideoCards = ({video, media, classes, key, index}) => (
  <Grid container className={classes.root}>
    <Grid item xs={12}>
      <Grid container
        className={index !== 0 ? classes.greyArea : classes.whtArea}
        direction={index % 2 ? "row" : "row-reverse"}
        >
        <Grid item xs={12} sm={11} lg={5} className={classes.gridItem}>
          <Typography variant="h5" gutterBottom={true} className={index !== 0 ? classes.greyTitle : classes.whtTitle}>{video.title}</Typography>
          <Typography variant="body1" className={index !== 0 ? classes.whtDescription : classes.greyDescription}>{video.description}</Typography>
        </Grid>

        <Grid item xs={12} sm={10} lg={5} className={classes.gridItem}>
          <img className={index !== 0 ? classes.greyImg : classes.whtImg} src={media[media.length -1].link} alt=''/>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(mainStyles)(MainVideoCards);
