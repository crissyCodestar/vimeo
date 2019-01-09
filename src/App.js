import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';
import CarouselContainer from './Components/CarouselContainer';
import styles from './AppStyles';
import Vimeo from './util/Vimeo';
import Main from './Components/Main';

class App extends Component {
  constructor(){
    super();
    this.state = {
      carouselInfo: [],
      mainInfo: []
    }
  }

  componentDidMount(){
    Vimeo.carouselVideos().then(vids => {
      vids = vids.splice(1, vids.length)
      this.setState({
        carouselInfo: vids
      })

    })
    Vimeo.mainVideos().then(vids => {
        vids = vids.splice(1, vids.length)
      this.setState({
        mainInfo: vids
      })
    })
  }

  render() {
    const { classes } = this.props
    const { carouselInfo, mainInfo } = this.state
    return (
      <div className='App'>
        <Grid container>
          <CarouselContainer carouselInfo={carouselInfo} />
          <Main mainInfo={mainInfo}/>
       </Grid>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
