# Repocket App Mobile Automation Framework

Welcome to the automation framework for testing the **Repocket App** bandwidth sharing functionality! 🚀

This project automates critical user flows using **WebdriverIO**, **Appium**, and **Mocha** with **JavaScript**.

---

## 📊 Project Structure

```bash
mobile-automation/
├── node_modules/
├── test/
│   ├── specs/
│   │   └─ test.e2e.js         # Main test file
│   ├── pageobjects/
│   │   ├─ page.js             # Base Page class
│   │   ├─ loginPage.js         # Login screen actions
│   │   ├─ onboardingPage.js    # Onboarding flow actions
│   │   └─ homePage.js          # Home screen actions
│   └─ utils/
│       └─ deviceUtils.js      # Device control utilities (internet toggle)
├── package.json
├── wdio.conf.js          # WDIO Configuration
├── README.md             # (You are here!)
```

---

## 🔧 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/farhanlabib/repocket-mobile-automation.git
cd mobile-automation
```

2. **Install dependencies:**

```bash
npm install
```

3. **Install Allure CLI globally:**

```bash
npm install -g allure-commandline --save-dev
```

4. **Start Appium server manually:**

```bash
npx appium
```

5. **Make sure Android emulator is running!**

6. **Run your tests:**

```bash
npm run test
```

7. **Generate Allure Report:**

After running tests, to generate and open the report:

```bash
npm run report
```

*("report" script automatically cleans old reports, generates new one, and opens it.)*

---

## 🔬 Technologies Used

- **WebdriverIO**: Browser and mobile automation framework.
- **Appium**: Native mobile app automation.
- **Mocha**: Test framework.
- **Allure Reports**: Rich test reports.
- **Node.js**: Backend environment.


---

## 🔍 Key Features

- **Page Object Model (POM)** structure for scalability and easy maintenance.
- **Positive & Negative tests** for bandwidth sharing.
- **Device Internet Control** via helper functions.
- **Error Handling** and **Toast Validation**.
- **Allure HTML Reports** with screenshots.
- **Pre-setup hooks and post-cleanup ready**.


---

## 🌐 Future Improvements

- Integrate with GitHub Actions / Jenkins for CI/CD pipeline.
- Add performance monitoring (transition time measurement).
- Add API level validation (if backend APIs available).
- Expand negative test coverage (e.g., airplane mode cases).

---

## 👋 Author

**Farhan Labib**  
Senior Specialist, QA Engineer  

(Framework built during interview automation challenge)

---

## 🔍 Important Commands

| Task | Command |
|:------|:---------|
| Install project dependencies | `npm install` |
| Run Appium server | `npx appium` |
| Run test cases | `npx run test` |
| Generate & open Allure report | `npm run report` |
