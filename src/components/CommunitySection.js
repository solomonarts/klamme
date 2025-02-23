import React from "react";
import compic from "../assets/images/IMG_5022.JPG";

const CommunitySection = () => {
  return (
    <section id="community" className="community-section">
      <div className="content">
        <h2 className="title">
          Join the <span className="highlight">$KLA</span> Community
        </h2>
        <p>
          <span className="underline">Empower.</span>{" "}
          <span className="underline">Educate.</span>{" "}
          <span className="underline">Transform.</span>
        </p>
        <div className="dot-decoration"></div>
        <div>
          <p>
            $KLA is dedicated to uplifting street and ghetto children by
            providing vocational training, life skills, and opportunities for a
            better future. Through blockchain technology, we turn digital
            engagement into real-world impact—ensuring every child has the
            chance to rise above adversity.
          </p>
        </div>
      </div>
      <img src={compic} alt="Community" className="community-image" />
    </section>
  );
};

export default CommunitySection;
