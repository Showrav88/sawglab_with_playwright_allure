# 1. Use the Playwright image as the base
FROM mcr.microsoft.com/playwright:v1.55.0-jammy

# 2. Install Java (Required for Allure)
RUN apt-get update && apt-get install -y default-jre

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# 3. Run tests and then generate Allure report
CMD ["sh", "-c", "npx playwright test && npx allure generate allure-results --clean"]