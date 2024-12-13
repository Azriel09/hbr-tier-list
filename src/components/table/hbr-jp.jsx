import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";

import BodyTemplates from "./bodyTemplates";

const {
  tierBodyTemplate,
  bufferTemplate,
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
const roles = [
  "buffer",
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
export default function HBRJp({ dataEN }) {
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
          if (student["role"].length >= 2) {
            student["role"].map((j, index) => {
              let tier = student["tier"][index];
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
                      };
                      t[role].push(obj_data);
                    }
                  });
                } else {
                  return;
                }
              });
            });
          } else {
            let tier = student["tier"][0];
            let role = student["role"][0];
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
                    };
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

  const roleBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        {console.log(rowData)}
        <span className="font-bold">{rowData.student}</span>
      </div>
    );
  };
  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="Tier" rowSpan={2} align={"center"} />
        <Column header="Buffer" rowSpan={2} align={"center"} />
        <Column header="Defender" rowSpan={2} align={"center"} />
        <Column header="Healer" rowSpan={2} align={"center"} />
        <Column header="Debuffer" rowSpan={2} align={"center"} />
        <Column header="Utility" rowSpan={2} align={"center"} />
        <Column header="Main Damage" colSpan={2} align={"center"} />
        <Column header="Notable S" colSpan={3} align={"center"} />
      </Row>
      <Row>
        <Column header="Single Target" align={"center"} />
        <Column header="AoE" align={"center"} />
        <Column header="Buffer" align={"center"} />
        <Column header="Debuffer" align={"center"} />
        <Column header="Healer" align={"center"} />
      </Row>
    </ColumnGroup>
  );
  return (
    <div className="card">
      <DataTable
        value={tierData}
        headerColumnGroup={headerGroup}
        tableStyle={{ minWidth: "50rem" }}
        rowGroupMode="rowspan"
        groupRowsBy="tier"
        sortField="tier"
        showGridlines
        sortOrder={-1}
      >
        <Column field="tier" body={tierBodyTemplate} />
        <Column field="buffer" body={bufferTemplate} />
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
