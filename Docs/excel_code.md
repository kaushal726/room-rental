const validRows = [
"id",
"title",
"description",
"contact",
"rent",
"numbersOfBedRooms",
"numbersOfWashroom",
"numbersOfKitchen",
"balcony",
"images",
"isAvaliable",
];

function doGet() {
let doc = SpreadsheetApp.getActiveSpreadsheet();
let sheet = doc.getSheetByName("Rent");
let values = sheet.getDataRange().getValues();
let output = [];

// Iterate over each row starting from the second row (index 1)
for (let i = 1; i < values.length; i++) {
let row = {};

    // Iterate over the valid rows and map each column by index
    validRows.forEach((field, index) => {
      // Safely access the column index from the row and assign it to the field
      row[field] = values[i][index] || null; // Use null in case of missing values
    });

    output.push(row);

}

return ContentService.createTextOutput(JSON.stringify({ data: output }))
.setMimeType(ContentService.MimeType.JSON);
}
