// document.addEventListener("DOMContentLoaded", function () {
//   const foodBowlLvlInput = document.getElementById("foodBowlLvl");
//   const waterBowlLvlInput = document.getElementById("waterBowlLvl");
//   const catBehaviorInput = document.getElementById("catBehavior");
//   const foodResult = document.getElementById("foodResult");
//   const waterResult = document.getElementById("waterResult");
//   const treatsResult = document.getElementById("treatsResult");
//   const submitBtn = document.getElementById("submitBtn");

//   submitBtn.addEventListener("click", function () {
//     const foodBowlLvl = foodBowlLvlInput.value.trim().toLowerCase();
//     const waterBowlLvl = waterBowlLvlInput.value.trim().toLowerCase();
//     const catBehavior = catBehaviorInput.value.trim().toLowerCase();

//     displayResults(foodBowlLvl, waterBowlLvl, catBehavior);
//   });

//   function displayResults(foodBowlLvl, waterBowlLvl, catBehavior) {
//     const foodResult = document.getElementById("foodResult");
//     const waterResult = document.getElementById("waterResult");
//     const treatsResult = document.getElementById("treatsResult");

    // const foodResults = {
    //   fine: "Don't give food",
    //   medium: "Give some food",
    //   low: "Give a lot of food",
    // };

    // const waterResults = {
    //   fine: "Don't give water",
    //   medium: "Give some water",
    //   low: "Give a lot of water",
    // };

    // const treatsResults = {
    //   great: "Give them treats: 3",
    //   good: "Give them treats: 2",
    //   meh: "Give them treats: 1",
    //   bad: "No treats today",
    // };

//     foodResult.textContent = foodResults[foodBowlLvl];
//     waterResult.textContent = waterResults[waterBowlLvl];
//     treatsResult.textContent = treatsResults[catBehavior];
//   }
// });


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

const foodBowlLvlInput = document.getElementById("foodBowlLvl");
const waterBowlLvlInput = document.getElementById("waterBowlLvl");
const catBehaviorInput = document.getElementById("catBehavior");


const onSubButtClick = (event) => {
  event.preventDefault();
  const foodLevel = getInputValue(foodBowlLvlInput);
  const waterLevel = getInputValue(waterBowlLvlInput);
  const catBehavior = getInputValue(catBehaviorInput);

  // console.log("Food Level:", foodLevel); 
  // console.log("Water Level:", waterLevel);
  // console.log("Cat Behavior:", catBehavior);

  if (foodLevel !== null && waterLevel !== null && catBehavior !== null) {
    displayContent(foodLevel, waterLevel, catBehavior);
  } else {
    //working on it
  }
};

const getInputValue = (inputElement) => {
  return inputElement ? inputElement.value : null;
};

const displayContent = (foodLevel, waterLevel, catBehavior) => {
  const foodResultElement = document.querySelector("#foodResult .results-text");
  const waterResultElement = document.querySelector("#waterResult .results-text");
  const treatsResultElement = document.querySelector("#treatsResult .results-text");

  const foodContent = foodResults[foodLevel];
  const waterContent = waterResults[waterLevel];
  const treatsContent = treatsResults[catBehavior];

  if (foodContent && waterContent && treatsContent) {
    foodResultElement.textContent = foodContent;
    waterResultElement.textContent = waterContent;
    treatsResultElement.textContent = treatsContent;
  } else {
    //working on it
  }
};


const init = () => {
  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", onSubButtClick);
};

document.addEventListener("DOMContentLoaded", init);

init();
