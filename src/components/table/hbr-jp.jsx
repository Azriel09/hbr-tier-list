import { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { ColumnGroup } from "primereact/columngroup";
import { Row } from "primereact/row";
import "primereact/resources/primereact.css";
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
export default function HBRJp({ dataEN }) {
  const [tierData, setTierData] = useState();
  useEffect(() => {
    let data = [];
    if (dataEN) {
      Object.keys(dataEN).map((student) => {
        dataEN[student].map((name) => {
          let student_obj = {};
          const element = name["element"];
          const rarity = name["rarity"];
          const release = name["release-date"];
          const section = name["section"];
          if (name["tier"].length >= 2) {
            name["tier"].map((tier, index) => {
              const role = name["role"][index];

              student_obj = {
                ...student_obj,
                tier: tier,
                student: student,
                rarity: rarity,
                role: role,
                element: element,
                release: release,
                section: section,
              };
            });
          } else {
            const tier = name["tier"][0];
            const role = name["role"][0];
            student_obj = {
              ...student_obj,
              tier: tier,
              student: student,
              rarity: rarity,
              role: role,
              element: element,
              release: release,
              section: section,
            };
          }
          data.push(student_obj);
        });
      });
      setTierData(data);
    }
  }, [dataEN]);
  //   const [sales] = useState([
  //     { product: 'Bamboo Watch', lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
  //     { product: 'Black Watch', lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
  //     { product: 'Blue Band', lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
  //     { product: 'Blue T-Shirt', lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
  //     { product: 'Brown Purse', lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
  //     { product: 'Chakra Bracelet', lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
  //     { product: 'Galaxy Earrings', lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
  //     { product: 'Game Controller', lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
  //     { product: 'Gaming Set', lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
  //     { product: 'Gold Phone Case', lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 }
  // ]);
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
        value={tierData}
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
