
import { CatCareData } from "./catclass.js";
import { updateTable } from "./table.js";
import { displayResultsInConsole } from "./buttons.js";

const getInputValue = (inputElement) => inputElement ? inputElement.value : null;

const resultsArray = []; 

const addToResultsArray = (foodLevel, waterLevel, catBehavior, catSummary, content) => {
  const catCareData = new CatCareData(foodLevel, waterLevel, catBehavior);
  const newRow = {
    foodLevel,
    waterLevel,
    catBehavior,
    catSummary,
    content: {
      food: catCareData.foodPts,
      water: catCareData.waterPts,
      treats: catCareData.treatsPts,
    },
  };

  
  resultsArray.push(newRow);
  localStorage.setItem("resultsArray", JSON.stringify(resultsArray));
  updateTable(newRow);
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
  if (foodLevel && waterLevel && catBehavior) {
    const catCareData = new CatCareData(foodLevel, waterLevel, catBehavior);
    const content = {
      food: catCareData.foodPts,
      water: catCareData.waterPts,
      treats: catCareData.treatsPts,
      catSummary: catSummary,
    };
    if (content) {
      addToResultsArray(foodLevel, waterLevel, catBehavior, catSummary, content);
      foodBowlLvlInput.value = '';
      waterBowlLvlInput.value = '';
      catBehaviorInput.value = '';
      catSummaryInput.value = '';
      showError('');
      displayResultsInConsole();
     
    }
  } else {
    showError("Please fill in all the required fields.");
  }
};

const showError = (message) => {
  const errorMessageElement = document.getElementById("errorMessage");
  if (message) {
    errorMessageElement.style.display = "block";
    errorMessageElement.textContent = message;
  } else {
    errorMessageElement.style.display = "none";
    errorMessageElement.textContent = "";
  }
};

const submitBtn = document.getElementById("submitBtn");
submitBtn.addEventListener("click", onSubButtClick);

export { resultsArray };
