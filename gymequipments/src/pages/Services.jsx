import React from "react";
import { Dumbbell, HeartPulse, Truck, Users, RotateCcw, Gift } from "lucide-react";
import CallUs from "../components/CallUs";

function Services() {
  const services = [
    {
      id: 1,
      icon: <Dumbbell size={40} />,
      title: "Premium Equipment",
      description:
        "Wide range of high-quality fitness equipment for home and commercial gyms. From dumbbells to treadmills, we have everything you need.",
    },
    {
      id: 2,
      icon: <HeartPulse size={40} />,
      title: "Fitness Consultation",
      description:
        "Expert guidance from our fitness professionals to help you choose the right equipment based on your fitness goals and space.",
    },
    {
      id: 3,
      icon: <Truck size={40} />,
      title: "Fast Shipping",
      description:
        "Quick and reliable delivery across India. Most orders delivered within 5-7 business days with free shipping on select items.",
    },
    {
      id: 4,
      icon: <Users size={40} />,
      title: "Expert Support",
      description:
        "24/7 customer support team ready to assist with any queries, product information, or technical support.",
    },
    {
      id: 5,
      icon: <RotateCcw size={40} />,
      title: "Easy Returns",
      description:
        "30-day hassle-free return policy. If you're not satisfied, simply return the product for a full refund.",
    },
    {
      id: 6,
      icon: <Gift size={40} />,
      title: "Special Offers",
      description:
        "Exclusive deals, seasonal discounts, and loyalty rewards for our valued customers. Subscribe to our newsletter for updates.",
    },
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <h1>Our Services</h1>
        <p>Comprehensive Solutions for Your Fitness Needs</p>
      </div>

      {/* Products Section */}
      <CallUs />

      {/* Services Grid */}
      <div className="services-container">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Services */}
      <div className="additional-services">
        <h2>Additional Services</h2>
        <div className="additional-grid">
          <div className="additional-card">
            <h3>📋 Equipment Assembly</h3>
            <p>Professional assembly and installation service available at nominal charge for selected items.</p>
          </div>
          <div className="additional-card">
            <h3>🔧 Maintenance & Support</h3>
            <p>Ongoing support and maintenance guidance to keep your equipment in top condition.</p>
          </div>
          <div className="additional-card">
            <h3>💳 Flexible Payment</h3>
            <p>Multiple payment options including EMI facilities for easy and convenient purchases.</p>
          </div>
          <div className="additional-card">
            <h3>🎁 Warranty Coverage</h3>
            <p>Comprehensive warranty packages to protect your investment for 1-2 years.</p>
          </div>
          <div className="additional-card">
            <h3>📱 Mobile App</h3>
            <p>Download our app for exclusive deals, easy browsing, and faster checkout experience.</p>
          </div>
          <div className="additional-card">
            <h3>👥 Community</h3>
            <p>Join our fitness community for tips, workout plans, and interactions with other fitness enthusiasts.</p>
          </div>
        </div>
      </div>

      {/* Warranty & Support Info */}
      <div className="warranty-info">
        <div className="warranty-card">
          <h3>Our Promise</h3>
          <p>
            We stand behind every product we sell. Our mission is to provide you with the best fitness 
            equipment and the best customer service. If you have any concerns, we're here to make it right.
          </p>
        </div>
        <div className="warranty-card">
          <h3>Warranty Coverage</h3>
          <ul>
            <li>Manufacturing defects: 1-2 year coverage</li>
            <li>Mechanical parts: Extended warranty available</li>
            <li>Labor charges: Covered under warranty</li>
            <li>Home service: Available in metro cities</li>
          </ul>
        </div>
        <div className="warranty-card">
          <h3>Quality Assurance</h3>
          <p>
            Every product is tested before shipment to ensure quality and durability. 
            We only stock equipment from trusted manufacturers and brands.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-section">
        <h2>Ready to Start Your Fitness Journey?</h2>
        <p>Browse our extensive collection of gym equipment or contact our experts for personalized recommendations.</p>
        <button className="cta-button">Explore Products</button>
      </div>
    </div>
  );
}

export default Services;
