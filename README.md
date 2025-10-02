
# Repeto

<p align="center">
  <img src="https://img.shields.io/github/stars/CodeCompasss/repeto?style=social" alt="GitHub Repo stars" />
  <img src="https://img.shields.io/github/forks/CodeCompasss/repeto?style=social" alt="GitHub forks" />
  <img src="https://img.shields.io/github/issues/CodeCompasss/repeto" alt="GitHub issues" />
  <img src="https://img.shields.io/github/last-commit/CodeCompasss/repeto" alt="GitHub last commit" />
</p>

Repeto is a curated platform for discovering **high-quality, recurring opportunities** for B.Tech Computer Science students.  
Find the best scholarships, hackathons, research programs, open source projects, and internships—all in one place.

---

## 🚀 Features

- **Curated Opportunities**: Only the best and most reputable scholarships, hackathons, research programs, open source contributions, and internships.
- **For B.Tech CS Students**: All listings are relevant for Computer Science undergraduates.
- **Recurring & Updated**: Focus on opportunities that repeat or are available every year/semester.
- **Powerful Filtering**: Search and filter by department, year, type, exclusivity, and more.
- **One-Stop Platform**: No more hunting across dozens of sites—Repeto brings it all together.

---

## 🎬 Demo

![Repeto Demo](./repeto.gif)

---

## 🏁 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/CodeCompasss/repeto.git
cd repeto
npm install
````

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📊 Adding Your Data

We support **Excel → CSV → JSON** conversion for adding opportunities.

1. Add your data in an **Excel sheet**.
2. Save it as **CSV** (e.g., `scholarships.csv`, `hackathons.csv`) inside the `convert/` folder.
3. Convert it to JSON:

   ```bash
   cd convert
   node repeoecitnv.js scholarships.csv
   node repeoecitnv.js hackathons.csv
   ```

   JSON files will be generated.
4. Move them into the `data/` folder (e.g., `data/scholarships.json`).

---

## ⚡ Build for Production

```bash
npm run build
npm start
# or
yarn build && yarn start
```

---

## 🗂️ Opportunity Types

* **Scholarships**: Financial aid and merit-based awards.
* **Hackathons**: Coding competitions and innovation sprints.
* **Research**: Research internships, fellowships, and assistantships.
* **Open Source**: Programs and projects for contributing to open source.
* **Internships**: Paid and unpaid industry internships.

---

## ✨ Why Repeto?

* **Quality Over Quantity** – Only high-quality, recurring opportunities are listed.
* **No Spam** – No expired, scammy, or irrelevant listings.
* **Student-Focused** – Built for and by students.

---

## 🤝 Contributing

We welcome contributions from everyone! 🎉
Please check our [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

---

## 📜 Code of Conduct

This project follows the [Code of Conduct](./CODE_OF_CONDUCT.md). By participating, you agree to uphold it.

---

**Repeto** — *Repeat the best, skip the rest.*

