import React from "react";
import solanalg from "../assets/images/solana-sol-logo_1solana-sol-logo.webp";
import usdc8 from "../assets/images/usdc.webp";

const BuySection = ({ openDock }) => (
  <section id="buy" className="buy-section">
    <div className="container">
      <h2 className="buy-title">Buy $RISE with Crypto!</h2>
      <div className="logos">
        <div className="logo-container">
          <img src={usdc8} alt="USDC Logo" className="logo" />
        </div>
        <div className="logo-container dark-bg">
          <img src={solanalg} alt="Solana Logo" className="logo" />
        </div>
      </div>
      <div className="buy-button-container">
        <button className="buy-button">Buy Now</button>
      </div>
      <p className="buy-description">
        The $RISE Blockchain Initiative is building Africa’s blockchain future,
        ensuring that the next wave of innovators, developers, and researchers
        have the resources, training, and mentorship they need to transform
        industries and economies. See Terms{" "}
        <span className="highlight-text" onClick={() => openDock("terms")}>
          Here
        </span>
        , See Privacy Policy{" "}
        <span className="highlight-text" onClick={() => openDock("privacy")}>
          Here
        </span>
      </p>
    </div>
  </section>
);

export default BuySection;
