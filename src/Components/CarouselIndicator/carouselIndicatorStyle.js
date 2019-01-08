
export default theme => ({
  root: {
    flexGrow: 1,
  },

  carouselIndicator: {

    display: 'block',
    width:'10px',
    height: '5px',
    backgroundColor: 'white',
    cursor: 'pointer',
    opacity: '.15',
    mixBlendMode: 'difference',
    transition: 'opacity .15 cubic-bezier(.4, 0, 1, 1)',
    '&:hover':{
      opacity: '.5'
    }
  },
  carouselIndicatorActive: {
    display: 'block',
    width:'10px',
    height: '5px',
    backgroundColor: 'white',
    cursor: 'pointer',
    opacity: '.15',
    transition: 'opacity .15 cubic-bezier(.4, 0, 1, 1)',
    '&, &:hover':{
      opacity: '.75'
    }
  }
});
