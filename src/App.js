import React from 'react';
import './App.css';
import Logo from './Components/Logo'
import NavBar from './Components/Navigation'
import BannerSection from './Components/Banner'
import MiddleSection from './Components/MiddleSection'
import FooterSection from './Components/Footer'

function App() {
  return (
    <div className="App">
     <Logo/>
     <NavBar/>
     <BannerSection/>
     <MiddleSection/>
     <FooterSection/>
    </div>
  );
}

export default App;
