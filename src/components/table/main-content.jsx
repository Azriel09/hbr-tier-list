import HBRJp from "./hbr-jp";
import HBRPresent from "./hbr-present";
import HBRSix from "./hbr-future";
import dataEN from "../../data-en.json";
import TierlistTemplate from "./dnd";
import "primereact/resources/primereact.css";
import "./main-content.css";
import HBRFuture from "./hbr-future";
export default function MainContent({ selectedTab }) {
  const renderTierList = () => {
    switch (selectedTab) {
      case "0":
        return <HBRPresent dataEN={dataEN} selected={selectedTab} />;
      case "1":
        return <HBRFuture dataEN={dataEN} selected={selectedTab} />;
      case "2":
        return <HBRJp dataEN={dataEN} />;
      default:
        return <HBRPresent dataEN={dataEN} />;
    }
  };

  return <main>{renderTierList()}</main>;
}
