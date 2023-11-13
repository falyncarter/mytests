import { foodResults, waterResults, treatsResults } from "./global.js";
import { handleDelete, handleEdit } from "./buttons.js";

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

const updateResultsInTable = (content) => {
  const resultElements = {
    food: document.querySelector("#foodResult .results-text"),
    water: document.querySelector("#waterResult .results-text"),
    treats: document.querySelector("#treatsResult .results-text"),
    catSummary: document.querySelector("#catSummaryResult .results-text"),
  };

  Object.keys(resultElements).forEach(key => {
    if (resultElements[key]) {
      resultElements[key].textContent = content[key];
    }
  });

  console.log("Content updated in the table:", content);
};

const addToResultsArray = (foodLevel, waterLevel, catBehavior, catSummary, content) => {
  const resultsTableElement = document.getElementById('resultsTable');
  const newRow = document.createElement('tr');

  const foodCell = document.createElement('td');
  foodCell.textContent = content.food;

  const waterCell = document.createElement('td');
  waterCell.textContent = content.water;

  const treatsCell = document.createElement('td');
  treatsCell.textContent = content.treats;

  const catSummaryCell = document.createElement('td');
  catSummaryCell.textContent = content.catSummary;

  newRow.appendChild(foodCell);
  newRow.appendChild(waterCell);
  newRow.appendChild(treatsCell);
  newRow.appendChild(catSummaryCell);

  const actionsCell = document.createElement('td');
  
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => handleEdit(newRow));

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => handleDelete(newRow));

  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);

  newRow.appendChild(actionsCell);

  resultsArray.push({
    foodLevel,
    waterLevel,
    catBehavior,
    catSummary,
    content,
  });

  localStorage.setItem("resultsArray", JSON.stringify(resultsArray));

  resultsTableElement.appendChild(newRow);
};


const displayResultsInConsole = () => {
  resultsArray.forEach((result, index) => {
    console.log(`Result ${index + 1}:`, result);
  });
};

const clearInputFields = () => {
  const inputFields = [
    document.getElementById("foodBowlLvlInput"),
    document.getElementById("waterBowlLvlInput"),
    document.getElementById("catBehaviorInput"),
    document.getElementById("catSummaryInput"),
  ];

  inputFields.forEach(input => input.value = 'fine');
};

const showError = (message) => {
  const errorMessageElement = document.getElementById("errorMessage");
  errorMessageElement.style.display = "block";
  errorMessageElement.textContent = message;
};

const onSubButtClick = (event) => {
  console.log("Submit button clicked");
  event.preventDefault();

  const foodBowlLvlInput = document.getElementById("foodBowlLvlInput");
  const waterBowlLvlInput = document.getElementById("waterBowlLvlInput");
  const catBehaviorInput = document.getElementById("catBehaviorInput");
  const catSummaryInput = document.getElementById("catSummaryInput");

  const foodLevel = getInputValue(foodBowlLvlInput);
  const waterLevel = getInputValue(waterBowlLvlInput);
  const catBehavior = getInputValue(catBehaviorInput);
  const catSummary = catSummaryInput.value;

  if (foodLevel && waterLevel && catBehavior) {
    const content = displayContent(foodLevel, waterLevel, catBehavior, catSummary);
    
    if (content) {
      addToResultsArray(foodLevel, waterLevel, catBehavior, catSummary, content);
      console.log("Content before updateResults:", content);
      updateResultsInTable(content);
      displayResultsInConsole();
      console.log("Content after updateResults:", content);

      
      foodBowlLvlInput.value = '';
      waterBowlLvlInput.value = '';
      catBehaviorInput.value = '';
      catSummaryInput.value = '';

      showError('');
    }
  } else {
    showError("Please fill in all the required fields.");
  }
};


const start = () => {
  console.log("start function called");

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", onSubButtClick);

  const editButtons = document.querySelectorAll(".edit-button");
  const deleteButtons = document.querySelectorAll(".delete-button");

  editButtons.forEach((editButton, index) => {
    editButton.addEventListener("click", () => handleEdit(index));
  });

  deleteButtons.forEach((deleteButton, index) => {
    deleteButton.addEventListener("click", () => handleDelete(index));
  });
};

const resultsArray = [];
start();
