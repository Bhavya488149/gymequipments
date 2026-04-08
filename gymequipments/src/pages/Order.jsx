import { useContext, useState } from "react";
import { StoreContext } from "../Context/StoreContext";

export default function Order() {
  const { cartItems, productlist } = useContext(StoreContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  // Calculate total
  const cartProducts = productlist.filter((p) => cartItems[p.id]);
  const total = cartProducts.reduce(
    (sum, item) => sum + item.price * cartItems[item.id],
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Order Confirmed 💪 Total Payment: ₹${total}`);
  };

  return (
    <section className="checkout-section">
      <h2>Delivery Information 🏋️‍♂️</h2>
      <div className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="zip"
            placeholder="Zip Code"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            onChange={handleChange}
            required
          />
          <button type="submit" className="payment-btn">
            Proceed To Payment
          </button>
        </form>

        <div className="payment-summary">
          <h3>Payment Summary</h3>
          {cartProducts.length === 0 ? (
            <p>No items in your cart</p>
          ) : (
            <>
              {cartProducts.map((item) => (
                <div key={item.id} className="payment-item">
                  <span>{item.name}</span>
                  <span>₹{item.price * cartItems[item.id]}</span>
                </div>
              ))}
              <hr />
              <h4>Total Payment: ₹{total}</h4>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
