import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button } from '@mui/material';

const UpdateFood = () => {
  const items = [
    {
      name: 'Category 1',
      email: 'category1@example.com',
      phone: '1234567890',
      date: '01-01-2023',
      time: '10:00 AM',
      no_of_guests: '2',
    },
    {
      name: 'Category 2',
      email: 'category2@example.com',
      phone: '9876543210',
      date: '12-12-2022',
      time: '02:00 PM',
      no_of_guests: '3',
    },
    // Add more items with different categories
  ];

  const [filteredItems, setFilteredItems] = useState(items);

  const handleGuestsChange = (event, index) => {
    const updatedItems = [...filteredItems];
    updatedItems[index].no_of_guests = event.target.value;
    setFilteredItems(updatedItems);
  };

  const handleUpdateGuests = (index) => {
    // Implement the logic to update the number of guests in the backend or perform any necessary actions
    console.log('Update guests:', filteredItems[index].no_of_guests);
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
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>No. of Guests</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>{item.date}</TableCell>
                <TableCell>{item.time}</TableCell>
                <TableCell>
                  <TextField
                    value={item.no_of_guests}
                    onChange={(event) => handleGuestsChange(event, index)}
                  />
                </TableCell>
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

export default UpdateFood;
