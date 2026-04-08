import React, { useContext } from "react";
import { StoreContext } from "../Context/StoreContext";
import { LuIndianRupee } from "react-icons/lu";
import productlist from "../assets/Assists";

const ProductList = () => {
  const { ProductList, addToCart, cartItems, removeFromCart } = useContext(StoreContext);

  return (
    <div className="product-list-container">
      {productlist.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p><LuIndianRupee /> {item.price}</p>

          {cartItems[item.id] ? (
            <div className="quantity-controls">
              <button onClick={() => removeFromCart(item.id)}>-</button>
              <span>{cartItems[item.id]}</span>
              <button onClick={() => addToCart(item.id)}>+</button>
            </div>
          ) : (
            <button onClick={() => addToCart(item.id)} className="add-btn">Add to Cart</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
