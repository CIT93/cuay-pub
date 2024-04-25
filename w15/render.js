import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headings = ["Name", "HouseHold", "HouseSize", "Food Choice", "Footprint", "Actions"];

  headings.forEach(heading => {
    const th = document.createElement("th");
    th.textContent = heading;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
}

const renderTblBody = (data) => {
  const tbody = document.createElement("tbody");

  data.forEach((obj, index) => {
    const tr = document.createElement("tr");
    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "totalFootprint"];

    keys.forEach(key => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });

    const tdActions = renderTblBtn(obj, index, data);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);
  });

  return tbody;
};

const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  
  td.appendChild(btnEdit);
  td.appendChild(btnDel);
  
  btnDel.addEventListener("click", () => {
    data.splice(index, 1);
    saveLS(data);
    renderTbl(data);
  });
  
  btnEdit.addEventListener("click", () => {
    // Populate form fields with data for editing
    FORM.firstName.value = obj.first;
    FORM.lastName.value = obj.last;
    FORM.housem.value = obj.houseM;
    FORM.houseSize.value = obj.houseSize;
    FORM.food.value = obj.foodChoice;
  });
  
  return td;
}

const renderTbl = (data) => {
  TBL.innerHTML = "";

  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl };