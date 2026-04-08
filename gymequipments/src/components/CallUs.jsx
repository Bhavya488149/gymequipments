import { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";

export default function CallUs() {
  const { productlist, cartItems, addToCart, removeFromCart } =
    useContext(StoreContext) || {};

  if (!productlist) {
    return <p>Loading products...</p>;
  }

  return (
    <section className="callus">
      <h2>Our Gym Accessories</h2>
      <div className="photo-grid">
        {productlist.map((a) => (
          <div key={a.id} className="photo-card">
            <img src={a.image} alt={a.name} />
            <p>{a.name}</p>
            <div className="price-cart">
              <span className="product-price-text">₹{a.price}</span>
              <div className="cart-controls-wrapper">
                {cartItems[a.id] ? (
                  <div className="qty-controls">
                    <button className="qty-btn" onClick={() => removeFromCart(a.id)}>−</button>
                    <span className="qty-display">{cartItems[a.id]}</span>
                    <button className="qty-btn" onClick={() => addToCart(a.id)}>+</button>
                  </div>
                ) : (
                  <button className="add-to-cart-btn" onClick={() => addToCart(a.id)}>Add to Cart</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
