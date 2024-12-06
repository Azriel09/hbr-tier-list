import { useState } from "react";

import "./tier-list.css";
export default function TierList() {
  const [selectedTab, setSelectedTab] = useState(0);
  const changeTab = (e) => {
    setSelectedTab(e.target.value);
    console.log(e.target.value);
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
      </div>
    </div>
  );
}
