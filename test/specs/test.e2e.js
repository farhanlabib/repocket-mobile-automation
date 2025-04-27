const LoginPage = require('../pageobjects/loginPage');
const OnboardingPage = require('../pageobjects/onBoardingPage');
const HomePage = require('../pageobjects/homePage');
const DeviceUtils = require('../utils/deviceUtils');


describe('Repocket App -', () => {

  it('should login and complete onboarding', async () => {
    await LoginPage.tapAlreadyHaveAccount();
    await LoginPage.login('farhanlabibakdui+one@gmail.com', 'test12345');

    await OnboardingPage.tapNextNTimes(2);
    await OnboardingPage.tapStartNowBtn();
    await OnboardingPage.tapStartAppOnBootBtn('Not now');
    await OnboardingPage.tapEarningBtn();
    await OnboardingPage.tapSkipOnHomepage();
  });

  it('should verify bandwidth is being shared on homepage', async () => {
    const isSharing = await HomePage.isBandwidthSharing();
    expect(isSharing).toBe(
      true,
      '❌ Expected "Connected" and "Stop sharing internet" to be visible, but they were not!'
    );
  });

  it('should show no internet toast when trying to share without internet', async () => {
    await DeviceUtils.disableInternet();
    await HomePage.verifyNoInternetToast();
    // await DeviceUtils.enableInternet(); // restore if needed
  });

});
