const foodOptions = {
    fine: "Don't give food",
    medium: "Give some food",
    low: "Give a lot of food",
  };
  
  const waterOptions = {
    fine: "Don't give water",
    medium: "Give some water",
    low: "Give a lot of water",
  };
  
  const treatOptions = {
    great: "3",
    good: "2",
    meh: "1",
    bad: "No treats today",
  };
  
  const getInputValue = (elementId) => {
    const inputElement = document.getElementById(elementId);
    return inputElement ? inputElement.value : null;
  };
  
  const displayResults = () => {
    const foodLevel = getInputValue("foodBowlLvl");
    const waterLevel = getInputValue("waterBowlLvl");
    const catBehavior = getInputValue("catBehavior");
  
    if (foodLevel !== null && waterLevel !== null && catBehavior !== null) {
      const foodResult = foodOptions[foodLevel];
      const waterResult = waterOptions[waterLevel];
      const treatsResult = treatOptions[catBehavior];
  
      if (foodResult && waterResult && treatsResult) {
        const foodResultElement = document.querySelector("#foodResult .results-text");
        const waterResultElement = document.querySelector("#waterResult .results-text");
        const treatsResultElement = document.querySelector("#treatsResult .results-text");
  
        foodResultElement.textContent = foodResult;
        waterResultElement.textContent = waterResult;
        treatsResultElement.textContent = treatsResult;
  
        addToResults(foodLevel, waterLevel, catBehavior, { food: foodResult, water: waterResult, treats: treatsResult });
      } else {
        console.log("Content could not be generated.");
      }
    } else {
      console.log("Please fill in all the required fields.");
    }
  };
  
  const init = () => {
    const submitButton = document.getElementById("submitBtn");
    submitButton.addEventListener("click", (event) => {
      event.preventDefault();
      displayResults();
    });
  };
  
  const resultsArray = [];
  
  const addToResults = (foodLevel, waterLevel, catBehavior, content) => {
    resultsArray.push({ foodLevel, waterLevel, catBehavior, content });
    displayResultsInConsole();
  };
  
  const displayResultsInConsole = () => {
    resultsArray.forEach((result, index) => {
      console.log(`Result ${index + 1}:`, result);
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
  