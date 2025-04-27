const Page = require('./page');

class HomePage extends Page {
  get connectedStatus() {
    return $('~Connected');
  }

  get stopSharingInternetButton() {
    return $('~Stop sharing internet');
  }

  get noInternetToast() {
    return $('android=new UiSelector().descriptionContains("No internet")');
  }

  async isBandwidthSharing(timeout = 10000) {
    try {
      await this.connectedStatus.waitForDisplayed({ timeout });
      await this.stopSharingInternetButton.waitForDisplayed({ timeout });

      const isConnectedDisplayed = await this.connectedStatus.isDisplayed();
      const isStopSharingDisplayed = await this.stopSharingInternetButton.isDisplayed();

      return isConnectedDisplayed && isStopSharingDisplayed;
    } catch (error) {
      console.error('⚠️ Bandwidth sharing elements not properly displayed:', error.message);
      return false;
    }
  }

  async verifyNoInternetToast() {
    await this.noInternetToast.waitForDisplayed({ timeout: 5000 });
    await expect(this.noInternetToast).toBeDisplayed();
}


}

module.exports = new HomePage();
