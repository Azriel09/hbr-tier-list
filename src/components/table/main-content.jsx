import HBRJp from "./hbr-jp";
import HBRPresent from "./hbr-present";
import HBRSix from "./hbr-6months";
import data from "../../data.json";
export default function MainContent({ selectedTab }) {

  const renderTierList = () => {
    switch (selectedTab) {
      case "0":
        return <HBRPresent data={data}/>;
      case "1":
        return <HBRSix data={data}/>;
      case "2":
        return <HBRJp data={data}/>;
      default:
        return <HBRPresent data={data}/>;
    }
  };

  return <div>{renderTierList()}</div>;
}
