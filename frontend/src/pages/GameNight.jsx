import React, { useEffect } from "react";
import "./GameNight.css";
import { useNavigate, useLocation } from "react-router-dom";

const GameNight = () => {
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
      icon: "🎲",
      title: "Board Games",
      description: "Wide selection of classic and modern board games"
    },
    {
      icon: "🎯",
      title: "Interactive Games",
      description: "Fun group activities and team challenges"
    },
    {
      icon: "🍕",
      title: "Snacks & Drinks",
      description: "Delicious food and beverage options"
    },
    {
      icon: "🎭",
      title: "Theme Setup",
      description: "Customized theme decorations and ambiance"
    }
  ];

  const packages = [
    {
      name: "Game Starter",
      price: "₹3,999",
      features: [
        "Basic game setup",
        "Snacks package",
        "2 hours duration",
        "Up to 10 players",
        "Self-service drinks"
      ],
      image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Fun Zone",
      price: "₹7,999",
      features: [
        "Premium game collection",
        "Decorated venue",
        "Professional host",
        "3 hours duration",
        "Up to 20 players",
        "Snacks & drinks package"
      ],
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      recommended: true
    },
    {
      name: "Epic Night",
      price: "₹12,999",
      features: [
        "Full game collection",
        "Theme decoration",
        "Professional host & DJ",
        "4 hours duration",
        "Up to 30 players",
        "Premium snacks & drinks",
        "Prizes & giveaways"
      ],
      image: "https://images.unsplash.com/photo-1642001087701-1f424cf3c316?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="gamenight-container">
      <div className="gamenight-hero">
        <div className="hero-content">
          <h1>Game Night Events</h1>
          <p>Let the games begin and the laughter never end</p>
        </div>
      </div>

      <div className="gamenight-features">
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

export default GameNight;
