import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, TextField, Button } from '@mui/material';

import NavBar2 from './UI/Navbar/Navbar2';

const VehicleItem = ({ item, onHourChange, onBuy }) => {
  const [hours, setHours] = useState(0);

  const handleHourChange = (event) => {
    const { value } = event.target;
    setHours(value);
    onHourChange(item.menu_item_id, parseInt(value));
  };

  const handleBuy = () => {
    onBuy(item.menu_item_id, hours);
  };

  return (
    <TableRow key={item.menu_item_id}>
      <TableCell>{item.category}</TableCell>
      <TableCell>{item.model}</TableCell>
      <TableCell>{item.registrationId}</TableCell>
      <TableCell>{item.pricePerHour}</TableCell>
      <TableCell>
        <TextField
          type="number"
          value={hours}
          onChange={handleHourChange}
          inputProps={{ min: 0 }}
          style={{ width: 60 }}
        />
      </TableCell>
      <TableCell>
        <Button variant="contained" color="primary" onClick={handleBuy}>
          Buy
        </Button>
      </TableCell>
    </TableRow>
  );
};

const Menu = ({ items }) => {
  const [category, setCategory] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setCategory(value);

    if (value === '') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.category === value);
      setFilteredItems(filtered);
    }
  };

  const handleHourChange = (itemId, hours) => {
    const updatedItems = filteredItems.map((item) => {
      if (item.menu_item_id === itemId) {
        return { ...item, hours };
      }
      return item;
    });
    setFilteredItems(updatedItems);
  };

  const handleBuy = (itemId, hours) => {
    const selectedItem = filteredItems.find((item) => item.menu_item_id === itemId);
    selectedItem.totalPrice = hours * selectedItem.pricePerHour;

    const totalPrice = filteredItems.reduce((total, item) => total + (item.totalPrice || 0), 0);
    setTotalPrice(totalPrice);
  };

  return (
    <div>
      <div>
        <select value={category} onChange={handleCategoryChange}>
          <option value="">All</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          {/* Add more options for each category */}
        </select>
      </div>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Registration ID</TableCell>
              <TableCell>Price Per Hour</TableCell>
              <TableCell>No. of Hours</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredItems.map((item) => (
              <VehicleItem
                key={item.menu_item_id}
                item={item}
                onHourChange={handleHourChange}
                onBuy={handleBuy}
              />
            ))}
          </TableBody>
       
          </Table>
  </div>
  <div>
    <h3>Total Price: {totalPrice}</h3>
  </div>
</div>
);
};

const items = [
{
menu_item_id: 1,
category: 'Category 1',
model: 'Model 1',
registrationId: 'ABC123',
pricePerHour: 10,
hours: 0,
totalPrice: 0,
},
{
menu_item_id: 2,
category: 'Category 2',
model: 'Model 2',
registrationId: 'DEF456',
pricePerHour: 15,
hours: 0,
totalPrice: 0,
},
// Add more items
];

const Vehicle = () => {
const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmission = () => {
setIsSubmitted(true);
// Refresh the page or perform any other submission logic here
window.location.reload();
};

return (
<div>
<NavBar2 />
<br /><br /><br /><br />
{isSubmitted && (
<div style={{ textAlign: 'center', backgroundColor: 'lightgreen' }}>
<h2>Submitted successfully!</h2>
</div>
)}
<Menu items={items} />
<Link to="/Vehicle">
<Button variant="contained" color="primary" onClick={handleSubmission}>
Submit
</Button>
</Link>
</div>
);
};

export default Vehicle;