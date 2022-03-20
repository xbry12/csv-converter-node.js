// use index.js to export functionality

// example: var product = require('./product)

// module.exports = { create: product.create}

// organize node.js application around product features/pages/components

let csvToJson = require("convert-csv-to-json");

let fileInputName = "/csv-converter-node.js/csv-file/MOCK_DATA.csv";

let fileOutputName = "myOutputFile.json";

csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName);

let json = csvToJson.getJsonFromCsv("./csv-file/MOCK_DATA.csv");

for (let i = 0; i < json.length; i++) {
  console.log(json[i]);
}
