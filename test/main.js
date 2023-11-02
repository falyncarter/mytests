


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



// const removeTableRow = (index) => {
//   const table = document.getElementById("catEntriesTable").querySelector("tbody");
//   table.deleteRow(index);
// };


// const renderTblBtn = (cat, index) => {
//   const td = document.createElement("td");
//   const btnEdit = document.createElement("button");
//   btnEdit.textContent = "Edit";
//   btnEdit.addEventListener('click', () => {
//       document.getElementById("foodBowlLvlInput").value = cat.foodLevel;
//       document.getElementById("waterBowlLvlInput").value = cat.waterLevel;
//       document.getElementById("catBehaviorInput").value = cat.catBehavior;
//       document.getElementById("catSummaryInput").value = cat.catSummary;
//       onUpdate(index);
//   });

//   const btnDel = document.createElement("button");
//   btnDel.textContent = "Delete";
//   btnDel.addEventListener('click', () => {
//       removeTableRow(index);
//       onDelete(index);
//   });

//   td.appendChild(btnEdit);
//   td.appendChild(btnDel);

//   return td;
// };





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

  if (foodLevel !== null && waterLevel !== null && catBehavior !== null && catSummary !== "") {
    const content = displayContent(foodLevel, waterLevel, catBehavior, catSummary);
    if (content) {
      updateResults(content);
      addToResultsArray(foodLevel, waterLevel, catBehavior, catSummary, content);
    } else {
      console.log("Content could not be generated.");
    }
  } else{
    const errorMessage = "Please fill in all the required fields.";
    alert(errorMessage)
    console.log(errorMessage);
}
};

const init = () => {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", onSubButtClick);
};

document.addEventListener("DOMContentLoaded", init);