import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../Context/StoreContext";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, productlist, addToCart, removeFromCart } =
    useContext(StoreContext);

  // Get all items that are in the cart
  const cartProducts = productlist.filter((p) => cartItems[p.id]);

  // Calculate total price
  const total = cartProducts.reduce(
    (sum, item) => sum + item.price * cartItems[item.id],
    0
  );

  if (cartProducts.length === 0) {
    return (
      <section className="cart">
        <h2>Your Cart is Empty 🛒</h2>
      </section>
    );
  }

  return (
    <section className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartProducts.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <div className="qty-controls">
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <span>{cartItems[item.id]}</span>
                <button onClick={() => addToCart(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h3>Total: ₹{total}</h3>
        <button className="checkout-btn" onClick={() => navigate("/payment")}>Proceed to Payment</button>
      </div>
    </section>
  );
}
