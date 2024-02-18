const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = [
    "Name",
    "HouseHold",
    "HouseSize",
    "Footprint",
    "Actions",
  ];

  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

function renderTbl(data) {
  // Clear existing content
  TBL.innerHTML = "";

  const table = renderTblHeading();
  const tbody = document.createElement("tbody");

  data.forEach(function (obj) {
    const tr = document.createElement("tr");

    const propertiesToDisplay = ["firstName", "houseM", "houseS", "cfpTotal"];

    propertiesToDisplay.forEach(function (property) {
      const td = document.createElement("td");
      td.textContent = obj[property];

      tr.appendChild(td);
    });

    const tdActions = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDel = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnDel.textContent = "Del";
    tdActions.appendChild(btnEdit);
    tdActions.appendChild(btnDel);

    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };
