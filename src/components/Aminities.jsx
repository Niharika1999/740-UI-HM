import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import WifiIcon from '@mui/icons-material/Wifi';
import PoolIcon from '@mui/icons-material/Pool';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import PetsIcon from '@mui/icons-material/Pets';
import RoomServiceIcon from '@mui/icons-material/RoomService';

import './Amenities.css';

export default function Amenities() {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom sx={{ color: '#333', fontWeight: 'bold', marginBottom: '16px', textAlign: 'center' }}>
        Amenities
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <div className="amenity-container">
            <WifiIcon className="amenity-icon" />
            <Typography className="amenity-text">Free Wi-Fi</Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="amenity-container">
            <PoolIcon className="amenity-icon" />
            <Typography className="amenity-text">Pool</Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="amenity-container">
            <SpaIcon className="amenity-icon" />
            <Typography className="amenity-text">Spa</Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="amenity-container">
            <FitnessCenterIcon className="amenity-icon" />
            <Typography className="amenity-text">Fitness center</Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="amenity-container">
            <RestaurantIcon className="amenity-icon" />
            <Typography className="amenity-text">Restaurant</Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="amenity-container">
            <LocalBarIcon className="amenity-icon" />
            <Typography className="amenity-text">Bar</Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="amenity-container">
            <PetsIcon className="amenity-icon" />
            <Typography className="amenity-text">Pet-friendly</Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div className="amenity-container">
            <RoomServiceIcon className="amenity-icon" />
            <Typography className="amenity-text">Room service</Typography>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
