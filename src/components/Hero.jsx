import React from 'react';
import './Hero.css';

// Importing images
import logo from '../assets/logo2.png';

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Navbar */}
      <div className="hero-navbar">
        <div className="navbar-container">
          <img className="navbar-logo" src={logo} alt="Logo" />
          <div className="navbar-links">
            <div className="navbar-link-active">Home</div>
            <div>About</div>
            <div>Services</div>
            <div>Contact</div>
          </div>
        </div>
      </div>

      {/* Hero Background (Images on Left and Right) */}
      <div className="hero-background">
        <div className="background-left" />
        <div className="background-right" />
      </div>

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-title">Welcome to MintAi, Brought to you by DUNA DAO</div>
        <div className="hero-subtitle">
          MintAI is a groundbreaking platform designed to redefine how we think about asset ownership and tokenization. Developed by the creators of DUNA—a revolutionary project that achieved unparalleled success in the blockchain space—MintAI builds upon this legacy of innovation.
        </div>
        <div className="hero-cta">
          {/* Button as a Link */}
          <a href="
https://docs.google.com/forms/d/e/1FAIpQLSeeMtegn2OuSt6UHB3itZo4a92efesDUUW_nndNdl3fFVP7SQ/viewform?usp=dialog" className="hero-cta-text">
            MINT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
