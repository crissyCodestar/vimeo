export default theme => ({
  root: {
    left: '22px',
    flexGrow: 1,
    position: 'absolute',
    color: 'white',
    cursor: 'pointer',
    top: '50%',
    diaplay: 'block',
    opacity: '.5',
    zIndex: '2',
    fontWeight: '900',
    '&:hover': {
      color: '#019de0'
    },
    '&:focus': {
      outline: '0'
    },
  },
    right: {
    right: '22px',
    flexGrow: 1,
    position: 'absolute',
    color: 'white',
    cursor: 'pointer',
    top: '50%',
    diaplay: 'block',
    opacity: '.5',
    '&:hover': {
      color: '#019de0'
    },
    '&:focus': {
      outline: '0'
    },
  }
});
