import React, { useEffect } from "react";
import "./Camping.css";
import { useNavigate, useLocation } from "react-router-dom";

const Camping = () => {
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
      icon: "🏕️",
      title: "Premium Camping",
      description: "High-quality tents and camping gear"
    },
    {
      icon: "🌲",
      title: "Nature Experience",
      description: "Beautiful locations in pristine wilderness"
    },
    {
      icon: "🔥",
      title: "Campfire Activities",
      description: "Guided outdoor activities and entertainment"
    },
    {
      icon: "🍖",
      title: "BBQ & Meals",
      description: "Delicious outdoor cooking experiences"
    }
  ];

  const packages = [
    {
      name: "Basic Adventure",
      price: "₹12,999",
      features: [
        "Standard camping equipment",
        "2-day camping experience",
        "Basic meals included",
        "Group activities",
        "Campfire experience"
      ],
      image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Premium Wilderness",
      price: "₹19,999",
      features: [
        "Premium camping gear",
        "3-day luxury camping",
        "Gourmet outdoor meals",
        "Private camping spot",
        "Guided nature walks",
        "Adventure activities"
      ],
      image: "https://images.unsplash.com/photo-1517823382935-51bfcb0ec6bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      recommended: true
    },
    {
      name: "Ultimate Explorer",
      price: "₹29,999",
      features: [
        "Luxury glamping tent",
        "5-day wilderness experience",
        "Personal chef for meals",
        "Private guide",
        "Custom activities",
        "Photography session"
      ],
      image: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="camping-container">
      <div className="camping-hero">
        <div className="hero-content">
          <h1>Camping Adventures</h1>
          <p>Experience Nature's Beauty</p>
        </div>
      </div>

      <div className="camping-features">
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

export default Camping; 