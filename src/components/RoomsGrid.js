import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DynamicGrid() {
  const gridSizes = [6, 4, 2]; // Set the grid sizes here dynamically
  const totalSize = gridSizes.reduce((a, b) => a + b, 0); // Calculate the total grid size

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        {gridSizes.map((size) => (
          <Grid item xs={12} sm={Math.round((size / totalSize) * 12)} key={size}>
            <Item>{size}</Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
