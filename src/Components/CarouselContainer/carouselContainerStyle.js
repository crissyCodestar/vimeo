export default theme => ({
  root: {
    flexGrow: 1,
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',

  },
  item: {
    width:'100vw',
    height: '80vh',
    textAlign: 'center',
    padding: '50px',
    color: theme.palette.text.secondary,
  },
  carouselIndicators: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100vw',
    position: 'absolute',
    top: '70vh'
  },

});
