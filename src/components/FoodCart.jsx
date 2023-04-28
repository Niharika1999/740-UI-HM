import React, { useState } from 'react';

function FoodCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCart, setShowCart] = useState(false);

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
        <div className="col-md-8">
          <ul className="list-group mb-4">
            {items.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                {item.name} - ${item.price}{' '}
                <button className="btn btn-primary" onClick={() => addItemToCart(item)}>Add to Cart</button>
              </li>
            ))}
          </ul>
        </div>
        </div>
        <div className="col-md-4">
          {showCart && (
            <div className="card mb-4">
              <div className="card-header">Cart</div>
              <ul className="list-group list-group-flush">
                {cart.map((item) => (
                  <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                    {item.name} - ${item.price}
                    <button className="btn btn-danger" onClick={() => removeItemFromCart(item)}>Remove</button>
                  </li>
                ))}
              </ul>
              <div className="card-footer">
                <p className="h4 mb-0">Total: ${total}</p>
              </div>
              <div className="col-md-8"></div>
          <div className="col-md-4">
            <button className="btn btn-success" onClick={handleSubmit}>Submit Order</button>
          </div>
        </div>
            
          )}
      </div>
    </div>
  );
}

export default FoodCart;
