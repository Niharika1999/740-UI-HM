import React, { useState } from 'react';

function FoodCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
    { id: 4, name: 'Item 1', price: 10 },
    { id: 5, name: 'Item 2', price: 20 },
    { id: 6, name: 'Item 3', price: 30 },
    { id: 7, name: 'Item 1', price: 10 },
    { id: 8, name: 'Item 2', price: 20 },
    { id: 9, name: 'Item 3', price: 30 },
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);
  const [showItems, setShowItems] = useState(true);

  const addItemToCart = (item) => {
    setCart([...cart, item]);
    setTotal(total + item.price);
    setShowCart(true);
  };

  const removeItemFromCart = (item) => {
    const newCart = cart.filter((cartItem) => cartItem.id !== item.id);
    setCart(newCart);
    setTotal(total - item.price);
    if (newCart.length === 0) {
      setShowCart(false);
    }
  };

  const handleSubmit = () => {
    alert('Order submitted successfully!');
    setCart([]);
    setTotal(0);
    setShowCart(false);
  };

  return (
    <div className="container">
<div className="row">
  <div className="col-md-12">
    <label htmlFor="name">Menu</label>
    {showItems && (
      <div className="scrollable-list" style={{ height: '200px', overflowY: 'scroll' }}>
        <ul className="list-group mb-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.name} - ${item.price}{' '}
              <button className="btn btn-primary" onClick={() => addItemToCart(item)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>
    )}
    <button className="btn btn-primary mb-3" onClick={() => setShowCart(true)}>
      Show Cart
    </button>
  </div>
</div>

      <div className="row">
        <div className="col-md-12">
              {showCart && (
      <div className="card mb-4" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
        <div className="card-header">Cart</div>
        <ul className="list-group list-group-flush">
          {cart.map((item) => (
            <li
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              {item.name} - ${item.price}
              <button className="btn btn-danger" onClick={() => removeItemFromCart(item)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
        <div className="card-footer">
          <p className="h4 mb-0">Total: ${total}</p>
        </div>
        <div className="card-body d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={() => setShowCart(false)}>
            Close
          </button>
          <button className="btn btn-success" onClick={handleSubmit}>
            Submit Order
          </button>
        </div>
      </div>
    )}

        </div>
      </div>
    </div>
  );
}

export default FoodCart;
