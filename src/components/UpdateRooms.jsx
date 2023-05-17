import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';

const UpdateRooms = () => {
  const items = [
    {
      room: 'category1',
      date: '01-01-2023',
      No_of_Guests: 'Description 1',
      no_of_nights: 'Description 1',
      Meal_Plan: 'yes',
    },
    {
      room: 'category2',
      date: '12-12-2022',
      No_of_Guests: 'Description 2',
      no_of_nights: 'Description 1',
      Meal_Plan: 'yes',
    },
    // Add more items with different categories
  ];

  const [filteredItems, setFilteredItems] = useState(items);

  const handleGuestsChange = (event, index) => {
    const updatedItems = [...filteredItems];
    updatedItems[index].No_of_Guests = event.target.value;
    setFilteredItems(updatedItems);
  };

  const handleUpdateGuests = (index) => {
    // Implement the logic to update the number of guests in the backend or perform any necessary actions
    console.log('Update guests:', filteredItems[index].No_of_Guests);
  };

  const handleRemoveRow = (index) => {
    const updatedItems = [...filteredItems];
    updatedItems.splice(index, 1);
    setFilteredItems(updatedItems);
  };

  return (
    <div className="container">
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Room</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>No. of Guests</TableCell>
              <TableCell>No. of Nights</TableCell>
              <TableCell>Meal Plan</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.room}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>
                  <TextField
                    value={item.No_of_Guests}
                    onChange={(event) => handleGuestsChange(event, index)}
                  />
                </TableCell>
                <TableCell>{item.no_of_nights}</TableCell>
                <TableCell>{item.Meal_Plan}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleUpdateGuests(index)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemoveRow(index)}
                  >
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UpdateRooms;
