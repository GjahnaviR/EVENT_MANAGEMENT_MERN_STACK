import React, { useEffect } from "react";
import "./Birthday.css";
import { useNavigate, useLocation } from "react-router-dom";

const Birthday = () => {
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
      icon: "🎈",
      title: "Custom Decorations",
      description: "Themed decorations tailored to your style"
    },
    {
      icon: "🎂",
      title: "Gourmet Catering",
      description: "Delicious menu options for all tastes"
    },
    {
      icon: "🎮",
      title: "Entertainment",
      description: "Music, games, and activities for all ages"
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Professional photo and video coverage"
    }
  ];

  const packages = [
    {
      name: "Basic Celebration",
      price: "₹15,999",
      features: [
        "Basic decorations",
        "Standard cake (1kg)",
        "Sound system",
        "3 hours event duration",
        "Up to 30 guests"
      ],
      image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Premium Party",
      price: "₹25,999",
      features: [
        "Premium decorations",
        "Custom cake (2kg)",
        "Sound system & DJ",
        "Photo booth",
        "4 hours event duration",
        "Up to 50 guests"
      ],
      image: "https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      recommended: true
    },
    {
      name: "Ultimate Celebration",
      price: "₹45,999",
      features: [
        "Luxury decorations",
        "Custom cake (3kg)",
        "Sound system, DJ & Live music",
        "Photo booth & Photographer",
        "5 hours event duration",
        "Up to 100 guests"
      ],
      image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="birthday-container">
      <div className="birthday-hero">
        <div className="hero-content">
          <h1>Birthday Celebrations</h1>
          <p>Create Unforgettable Birthday Memories</p>
        </div>
      </div>

      <div className="birthday-features">
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

      <div className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Birthday celebration 1" />
          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Birthday celebration 2" />
          <img src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Birthday celebration 3" />
        </div>
      </div>
    </div>
  );
};

export default Birthday;
