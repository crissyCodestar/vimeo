import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import MainVideoCards from '../MainVideoCards';

const Main = ({mainVideos}) => (
  <div>
  {console.log('MAIN',mainVideos)}
    {mainVideos.map((video, index) =>
      <MainVideoCards
        key={index}
        video={video}
        media={video.media}
      />
    )}
  </div>
)

export default Main;
