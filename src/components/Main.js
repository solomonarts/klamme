import React from "react";
import heropic from "../assets/images/hero.JPG";

const Main = ({ openDock }) => {
  return (
    <section id="home" className="main-section">
      <div className="content">
        <h1>Every Child Holds a Universe</h1>
        <p>Join the $KLA community. Let's make history now.</p>
        <button className="cta-button">Buy $KLA</button>
        <p
          style={{
            // fontSize: "14px",
            zIndex: 9,
            color: "#ffffff",
          }}
        >
          The <span style={{ fontWeight: "900" }}>$KLA</span> MEME project is a
          groundbreaking initiative designed to harness the viral power of memes
          to support a critical cause—establishing a vocational training school
          for street and ghetto children in Uganda. This project seeks to uplift
          marginalized children through blockchain technology and digital
          engagement by providing them with hands-on skills for self-reliance
          and fostering patriotism. These memes are strictly meant for community
          support and engagement; they are not investments, do not represent
          investment contracts, and are not to be considered securities in any
          form.{" "}
          <span
            style={{
              color: "greenyellow",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
            onClick={() => openDock("terms")}
          >
            See Terms & Conditions Here
          </span>
        </p>
      </div>
      <img src={heropic} alt="Hero" className="hero-image" />
    </section>
  );
};

export default Main;
