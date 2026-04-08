import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.subject &&
      formData.message
    ) {
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Get In Touch With Us</h1>
        <p>We're here to help and answer any question you might have</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>

          <div className="contact-info-card">
            <div className="info-icon">📞</div>
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
            <p className="small-text">Monday - Friday, 9AM - 6PM IST</p>
          </div>

          <div className="contact-info-card">
            <div className="info-icon">📧</div>
            <h3>Email</h3>
            <p>support@fithubequipment.com</p>
            <p className="small-text">We'll respond within 24 hours</p>
          </div>

          <div className="contact-info-card">
            <div className="info-icon">📍</div>
            <h3>Address</h3>
            <p>FitHub Gym Equipment Headquarters</p>
            <p className="small-text">123 Fitness Avenue, Mumbai, Maharashtra 400001</p>
          </div>

          <div className="contact-info-card">
            <div className="info-icon">🕐</div>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="small-text">Saturday & Sunday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send us a Message</h2>

          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="+91 XXXXX XXXXX"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="How can we help?"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message..."
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How long does delivery take?</h3>
            <p>We deliver within 5-7 business days to most locations in India.</p>
          </div>
          <div className="faq-item">
            <h3>What is your return policy?</h3>
            <p>We offer a 30-day hassle-free return policy on all products.</p>
          </div>
          <div className="faq-item">
            <h3>Do you offer warranty?</h3>
            <p>Yes, all products come with a 1-2 year warranty depending on the item.</p>
          </div>
          <div className="faq-item">
            <h3>Can I cancel my order?</h3>
            <p>Orders can be cancelled within 24 hours of placement.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
