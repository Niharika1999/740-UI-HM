import React from 'react';
import RoomsInfo from './components/RoomsInfo';
import MyCard1 from './RoomBookCard';
import { Button } from 'react-bootstrap';


function CardDeck() {
  return (
    <div className="row justify-content-center" >
  <div className="col-sm-5">
    <div className="card h-100 style={{ backgroundColor: 'black' }}">
      <div className="card-body" style={{ height: "100%", overflow: "auto" }}>
        <RoomsInfo />
      </div>
    </div>
    </div>
    <div className="col-sm-7 d-flex flex-column">
      <div className="card">
        <div className="card-body">
          <MyCard1/>
        </div>
      </div>
      <div className="card flex-grow-1">
        <div className="card-body">
          <h5 className="card-title">Availability</h5>
          <p className="card-text">List</p>
          <a href="#" className="btn btn-primary">Book</a>
        </div>
      </div>
    </div>
  </div>
  

  );
}

export default CardDeck;
