
export default theme => ({
  root: {
    flexGrow: 1,
  },

 palette: {
    primary: '#880e4f',
    secondary: {
    main: '#880e4f',
    },
  },
  header: {
    backgroundColor:'#880e4f',
    height: '100vh',
  },
  main: {
    backgroundColor:'#282c34',
    height: '100vh',
  },
  item: {
    width:'100vw',
    height: '100vh',
    textAlign: 'center',
    padding: '50px',
    color: theme.palette.text.secondary,
  },


});
