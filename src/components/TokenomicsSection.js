import React from "react";
import tokenpic from "../assets/images/tokenomics.png";

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="tokenomics-section">
      <div className="content">
        <h2>Tokenomics and Allocation</h2>
        <p>
          There are 225,000,000 $KLA available on day one and will grow to a
          total of 1 billion $KLA over three years. Each allocation is released
          on its schedule over three years:
        </p>
        <div
          style={{ display: "flex", width: "100%", justifyContent: "center" }}
        >
          <img src={tokenpic} style={{ width: "100%" }} />
        </div>
        {/* <table className="tokenomics-table">
          <thead>
            <tr>
              <th>Group Name</th>
              <th>Allocation (%)</th>
              <th>Unlock at TGE (%)</th>
              <th>Lockup Duration</th>
              <th>Unlock Duration</th>
              <th>Unlock Frequency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Liquidity</td>
              <td>10</td>
              <td>100</td>
              <td>0 Months</td>
              <td>0 Months</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Public</td>
              <td>10</td>
              <td>100</td>
              <td>0 Months</td>
              <td>0 Months</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Vocational Dev’t</td>
              <td>25</td>
              <td>10</td>
              <td>0 Months</td>
              <td>36 Months</td>
              <td>Quarterly</td>
            </tr>
            <tr>
              <td>Creators/Marketing</td>
              <td>20</td>
              <td>0</td>
              <td>2 Months</td>
              <td>36 Months</td>
              <td>Monthly</td>
            </tr>
            <tr>
              <td>Team</td>
              <td>25</td>
              <td>0</td>
              <td>3 Months</td>
              <td>36 Months</td>
              <td>Daily</td>
            </tr>
            <tr>
              <td>Treasury</td>
              <td>10</td>
              <td>0</td>
              <td>12 Months</td>
              <td>36 Months</td>
              <td>Monthly</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </section>
  );
};

export default TokenomicsSection;
