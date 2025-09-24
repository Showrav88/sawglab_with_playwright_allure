# 🧪 Playwright + Allure Report Automation

This project is an **end-to-end test automation framework** built with [Playwright](https://playwright.dev/) and [Allure Reports](https://allurereport.org/).  

It automates test cases against the [SauceDemo](https://www.saucedemo.com/) sample application with multiple user types and generates **interactive reports** via **Allure + Playwright HTML Reporter**.  

---

## 🚀 Features

- ✅ Playwright test automation (cross-browser support)  
- ✅ Multiple test projects (`standard-user`, `performance-glitch-user`, `locked-out-user`)  
- ✅ Allure reporting (rich test insights)  
- ✅ Playwright HTML report (fallback, CI-friendly)  
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

```bash
git clone https://github.com/Showrav88/sawglab_with_playwright_allure.git
cd sawglab_with_playwright_allure




