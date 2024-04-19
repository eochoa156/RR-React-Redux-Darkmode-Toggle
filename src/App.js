import './App.css';
import Nav from './components/Nav'
import ContentWrapper from './components/ContentWrapper'
import Footer from './components/Footer'
import { useSelector, useDispatch, connect } from 'react-redux';
import { setDarkTheme, setLightTheme } from './features/themeSlice';

function App() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme)
  console.log("state from redux", theme)

const handleOnClick = () => {
  if(theme.darkmode){
    dispatch(setLightTheme())
  }
  else {
    dispatch(setDarkTheme())
  }
}

  return (
    <div style={{ backgroundColor: 'white', color: 'black' }} className="App">
      <button onClick={handleOnClick}>Set Theme</button>
      <Nav />
      <ContentWrapper />
      <Footer />
    </div>
  );
}

export default App;
