import { Link } from "react-router-dom";
 

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">GymPro</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-btn">🛒 Cart</Link>
      </div>
    </nav>
  );
}

export default Navbar;
