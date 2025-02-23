import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div
          style={{
            width: "90%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h1 className="navbar-logo">$KLA</h1>
          <div className="hidden-nav">
            <button
              onClick={toggleMenu}
              style={{
                background: "transparent",
                boxShadow: "none",
                border: "none",
                color: "white",
                fontSize: "20px",
              }}
            >
              {isMenuOpen ? <MdClose /> : <FaBars />}
            </button>
          </div>
        </div>
        <ul className="navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contract">Contract</a>
          </li>
          <li>
            <a href="#tokenomics">Tokenomics</a>
          </li>
          <li>
            <a href="#community">Community</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="mobile-nav">
          <ul className="mobile-links">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contract">Contract</a>
            </li>
            <li>
              <a href="#tokenomics">Tokenomics</a>
            </li>
            <li>
              <a href="#community">Community</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
