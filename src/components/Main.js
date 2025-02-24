import React, { useMemo, useState } from "react";
import heropic from "../assets/images/rise1.jpg";
import { notification } from "antd";

const Context = React.createContext({
  name: "Default",
});

const Main = ({ openDock }) => {
  const [address] = useState("0x1234...abcd");
  const [api, contextHolder] = notification.useNotification();

  const openNotification = () => {
    api.info({
      message: "Notification",
      description: "Address Copied to clipboard",
      placement: "bottomLeft",
    });
  };

  const contextValue = useMemo(
    () => ({
      name: "Ant Design",
    }),
    []
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    openNotification();
  };
  return (
    <section id="home" className="main-section">
      <div className="content">
        <h1>Empowering the Future of Blockchain in Africa</h1>
        <p>
          Join the $RISE community. Let’s build the next generation of
          blockchain leaders!
        </p>
        <div>
          <a
            href="https://www.raydium.io"
            target="_blank"
            rel="noreferrer noreopener"
          >
            <button className="cta-button">Buy $RISE</button>
          </a>
        </div>
        <div>
          <Context.Provider value={contextValue}>
            {contextHolder}
            <div className="contract-hero">
              <h6 className="contract-title">Solana Contract Address</h6>
              <div className="address-container">
                <div className="address-box">
                  <span className="address-text">{address}</span>
                  <button className="copy-button" onClick={handleCopy}>
                    Copy Address
                  </button>
                </div>
              </div>
            </div>
          </Context.Provider>
        </div>
        <div style={{ visibility: "hidden" }}>
          <button className="cta-button">Buy $RISE</button>
        </div>
        <p>
          The <span style={{ fontWeight: "900" }}>$RISE</span> Blockchain
          Literacy Initiative is a transformative movement designed to empower
          university students with blockchain education, fostering innovation,
          research, and real-world blockchain development. Through hackathons,
          fellowships, and developer training, $RISE aims to build Africa’s next
          generation of blockchain leaders and position Uganda as a hub for
          blockchain innovation. <br />
          <br />
          These initiatives are strictly for education and community engagement;
          they do not constitute investments, do not represent investment
          contracts, and are not to be considered securities in any form.
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
