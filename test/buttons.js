const handleDelete = (row, index) => {
    row.remove();
    resultsArray.splice(index, 1);
    localStorage.setItem("resultsArray", JSON.stringify(resultsArray));
    displayResultsInConsole();
  };
  
  const handleEdit = (index) => {
    const rowToEdit = resultsArray[index];
    populateFormWithRowData(rowToEdit);
    resultsArray.splice(index, 1);
    displayResultsInConsole();
  };


export {handleDelete, handleEdit}