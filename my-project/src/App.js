import {BrowserRouter as Router, Routes as Switch, Route as Path} from 'react-router-dom'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Path exact path="/" element={ <Home/>}/>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
