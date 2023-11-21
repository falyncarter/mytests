import { handleEdit, handleDelete } from "./buttons.js";

const updateTable = (content) => {
  const resultsTable = document.getElementById('resultsTable');

  if (resultsTable) {
    const newRow = document.createElement('tr');

    const foodContent = document.createElement('td');
    foodContent.textContent = content.content.food; 
  

    const waterContent = document.createElement('td');
    waterContent.textContent = content.content.water; 
  

    const treatsContent = document.createElement('td');
    treatsContent.textContent = content.content.treats; 
   

    const catSummaryContent = document.createElement('td');
    catSummaryContent.textContent = content.catSummary;

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => handleEdit(newRow));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => handleDelete(newRow));

    const actionsContent = document.createElement('td');
    actionsContent.appendChild(editButton);
    actionsContent.appendChild(deleteButton);

    newRow.appendChild(foodContent);
    newRow.appendChild(waterContent);
    newRow.appendChild(treatsContent);
    newRow.appendChild(catSummaryContent);
    newRow.appendChild(actionsContent);

    resultsTable.appendChild(newRow);
  }
};

export { updateTable };
