// from data.js
var tableData = data;

// YOUR CODE HERE!
//Function to append a table to your webpage- find tbody
function init() { 
    var tbody = d3.select("tbody");

    //looping through each array(ufo_info) and console log it out
    tableData.forEach(ufo_info => {
        console.log(ufo_info); 
        // Append one table row `tr` for each object (ufo_info)
        var row = tbody.append("tr"); 

        // Grabbing object-looking for keys and values
        Object.entries(ufo_info).forEach(([key, value]) => { 
            console.log(key, value);
            // Adding columns by appending "td"
            var column = row.append("td"); 
            column.text(value);
        });
    });
}

 //create var for button and use d3 to find HTML button id --> "filter-btn"
var button = d3.select("#filter-btn");

// Function when button is clicked -callback to function
button.on("click", function () { 
    // Get the value of the input date
    var inputdate = d3.select("#datetime");

    var inputValue = inputdate.property("value");
    console.log(inputValue);

    // Filter Data with date equal to input value- only then we can move forward
    var filteredData = data.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData)
    var tbody = d3.select("tbody");
    tbody.html("");

    // Looping through the filtered data and building the table/rows
    filteredData.forEach(ufo_info => {
        console.log(ufo_info);
        var row = tbody.append("tr");

        Object.entries(ufo_info).forEach(([key, value]) => {
            console.log(key, value);
            var column = row.append("td");
            column.text(value);
        });

    });
})

// Loading of the javascript.
init()