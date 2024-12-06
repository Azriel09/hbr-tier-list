import { useState, useEffect } from "react";
import HBRJp from "./hbr-jp";
import HBRPresent from "./hbr-present";
import HBRSix from "./hbr-6months";
export default function MainContent({ selectedTab }) {
  const [activeTab, setActiveTab] = useState(selectedTab);

  useEffect(() => {
    console.log(typeof selectedTab);
  }, [selectedTab]);
  const renderTierList = () => {
    switch (selectedTab) {
      case "0":
        return <HBRPresent />;
      case "1":
        return <HBRSix />;
      case "2":
        return <HBRJp />;
      default:
        return <HBRPresent />;
    }
  };

  return <div>{renderTierList()}</div>;
}
