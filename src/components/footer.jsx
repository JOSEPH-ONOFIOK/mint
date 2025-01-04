import React from 'react';
import './footer.css'; // Import the CSS file for the Footer

// Import images for social links
import telegramIcon from '../assets/tg.png';
import twitterIcon from '../assets/x.png';
import dexscreenerIcon from '../assets/dex.png';

// Optional: Placeholder image import (if it's a local image)
import placeholderImage from '../assets/logo2.png'; // replace with your local image path

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Outer container for the footer with a white border */}
      <div className="footer-outer-container">
        
        {/* Left Column for Subscription Section */}
        <div className="footer-left-column">
          {/* Placeholder image */}
          <img src={placeholderImage} alt="Placeholder" className="footer-placeholder-img" />
          
          <div className="footer-subscribe-text">
            Subscribe to our newsletter for the latest updates on features and product releases.
          </div>

          {/* Subscription Form */}
          <div className="footer-subscription-form">
            <div className="footer-input-container">
              <div className="footer-input-box">
                Your Email Here
              </div>
              <div className="footer-subscribe-button">
                Subscribe
              </div>
            </div>
            <div className="footer-terms-text">
              By subscribing, you consent to our Privacy Policy and agree to receive updates.
            </div>
          </div>
        </div>

        {/* Right Column for Quick Links and Connect Section */}
        <div className="footer-right-column">
          {/* Quick Links Section */}
          <div className="footer-quick-links">
            <div className="footer-title">Quick Links</div>
            <div className="footer-link">Home</div>
            <div className="footer-link">Fractional Ownership</div>
            <div className="footer-link">Services</div>
            <div className="footer-link">Contact</div>
          </div>

          {/* Connect With Us Section */}
          <div className="footer-connect-with-us">
            <div className="footer-title">Connect With Us</div>
            <div className="footer-connect-item">
              {/* Wrapping each icon in an anchor tag to make them clickable */}
              <a href="https://t.me/dunaportal" target="_blank" rel="noopener noreferrer">
                <img src={telegramIcon} alt="Telegram" />
              </a>
              <a href="https://x.com/i/communities/1874537471955927076" target="_blank" rel="noopener noreferrer">
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a href="https://www.dexscreener.com" target="_blank" rel="noopener noreferrer">
                <img src={dexscreenerIcon} alt="Dexscreener" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text Section */}
      <div className="footer-text">
        <div>© 2024 MintAI. All rights reserved.</div>
      </div>
    </div>
  );
};

export default Footer;
