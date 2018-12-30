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
      carouselVideos: [],
      mainVideos: []
    }
  }

  componentDidMount(){
    Vimeo.carouselVideos().then(vids => {
      this.setState({
        carouselVideos: vids
      })
    })
    Vimeo.mainVideos().then(vids => {
        vids = vids.splice(1, vids.length)
      this.setState({
        mainVideos: vids
      })
    })
  }

  render() {
    const { classes } = this.props
    const { carouselVideos, mainVideos } = this.state
    return (
      <div className='App'>
        <Grid container>
        <CarouselContainer carouselVideos={carouselVideos} />
        {/* <Grid item xs={12}  className={classes.header}>
           <Paper md={12} lg={6} className={classes.paper}>xs</Paper>
         </Grid>
         <Grid item xs={12} className={classes.main}>
           <Paper className={classes.paper}>xs</Paper>
         </Grid>
         <Grid item xs={12}>
           <Paper className='paper'>xs</Paper>
         </Grid>*/}
         <Main mainVideos={mainVideos}/>
       </Grid>
      </div>
    );
  }
}
App.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(App);
