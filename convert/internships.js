import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';  // Make sure to import this

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const excelFilePath = path.join(__dirname, '../excel', 'internships.xlsx');
const jsonFilePath = path.join(__dirname, '../data', 'internships.json');

// Function to convert Excel to JSON
function convertExcelToJson() {
    // Read the Excel file
    const workbook = XLSX.readFile(excelFilePath);

    // Assuming data is in the first sheet
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];

    // Convert sheet data to JSON
    const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // header: 1 reads the first row as headers

    // Remove the header row and process the rest
    const headers = jsonData[0];
    const rows = jsonData.slice(1);

    // Convert each row to an object using the headers as keys
    const formattedData = rows.map(row => {
        const rowObject = {};
        headers.forEach((header, index) => {
            rowObject[header] = row[index];
        });
        return rowObject;
    });

    // Write the JSON data to the specified file
    fs.writeFileSync(jsonFilePath, JSON.stringify(formattedData, null, 2), 'utf-8');
    console.log('Excel data has been converted to JSON!');
}

// Run the conversion
convertExcelToJson();
