import React from "react";
import solanalg from "../assets/images/solana-sol-logo_1solana-sol-logo.webp";
import usdc8 from "../assets/images/usdc.webp";

const BuySection = ({ openDock }) => (
  <section id="buy" className="buy-section">
    <div className="container">
      <h2 className="buy-title">Buy $KLA with Crypto!</h2>
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
        The $KLA MEME project is a movement that transforms digital engagement
        into real-world impact—funding vocational training schools for street
        and ghetto children, equipping them with education, life skills, and
        opportunities for a better future. See Terms
        <span className="highlight-text" onClick={() => openDock("terms")}>
          Here
        </span>
        , See Privacy Policy
        <span className="highlight-text" onClick={() => openDock("privacy")}>
          Here
        </span>
      </p>
    </div>
  </section>
);

export default BuySection;
