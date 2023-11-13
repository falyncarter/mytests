import { resultsArray } from "./main.js";

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

export { handleDelete, handleEdit };
