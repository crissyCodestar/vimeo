
export default theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '7vh',
    maxHeight: '60vh',
    [theme.breakpoints.down('sm')]: {
          paddingTop: '0',

        },
  },
  carouselItem: {
    marginRight: 'auto',
    marginLeft: 'auto',
    display: 'none',
    maxWidth: '100vw',
    height: '80vh',

  },
  carouselItemActive: {
      width: '100vw',
      height: '80vh',
      top:'0',
      left: '0',

  },

  gridItem: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
  },
  title: {
    color: '#FAFAFA',
    height: '2rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  descriptionContainer:{
    height: '6rem',
    paddingTop: theme.spacing.unit * 2,

  },
  description: {
    color: '#FAFAFA',
    height: '4rem',
    overflow: 'hidden',
    variant:"body1"
  },
  containerImage: {
    padding: theme.spacing.unit * 2,
    width: '100vw',
    height: '50vh',
    [theme.breakpoints.down('md')]: {
        padding: '0',
      },
  },
  itemImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'relative',
    zIndex: '1',


},
  image: {
    position: 'relative'
  },
  // button: {
  //   width: '100%'
  // },
});
