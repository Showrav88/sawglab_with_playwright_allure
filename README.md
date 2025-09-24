S# 🧪 Playwright + Allure Report Automation

This project is an **end-to-end test automation framework** built with [Playwright] and [Allure Reports](https://showrav88.github.io/sawglab_with_playwright_allure/).  

It automates test cases against the [SauceDemo](https://www.saucedemo.com/) sample application with multiple user types and generates **interactive reports** via **Allure Reporter**.  

---

## 🚀 Features

- ✅ Playwright test automation 
- ✅ Multiple test projects (`standard-user`, `performance-glitch-user`, `locked-out-user`)  
- ✅ Allure reporting (rich test insights)    
- ✅ GitHub Actions CI/CD with Allure report deployment to **GitHub Pages**  

---

## 📂 Project Structure
📦 project-root
┣ 📂 tests/specs # All Playwright test specs
┣ 📂 pages # Page Object Models
┣ 📂 resource # Test data, JSON, etc.
┣ 📂 allure-results # Allure raw results (auto-generated)
┣ 📂 allure-report # Allure HTML report (auto-generated)
┣ 📜 playwright.config.js # Playwright configuration
┣ 📜 package.json # npm scripts & dependencies
┗ 📜 README.md
-----------------------

## ⚙️ Installation

Clone the repo:
## Clone the repo
```bash
git clone https://github.com/Showrav88/sawglab_with_playwright_allure.git
```
## Go inside project folder
```bash
cd sawglab_with_playwright_allure
```
## Install dependencies
```bash
npm install
```
## Install Playwright browsers
```bash
npx playwright install --with-deps
```
### 📜 NPM Scripts
# 🔹 Run all Tests + Generate reports
```bash
npm run test:all:report
```
# Open the Allure report
```bash
npm run allure:open
```
# Run only Standard User tests  + Generate reports 
```bash
npm run test:standard:report
npm run allure:open
```
# Run only Performance Glitch User tests  + Generate reports 
```bash
npm run test:performance:report
npm run allure:open
```
# Run only Locked Out User tests + Generate reports 
```bash
npm run test:locked:report
npm run allure:open
```
### 📊 Reports

Allure Report (GitHub Pages): [Visit my project](https://showrav88.github.io/sawglab_with_playwright_allure/)

### 🔄 Continuous Integration (GitHub Actions)

This project includes a GitHub Actions workflow:

Runs all tests on every push & PR

Generates Allure report

Publishes it automatically to GitHub Pages (branch: gh-pages)

## 🛠 Dependencies

# Main dependencies:

Playwright

Allure Playwright

npm-run-all

rimraf

Install them automatically with:
```bash
npm install
```
## 📌 Notes

. Make sure Java is installed (required for Allure CLI).

. GitHub Pages must be enabled on your repo → branch: gh-pages.

### 🎯 Summary

This framework is designed for:

Clean test organization with Playwright projects

Easy report generation with Allure

Seamless CI/CD pipeline via GitHub Actions






