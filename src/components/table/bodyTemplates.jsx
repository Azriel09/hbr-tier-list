function BodyTemplates() {
  const mainTemplate = (student) => {
    return (
      <div className="flex align-items-center gap-2">
        <span className="font-bold">{student}</span>
      </div>
    );
  };
  const tierBodyTemplate = (rowData) => {
    let tier = "";
    console.log(rowData);
    Object.keys(rowData).map((key) => {
      tier = key;
    });
    return (
      <div className="flex align-items-center gap-2">
        <span className="font-bold">{tier}</span>
      </div>
    );
  };
  const healerTemplate = (rowData) => {
    return Object.keys(rowData).map((data) => {
      rowData[data].map((info) => {
        Object.keys(info).map((role, index) => {
          if (role == "healer" && info[role].length >= 1) {
            return (
              <div className="flex align-items-center gap-2" key={index}>
                {info[role].map((student, i) => {
                  return <div key={i}>{student["name"]}</div>;
                })}
              </div>
            );
          } else {
            return <div>{"ehe"}</div>;
          }
        });
      });
    });
  };
  return {
    tierBodyTemplate,
    healerTemplate,
  };
}

export default BodyTemplates;
