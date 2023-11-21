import { resultsArray } from "./main.js";

const populateFormWithRowData = (row) => {
  const foodBowlLvlInput = document.getElementById("foodBowlLvlInput");
  const waterBowlLvlInput = document.getElementById("waterBowlLvlInput");
  const catBehaviorInput = document.getElementById("catBehaviorInput");
  const catSummaryInput = document.getElementById("catSummaryInput");

  if (row) {
    const { foodLevel, waterLevel, catBehavior, catSummary } = row;

    foodBowlLvlInput.value = foodLevel;
    waterBowlLvlInput.value = waterLevel;
    catBehaviorInput.value = catBehavior;
    catSummaryInput.value = catSummary;
  }
};


const displayResultsInConsole = () => {
  console.log("Results in console:", resultsArray);
};

const handleDelete = (row, index) => {
  row.remove();
  resultsArray.splice(index, 1);
  localStorage.setItem("resultsArray", JSON.stringify(resultsArray));
  displayResultsInConsole();
};

const handleEdit = (index) => {
  const rowToEdit = resultsArray[index];
  populateFormWithRowData(rowToEdit);
  resultsArray.splice(index, 1, rowToEdit);
  displayResultsInConsole();
};

export { handleDelete, handleEdit, displayResultsInConsole };

