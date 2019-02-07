// styles (css in js)
const styles = {
  // Main app styles
  app: {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
  },
  appLogo: {
    animation: 'appLogoSpin infinite 20s linear',
    height: '20vmin',
    margin: 20,
    borderRadius: 20
  },
  // Form styles
  form: {
    marginBottom: '20px'
  },
  inputText: {
    padding: 8,
    fontSize: 18
  },
  button: {
    border: 'none',
    padding: 10,
    fontSize: 18,
    color: 'white',
    backgroundColor: '#000',
    textAlign: 'center',
    cursor: 'pointer'
  },
  // CardList style
  cardGroup: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  // Card styles
  column: {
    width: '60%',
    marginBottom: 16,
    padding: '8px',
    backgroundColor: 'white',
    borderRadius: 10,
    margin: '1em'
  },
  card: { 
    margin: '1em',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
     },
  cardImg: { width: '100%' },
  cardContainer: {
    padding: '0 16px',
    color: '#000'
  },
  cardTitle: { color: 'grey' },
  cardUserName: { fontWeight: 'bold' },
  cardButton: {
    border: 'none',
    outline: 0,
    display: 'inlineBlock',
    padding: 8,
    marginBottom: 10,
    color: 'white',
    backgroundColor: '#000',
    textAlign: 'center',
    cursor: 'pointer',
    width: '100%'
  }
};

export default styles;