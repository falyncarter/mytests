import { foodResults, waterResults, treatsResults } from './global.js';

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
    behaviorResultElement.textContent = content.summary;
};

const resultsArray = [];
const resultContainers = document.querySelectorAll('.result');

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

let currentlyEditedIndex = -1;

const onEditButtonClick = () => {
    if (currentlyEditedIndex !== -1) {
        
    }
};

document.getElementById("editButton").addEventListener('click', onEditButtonClick);

const onDeleteButtonClick = () => {
    if (currentlyEditedIndex !== -1) {
     
        resultsArray.splice(currentlyEditedIndex, 1);
        updateResultsDisplay();
        currentlyEditedIndex = -1;
    }
};

document.getElementById("deleteButton").addEventListener('click', onDeleteButtonClick);

const updateResultsDisplay = () => {
    resultContainers.forEach(container => {
        const resultsText = container.querySelector('.results-text');
        resultsText.textContent = '';
    });

    resultsArray.forEach((result, index) => {
        const container = resultContainers[index];
        const resultsText = container.querySelector('.results-text');
        resultsText.textContent = result.content.summary;
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
            if (currentlyEditedIndex === -1) {
                updateResults(content);
                addToResultsArray(foodLevel, waterLevel, catBehavior, catSummary, content);
            } else {
                updateEditedResult(content);
            }

            foodBowlLvlInput.value = 'fine';
            waterBowlLvlInput.value = 'fine';
            catBehaviorInput.value = 'great';
            catSummaryInput.value = '';
            
            errorMessageElement.style.display = 'none';
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
