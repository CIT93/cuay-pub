const TBL = document.getElementById("tab-data");

function renderTblHeading() {
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

function renderTbl(data) {
    // Clear existing content
    TBL.innerHTML = "";

    const table = renderTblHeading();
    const tbody = document.createElement("tbody");

    data.forEach(function (obj) {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = `${obj.firstName} ${obj.lastName}`;
        const tdHouseHold = document.createElement("td");
        tdHouseHold.textContent = obj.houseM;
        const tdHouseSize = document.createElement("td");
        tdHouseSize.textContent = obj.houseS;
        const tdFootprint = document.createElement("td");
        tdFootprint.textContent = obj.cfpTotal;

        const tdActions = document.createElement("td");
        const btnEdit = document.createElement("button");
        const btnDel = document.createElement("button");
        btnEdit.textContent = "Edit";
        btnDel.textContent = "Del";
        tdActions.appendChild(btnEdit);
        tdActions.appendChild(btnDel);

        tr.appendChild(tdName);
        tr.appendChild(tdHouseHold);
        tr.appendChild(tdHouseSize);
        tr.appendChild(tdFootprint);
        tr.appendChild(tdActions);

        tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };
