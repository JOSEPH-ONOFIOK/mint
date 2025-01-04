import React from 'react';
import './Middle.css';  // Import the updated CSS file

// Import the image
import AssetImage from '../assets/Lovepik_com-401135174-blue-particle-aperture 1.png';  // Update the path to your actual image

const MiddleSection = () => {
  return (
    <div className="middle-container">
      <div className="middle-inner-container">
        {/* Main Content Section */}
        <div className="middle-content-section">
          <div className="middle-title-section">
            <div className="middle-main-text-wrapper">
              <div className="middle-main-title">
                Unlock the Future of Asset Ownership Today
              </div>
              <div className="middle-description">
                Fractional ownership allows you to invest in high-value assets with ease, making them accessible to everyone.
                Our smart contracts simplify trading, ensuring secure and efficient transactions.
              </div>
            </div>
          </div>

          <div className="middle-button-wrapper">
            <div className="middle-button">
              <div className="middle-button-text">
                {/* Button as a Link */}
                <a href="
https://docs.google.com/forms/d/e/1FAIpQLSeeMtegn2OuSt6UHB3itZo4a92efesDUUW_nndNdl3fFVP7SQ/viewform?usp=dialog" className="middle-button-text">
                  MINT
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <img
          className="middle-image"
          src={AssetImage}  // Use the imported image here
          alt="Asset Ownership"
        />
      </div>
    </div>
  );
};

export default MiddleSection;
