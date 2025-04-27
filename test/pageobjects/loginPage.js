const Page = require('./page');

class LoginPage extends Page {
  get emailInput () {
    return $$('android.widget.EditText')[0];
  }

  get passwordInput () {
    return $$('android.widget.EditText')[1];
  }

  get alreadyHaveAccountBtn () {
    return $('~I already have an account');
  }

  get loginBtn () {
    return $('~Login')
  }

  async tapAlreadyHaveAccount() {
    await this.click(this.alreadyHaveAccountBtn);
  }

  async login(email, password) {
    await this.type(this.emailInput, email);
    await this.type(this.passwordInput, password);
    await this.click(this.loginBtn);
  }
  
}

module.exports = new LoginPage();
