class Page {
    async click(element) {
      await element.waitForDisplayed();
      await element.click();
    }
  
    async type(element, value) {
      await element.waitForDisplayed();
      await element.clearValue();
      await element.click();
      await element.setValue(value);  // <-- this works in Android
    }
  }
  
  module.exports = Page;
  