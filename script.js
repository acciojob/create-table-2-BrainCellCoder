function createTable() {
  // Get the table element by ID
  const table = document.getElementById('myTable');
  
  // Clear the existing table content
  table.innerHTML = '';

  // Prompt the user for the number of rows
  const rows = parseInt(prompt('Input number of rows'), 10);
  if (isNaN(rows) || rows <= 0) {
    alert('Please enter a valid number of rows');
    return;
  }

  // Prompt the user for the number of columns
  const cols = parseInt(prompt('Input number of columns'), 10);
  if (isNaN(cols) || cols <= 0) {
    alert('Please enter a valid number of columns');
    return;
  }

  // Loop through the number of rows
  for (let i = 0; i < rows; i++) {
    // Create a new row
    const tr = document.createElement('tr');

    // Loop through the number of columns
    for (let j = 0; j < cols; j++) {
      // Create a new cell
      const td = document.createElement('td');
      // Set the cell text
      td.textContent = `Row-${i} Column-${j}`;
      // Append the cell to the row
      tr.appendChild(td);
    }

    // Append the row to the table
    table.appendChild(tr);
  }
}
