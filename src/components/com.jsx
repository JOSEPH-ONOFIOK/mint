import React from 'react';
import './style.css'; // Import the CSS file

// Import images for feature icons
import legalIcon from '../assets/Relume.png'; // replace with actual path to your image
import revolutionaryIcon from '../assets/Relume.png';
import successIcon from '../assets/Relume.png';
import seamlessIcon from '../assets/Relume.png';

const DesktopComponent = () => {
  return (
    <div className="main-container">
      {/* Title Section */}
      <div className="title-section">
        Discover the seamless process of tokenizing your assets with MintAI.
      </div>

      {/* Features Section */}
      <div className="features-wrapper">
        {/* Feature 1 */}
        <div className="feature-item">
          <div className="icon-container">
            <img src={legalIcon} alt="Legal Integration Icon" className="icon-style" />
          </div>
          <div className="feature-text-container">
            <div className="feature-title-text">Legal Integration</div>
            <div className="feature-description-text">
              MintAI transforms AI agents into legally recognized entities, opening new opportunities for real-world interaction.
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="feature-item">
          <div className="icon-container">
            <img src={revolutionaryIcon} alt="Revolutionary Utility Icon" className="icon-style" />
          </div>
          <div className="feature-text-container">
            <div className="feature-title-text">Revolutionary Utility</div>
            <div className="feature-description-text">
              Combining blockchain, AI, and legal frameworks, MintAI redefines the boundaries of decentralized innovation.
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="feature-item">
          <div className="icon-container">
            <img src={successIcon} alt="Built On Success Icon" className="icon-style" />
          </div>
          <div className="feature-text-container">
            <div className="feature-title-text">Built On Success</div>
            <div className="feature-description-text">
              Drawing from DUNA’s proven expertise, MintAI builds on a legacy of decentralized excellence.
            </div>
          </div>
        </div>

        {/* Feature 4 */}
        <div className="feature-item">
          <div className="icon-container">
            <img src={seamlessIcon} alt="Seamless Process Icon" className="icon-style" />
          </div>
          <div className="feature-text-container">
            <div className="feature-title-text">Seamless Process</div>
            <div className="feature-description-text">
              MintAI simplifies asset tokenization, legal structuring, and blockchain integration into a single platform.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopComponent;
