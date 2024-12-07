import "./hbr-tiers.css";
import IconRenderer from "./icons";
export default function HBRPresent({ dataEN }) {
  return (
    <div>
      <IconRenderer />
      <div className="tier-group">
        {Array.from({ length: 11 }, (_, index) => {
          const descendingKey = 10 - index;
          let selected = [];
          let rarities = [];
          let roles = [];
          let element = [];
          Object.keys(dataEN).map((key) => {
            dataEN[key].map((seraph) => {
              const tiers = seraph["tier"];
              const rarity = seraph["rarity"];
              let index = tiers.indexOf(descendingKey);
              if (index === -1) {
                return;
              } else {
                selected.push(key);
                rarities.push(rarity);
              }
            });
          });
          console.log(selected);
          return (
            <div key={descendingKey} className="tier">
              <div className="tier-rank">{descendingKey}</div>

              <div className="tier-dataEN">
                {selected.map((seraph, index) => {
                  return (
                    <div className="tier-student-container" key={index}>
                      <div className="student-name">{seraph}</div>
                      <div className="student-tier">{rarities[index]}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
