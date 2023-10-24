

const renderTblBtn = (cat, index) => {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    btnEdit.textContent = "Edit";
    btnEdit.addEventListener('click', () => {
        document.getElementById("foodBowlLvlInput").value = cat.foodLevel;
        document.getElementById("waterBowlLvlInput").value = cat.waterLevel;
        document.getElementById("catBehaviorInput").value = cat.catBehavior;
        document.getElementById("catSummaryInput").value = cat.catSummary;
        onUpdate(index);
    });

    const btnDel = document.createElement("button");
    btnDel.textContent = "Del";
    btnDel.addEventListener('click', () => {
        onDelete(index);
    });

    td.appendChild(btnEdit);
    td.appendChild(btnDel);

    return td;
};


export {renderTblBtn};