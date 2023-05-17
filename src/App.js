import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Bacground from './components/Background'; // Adjust the path to the CanvasDots component

import NavbarSlider from './components/NavbarSlider/NavbarSlider';
import FoodGrid from './components/FoodGrid';
import CardDeck from './components/CardDeck';
import SignUp from './components/SignUp';
import SignIn from './components/SignInForm';
import BookingHistory from './components/BookingHistory';
import ViewPrice from './components/ViewPrice';
import ChartDisplay from './components/ChartDisplay';
const App = () => {
  return (
    <div style={{
      backgroundColor: 'EBF7F7 ', // Space gray color
      height: '100%',
      minHeight: '100vh',
    }}>
      <Bacground /> {/* Background component */}
      <Router>
        <Routes>
          <Route exact path="/" element={<NavbarSlider />} />
          <Route path="/Food" element={<FoodGrid />} />
          <Route path="/Rooms" element={<CardDeck />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/BookingHistory" element={<BookingHistory/>}/>
          <Route path="/viewprice" element={<ViewPrice />} />
          <Route path="/chart" element={<ChartDisplay />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
