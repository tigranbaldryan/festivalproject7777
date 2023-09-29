
import React, { useState } from 'react';
import st from './style.module.css';

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [showContactForm, setShowContactForm] = useState(true);
  const [showGoogleMaps, setShowGoogleMaps] = useState(false);

  const handleToggleContactForm = () => {
    setShowContactForm(true);
    setShowGoogleMaps(false);
  };

  const handleToggleGoogleMaps = () => {
    setShowContactForm(false);
    setShowGoogleMaps(true);
  };

  const handleSendMessage = () => {
    if (fullName && email && company && message) {
      alert('The message has been sent!');
    } else {
      alert('Fill in all fields');
    }
  };

  return (
    <div className={st.myContact}>
      <div className={st.forHeader}>
        <div className={st.textAndButton}>
          <h1>Interested? Let's talk</h1>
          <div className={st.divForButtonContact}>
            <div
              className={st.contactFormButton}
              onClick={handleToggleContactForm}
              style={{ backgroundColor: showContactForm ? 'aliceblue' : 'transparent' }}
            >
              <h1>Contact Form</h1>
            </div>
            <div
              className={st.googleMapsButton}
              onClick={handleToggleGoogleMaps}
              style={{ backgroundColor: showGoogleMaps ? 'aliceblue' : 'transparent' }}
            >
              <h1>Google Maps</h1>
            </div>
          </div>
        </div>
      </div>

      <div className={st.formControl}>
        {showContactForm && (
          <div className={st.divForNameAnnEmail}>
            <input
              type='text'
              placeholder='Full Name'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type='text'
              placeholder='Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        )}
        {showContactForm && (
          <div className={st.divForCompany}>
            <input
              type='text'
              placeholder='Company'
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
        )}
        {showContactForm && (
          <div className={st.forTextArea}>
            <textarea
              placeholder='Message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
        )}
        {showContactForm && (
          <div className={st.divForMessageButton}>
            <button onClick={handleSendMessage}>Send Message</button>
          </div>
        )}
        {showGoogleMaps && (
          <div className={st.googleMapsContainer}>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy" width="700" height="340" style={{ borderRadius: '20px' }}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;

