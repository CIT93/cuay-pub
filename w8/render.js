const TBL = document.getElementById("tab-data");

function renderTblHeading() {
  // TBL.innerHTML = "";

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

function renderTblBtn(index, data){
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener(`click`, function(e){
    data.splice(index, 1);
    renderTbl(data);
  })
  btnEdit.addEventListener(`click`, function(e){
    const newName = prompt("Enter new name:");
    if (newName !== null) 
      data[index].Name = newName;
      renderTbl(data); 
  }
      )

  return td;
}

function renderTblBody(data) {
const tbody = document.createElement("tbody");
data.forEach(function (obj, index) {
  const tr = document.createElement("tr");
  for (const [key, value] of Object.entries(obj)) {
    if (key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
      const td = document.createElement("td");
      td.textContent = value;
      tr.appendChild(td);
    }
  }

const td = renderTblBtn(index, data);
tr.appendChild(td);
tbody.appendChild(tr);
});
return tbody;
}

function renderTbl(data) {
  TBL.innerHTML = ""; 
  if (data.length === 0) {
    console.log("clear the exisiting table")
    const table = renderTblHeading();
    const tbody = renderTblBody(data);
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}


export { renderTbl };