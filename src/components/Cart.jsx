import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart, updateQuantity, onCheckout }) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    calculateTotalAmount();
  }, [cartItems]);

  const calculateTotalAmount = () => {
    const amount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalAmount(amount);
  };

  const handleCheckout = () => {
    setShowModal(true);
    onCheckout();
  };

  return (
    <div>
      <h2 className="text-center mt-4 mb-3">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.menu_item_id} className="mb-3">
              <h4>{item.item_name}</h4>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="btn btn-danger" onClick={() => removeFromCart(item.menu_item_id)}>Remove</button>
              <input
                type="number"
                className="form-control"
                min="1"
                value={item.quantity}
                onChange={(e) => updateQuantity(item.menu_item_id, parseInt(e.target.value))}
              />
            </div>
          ))}
          <p className="fw-bold">Total Amount: {totalAmount}</p>
          <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header>
              <Modal.Title>Order Placed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Your order has been placed. Total amount: {totalAmount}</p>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Cart;