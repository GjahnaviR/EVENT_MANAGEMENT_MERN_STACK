import React, { useEffect } from "react";
import "./Anniversary.css";
import { useNavigate, useLocation } from "react-router-dom";

const Anniversary = () => {
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
      icon: "💑",
      title: "Romantic Setup",
      description: "Create the perfect ambiance for your special day"
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      description: "Exquisite menu with premium dining experience"
    },
    {
      icon: "🎵",
      title: "Live Music",
      description: "Romantic melodies to enhance your celebration"
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Capture your precious moments professionally"
    }
  ];

  const packages = [
    {
      name: "Silver Romance",
      price: "₹24,999",
      features: [
        "Elegant venue decoration",
        "3-course dinner for two",
        "Bottle of wine",
        "2 hours of live music",
        "Professional photoshoot"
      ],
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Golden Memories",
      price: "₹45,999",
      features: [
        "Luxury venue decoration",
        "5-course gourmet dinner",
        "Premium champagne",
        "3 hours of live music",
        "Photo & video coverage",
        "Surprise gift arrangement"
      ],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      recommended: true
    },
    {
      name: "Platinum Celebration",
      price: "₹75,999",
      features: [
        "Premium venue with exclusive access",
        "7-course fine dining experience",
        "Top-shelf beverages",
        "Full evening entertainment",
        "Complete photo & video package",
        "Luxury car service"
      ],
      image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="anniversary-container">
      <div className="anniversary-hero">
        <div className="hero-content">
          <h1>Anniversary Celebrations</h1>
          <p>Celebrate Your Love Story</p>
        </div>
      </div>

      <div className="anniversary-features">
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
          <img src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Anniversary celebration 1" />
          <img src="https://images.unsplash.com/photo-1523438885200-e635ba2c371e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Anniversary celebration 2" />
          <img src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Anniversary celebration 3" />
        </div>
      </div>
    </div>
  );
};

export default Anniversary;
