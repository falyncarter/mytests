import { handleEdit, handleDelete } from "./buttons.js";

const updateTable = (content) => {
  const resultsTable = document.getElementById('resultsTable');

  if (!resultsTable) {
    console.error("Results table not found");
    return;
  }

  const newRow = document.createElement('tr');

 
  const contentKeys = ['food', 'water', 'treats', 'catSummary'];
  contentKeys.forEach(key => {
    const contentCell = document.createElement('td');
    contentCell.textContent = content[key];
    newRow.appendChild(contentCell);
  });

 
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.addEventListener('click', () => handleEdit(newRow));

 
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => handleDelete(newRow));

  
  const actionsCell = document.createElement('td');
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);
  newRow.appendChild(actionsCell);

  resultsTable.appendChild(newRow);
};

export { updateTable };
