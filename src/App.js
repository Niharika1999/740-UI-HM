import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';

import NavbarSlider from './components/NavbarSlider/NavbarSlider';

import FoodGrid from './components/FoodGrid';
import CardDeck from './components/CardDeck';
import SignUp from './components/SignUp';
import SignIn from './components/SignInForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<NavbarSlider />} />
        <Route path="/Food" element={<FoodGrid />} />
        <Route path="/Rooms" element={<CardDeck />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
