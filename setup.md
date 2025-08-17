# Repeto Project Setup Guide

This guide will help you set up the Repeto Next.js project, add your data using Excel, convert it to JSON, and build the project for production.

---

## 1. Clone the Repository

```bash
git clone https://github.com/CodeCompasss/repeto.git
cd repeto
```

---

## 2. Install Dependencies

```bash
npm install
# or
yarn install
```

---

## 3. Add Your Data Using Excel

1. **Open existing Excel**
2. Add new data and save it, then go to convert.
3. **Save the file as CSV** (e.g., `scholarships.csv`, `hackathons.csv`, etc.) in the `convert/` folder.

---

## 4. Convert Excel/CSV Data to JSON

1. Place your CSV files in the `convert/` directory.
2. In the terminal, navigate to the `convert/` folder:

    ```bash
    cd convert
    ```

3. Run the conversion script using Node.js (replace `scholarship.js` with your actual script name if different):

    ```bash
    node repeoecitnv.js scholarships.csv
    node repeoecitnv.js hackathons.csv
    # Repeat for other CSV files as needed
    ```

4. The script will generate JSON files (e.g., `scholarships.json`, `hackathons.json`) in the appropriate data directory.

---

## 5. Move JSON Files

- Move or copy the generated JSON files from the `convert/` folder to the `data/` folder in your project root (e.g., `data/scholarships.json`).

---

## 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

- Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

---

## 7. Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

---

## Notes

- Make sure your JSON files match the expected structure in the codebase.
- If you update your data, repeat the conversion process and replace the old JSON files.

---

**You're all set! Enjoy using Repeto to discover and share recurring opportunities for B.Tech CS students.**