# 📱 Repocket App Mobile Automation Framework

Welcome to the automation framework for testing the **Repocket App** bandwidth sharing functionality! 🚀  
This project automates critical user flows using **WebdriverIO**, **Appium**, **Mocha**, and **JavaScript**.

---

## 📂 Project Structure

```bash
mobile-automation/
├── node_modules/
├── test/
│   ├── specs/
│   │   └─ test.e2e.js           # Main test scenarios
│   ├── pageobjects/
│   │   ├─ page.js               # Base Page class
│   │   ├─ loginPage.js          # Login screen actions
│   │   ├─ onboardingPage.js     # Onboarding flow actions
│   │   └─ homePage.js           # Home screen actions
│   └── utils/
│       └─ deviceUtils.js        # Device control utilities (like internet toggle)
├── package.json
├── wdio.conf.js                 # WebdriverIO Configuration
├── README.md                    # (You are here!)
```

---

## 🛠️ Prerequisites

Make sure you have the following installed and configured before running the tests:

| Tool | Purpose |
|:-----|:--------|
| Node.js (v18+) | JavaScript runtime |
| NPM | Dependency manager (comes with Node.js) |
| Java JDK | Required for Appium |
| Android Studio | Required for Emulator and SDK tools |
| Appium | Mobile automation server |
| WebdriverIO | Automation framework |

---

## ⚙️ Environment Setup

**Mandatory Environment Variables:**

| Variable | What It Should Point To |
|:---------|:------------------------|
| `JAVA_HOME` | Path to your Java JDK (e.g., `/Library/Java/JavaVirtualMachines/jdk-17.jdk/Contents/Home`) |
| `ANDROID_HOME` | Path to your Android SDK (e.g., `/Users/yourusername/Library/Android/sdk`) |

**Also Add to Your PATH:**
- `$ANDROID_HOME/platform-tools`
- `$ANDROID_HOME/emulator`
- `$JAVA_HOME/bin`

✅ Ensure emulator is running before starting the tests.

---

## 🚀 How to Run the Project

1. **Clone the repository:**

```bash
git clone https://github.com/farhanlabib/repocket-mobile-automation.git
cd mobile-automation
```

2. **Install project dependencies:**

```bash
npm install
```

3. **Install Allure CLI globally (for report generation):**

```bash
npm install -g allure-commandline --save-dev
```

4. **Start Appium server manually:**

```bash
npx appium
```

5. **Run your test cases:**

```bash
npm run test
```

6. **Generate and open Allure report:**

```bash
npm run report
```

*(This command will clean old results, generate new Allure report, and open it automatically.)*

---

## 🧲 What This Test Automation Covers

- **Login Flow**
  - Enter email and password.
  - Submit login and land on homepage.
- **Onboarding Flow**
  - Tap 'Next' 2 times.
  - Tap 'Start Now'.
  - Handle 'Start App on Boot' permission ('Enable' or 'Not Now').
- **HomePage Bandwidth Sharing**
  - Verify bandwidth sharing status (Connected / Stop Sharing).
- **Negative Testing**
  - Disable internet from device.
  - Try enabling bandwidth sharing.
  - Verify **'No Internet Connection'** toast appears.

---

## ✨ Technologies Used

- WebdriverIO
- Appium
- Mocha
- Allure Reporting
- JavaScript (Node.js)

---

## 📊 Test Reporting

- **Allure** report generation integrated.
- After each run, you can easily generate a beautiful, detailed test report.
- To open the latest report:

```bash
npm run report
```

---

## 💡 Future Enhancements

- CI/CD integration (GitHub Actions / Jenkins).
- Add deeper network scenarios (airplane mode, 2G/3G mode testing).
- API validations for backend connectivity.
- Performance metrics (app load and transition timings).

---

## 👨‍💻 Author

**Farhan Labib**  
Senior Specialist QA Engineer

Built this automation framework as part of a professional interview challenge.  
✅ [GitHub Repository](https://github.com/farhanlabib/repocket-mobile-automation)  
📹 [Test Execution Video](https://jam.dev/c/a9e89fa1-d636-4978-92ff-ae83e3213af2)

---

