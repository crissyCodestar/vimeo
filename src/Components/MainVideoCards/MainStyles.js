export default theme => ({
  root: {
    flexGrow: 1,

  },
  greyArea: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    paddingTop: '10vh',


  },
  whtArea: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FAFAFA",
    height: '55vh',
    paddingTop: '5vh',
    paddingBottom: '5vh'
  },
  gridItem: {
     padding: theme.spacing.unit * 2,
  },
  greyImg: {
    width: '100%',
    height: '40vh',
    objectFit: 'cover',
  },
  whtImg: {
    width: '100%',
    height: '20vh',
    objectFit: 'cover',
  },
  whtDescription: {
    height: '6rem',
    overflow: 'hidden',
    color: 'white',
  },
  greyDescription: {
    height: '6rem',
    overflow: 'hidden',
    color: '#000',
    variant:"body1"

  },
  greyTitle: {
    color: 'white',
  },
  whtTitle:{

    color: '#000'
  },
  container: {
    backgroundImage: "linear-gradient(#373737, #373737,#FAFAFA)",

},
  direction: {
    direction:"row-reverse"
}
})
