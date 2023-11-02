

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
  

  export{foodResults, waterResults, treatsResults, getInputValue}