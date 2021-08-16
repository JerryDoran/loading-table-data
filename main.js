const loadIntoTable = async (url, table) => {
  const tableHead = table.querySelector('thead');
  const tableBody = table.querySelector('tbody');

  const response = await fetch(url);
  const data = await response.json();

  console.log(data);

  const { headers, rows } = data;

  // clear the table
  tableHead.innerHTML = '<tr></tr>';
  tableBody.innerHTML = '';

  // populate headers
  for (const headerText of headers) {
    const headerElement = document.createElement('th');

    headerElement.textContent = headerText;
    tableHead.querySelector('tr').appendChild(headerElement);
  }

  // populate rows
  for (const row of rows) {
    const rowElement = document.createElement('tr');

    for (const cellText of row) {
      const cellElement = document.createElement('td');
      cellElement.textContent = cellText;
      rowElement.appendChild(cellElement);
    }

    tableBody.appendChild(rowElement);
  }
};

loadIntoTable('./data.json', document.querySelector('.table'));
