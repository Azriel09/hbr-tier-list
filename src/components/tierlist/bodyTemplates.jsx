import "./body-templates.css";
import IconRenderer from "./icons";

function BodyTemplates() {
  const mainTemplate = (rowData, role) => {
    let tier_arr = rowData["tier_data"];
    return (
      <div className="cell-wrapper">
        {tier_arr.map((t) => {
          if (t[role] && t[role].length >= 1) {
            return t[role].map((s, i) => {
              let previous_tier;
              if (
                s["present_tier"] === undefined ||
                s["present_tier"].length == 0
              ) {
                previous_tier = "new";
              } else {
                previous_tier = s["future_tier"][i] - s["present_tier"][i];
              }
              let yingxia = false;
              let yingxia_10 = false;

              if (s["name"] == "Yingxia" && s["rarity"] == "S1") {
                yingxia = true;
                if (s["condition"] == "w/ SS1") {
                  yingxia_10 = true;
                }
              }

              return (
                <div className="student-wrapper" key={i}>
                  <IconRenderer
                    student={s["name"]}
                    rarity={s["rarity"]}
                    section={s["section"]}
                    element={s["element"]}
                  />
                  <span className="student-name">{s["name"]}</span>
                  <span className="student-rarity">{s["rarity"]}</span>
                  {yingxia ? (
                    yingxia_10 ? (
                      <span className="student-condition">w/ SS1</span>
                    ) : (
                      <span className="student-condition">w/o SS1</span>
                    )
                  ) : null}
                </div>
              );
            });
          } else {
            return;
          }
        })}
      </div>
    );
  };
  const tierBodyTemplate = (rowData) => {
    return (
      <div className="tier-text-wrapper">
        <span className="tier-text">{rowData["tier"]}</span>
      </div>
    );
  };
  const bufferTemplate = (rowData) => {
    return mainTemplate(rowData, "buffer");
  };
  const genericBufferTemplate = (rowData) => {
    return mainTemplate(rowData, "generic-buffer");
  };

  const elementalBufferTemplate = (rowData) => {
    return mainTemplate(rowData, "elemental-buffer");
  };

  const defenderTemplate = (rowData) => {
    return mainTemplate(rowData, "defender");
  };
  const healerTemplate = (rowData) => {
    return mainTemplate(rowData, "healer");
  };
  const debufferTemplate = (rowData) => {
    return mainTemplate(rowData, "debuffer");
  };
  const utilityTemplate = (rowData) => {
    return mainTemplate(rowData, "utility");
  };
  const singleDpsTemplate = (rowData) => {
    return mainTemplate(rowData, "single-dps");
  };

  const aoeDpsTemplate = (rowData) => {
    return mainTemplate(rowData, "aoe-dps");
  };
  const sBufferTemplate = (rowData) => {
    return mainTemplate(rowData, "s-buffer");
  };
  const sDebufferTemplate = (rowData) => {
    return mainTemplate(rowData, "s-debuffer");
  };
  const sHealerTemplate = (rowData) => {
    return mainTemplate(rowData, "s-healer");
  };
  return {
    tierBodyTemplate,
    bufferTemplate,
    genericBufferTemplate,
    elementalBufferTemplate,
    defenderTemplate,
    healerTemplate,
    debufferTemplate,
    utilityTemplate,
    singleDpsTemplate,
    aoeDpsTemplate,
    sBufferTemplate,
    sDebufferTemplate,
    sHealerTemplate,
  };
}

export default BodyTemplates;
