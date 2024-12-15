import { Outlet, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navigation.css";

export default function Navigation() {
  const [serverTime, setServerTime] = useState("");
  const [serverDate, setServerDate] = useState("");
  const serverFormat = { timeZone: "America/Dawson" };
  useEffect(() => {
    setInterval(() => {
      let odDate = new Date().toLocaleTimeString("en-US", serverFormat);
   

      let dd = new Date().toLocaleDateString("en-US", {
        month: "short", // Abbreviated month (e.g., "Dec")
        day: "numeric", // Day of the month (e.g., 15)
        year: "numeric", // Full year (e.g., 2024)
      });

      setServerTime(odDate);
      setServerDate(dd);
    }, 1000);
  }, []);
  return (
    <div>
      <div>
        <div className="top-bar">
          <div className="title-container">
            <h1 className="header-text">
              Heaven Burns <span className="header-highlight">Red</span>
            </h1>

            <h3 className="local-time">
              Server Time: {serverTime} - {serverDate}
            </h3>
          </div>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
