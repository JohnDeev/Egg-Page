import React, {useState, useEffect} from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import {Dropdown} from './components/Dropdown';
import {Home} from './pages';
import {About} from './pages/about';
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
  //       setIsOpen(false)
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
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
