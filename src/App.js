import React, {useState, useEffect} from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import {Dropdown} from './components/Dropdown';
import {Home} from './pages';
import {About} from './pages/about';
import {Contact} from './pages/contact';
import {Menu} from './pages/menu';
import {Footer} from './components/Footer';
import {Routes, Route} from "react-router-dom";

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen((isOpen) => !isOpen) ;
  };
  
  // useEffect(()=>{
  //   const hideMenu = () => {
  //     if(window.innerWidth > 768 && isOpen) {
  //       zsetIsOpen(false)
  //       console.log('i resize')
  //     }
  //   }
    
  //   window.addEventListener('resize', hideMenu)    

  //   return() => {
  //     window.removeEventListener('reisze',hideMenu)
  //   }

  // })

  return (
    <div className="App">
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Routes basename={process.env.PUBLIC_URL}>
          <Route path="/Egg-Page" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
