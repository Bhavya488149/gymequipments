import React, { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

const Payment = () => {
  const { cartItems, productlist } = useContext(StoreContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Calculate total amount
  const total = productlist.reduce((sum, item) => {
    return sum + (cartItems[item.id] ? item.price * cartItems[item.id] : 0);
  }, 0);

  const handlePayment = () => {
    if (!paymentMethod) {
      alert("Please select a payment method");
      return;
    }
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="payment-container">
        <div className="success-message">
          <h2>✓ Order Placed Successfully!</h2>
          <p>Thank you for your purchase</p>
          <p>Total Amount Paid: ₹{total}</p>
          <p>Payment Method: {paymentMethod}</p>
          <button className="continue-btn" onClick={() => window.location.href = "/"}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h2>Complete Your Payment</h2>
        <div className="order-summary">
          <h3>Order Summary</h3>
          <p className="total-amount">Total Amount: <span>₹{total}</span></p>
        </div>

        <div className="payment-methods">
          <h3>Select Payment Method</h3>
          
          <label className="payment-option">
            <input 
              type="radio" 
              name="payment" 
              value="UPI"
              checked={paymentMethod === "UPI"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="method-info">
              <strong>UPI Payment</strong>
              <small>Google Pay / PhonePe / Paytm</small>
            </span>
          </label>

          <label className="payment-option">
            <input 
              type="radio" 
              name="payment" 
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="method-info">
              <strong>Credit / Debit Card</strong>
              <small>Visa, MasterCard, Rupay</small>
            </span>
          </label>

          <label className="payment-option">
            <input 
              type="radio" 
              name="payment" 
              value="NetBanking"
              checked={paymentMethod === "NetBanking"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="method-info">
              <strong>Net Banking</strong>
              <small>All major banks supported</small>
            </span>
          </label>

          <label className="payment-option">
            <input 
              type="radio" 
              name="payment" 
              value="COD"
              checked={paymentMethod === "COD"}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <span className="method-info">
              <strong>Cash on Delivery</strong>
              <small>Pay when you receive the product</small>
            </span>
          </label>
        </div>

        <button className="pay-btn" onClick={handlePayment}>
          Pay ₹{total}
        </button>
      </div>
    </div>
  );
};

export default Payment;
