import React from "react";
import aboutpic from "../assets/images/about.JPG";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="content">
        <div className="about-columns">
          <div className="text-column">
            <h2>
              About <span className="highlight">$KLA</span>
            </h2>
            <p style={{ fontWeight: 900 }}>
              From the <span className="underline">streets of Kampala</span> to
              a movement of empowerment and transformation.
            </p>

            <p>
              From the{" "}
              <span className="underline"> struggles of street life </span> to a
              future of opportunity, $KLA represents resilience,
              self-development, and hope. It is a symbol of every child’s
              potential to overcome adversity through education, skills, and
              patriotism. Rooted in the mission to uplift street and ghetto
              children, $KLA is more than a meme—it’s a call to action for those
              who believe in the power of change. <br /> <br /> Today, $KLA
              fuels a movement that advocates for funding education and skill
              development, equipping street and ghetto children with the tools
              to build a better future. It embodies the belief that no challenge
              is too great to overcome with the right opportunities.
            </p>
          </div>
          <div className="image-column">
            <img src={aboutpic} alt="About" className="about-image" />
          </div>
        </div>
        <div>
          <h4
            style={{
              background: "#25183d",
              color: "#ffffff",
              textAlign: "center",
              padding: "10px 20px",
            }}
          >
            Join the movement. Support the mission. Let’s build a future where
            every child can RISE.
          </h4>
        </div>
        <div className="dot-background"></div>
      </div>
    </section>
  );
};

export default AboutSection;
