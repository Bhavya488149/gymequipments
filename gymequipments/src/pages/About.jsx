import React from "react";

function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About FitHub Gym Equipment</h1>
        <p>Your Trusted Partner in Fitness Excellence</p>
      </div>

      {/* Company Info */}
      <div className="about-container">
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            FitHub Gym Equipment is a leading provider of premium fitness equipment and accessories. 
            With over 10 years of experience in the fitness industry, we are committed to helping people 
            achieve their health and wellness goals through quality products and exceptional service.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            To make fitness accessible and affordable for everyone by providing high-quality gym equipment 
            and expert guidance. We believe that a healthy lifestyle should be within everyone's reach, 
            and we're dedicated to supporting your fitness journey.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To become India's most trusted fitness equipment provider, known for exceptional quality, 
            customer service, and innovation. We envision a healthier India where fitness is a priority 
            for everyone.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="why-choose-us">
          <h2>Why Choose Us?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Premium Quality</h3>
              <p>All products are carefully selected and tested for durability</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Affordable Prices</h3>
              <p>Competitive pricing without compromising on quality</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping across India</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Expert Support</h3>
              <p>Professional guidance and customer support 24/7</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Warranty</h3>
              <p>Comprehensive warranty on all equipment</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">✓</div>
              <h3>Easy Returns</h3>
              <p>30-day hassle-free return policy</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat">
            <h3>50,000+</h3>
            <p>Happy Customers</p>
          </div>
          <div className="stat">
            <h3>500+</h3>
            <p>Products Available</p>
          </div>
          <div className="stat">
            <h3>10+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>100%</h3>
            <p>Satisfaction Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
