import React, { useMemo, useState } from "react";
import { notification } from "antd";

const Context = React.createContext({
  name: "Default",
});

function ContractSection() {
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
    <Context.Provider value={contextValue}>
      {contextHolder}
      <div id="contract" className="contract-section">
        <h6 className="contract-title">Solana Contract Address</h6>
        <div className="address-container">
          <div className="address-box">
            <span className="address-text">{address}</span>
            <button className="copy-button" onClick={handleCopy}>
              Copy Address
            </button>
          </div>
        </div>
        <div className="contract-description">
          <h4 style={{ fontSize: "1.25rem" }}>
            Crypto Community, it’s time to make an impact!
          </h4>
          <h6>
            Join the $KLA movement and help transform the streets and ghettos of
            Kampala! This is more than a meme—it’s a mission to uplift
            underprivileged children through education, skills, and opportunity
          </h6>
        </div>
      </div>
    </Context.Provider>
  );
}

export default ContractSection;
