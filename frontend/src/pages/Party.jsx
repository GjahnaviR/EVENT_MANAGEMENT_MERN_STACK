import React, { useEffect } from "react";
import "./Party.css";
import { useNavigate, useLocation } from "react-router-dom";

const Party = () => {
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
      icon: "🎵",
      title: "Music & Entertainment",
      description: "Professional DJ and live music options"
    },
    {
      icon: "💡",
      title: "Lighting & Decor",
      description: "Custom theme lighting and decorations"
    },
    {
      icon: "🍹",
      title: "Food & Drinks",
      description: "Premium catering and beverage service"
    },
    {
      icon: "📸",
      title: "Photo Booth",
      description: "Fun photo booth with props and instant prints"
    }
  ];

  const packages = [
    {
      name: "Chill Party",
      price: "₹7,999",
      features: [
        "Basic music setup",
        "Standard lighting",
        "Snacks package",
        "3 hours duration",
        "Up to 30 guests"
      ],
      image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Lit Party",
      price: "₹14,999",
      features: [
        "Professional DJ",
        "Dance floor setup",
        "Premium lighting",
        "Food & drinks package",
        "4 hours duration",
        "Up to 50 guests"
      ],
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      recommended: true
    },
    {
      name: "Ultimate Party",
      price: "₹24,999",
      features: [
        "Premium DJ & Live music",
        "Luxury theme decor",
        "Professional hosts",
        "Open bar & premium dining",
        "5 hours duration",
        "Up to 100 guests",
        "Photo booth & games"
      ],
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="party-container">
      <div className="party-hero">
        <div className="hero-content">
          <h1>Party Events</h1>
          <p>Unleash the celebration with unforgettable vibes</p>
        </div>
      </div>

      <div className="party-features">
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

export default Party;
