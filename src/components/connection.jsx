import React from 'react';
import './connection.css'; // Import the CSS file

// Import images for icons (replace with actual paths)
import mintIcon from '../assets/Relume.png';
import legalIcon from '../assets/Relume.png';
import wrapIcon from '../assets/Relume.png';
import assetIcon from '../assets/Relume.png';

const Connection = () => {
  return (
    <div className="container">
      {/* Title and Text Section */}
      <div className="title-text-container">
        <div className="left-column">
          <div className="title">Connection Between DUNA and MintAI</div>
        </div>
        <div className="text">
          The innovative foundation of MintAI stems directly from the success of DUNA. As a project that scaled rapidly in both scope and influence, DUNA demonstrated the potential of decentralized finance powered by strong community engagement.
          <br />
          <br />
          With MintAI, this vision evolves. By combining DUNA’s decentralized ethos with a focus on legal and technological utility, MintAI represents the next step in bringing blockchain and artificial intelligence into practical, real-world applications.
        </div>
      </div>

      {/* Features Section */}
      <div className="feature-container">
        <div className="feature">
          <div className="icon-container">
            <img src={mintIcon} alt="Mint a SOL DNS" className="icon" />
          </div>
          <div className="feature-title">Mint a SOL DNS (SNS)</div>
          <div className="feature-description">Create a unique blockchain-based domain name for your AI agent.</div>
        </div>
        <div className="feature">
          <div className="icon-container">
            <img src={legalIcon} alt="Generate Legal Documents" className="icon" />
          </div>
          <div className="feature-title">Generate Legal Documents</div>
          <div className="feature-description">Automatically create the legal documentation needed to establish a token LLC.</div>
        </div>
        <div className="feature">
          <div className="icon-container">
            <img src={wrapIcon} alt="Wrap the AI Agent" className="icon" />
          </div>
          <div className="feature-title">Wrap the AI Agent</div>
          <div className="feature-description">Assign your AI agent to the token LLC, granting it legal personhood.</div>
        </div>
        <div className="feature">
          <div className="icon-container">
            <img src={assetIcon} alt="Enable Asset Ownership" className="icon" />
          </div>
          <div className="feature-title">Enable Asset Ownership</div>
          <div className="feature-description">Equip the AI agent to own real-world assets (RWAs) and execute contracts securely.</div>
        </div>
      </div>
    </div>
  );
};

export default Connection;
