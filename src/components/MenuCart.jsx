import React, { useState } from 'react';
import { TableSortLabel } from '@mui/material';

import Cart from './Cart';

const Menu = () => {
  const items = [
    {
      menu_item_id: 1,
      food_category: 'category1',
      item_name: 'Item 1',
      item_description: 'Description 1',
      calories: 100,
      price: 10
    },
    {
      menu_item_id: 2,
      food_category: 'category2',
      item_name: 'Item 2',
      item_description: 'Description 2',
      calories: 200,
      price: 20
    },
    // Add more items with different food categories
  ];

  const [filteredItems, setFilteredItems] = useState(items);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleCategoryChange = (selectedCategory) => {
    if (selectedCategory === '') {
      setFilteredItems(items);
    } else {
      const filtered = items.filter((item) => item.food_category === selectedCategory);
      setFilteredItems(filtered);
    }
  };

  const handleAddToCart = (itemId) => {
    const itemToAdd = items.find((item) => item.menu_item_id === itemId);
    const existingItem = cartItems.find((item) => item.menu_item_id === itemId);

    if (existingItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.menu_item_id === itemId) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...itemToAdd, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.menu_item_id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.menu_item_id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotalAmount = () => {
    const amount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(amount);
  };

  const handleCheckout = () => {
    // Implement the checkout logic here
    console.log('Checkout');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-8" style={{ paddingRight: '1rem', textAlign: 'center' }}>
          <h2 className="text-center mt-4 mb-3">Hotel Menu</h2>
          <div>
            <select className="form-select" onChange={(e) => handleCategoryChange(e.target.value)}>
              <option value="">All</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              {/* Add more options for each food category */}
            </select>
          </div>
          <div style={{ height: 400, width: '100%', overflowY: 'auto' }}>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">
                    <TableSortLabel>Item</TableSortLabel>
                  </th>
                  <th scope="col">
                    <TableSortLabel>Description</TableSortLabel>
                  </th>
                  <th scope="col">
                    <TableSortLabel>Calories</TableSortLabel>
                  </th>
                  <th scope="col">
                    <TableSortLabel>Price</TableSortLabel>
                  </th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.map((item) => (
                  <tr key={item.menu_item_id}>
                    <td>{item.item_name}</td>
                    <td>{item.item_description}</td>
                    <td>{item.calories}</td>
                    <td>{item.price}</td>
                    <td>
                      <button className="btn btn-primary" onClick={() => handleAddToCart(item.menu_item_id)}>
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {cartItems.length > 0 && ( // Show the cart only when `cartItems` is not empty
          <div className="col-md-4" style={{ padding: '1rem', textAlign: 'center' }}>
            <Cart
              cartItems={cartItems}
              removeFromCart={handleRemoveFromCart}
              updateQuantity={handleUpdateQuantity}
              totalAmount={totalAmount}
              onCheckout={handleCheckout}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
