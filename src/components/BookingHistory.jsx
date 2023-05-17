import React from 'react';
import { Link } from 'react-router-dom';
import UpdateRooms from './UpdateRooms';
import UpdateFood from './UpdateFood';
import NavBar2 from './UI/Navbar/Navbar2';
import { Button, Box } from '@mui/material';

const BookingHistory = () => {
  return (
    <div>
      <NavBar2 />
      <br />
      <br />
      <br />
      <br />
      <UpdateRooms />
      <br />
      <br />
      <br />
      <br />
      <UpdateFood />
      <br />
      <br />
      <div>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ gap: '10px' }}>
        <Link to="/viewprice">
          <Button variant="contained" color="primary">View Price</Button>
        </Link>
        <Link to="/chart">
          <Button variant="contained" color="primary">Chart</Button>
        </Link>
      </Box>
      </div>
    </div>
  );
};

export default BookingHistory;
