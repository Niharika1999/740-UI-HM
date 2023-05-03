import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import NavBar from './components/UI/Navbar/Navbar';
import NavbarSlider from './components/NavbarSlider/NavbarSlider';
import RoomsInfo from './components/RoomsInfo';
import MyCard1 from './RoomBookCard';
import SignUp from './components/SignUp';
import RoomsGrid from './components/RoomsGrid';
import FoodGrid from './components/FoodGrid';
import CardDeck from './components/CardDeck';
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <NavbarSlider/>
        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>
        <CardDeck/>
        <br/><br/>
        <FoodGrid/>
        <div className="section-background">
        <SignUp/>
        </div>
      </div>
    </Router>
  );
}

export default App;
