import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";

import BodyTemplates from "./bodyTemplates";

const {
  bufferTemplate,
  healerTemplate,
  debufferTemplate,
  defenderTemplate,
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

  // useEffect(() => {
  //   let data = [];
  //   if (dataEN) {
  //     Object.keys(dataEN).map((student) => {
  //       dataEN[student].map((name) => {
  //         let student_obj = {};
  //         const element = name["element"];
  //         const rarity = name["rarity"];
  //         const release = name["release-date"];
  //         const section = name["section"];
  //         if (name["tier"].length >= 2) {
  //           name["tier"].map((tier, index) => {
  //             const role = name["role"][index];

  //             student_obj = {
  //               ...student_obj,
  //               tier: tier,
  //               student: student,
  //               rarity: rarity,
  //               role: role,
  //               element: element,
  //               release: release,
  //               section: section,
  //             };
  //           });
  //         } else {
  //           const tier = name["tier"][0];
  //           const role = name["role"][0];
  //           student_obj = {
  //             ...student_obj,
  //             tier: tier,
  //             student: student,
  //             rarity: rarity,
  //             role: role,
  //             element: element,
  //             release: release,
  //             section: section,
  //           };
  //         }
  //         data.push(student_obj);
  //       });
  //     });
  //     setTierData(data);
  //   }
  // }, [dataEN]);

  useEffect(() => {
    let data = [];
    if (dataEN) {
      Array.from({ length: 11 }, (_, index) => {
        const descendingTier = 10 - index;
        let tier_roles = [];
        roles.map((role) => {
          tier_roles.push({ [role]: [] });
        });
        data.push({ [descendingTier]: tier_roles });
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

              data.map((tiers) => {
                Object.keys(tiers).map((rank) => {
                  if (tier == rank) {
                    const roles_array = tiers[rank];
                    roles_array.map((jobs) => {
                      Object.keys(jobs).map((job) => {
                        if (job == role) {
                          let obj_data = {
                            name: name,
                            rarity: rarity,
                            element: element,
                            section: section,
                            release: release,
                          };
                          jobs[job].push(obj_data);
                        }
                      });
                    });
                  } else {
                    return;
                  }
                });
              });
            });
          } else {
            let tier = student["tier"][0];
            let role = student["role"][0];
            data.map((tiers) => {
              Object.keys(tiers).map((rank) => {
                if (tier == rank) {
                  const roles_array = tiers[rank];
                  roles_array.map((jobs) => {
                    Object.keys(jobs).map((job) => {
                      if (job == role) {
                        let obj_data = {
                          name: name,
                          rarity: rarity,
                          element: element,
                          section: section,
                          release: release,
                        };
                        jobs[job].push(obj_data);
                      }
                    });
                  });
                } else {
                  return;
                }
              });
            });
          }
        });
      });
      setTierData(data);
    }
  }, [dataEN]);

  // How the data would look like from the code above
  // I could just format the json file this way but that would be boring
  let tierDataFormat = [
    {
      tier_10: [
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
      tier_9: [
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
  const tierBodyTemplate = (rowData) => {
    return (
      <div className="flex align-items-center gap-2">
        {console.log(rowData.tier)}
        <span className="font-bold">{rowData.tier}</span>
      </div>
    );
  };
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
        <Column header="Tier" rowSpan={2} align={"left"} />
        <Column header="Buffer" rowSpan={2} align={"left"} />
        <Column header="Defender" rowSpan={2} align={"left"} />
        <Column header="Healer" rowSpan={2} align={"left"} />
        <Column header="Debuffer" rowSpan={2} align={"left"} />
        <Column header="Utility" rowSpan={2} align={"left"} />
        <Column header="Main Damage" colSpan={2} align={"center"} />
        <Column header="Notable S" colSpan={3} align={"center"} />
      </Row>
      <Row>
        <Column header="Single Target" align={"left"} />
        <Column header="AoE" align={"left"} />
        <Column header="Buffer" align={"left"} />
        <Column header="Debuffer" align={"left"} />
        <Column header="Healer" align={"left"} />
      </Row>
    </ColumnGroup>
  );
  return (
    <div className="card">
      <DataTable
        // value={tierData}
        headerColumnGroup={headerGroup}
        tableStyle={{ minWidth: "50rem" }}
        rowGroupMode="rowspan"
        groupRowsBy="tier"
        sortField="tier"
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
