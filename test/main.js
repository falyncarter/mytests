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
  
  function getInputValue(inputElement) {
    return inputElement ? inputElement.value : null;
  }
  
  function displayContent(foodLevel, waterLevel, catBehavior) {
    const foodContent = foodResults[foodLevel];
    const waterContent = waterResults[waterLevel];
    const treatsContent = treatsResults[catBehavior];
  
    if (foodContent && waterContent && treatsContent) {
      return {
        foodResult: foodContent,
        waterResult: waterContent,
        treatsResult: treatsContent,
      };
    } else {
     ;
    }
  }
  
  function onSubButtClick(event) {
    event.preventDefault();
    const foodLevel = getInputValue(foodBowlLvlInput);
    const waterLevel = getInputValue(waterBowlLvlInput);
    const catBehavior = getInputValue(catBehaviorInput);
  
    if (foodLevel !== null && waterLevel !== null && catBehavior !== null) {
      const results = displayContent(foodLevel, waterLevel, catBehavior);
      return results;
    } else {
      
    }
  }
  
  function init() {
    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", onSubButtClick);
  }
  
  document.addEventListener("DOMContentLoaded", init);
  
  init();
  
  