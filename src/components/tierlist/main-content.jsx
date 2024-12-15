import HBRJp from "./hbr-jp";
import HBRPresent from "./hbr-present";
import HBRFuture from "./hbr-future";
import dataEN from "../../data-en.json";
import "primereact/resources/primereact.css";


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
