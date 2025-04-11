import React, { useEffect } from "react";
import "./About.css";
import { FaCalendarCheck, FaUsers, FaStar, FaClock } from 'react-icons/fa';

const About = () => {
  useEffect(() => {
    // Check if there's a hash in the URL
    if (window.location.hash === '#about') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }

    // Add class to body to prevent scrolling while animation is happening
    document.body.style.overflow = 'hidden';
    
    // Re-enable scrolling after animation
    const timer = setTimeout(() => {
      document.body.style.overflow = 'unset';
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  const stats = [
    { number: "500+", label: "Events Organized", icon: <FaCalendarCheck /> },
    { number: "98%", label: "Client Satisfaction", icon: <FaStar /> },
    { number: "50+", label: "Team Members", icon: <FaUsers /> },
    { number: "10+", label: "Years Experience", icon: <FaClock /> }
  ];

  const values = [
    {
      icon: "/icons/innovation.png",
      title: "Innovation",
      description: "Pushing boundaries with creative solutions and cutting-edge event concepts.",
      features: ["Unique Concepts", "Modern Technology", "Creative Design"]
    },
    {
      icon: "/icons/excellence.png",
      title: "Excellence",
      description: "Delivering premium quality in every detail of your event.",
      features: ["Quality Service", "Perfect Execution", "Attention to Detail"]
    },
    {
      icon: "/icons/dedication.png",
      title: "Dedication",
      description: "Committed team ensuring your vision becomes reality.",
      features: ["24/7 Support", "Passionate Team", "Client Focus"]
    }
  ];

  return (
    <div className="about-container" id="about">
      <div className="hero-section">
        <div className="hero-content">
          <h1>About Us</h1>
          <p>Crafting Unforgettable Moments Since 2014</p>
          <div className="hero-buttons">
            <button className="primary-btn">Our Services</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </div>

      <div className="story-section">
        <div className="story-content">
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Dream Maker Events transforms ordinary gatherings into extraordinary experiences. 
              From intimate celebrations to grand galas, we've built our reputation on 
              creativity, precision, and dedication.
            </p>
            <div className="story-features">
              <div className="feature">
                <span className="feature-dot"></span>
                <p>Expert Planning & Execution</p>
              </div>
              <div className="feature">
                <span className="feature-dot"></span>
                <p>Creative Design Solutions</p>
              </div>
              <div className="feature">
                <span className="feature-dot"></span>
                <p>Dedicated Support Team</p>
              </div>
            </div>
          </div>
          <div className="story-image">
            <img src="/images/team.jpg" alt="Our Team" />
          </div>
        </div>
      </div>

      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="values-section">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="icon-wrapper">
                <img src={value.icon} alt={value.title} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <ul className="value-features">
                {value.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mission-section">
        <div className="mission-content">
          <h2>Our Mission</h2>
          <p>
            Creating extraordinary events that exceed expectations and inspire joy. 
            We turn visions into reality with meticulous attention to detail and 
            unparalleled creativity.
          </p>
          <div className="mission-cta">
            <button className="primary-btn">Start Planning Your Event</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
