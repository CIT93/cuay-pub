// import { FORM, TBL } from "./global.js";
// import { saveLS } from "./storage.js";



// const calculateAverage =(data) => {
//   const reduceTotal = data.reduce((sum, ea) => sum + ea.total, 0);
//   const tableRef = document.getElementById("table-id");
//   let newRow = tableRef.insertRow(-1);
//   let newCell = newRow.insertCell(0);
//   let newCell_1 = newRow.insertCell(0);
//   let newCell_2 = newRow.insertCell(0);
//   let newCell_3 = newRow.insertCell(0);
//   let newCell_4 = newRow.insertCell(0);
//   let newLabl = document.createTextNode('Average Footprint');
//   let newText = document.createTextNode(`$Math.floor(reduceTotal/data.length}`);
//   newCell_1.appendChild(newLabl);
//   newCell.appendChild(newText);
// }


// const renderTblHeading = () => {
//   const table = document.createElement("table");
//   table.setAttribute("id", "table-id")
//   const thead = document.createElement("thead");
//   const tr = document.createElement("tr");
//   const headings = ["Name", "HouseHold", "HouseSize", "Food Choice", "Footprint", "Actions"];

//   headings.forEach(heading => {
//     const th = document.createElement("th");
//     th.textContent = heading;
//     tr.appendChild(th);
//   });

//   thead.appendChild(tr);
//   table.appendChild(thead);

//   return table;
// }

// const renderTblBody = (data) => {
//   const tbody = document.createElement("tbody");

//   data.forEach((obj, index) => {
//     const tr = document.createElement("tr");
//     const keys = ["first", "houseMembers", "houseSize", "foodChoice", "totalFootprint"];

//     keys.forEach(key => {
//       const td = document.createElement("td");
//       td.textContent = obj[key];
//       tr.appendChild(td);
//     });

//     const tdActions = renderTblBtn(obj, index, data);
//     tr.appendChild(tdActions);

//     tbody.appendChild(tr);
//   });

//   return tbody;
// };

// const renderTblBtn = (obj, index, data) => {
//   const td = document.createElement("td");
//   const btnEdit = document.createElement("button");
//   const btnDel = document.createElement("button");
  
//   btnEdit.textContent = "Edit";
//   btnDel.textContent = "Del";
  
//   td.appendChild(btnEdit);
//   td.appendChild(btnDel);
  
//   btnDel.addEventListener("click", () => {
//     data.splice(index, 1);
//     saveLS(data);
//     renderTbl(data);
//   });
  
//   btnEdit.addEventListener("click", () => {
//     // Populate form fields with data for editing
//     FORM.firstName.value = obj.first;
//     FORM.lastName.value = obj.last;
//     FORM.housem.value = obj.houseM;
//     FORM.houseSize.value = obj.houseSize;
//     FORM.food.value = obj.foodChoice;
//   });
  
//   return td;
// }

// const renderTbl = (data) => {
//   TBL.innerHTML = "";
// if(data.length !==0) {
//   const table = renderTblHeading();
//   const tbody = renderTblBody(data);
//   table.appendChild(tbody);
//   TBL.appendChild(table);
// }
// }
// export { renderTbl };

import { FORM, TBL } from "./global.js";
import { saveLS } from "./storage.js";

// Function to calculate and display the average total footprint
const calculateAverage = (data) => {
  const reduceTotal = data.reduce((sum, ea) => sum + ea.totalFootprint, 0);
  const average = Math.floor(reduceTotal / data.length); // Calculate the average

  // Find the table reference where the average should be displayed
  const tableRef = document.getElementById("table-id");
  
  if (tableRef) { // Ensure the table exists
    const newRow = tableRef.insertRow(-1); // Insert at the end
    const newCellLabel = newRow.insertCell(0);

    // Merge multiple cells for a label spanning columns
    newCellLabel.colSpan = 4; // Adjust colSpan based on the number of columns
    newCellLabel.textContent = "Average Total"; // Label for the row

    // Insert the average value in the last cell
    const newCellTotal = newRow.insertCell(-1); // The last cell
    newCellTotal.textContent = `${average}`; // Display the calculated average
  }
};

// Function to render the table heading
const renderTblHeading = () => {
  const table = document.createElement("table");
  table.setAttribute("id", "table-id"); // ID for reference
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");

  const headings = ["Name", "Household", "House Size", "Food Choice", "Footprint", "Actions"];
  headings.forEach((heading) => {
    const th = document.createElement("th");
    th.textContent = heading;
    tr.appendChild(th);
  });

  thead.appendChild(tr);
  table.appendChild(thead);

  return table;
};

// Function to render the table body with data
const renderTblBody = (data) => {
  const tbody = document.createElement("tbody");

  data.forEach((obj, index) => {
    const tr = document.createElement("tr");

    const keys = ["first", "houseMembers", "houseSize", "foodChoice", "totalFootprint"];
    keys.forEach((key) => {
      const td = document.createElement("td");
      td.textContent = obj[key];
      tr.appendChild(td);
    });

    // Add action buttons to the row
    const tdActions = renderTblBtn(obj, index, data);
    tr.appendChild(tdActions);

    tbody.appendChild(tr);
  });

  return tbody;
};

// Function to create action buttons for a row
const renderTblBtn = (obj, index, data) => {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");

  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";

  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  // Add event listener for deleting a row
  btnDel.addEventListener("click", () => {
    data.splice(index, 1); // Remove the row
    saveLS(data); // Save changes to local storage
    renderTbl(data); // Refresh the table
  });

  // Add event listener for editing a row
  btnEdit.addEventListener("click", () => {
    // Populate form fields with data for editing
    FORM.firstName.value = obj.first;
    FORM.household.value = obj.houseMembers;
    FORM.houseSize.value = obj.houseSize;
    FORM.food.value = obj.foodChoice;
  });

  return td;
};

// Function to render the entire table with data
const renderTbl = (data) => {
  TBL.innerHTML = ""; // Clear existing content

  if (data.length > 0) {
    const table = renderTblHeading(); // Create the table with headers
    const tbody = renderTblBody(data); // Create the table body with data
    table.appendChild(tbody); // Append the body to the table

    TBL.appendChild(table); // Add the table to the parent container

    calculateAverage(data); // Calculate and display the average total
  }
};

export { renderTbl };
