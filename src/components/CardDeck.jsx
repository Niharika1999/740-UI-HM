import React, { useState } from 'react';
import RoomsInfo from './RoomsInfo';
import RoomBook from '../RoomBookCard';
import { Button } from 'react-bootstrap';
import NavBar from './UI/Navbar/Navbar';
import NavBar2 from './UI/Navbar/Navbar2';
import Amenities from './Aminities';

import './CardDeck.css'; // Import custom CSS file for CardDeck component

function CardDeck() {
  const [formData, setFormData] = useState({});
  const [availability, setAvailability] = useState(null);

  const handleFormSubmit = (formData) => {
    // Perform logic to fetch availability data based on form data
    // For demonstration purposes, setting a static availability value
    setAvailability('Available'); 
  };

  return (
    <div className="container-fluid card-deck-container " style={{ marginTop: "70px", minHeight: "100vh" }}>
      <NavBar2 />
      <div className="row justify-content-center">
        <div className="col-sm-5" style={{ borderRight: '1px solid gray', paddingLeft: '10px' }}>
          <div className="card h-100 mx-auto card-custom">
            <div className="card-body d-flex align-items-center">
              <RoomsInfo />
            </div>
          </div>
        </div>
        <div className="col-sm-7 d-flex flex-column " style={{ backgroundColor: 'transparent' }}>
          <div className="card mb-3 card-custom">
            <div className="card-body">
              <RoomBook onSubmit={handleFormSubmit} />
            </div>
          </div>
          <div className="card flex-grow-1 card-custom">
            <div className="card-body" style={{ backgroundColor: 'transparent' }}>
              <h5 className="card-title">Availability</h5>
              {availability ? (
                <p className="card-text">{availability}</p>
              ) : (
                <p className="card-text">No availability rooms!</p>
              )}
              <Button variant="primary">Book</Button>
            </div>
          </div>
        </div>
        <hr />e
        <Amenities/>
      </div>
    </div>
  );
}

export default CardDeck;
