import { useState } from "react";

import "./tier-tabs.css";
import MainContent from "./main-content";
export default function TierList() {
  const [selectedTab, setSelectedTab] = useState(0);
  const changeTab = (e) => {
    setSelectedTab(e.target.value);
   
  };
  return (
    <div>
      <div className="tab-list">
        <input
          className="radio-tab tab-1"
          type="radio"
          id="tab1"
          name="tab"
          value={0}
          checked={selectedTab == 0}
          onChange={changeTab}
        />
        <label htmlFor="tab1">HBR EN</label>

        <input
          className="radio-tab tab-2"
          type="radio"
          id="tab2"
          name="tab"
          value={1}
          checked={selectedTab == 1}
          onChange={changeTab}
        />
        <label htmlFor="tab2">
          <div className="tab2-label">
            <span>HBR EN</span> <span>&#40;+6 months&#41;</span>
          </div>
        </label>
        <input
          className="radio-tab tab-3"
          type="radio"
          id="tab3"
          name="tab"
          value={2}
          checked={selectedTab == 2}
          onChange={changeTab}
        />
        <label htmlFor="tab3">HBR JP</label>
      </div>
      <MainContent selectedTab={selectedTab} />
    </div>
  );
}
