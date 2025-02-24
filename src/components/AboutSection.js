import React from "react";
import aboutpic from "../assets/images/rise3.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="content">
        <div className="about-columns">
          <div className="text-column">
            <h2>
              About <span className="highlight">$RISE</span>
            </h2>
            <p style={{ fontWeight: 900 }}>
              From <span className="underline"> university classrooms</span> to
              the forefront of blockchain innovation.
            </p>

            <p>
              The{" "}
              <span className="underline">$RISE Blockchain Initiative </span> is
              dedicated to creating a blockchain-literate society, equipping
              university students with the skills and knowledge to build
              decentralized solutions for Africa’s future.
              <br /> <br />
              Rooted in the mission to bridge the blockchain education gap,
              $RISE goes beyond being just a token—it’s a movement for those who
              believe in the power of blockchain to drive economic and
              technological transformation.
              <br /> <br />
              Today, $RISE fuels a movement that advocates for blockchain
              literacy, developer training, and research initiatives, providing
              students with the tools to build a decentralized future.
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
            Join the movement. Support the mission. Let’s educate, innovate, and
            transform Africa through blockchain.
          </h4>
        </div>
        <div className="dot-background"></div>
      </div>
    </section>
  );
};

export default AboutSection;
