      function getValueById(elementId) {
  const element = document.getElementById(elementId);
  if (!element) {
      console.warn(`Element with id "${elementId}" not found.`);
      return "";
  }
  return element.value;
}

function getCheckboxValue(elementId) {
  const checkbox = document.getElementById(elementId);
  if (!checkbox) {
      console.warn(`Checkbox with id "${elementId}" not found.`);
      return false;
  }
  return checkbox.checked;
}

function createTable() {
  const rows = parseInt(getValueById("rows"));
  const cols = parseInt(getValueById("cols"));

  if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
      alert("Please enter valid positive numbers for rows and columns.");
      return;
  }

  const tableContainer = document.getElementById("tableContainer");
  if (!tableContainer) {
      alert("Table container not found.");
      return;
  }

  tableContainer.innerHTML = "";
  tableContainer.style.display = "flex";
  tableContainer.style.justifyContent = "center";
  tableContainer.style.alignItems = "center";

  const table = document.createElement("table");
  table.style.borderCollapse = "collapse";

  for (let i = 0; i < rows; i++) {
      const row = table.insertRow();
      for (let j = 0; j < cols; j++) {
          const cell = row.insertCell();
          cell.style.border = "1px solid black";
          cell.style.padding = "20px";
          cell.textContent = "Tekstas";
      }
  }

  tableContainer.appendChild(table);
}

document.getElementById("createTableBtn").addEventListener("click", createTable);
