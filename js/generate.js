function generateTable(data, headersData, tableId) {
  let resultTable = document.getElementById(tableId);
  let currentTableNode = resultTable.lastChild;

  let table = document.createElement('table');
  let header = document.createElement('tr');

  headersData.forEach(name => {
    let hName = document.createTextNode(name);
    let h = document.createElement('th');

    h.appendChild(hName);
    header.appendChild(h);
  });

  table.appendChild(header);

  data.forEach(item => {
    let row = generateRow(item);
    table.appendChild(row);
  });

  resultTable.appendChild(table);
  if (currentTableNode != null)
    resultTable.replaceChild(table, currentTableNode);
}

function generateRow(data) {
  let row = document.createElement('tr');

  Object.values(data).forEach(i => {
    let itemText = document.createTextNode(i);
    let cell = document.createElement('td');

    cell.appendChild(itemText);
    row.appendChild(cell);
  });

  return row;
}

function generateForm(formId, tableId, submitId, data, dataHeaders) {
  generateTable(data, dataHeaders, tableId);

  let form = document.getElementById(formId);

  dataHeaders.forEach(header => {
    let l = document.createElement('Label');
    l.innerHTML = header;
    l.setAttribute('for', header);

    let i = document.createElement("input");
    i.setAttribute('type', "text");
    i.setAttribute('id', header);

    form.appendChild(document.createElement('br'));
    form.appendChild(l);
    form.appendChild(i);
  });

  let s = document.getElementById(submitId);
  s.onclick = () => {
    let newData = Array.from(document.querySelectorAll(`#${formId} input`))
      .reduce((acc, input) => ({ ...acc, [input.id]: input.value }), {});

    data.push(newData);
    generateTable(data, dataHeaders, tableId);
  };
}