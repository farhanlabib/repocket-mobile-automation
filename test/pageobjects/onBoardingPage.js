const Page = require('./page');

class OnboardingPage extends Page {
  get nextButton() {
    return $('~Next');
  }

  get startNowButton() {
    return $('~Start Now');
  }

  get startAppOnBootNotNowBtn() {
    return $('~Not now');
  }

  get startAppOnBootEnableBtn() {
    return $('~Enable');
  }

  get earningBtn() {
    return $('~Start earning');
  }

  get skipBtn() {
    return $('~Skip');
  }

  async tapNextNTimes(n) {
    for (let i = 0; i < n; i++) {
      await this.click(this.nextButton);
    }
  }

  async tapStartNowBtn() {
    await this.click(this.startNowButton);
  }

  async tapStartAppOnBootBtn(choice) {
    if (choice === 'Enable') {
      await this.click(this.startAppOnBootEnableBtn);
    } else {
      await this.click(this.startAppOnBootNotNowBtn);
    }
  }

  async tapEarningBtn() {
    await this.click(this.earningBtn);
  }

  async tapSkipOnHomepage() {
    await this.click(this.skipBtn);
  }
  
}

module.exports = new OnboardingPage();
