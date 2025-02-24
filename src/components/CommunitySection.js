import React from "react";
import compic from "../assets/images/rise2.jpg";

const CommunitySection = () => {
  return (
    <section id="community" className="community-section">
      <div className="content">
        <h2 className="title">
          Join the <span className="highlight">$RISE</span> Community
        </h2>
        <p>
          <span className="underline">Empower.</span>{" "}
          <span className="underline">Educate.</span>{" "}
          <span className="underline">Transform.</span>
        </p>
        <div className="dot-decoration"></div>
        <div>
          <p>
            $RISE is dedicated to equipping university students with blockchain
            literacy, hands-on development experience, and real-world
            opportunities. Through hackathons, fellowships, and industry
            partnerships, we turn digital education into practical blockchain
            solutions for Africa’s future.
            <br />
            <br />
            Be part of the movement. Let’s make blockchain education the
            foundation of Africa’s digital revolution.
          </p>
        </div>
      </div>
      <img src={compic} alt="Community" className="community-image" />
    </section>
  );
};

export default CommunitySection;
