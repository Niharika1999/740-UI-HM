import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import FoodInfo from './FoodInfo';
import BookTable from './BookTable';
import FoodCart from './FoodCart';
import NavBar from './UI/Navbar/Navbar';
import NavBar2 from './UI/Navbar/Navbar2';
import {Overlay } from "hero-slider";
import Menu from './MenuCart';
import Background from 'hero-slider/dist/components/Slide/Background';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FoodGrid() {
  return (
    <Box sx={{ flexGrow: 1, paddingTop: '70px' }}>
  <NavBar2 />
  <Grid container spacing={3} justifyContent="center" style={{ minHeight: '100vh' }}>
    <Grid item xs="auto">
      <FoodInfo />
    </Grid>
    <Grid item xs={3}>
      <BookTable />
    </Grid>
    <Grid item xs={8}>
      <Menu />
    </Grid>
  </Grid>
</Box>


   
  );
}

