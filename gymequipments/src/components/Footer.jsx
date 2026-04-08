import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Content */}
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h4>About FitHub</h4>
            <p>Your trusted partner in building the perfect home gym. Quality equipment, expert guidance, and exceptional service.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => navigate("/")}>Home</a></li>
              <li><a onClick={() => navigate("/services")}>Services</a></li>
              <li><a onClick={() => navigate("/about")}>About Us</a></li>
              <li><a onClick={() => navigate("/contact")}>Contact</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer-section">
            <h4>Customer Service</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>📞 +91 98765 43210</p>
            <p>📧 support@fithubequipment.com</p>
            <p>⏰ Mon - Fri: 9AM - 6PM IST</p>
          </div>

          {/* Social Media */}
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#" className="social-link"><Facebook size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="#" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Linkedin size={20} /></a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; 2025 FitHub Gym Equipment. All rights reserved.</p>
          <p>Made with ❤️ for fitness enthusiasts</p>
        </div>
      </div>
    </footer>
  );
}
