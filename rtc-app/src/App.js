import './App.css';
// imports 
import Navbar from './components/Navbar'; 
import Home from './components/Home'; 
import Work from './components/Work'; 
import Portfolio from './components/Portfolio'; 
import Resume from './components/Resume'; 
import About from './components/About'; 
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Work/>
        <Portfolio/>
        <Resume/>
        <About/>
        <Contact/>


    </div>
  );
}

export default App;
