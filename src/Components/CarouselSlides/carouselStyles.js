
export default theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  },
  carouselItem: {
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'none',
    maxWidth: '100vw',
    height: '100vh',

  },

  carouselItemActive: {
      width: '100vw',
      height: '100vh',
      zIndex: '-1',
      top:'0',
      left: '0',

  },
  itemImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative'
  },
  title: {
    color: '#FAFAFA'
  },
  description: {
    color: '#FAFAFA'
  },


});
