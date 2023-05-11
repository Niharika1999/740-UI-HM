import React, { useEffect, useState } from 'react';
import { Modal, Table, Button } from 'react-bootstrap';

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

  const handleQuantityChange = (itemId, quantity) => {
    updateQuantity(itemId, quantity);
    calculateTotalAmount();
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
          <Table striped bordered>
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.menu_item_id}>
                  <td>{item.item_name}</td>
                  <td>{item.price * item.quantity}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.menu_item_id, parseInt(e.target.value))}
                    />
                  </td>
                  <td>
                    <Button variant="danger" onClick={() => removeFromCart(item.menu_item_id)}>Remove</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <p className="fw-bold">Total Amount: {totalAmount}</p>
          <Button variant="primary" onClick={handleCheckout}>Checkout</Button>
          <Modal show={showModal} onHide={() => setShowModal(false)}>
            <Modal.Header>
              <Modal.Title>Order Placed</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Your order has been placed. Total amount: {totalAmount}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      )}
    </div>
  );
};

export default Cart;
