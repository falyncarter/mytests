import { foodResults, waterResults, treatsResults } from "./global.js";

const getInputValue = (inputElement) => inputElement ? inputElement.value : null;

const displayContent = (foodLevel, waterLevel, catBehavior, catSummary) => {
  const foodContent = foodResults[foodLevel];
  const waterContent = waterResults[waterLevel];
  const treatsContent = treatsResults[catBehavior];

  if (foodContent && waterContent && treatsContent) {
    return {
      food: foodContent,
      water: waterContent,
      treats: treatsContent,
      catSummary: catSummary,
    };
  }
};

const updateResults = (content) => {
  const foodResultElement = document.querySelector("#foodResult .results-text");
  const waterResultElement = document.querySelector("#waterResult .results-text");
  const treatsResultElement = document.querySelector("#treatsResult .results-text");
  const catSummaryResultElement = document.querySelector("#catSummaryResult .results-text");

  if (foodResultElement && waterResultElement && treatsResultElement && catSummaryResultElement) {
    foodResultElement.textContent = content.food;
    waterResultElement.textContent = content.water;
    treatsResultElement.textContent = content.treats;
    catSummaryResultElement.textContent = content.catSummary;
  }
};

const resultsArray = [];

const addToResultsArray = (foodLevel, waterLevel, catBehavior, catSummary, content) => {
  resultsArray.push({
    foodLevel,
    waterLevel,
    catBehavior,
    catSummary,
    content,
  });

  const resultsTable = document.getElementById('resultsTable');
  if (resultsTable) {
    // Add rows to the table as before.
  }
};

const displayResultsInConsole = () => {
  resultsArray.forEach((result, index) => {
    console.log(`Result ${index + 1}:`, result);
  });
};

const onSubButtClick = (event) => {
  event.preventDefault();
  const foodBowlLvlInput = document.getElementById("foodBowlLvlInput");
  const waterBowlLvlInput = document.getElementById("waterBowlLvlInput");
  const catBehaviorInput = document.getElementById("catBehaviorInput");
  const catSummaryInput = document.getElementById("catSummaryInput");

  const foodLevel = getInputValue(foodBowlLvlInput);
  const waterLevel = getInputValue(waterBowlLvlInput);
  const catBehavior = getInputValue(catBehaviorInput);
  const catSummary = catSummaryInput.value;

  if (foodLevel !== null && waterLevel !== null && catBehavior !== null) {
    const content = displayContent(foodLevel, waterLevel, catBehavior, catSummary);
    if (content) {
      updateResults(content);
      addToResultsArray(foodLevel, waterLevel, catBehavior, catSummary, content);

      foodBowlLvlInput.value = 'fine';
      waterBowlLvlInput.value = 'fine';
      catBehaviorInput.value = 'great';
      catSummaryInput.value = '';

      const errorMessageElement = document.getElementById("errorMessage");
      errorMessageElement.style.display = 'none';
    }
  } else {
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.style.display = "block";
    errorMessageElement.textContent = "Please fill in all the required fields.";
  }
};


const handleDelete = (row, index) => {
  row.remove();
  resultsArray.splice(index, 1);
  displayResultsInConsole();
};

const handleEditRow = (index) => {
  const rowToEdit = resultsArray[index];
  populateFormWithRowData(rowToEdit);
  resultsArray.splice(index, 1);
  displayResultsInConsole();
};


const init = () => {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", onSubButtClick);

  const editButtons = document.querySelectorAll(".edit-button");
  const deleteButtons = document.querySelectorAll(".delete-button");

  editButtons.forEach((editButton, index) => {
    editButton.addEventListener("click", () => handleEditRow(index));
  });

  deleteButtons.forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => handleDeleteRow(index));
  });
};

document.addEventListener("DOMContentLoaded", init);
