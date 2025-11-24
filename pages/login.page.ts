const { I } = inject();

export class LoginPage {

  fields = {
    username: '[data-test="username"]',
    password: '[data-test="password"]'
  };

  loginButton = '[data-test="login-button"]';
  loginInstructionText = 'Accepted usernames are:';
  productsText = 'Products';

  openLoginPage() {
    I.amOnPage('/');
  }

  seeLoginInstructions() {
    I.see(this.loginInstructionText);
  }

  fillUsername(username: string) {
    I.fillField(this.fields.username, username);
  }

  fillPassword(password: string) {
    I.fillField(this.fields.password, password);
  }

  clickLogin() {
    I.click(this.loginButton);
  }

  seeProductsPage() {
    I.see(this.productsText);
  }

  dontSeeLoginInstructions() {
    I.dontSee(this.loginInstructionText);
  }
}
