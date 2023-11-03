import { foodResults, waterResults, treatsResults } from './global.js';

const CatCareApp = {
  resultsArray: [],
  currentlyEditedIndex: -1,

  getInputValue: function (selectElement) {
    return selectElement ? selectElement.value : null;
  },

  displayContent: function (foodLevel, waterLevel, catBehavior, catSummary) {
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
  },

  updateResults: function (content) {
    // Update the result elements with content
  },

  addToResultsArray: function (foodLevel, waterLevel, catBehavior, catSummary, content) {
    const resultObject = {
      foodLevel,
      waterLevel,
      catBehavior,
      catSummary,
      content,
    };
    this.resultsArray.push(resultObject);

    this.displayResultsInConsole();
  },

  displayResultsInConsole: function () {
    this.resultsArray.forEach((result, index) => {
      console.log(`Result ${index + 1}:`, result);
    });
  },

  onEditButtonClick: function () {
    if (this.currentlyEditedIndex !== -1) {
    
    }
  },

  onDeleteButtonClick: function () {
    if (this.currentlyEditedIndex !== -1) {
      this.resultsArray.splice(this.currentlyEditedIndex, 1);
      this.updateResultsDisplay();
      this.currentlyEditedIndex = -1;
    }
  },

  updateResultsDisplay: function () {
  
  },

  onSubButtClick: function (event) {
    event.preventDefault();

    const foodLevel = this.getInputValue(this.foodBowlLvlInput);
    const waterLevel = this.getInputValue(this.waterBowlLvlInput);
    const catBehavior = this.getInputValue(this.catBehaviorInput);
    const catSummary = this.catSummaryInput.value;

    if (foodLevel !== null && waterLevel !== null && catBehavior !== null && catSummary !== "") {
      const content = this.displayContent(foodLevel, waterLevel, catBehavior, catSummary);
      if (content) {
        if (this.currentlyEditedIndex === -1) {
          this.updateResults(content);
          this.addToResultsArray(foodLevel, waterLevel, catBehavior, catSummary, content);
        } else {
        
        }

        this.foodBowlLvlInput.value = 'fine';
        this.waterBowlLvlInput.value = 'fine';
        this.catBehaviorInput.value = 'great';
        this.catSummaryInput.value = '';
      } else {
        console.log("Content could not be generated.");
      }
    } else {
      this.errorMessageElement.style.display = "block";
      this.errorMessageElement.textContent = "Please fill in all the required fields.";
    }
  },

  init: function () {
    this.foodBowlLvlInput = document.getElementById("foodBowlLvlInput");
    this.waterBowlLvlInput = document.getElementById("waterBowlLvlInput");
    this.catBehaviorInput = document.getElementById("catBehaviorInput");
    this.catSummaryInput = document.getElementById("catSummaryInput");
    this.errorMessageElement = document.getElementById("errorMessage");

    const submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", this.onSubButtClick);
   
  },
};

document.addEventListener("DOMContentLoaded", () => {
  CatCareApp.init();
});
