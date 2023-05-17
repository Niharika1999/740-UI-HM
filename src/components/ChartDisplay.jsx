import React from 'react';
import NavBar2 from './UI/Navbar/Navbar2';

const ChartDisplay = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <NavBar2 />
      <div className="text-center mt-5">
        <h1>Analytics</h1>
        <p>This is a simple React page with a NavBar2 component.</p>
      </div>
    </div>
  );
};

export default ChartDisplay;
