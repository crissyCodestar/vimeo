import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import mainStyles from './MainStyles';

const MainVideoCards = ({video, media, classes}) => (
  <Grid container>
    <Grid item lg={4} xs={12}>
      <Paper lg={4} xs={10} className={classes.paper}>
        <Typography className={classes.title}>{video.title}</Typography>
        <Typography className={classes.description}>{video.description}</Typography>
      </Paper>
    </Grid>
    <Grid item lg={4} xs={10}>
      <Paper lg={4} xs={10} className={classes.paper}>
        <img className={classes.img} src={media[media.length -1].link} alt=''/>
      </Paper>
    </Grid>
  </Grid>
)

export default withStyles(mainStyles)(MainVideoCards);
