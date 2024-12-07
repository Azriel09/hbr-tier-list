import { useState, useEffect } from "react";
import "./hbr-tiers.css";
export default function HBRPresent({ data }) {
  const [seraphims, setSeraphims] = useState();
  useEffect(() => {
    {
      Object.keys(data).map((key) => {
        console.log(data[key]);
      });
    }
  }, []);
  return (
    <div>
      <div className="tier-group">
        {Array.from({ length: 10 }, (_, index) => {
          const descendingKey = 10 - index;
          return (
            <div key={descendingKey} className="tier">
              <div className="tier-rank">{descendingKey}</div>
              <div className="tier-data"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
