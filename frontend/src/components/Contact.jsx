import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Just show a dummy status for now
    if (formData.name && formData.email && formData.subject && formData.message) {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h2>Get In Touch</h2>
      <p>We'd love to hear from you! Let us know how we can help make your event unforgettable.</p>

      <div className="contact-section">
        <div className="form">
          <h3>Contact Us</h3>
          {status === 'success' && <div className="alert success">Message sent successfully!</div>}
          {status === 'error' && <div className="alert error">Please fill out all fields.</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="map">
        <iframe
  title="Google Map"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60965.23019324839!2d78.55355823344366!3d17.978423545390003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb6b24edcfccf1%3A0x4aa97cb9a35b7084!2sWarangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1712840535503!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>
    </div>
  );
};

export default Contact;
