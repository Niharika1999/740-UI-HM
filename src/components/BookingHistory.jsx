import React from 'react';
import UpdateRooms from './UpdateRooms';
import UpdateFood from './UpdateFood';
import NavBar2 from './UI/Navbar/Navbar2';

const BookingHistory = () => {
  return (
    <div>
    <NavBar2 />
    <br></br><br></br><br></br><br></br>
      <UpdateRooms />
      <br></br><br></br><br></br><br></br>
      <UpdateFood/>
    </div>
  );
};

export default BookingHistory;
