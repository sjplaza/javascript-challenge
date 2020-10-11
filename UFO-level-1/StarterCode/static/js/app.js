// from data.js
let tableData = data;

let button = d3.select("#filter-btn");

let form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    d3.event.preventDefault();

    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property('value');

    console.log(inputValue);
    console.log(tableData);

    let table = tableData.filter(data => tableData.datetime === inputValue);

    console.log(table);

    let date = 

};


