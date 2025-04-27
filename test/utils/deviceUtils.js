// deviceUtils.js
class DeviceUtils {
    static async disableInternet() {
      // 0 = All network disabled
      await driver.setNetworkConnection(0);
    }
  
    static async enableInternet() {
      // 6 = Enable Wifi and Data
      await driver.setNetworkConnection(6);
    }
  }
  
  module.exports = DeviceUtils;
  