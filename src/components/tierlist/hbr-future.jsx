import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import BodyTemplates from "./bodyTemplates";

const roles = [
  "generic-buffer",
  "elemental-buffer",
  "defender",
  "healer",
  "debuffer",
  "utility",
  "single-dps",
  "aoe-dps",
  "s-buffer",
  "s-debuffer",
  "s-healer",
];
const {
  tierBodyTemplate,
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
} = BodyTemplates();

export default function HBRFuture({ dataEN, selected }) {
  const [tierData, setTierData] = useState();

  useEffect(() => {
    let data = [];

    if (dataEN) {
      Array.from({ length: 11 }, (_, index) => {
        const descendingTier = 10 - index;

        let tier_roles = [];
        roles.map((role) => {
          tier_roles.push({ [role]: [] });
        });
        data.push({ ["tier"]: descendingTier, ["tier_data"]: tier_roles });
      });
      Object.keys(dataEN).map((studentName) => {
        const studentInfo = dataEN[studentName];
        studentInfo.map((student) => {
          let name = studentName;
          let rarity = student["rarity"];
          let element = student["element"];
          let section = student["section"];
          let release = student["release-date"];

          if (student["future_role"]) {
            if (student["future_role"].length >= 2) {
              student["future_role"].map((j, index) => {
                let tier = student["future_tier"][index];
                let role = j;

                data.map((t) => {
                  if (tier == t["tier"]) {
                    t["tier_data"].map((t) => {
                      if (t[role]) {
                        let obj_data = {
                          name: name,
                          rarity: rarity,
                          element: element,
                          section: section,
                          release: release,
                          present_tier: student["present_tier"],
                          future_tier: student["future_tier"],
                        };
                        if (name == "Yingxia" && rarity == "S1") {
                          console.log(student["condition"]);
                          obj_data = {
                            ...obj_data,
                            condition: student["condition"],
                          };
                        }
                        t[role].push(obj_data);
                      }
                    });
                  } else {
                    return;
                  }
                });
              });
            } else {
              let tier = student["future_tier"][0];

              let role = student["future_role"][0];
              data.map((t) => {
                if (tier == t["tier"]) {
                  t["tier_data"].map((t) => {
                    if (t[role]) {
                      let obj_data = {
                        name: name,
                        rarity: rarity,
                        element: element,
                        section: section,
                        release: release,
                        present_tier: student["present_tier"],
                        future_tier: student["future_tier"],
                      };
                      if (name == "Yingxia" && rarity == "S1") {
                        obj_data = {
                          ...obj_data,
                          condition: student["condition"],
                        };
                      }
                      t[role].push(obj_data);
                    } else {
                      return;
                    }
                  });
                } else {
                  return;
                }
              });
            }
          } else return;
        });
      });
      setTierData(data);
    }
  }, [dataEN]);

  // How the data would look like after the useEffect
  // I could just format the json file this way but that would be boring
  let tierDataFormatExample = [
    {
      tier: 10,
      tier_data: [
        {
          buffer: [
            {
              name: "",
              rarity: "",
              element: "",
              section: "",
              release: "",
            },
            {
              name: "",
              rarity: "",
              element: "",
              section: "",
              release: "",
            },
          ],
          healer: [
            {
              name: "",
              rarity: "",
              element: "",
              section: "",
              release: "",
            },
            {
              name: "",
              rarity: "",
              element: "",
              section: "",
              release: "",
            },
          ],
        },
      ],
    },
    {
      tier: 9,
      tier_data: [
        {
          buffer: [
            {
              name: "",
              rarity: "",
              element: "",
              section: "",
              release: "",
            },
            {
              name: "",
              rarity: "",
              element: "",
              section: "",
              release: "",
            },
          ],
          healer: [
            {
              name: "",
              rarity: "",
              element: "",
              section: "",
              release: "",
            },
            {
              name: "",
              rarity: "",
              element: "",
              section: "",
              release: "",
            },
          ],
        },
      ],
    },
  ];

  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="Tier" rowSpan={2} align={"center"} />
        <Column header="Buffer" colSpan={2} align={"center"} />

        <Column header="Defender" rowSpan={2} align={"center"} />
        <Column header="Healer" rowSpan={2} align={"center"} />
        <Column header="Debuffer" rowSpan={2} align={"center"} />
        <Column header="Utility" rowSpan={2} align={"center"} />
        <Column header="Main Damage" colSpan={2} align={"center"} />
        <Column header="Notable S" colSpan={3} align={"center"} />
      </Row>
      <Row>
        <Column header="Generic" align={"center"} />
        <Column header="Elemental" align={"center"} />
        <Column header="Single Target" align={"center"} />
        <Column header="AoE" align={"center"} />
        <Column header="Buffer" align={"center"} />
        <Column header="Debuffer" align={"center"} />
        <Column header="Healer" align={"center"} />
      </Row>
    </ColumnGroup>
  );

  return (
    <div className="table-container">
      <DataTable
        value={tierData}
        headerColumnGroup={headerGroup}
        tableStyle={{ minWidth: "50rem" }}
        globalFilterFields={["name"]}
        rowGroupMode="rowspan"
        groupRowsBy="tier"
        sortField="tier"
        showGridlines
        scrollable
        scrollHeight="70vh"
        sortOrder={-1}
      >
        <Column frozen field="tier" body={tierBodyTemplate} />
        <Column field="generic-buffer" body={genericBufferTemplate} />
        <Column field="elemental-buffer" body={elementalBufferTemplate} />
        <Column field="defender" body={defenderTemplate} />
        <Column field="healer" body={healerTemplate} />
        <Column field="debuffer" body={debufferTemplate} />
        <Column field="utility" body={utilityTemplate} />
        <Column field="single-dps" body={singleDpsTemplate} />
        <Column field="aoe-dps" body={aoeDpsTemplate} />
        <Column field="s-buffer" body={sBufferTemplate} />
        <Column field="s-debuffer" body={sDebufferTemplate} />
        <Column field="s-healer" body={sHealerTemplate} />
      </DataTable>
    </div>
  );
}