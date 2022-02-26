import './App.css';
import {Navbar} from './components/Navbar';
import {Home} from './pages';
import {About} from './pages/about';
import {Footer} from './components/Footer';
import {Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
