import { LoginPage } from '../pages/login.page';

const loginPage = new LoginPage();
const { I } = inject();

Given('I am on the login page', () => {
  loginPage.openLoginPage();
});

Given('I see the login instructions', () => {
  loginPage.seeLoginInstructions();
});

When('I enter {string} as username', (username: string) => {
  loginPage.fillUsername(username);
});

When('I enter {string} as password', (password: string) => {
  loginPage.fillPassword(password);
});

When('I click the login button', () => {
  loginPage.clickLogin();
});

Then('I should see {string}', (text: string) => {
  I.see(text);
});

Then('I should not see the login instructions', () => {
  loginPage.dontSeeLoginInstructions();
});
