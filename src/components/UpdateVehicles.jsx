import React, { useState } from 'react';
import {
Table,
TableBody,
TableCell,
TableContainer,
TableHead,
TableRow,
Paper,
TextField,
Button,
} from '@mui/material';

const UpdateVehicles = () => {
const items = [
{
category: 'Category 1',
model: 'Model 1',
registrationId: 'ABC123',
pricePerHour: 10,
hours: 0,
totalPrice: 0,
},
{
category: 'Category 2',
model: 'Model 2',
registrationId: 'DEF456',
pricePerHour: 15,
hours: 0,
totalPrice: 0,
},
// Add more items with different categories
];

const [filteredItems, setFilteredItems] = useState(items);

const handleHoursChange = (event, index) => {
const updatedItems = [...filteredItems];
updatedItems[index].hours = event.target.value;
setFilteredItems(updatedItems);
};

const handleUpdateHours = (index) => {
// Implement the logic to update the hours and calculate the total price in the backend or perform any necessary actions
const updatedItems = [...filteredItems];
const item = updatedItems[index];
item.totalPrice = item.pricePerHour * item.hours;
setFilteredItems(updatedItems);
console.log('Update hours:', item.hours);
console.log('Total price:', item.totalPrice);
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
<TableCell>Category</TableCell>
<TableCell>Model</TableCell>
<TableCell>Registration ID</TableCell>
<TableCell>Price Per Hour</TableCell>
<TableCell>Hours</TableCell>
<TableCell>Total Price</TableCell>
<TableCell>Action</TableCell>
</TableRow>
</TableHead>
<TableBody>
{filteredItems.map((item, index) => (
<TableRow key={index}>
<TableCell>{item.category}</TableCell>
<TableCell>{item.model}</TableCell>
<TableCell>{item.registrationId}</TableCell>
<TableCell>{item.pricePerHour}</TableCell>
<TableCell>
<TextField
value={item.hours}
onChange={(event) => handleHoursChange(event, index)}
/>
</TableCell>
<TableCell>{item.totalPrice}</TableCell>
<TableCell>
<Button
variant="contained"
onClick={() => handleUpdateHours(index)}
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

export default UpdateVehicles;