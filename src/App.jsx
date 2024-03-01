import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './Components/NavBar';
import TopPart from './Components/TopPart';
import Footer from './Components/Footer';
import BottomPart from './Components/BottomPart';

const App = () => {
  return (
    <Router>
      <>
        <NavBar/> 
        <TopPart/> 
        <BottomPart/>
        <Footer/>
      </>
    </Router>
  );
};

export default App;
