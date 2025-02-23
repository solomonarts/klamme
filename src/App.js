import { useState } from "react";
import "./App.css";
import AboutSection from "./components/AboutSection";
import BuySection from "./components/BuySection";
import CommunitySection from "./components/CommunitySection";
import ContactSection from "./components/ContactSection";
import ContractSection from "./components/ContractSection";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import TokenomicsSection from "./components/TokenomicsSection";
import PrivacyPolicyDock from "./components/PrivacyPolicyDock";
import TermsDock from "./components/TermsDock";

function App() {
  const [openDock1, setOpenDoc1] = useState(false);
  const [openDock2, setOpenDoc2] = useState(false);

  const openDock = (dock) => {
    switch (dock) {
      case "privacy":
        setOpenDoc1(true);
        setOpenDoc2(false);
        break;
      case "terms":
        setOpenDoc1(false);
        setOpenDoc2(true);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div>
        <Navbar />
        <Main openDock={(dock) => openDock(dock)} />
        <AboutSection />
        <ContractSection />
        <TokenomicsSection />
        <BuySection openDock={(dock) => openDock(dock)} />
        <CommunitySection />
        <ContactSection openDock={(dock) => openDock(dock)} />
        <PrivacyPolicyDock openDock={openDock1} setOpenDock={setOpenDoc1} />
        <TermsDock openDock={openDock2} setOpenDock={setOpenDoc2} />
      </div>
    </div>
  );
}

export default App;
