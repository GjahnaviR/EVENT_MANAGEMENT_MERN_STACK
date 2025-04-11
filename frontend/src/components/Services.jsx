import React from "react";
import { Link } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "/images/services/birthday.jpg",
      title: "Birthday Planning",
      description: "Create magical moments with our custom birthday celebrations",
      path: "/birthday",
    },
    {
      id: 2,
      url: "/images/services/anniversary.jpg",
      title: "Anniversary Planning",
      description: "Celebrate your special milestones in style",
      path: "/anniversary",
    },
    {
      id: 3,
      url: "/images/services/camping.jpg",
      title: "Camping Trip Planning",
      description: "Adventure awaits with our outdoor experiences",
      path: "/camping",
    },
    {
      id: 4,
      url: "/images/services/game-night.jpg",
      title: "Game Night Planning",
      description: "Fun-filled evenings of entertainment and competition",
      path: "/game-night",
    },
    {
      id: 5,
      url: "/images/services/party.jpg",
      title: "Party Planning",
      description: "Unforgettable celebrations for any occasion",
      path: "/party",
    },
    {
      id: 6,
      url: "/images/services/wedding.jpg",
      title: "Wedding Planning",
      description: "Turn your dream wedding into reality",
      path: "/wedding",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services container">
        <div className="services-header">
          <h4>What We Offer</h4>
          <h2>OUR SERVICES</h2>
          <p>Crafting Perfect Moments for Every Occasion</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <Link to={service.path} key={service.id} className="service-card">
              <div className="service-image">
                <img src={service.url} alt={service.title} />
                <div className="service-overlay">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="learn-more">Learn More →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
