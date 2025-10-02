# CONTRIBUTING.md

```markdown
# Contributing to Repeto

First off, thank you for considering contributing to **Repeto** 💙.  
We welcome all contributions — bug fixes, new features, documentation improvements, and new opportunity data.

---

## 🛠 Ways to Contribute

- 🐛 **Report Bugs**: Found an issue? Open a GitHub issue.  
- ✨ **Add Features**: Suggest or implement new features.  
- 📖 **Improve Docs**: Help us polish the README, guides, and documentation.  
- 📊 **Add Data**: Add new opportunities (scholarships, hackathons, internships, etc.).  

---

## 🚀 Setup Guide for Contributors

1. **Fork the Repo**  
   Click the **Fork** button on GitHub and clone your fork:

   ```bash
   git clone https://github.com/your-username/repeto.git
   cd repeto
   ```

2. **Install Dependencies**  

   ```bash
   npm install
   ```

3. **Run the Dev Server**  

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

---

## 📊 Adding Data

1. Add your opportunities in **Excel**.  
2. Save as **CSV** in the `convert/` folder.  
3. Convert to JSON with:

   ```bash
   cd convert
   node repeoecitnv.js scholarships.csv
   ```

4. Move the generated JSON into the `data/` folder.

---

## 🧑‍💻 Making Changes

1. Create a new branch:

   ```bash
   git checkout -b feature/my-new-feature
   ```

2. Make your changes, commit, and push:

   ```bash
   git add .
   git commit -m "Add: description of changes"
   git push origin feature/my-new-feature
   ```

3. Open a Pull Request on the main repo.  

---

## ✅ Pull Request Guidelines

- Keep PRs small and focused.  
- Write clear commit messages.  
- Ensure the project builds before submitting.  
- If adding data, ensure JSON structure matches existing datasets.  

