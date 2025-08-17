import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';  // Make sure to import this

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths to the Excel and JSON files
const excelFilePath = path.join(__dirname, '../excel', 'hackathons.xlsx');
const jsonFilePath = path.join(__dirname, '../data', 'hackathons.json');

// Function to convert Excel to JSON with proper schema
function convertExcelToJson() {
  // Read the Excel file
  const workbook = XLSX.readFile(excelFilePath);

  // Assuming data is in the first sheet
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert sheet data to JSON (object per row)
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  // Transform rows into schema format
  const hackathons = jsonData.map((row) => ({
    id: row["ID"] || "",
    title: row["Title"] || "",
    type: row["Type"] || "Scholarship",
    department: row["Department"] ? row["Department"].split(",").map((d) => d.trim()) : [],
    courseLevel: row["Course Level"] ? row["Course Level"].split(",").map((c) => c.trim()) : [],
    exclusive: row["Exclusive"] || "All",
    year: row["Year"] ? row["Year"].split(",").map((y) => y.trim()) : [],
    lastDateToApply: row["Last Date to Apply"] || "",
    stipend: row["Stipend"] || "",
    eligibility: row["Eligibility"] || "",
    description: row["Description"] || "",
    requirements: row["Requirements"] ? row["Requirements"].split(",").map((r) => r.trim()) : [],
    applicationLink: row["Application Link"] || "",
    category: row["Category"] || "",
    postedDate: row["Posted Date"] || ""
  }));

  // Wrap into object
  const finalJson = { hackathons };

  // Save JSON file
  fs.writeFileSync(jsonFilePath, JSON.stringify(finalJson, null, 2), 'utf-8');
  console.log('✅ Excel data has been converted to structured JSON!');
}

// Run the conversion
convertExcelToJson();
