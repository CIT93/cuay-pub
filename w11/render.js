import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

// Function to render table heading
const renderTblHeading = () => {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headings = ["Name", "HouseHold", "HouseSize", "Footprint", "Actions"];

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

    // Extract relevant properties from the object
    const { first, last, houseMembers, houseSize, totalFootprint, food } = obj;

    // Create table cells for each property
    const tdName = document.createElement("td");
    tdName.textContent = `${first} ${last}`;
    tr.appendChild(tdName);

    const tdHouseHold = document.createElement("td");
    tdHouseHold.textContent = houseMembers;
    tr.appendChild(tdHouseHold);

    const tdHouseSize = document.createElement("td");
    tdHouseSize.textContent = houseSize;
    tr.appendChild(tdHouseSize);

    const tdFood = document.createElement("td");
    tdFood.textContent = food; // Add food choice
    tr.appendChild(tdFood);

    const tdFootprint = document.createElement("td");
    tdFootprint.textContent = totalFootprint; // Display the total footprint
    tr.appendChild(tdFootprint);

    // Add buttons for actions
    const tdActions = renderTblBtn(index, data);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);
  });

  return tbody;
};

const renderTblBtn = (index, data) => {
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
    const obj = data[index];
    // Populate form fields with data for editing
    FORM.firstName.value = obj.first;
    FORM.lastName.value = obj.last;
    FORM.housem.value = obj.houseMembers;
    FORM.houseSize.value = obj.houseSize;
    FORM.food.value = obj.food;
    FORM.foodPackaging.value = obj.foodPackaging;
    // Update data after editing
    saveLS(data);
    renderTbl(data);
  });
  
  return td;
}

// Function to render the entire table
const renderTbl = (data) => {
  TBL.innerHTML = "";

  const table = renderTblHeading();
  const tbody = renderTblBody(data);
  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl };