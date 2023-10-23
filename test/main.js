const foodResults = {
  fine: "Don't give food",
  medium: "Give some food",
  low: "Give a lot of food",
};

const waterResults = {
  fine: "Don't give water",
  medium: "Give some water",
  low: "Give a lot of water",
};

const treatsResults = {
  great: "3",
  good: "2",
  meh: "1",
  bad: "No treats today",
};

const getInputValue = (selectElement) => {
  return selectElement ? selectElement.value : null;
};

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
  behaviorResultElement.textContent = content.summary; // Display cat behavior summary
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

  if (foodLevel !== null && waterLevel !== null && catBehavior !== null && catSummary !== "") {
    const content = displayContent(foodLevel, waterLevel, catBehavior, catSummary);
    if (content) {
      updateResults(content);
      addToResultsArray(foodLevel, waterLevel, catBehavior, catSummary, content);
    } else {
      console.log("Content could not be generated.");
    }
  } else {
    console.log("Please fill in all the required fields.");
  }
};

const init = () => {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", onSubButtClick);
};

document.addEventListener("DOMContentLoaded", init);
