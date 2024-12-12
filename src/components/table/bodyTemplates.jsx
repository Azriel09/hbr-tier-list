function BodyTemplates() {
  const mainTemplate = (student) => {
    return (
      <div className="flex align-items-center gap-2">
        <span className="font-bold">{student}</span>
      </div>
    );
  };
  const bufferTemplate = (rowData) => {
    if (rowData["role"] === "buffer") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };

  const healerTemplate = (rowData) => {
    if (rowData["role"] === "healer") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };
  const defenderTemplate = (rowData) => {
    if (rowData["role"] === "defender") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };
  const debufferTemplate = (rowData) => {
    if (rowData["role"] === "debuffer") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };
  const utilityTemplate = (rowData) => {
    if (rowData["role"] === "utility") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };
  const singleDpsTemplate = (rowData) => {
    if (rowData["role"] === "single-dps") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };
  const aoeDpsTemplate = (rowData) => {
    if (rowData["role"] === "aoe-dps") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };
  const sBufferTemplate = (rowData) => {
    if (rowData["role"] === "s-buffer") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };
  const sDebufferTemplate = (rowData) => {
    if (rowData["role"] === "s-debuffer") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };
  const sHealerTemplate = (rowData) => {
    if (rowData["role"] === "s-healer") {
      return mainTemplate(rowData.student);
    } else {
      return;
    }
  };

  return {
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
  };
}

export default BodyTemplates;
