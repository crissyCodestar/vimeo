export default theme => ({
  root: {
    left: '3vw',
    flexGrow: 1,
    position: 'absolute',
    color: 'white',
    cursor: 'pointer',
    top: '40%',
    diaplay: 'block',
    opacity: '.5',
    zIndex: '2',
    fontWeight: 'lighter',
    '&:hover': {
      color: '#019de0'
    },
    '&:focus': {
      outline: '0'
    },
  },
    right: {
    right: '3vw',
    flexGrow: 1,
    position: 'absolute',
    color: 'white',
    cursor: 'pointer',
    top: '40%',
    diaplay: 'block',
    opacity: '.5',
    fontWeight: 'lighter',
    '&:hover': {
      color: '#019de0'
    },
    '&:focus': {
      outline: '0'
    },
  }
});
