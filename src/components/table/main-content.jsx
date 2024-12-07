import HBRJp from "./hbr-jp";
import HBRPresent from "./hbr-present";
import HBRSix from "./hbr-6months";
import dataEN from "../../data-en.json";
export default function MainContent({ selectedTab }) {

  const renderTierList = () => {
    switch (selectedTab) {
      case "0":
        return <HBRPresent dataEN={dataEN}/>;
      case "1":
        return <HBRSix dataEN={dataEN}/>;
      case "2":
        return <HBRJp dataEN={dataEN}/>;
      default:
        return <HBRPresent dataEN={dataEN}/>;
    }
  };

  return <div>{renderTierList()}</div>;
}
