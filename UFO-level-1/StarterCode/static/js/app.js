// from data.js
let tableData = data;

tableData.forEach(appendTable);

let button = d3.select("#filter-btn");
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
    d3.select("tbody").html("");
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");

    let inputValue = inputElement.property('value');

    console.log(inputValue);
    console.log(tableData);

    let filteredData = tableData.filter(table => table.datetime === inputValue);

    console.log(filteredData);

    filteredData.forEach(appendTable);
};

function appendTable(report) {
    let tbody = d3.select("tbody");
    let row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
        let cell = row.append("td");
        cell.text(value)
    })
};