import React from 'react';
import NavBar2 from './UI/Navbar/Navbar2';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <NavBar2 />
      <div className="text-center mt-5">
        <h1>Bill</h1>
        <p>This is a simple React page with a NavBar2 component.</p>
      </div>
    </div>
  );
};

export default HomePage;
