import React, { useEffect } from "react";
import "./Wedding.css";
import { useNavigate, useLocation } from "react-router-dom";

const Wedding = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  const handleBookNow = () => {
    navigate("/contact");
  };

  const features = [
    {
      icon: "💒",
      title: "Venue Decoration",
      description: "Elegant theme-based venue setup and decor"
    },
    {
      icon: "🎭",
      title: "Ceremony Setup",
      description: "Mandap, stage, and floral arrangements"
    },
    {
      icon: "🎵",
      title: "Entertainment",
      description: "Professional DJ and live music options"
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Professional photo and video coverage"
    }
  ];

  const packages = [
    {
      name: "Essential Wedding",
      price: "₹29,999",
      features: [
        "Basic venue decoration",
        "Standard mandap setup",
        "Sound system",
        "Basic catering",
        "3 hours event duration"
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Grandeur Wedding",
      price: "₹59,999",
      features: [
        "Premium venue decoration",
        "Luxury mandap setup",
        "Professional DJ",
        "Premium catering",
        "Photography & Videography",
        "5 hours event duration"
      ],
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      recommended: true
    },
    {
      name: "Royal Affair",
      price: "₹99,999",
      features: [
        "Luxury venue decoration",
        "Royal mandap setup",
        "Premium DJ & Live music",
        "Gourmet catering",
        "Professional photography & videography",
        "Bridal entry & Baraat coordination",
        "7 hours event duration"
      ],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="wedding-container">
      <div className="wedding-hero">
        <div className="hero-content">
          <h1>Wedding Celebrations</h1>
          <p>Making your fairytale wedding a beautiful reality</p>
        </div>
      </div>

      <div className="wedding-features">
        <h2>What We Offer</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="packages-section">
        <h2>Our Packages</h2>
        <div className="packages-grid">
          {packages.map((pkg, index) => (
            <div key={index} className={`package-card ${pkg.recommended ? 'recommended' : ''}`}>
              {pkg.recommended && <div className="recommended-badge">MOST POPULAR</div>}
              <div className="package-image">
                <img src={pkg.image} alt={pkg.name} />
              </div>
              <div className="package-content">
                <h3>{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <ul>
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button onClick={handleBookNow} className="book-now">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wedding;
