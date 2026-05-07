import React from "react";
import { Link } from "react-router-dom";

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="page cart-page empty-cart">
        <h1>Your Cart is Empty</h1>
        <p>Add medicines to the cart and return here to complete your order.</p>
        <Link to="/products" className="button primary">
          Browse Medicines
        </Link>
      </div>
    );
  }

  return (
    <div className="page cart-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Shopping Cart</p>
          <h1>Review Your Order</h1>
          <p className="page-description">
            Update quantities or remove items before checkout.
          </p>
        </div>
      </div>

      <div className="cart-list">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h2>{item.name}</h2>
              <p className="cart-item__type">{item.type}</p>
              <p className="cart-item__price">₹{item.price} each</p>
            </div>
            <div className="cart-item__actions">
              <div className="quantity-control">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>
              <button className="button secondary small" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div>
          <p className="summary-label">Total</p>
          <p className="summary-price">₹{totalAmount}</p>
        </div>
        <button className="button primary checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Cart;
