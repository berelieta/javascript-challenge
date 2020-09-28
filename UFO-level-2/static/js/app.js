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
    var tbody = d3.select("tbody");
    var inputdate = d3.select("#datetime");
    var inputcountry = d3.select("#country")
    var inputstate = d3.select("#state")
    var inputcity = d3.select("#city")
    var inputshape = d3.select("#shape")
    tbody.html("");
    var filteredData = data.filter(sighting => (inputdate.property("value") === "" || sighting.datetime === inputdate.property("value")) &&
    (inputcity.property("value") === "" ||sighting.city === inputcity.property("value")) &&
    (inputstate.property("value") === "" ||sighting.state === inputstate.property("value")) &&
    (inputcountry.property("value") === "" ||sighting.country === inputcountry.property("value")) &&
    (inputshape.property("value") === "" ||sighting.shape === inputshape.property("value")));
    console.log(filteredData)

    filteredData.forEach(ufo_info => {
    console.log(ufo_info);
    var row = tbody.append("tr");
        
    Object.entries(ufo_info).forEach(([key, value]) => {
            console.log(key, value);
            var column = row.append("td");
            column.text(value);

            var tbody = d3.select("tbody");
        });
    });
})

// Loading of the javascript.
init()