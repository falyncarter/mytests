import{foodResults, waterResults, treatsResults, getInputValue} from './global.js';


const displayContent = (foodLevel, waterLevel, catBehavior, catSummary) => {
  const foodContent = foodResults[foodLevel];
  const waterContent = waterResults[waterLevel];
  const treatsContent = treatsResults[catBehavior];

  if (foodContent && waterContent && treatsContent && catSummary) {
    return {
      food: foodContent,
      water: waterContent,
      treats: treatsContent,
      summary: catSummary,
    };
  }
};




const updateResults = (content) => {
  const foodResultElement = document.querySelector("#foodResult .results-text");
  const waterResultElement = document.querySelector("#waterResult .results-text");
  const treatsResultElement = document.querySelector("#treatsResult .results-text");
  const behaviorResultElement = document.querySelector("#behaviorResult .results-text");

  foodResultElement.textContent = content.food;
  waterResultElement.textContent = content.water;
  treatsResultElement.textContent = content.treats;
  behaviorResultElement.textContent = content.summary; 
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

  displayResultsInConsole();
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

  const errorMessageElement = document.getElementById("errorMessage");

  if (foodLevel !== null && waterLevel !== null && catBehavior !== null && catSummary !== "") {
    const content = displayContent(foodLevel, waterLevel, catBehavior, catSummary);
    if (content) {
      updateResults(content);
      addToResultsArray(foodLevel, waterLevel, catBehavior, catSummary, content);
    } else {
      console.log("Content could not be generated.");
    }
  } else {
    errorMessageElement.style.display = "block"; 
    errorMessageElement.textContent = "Please fill in all the required fields.";
  }
};



const init = () => {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", onSubButtClick);
};

document.addEventListener("DOMContentLoaded", init);