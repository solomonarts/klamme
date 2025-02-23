import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactSection = ({ openDock }) => {
  return (
    <footer id="contact" className="footer">
      <div className="footer-top">
        <div className="footer-watermark">
          <h1 className="watermark-logo">$KLA</h1>
        </div>
        <div className="footer-content">
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@risememeproject.com</p>
            <p>Phone: +256 123 456 789</p>
            <p>
              <span
                style={{
                  color: "purple",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={() => openDock("privacy")}
              >
                Privacy Policy{" "}
              </span>{" "}
              |{" "}
              <span
                style={{
                  color: "purple",
                  fontWeight: "bolder",
                  cursor: "pointer",
                }}
                onClick={() => openDock("terms")}
              >
                Terms and Conditions.
              </span>
            </p>
          </div>
          <div className="footer-socials">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#tw" aria-label="Twitter">
                <FaXTwitter />
              </a>
              {/* <a href="#fb" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#inst" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#tele" aria-label="Telegram">
                <FaTelegramPlane />
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 $KLA. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default ContactSection;
