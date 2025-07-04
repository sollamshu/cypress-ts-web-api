import { BasePage } from './BasePage';
import { LoginLocators } from '../locators/LoginLocators';

export class LoginPage extends BasePage {
  constructor() {
    super();
  }

  navigateToHomePage() {
    this.navigate(Cypress.env('WEB_BASE_URL'));
    this.verifyPageTitle('Swag Labs');
  }

  login(username: string, password: string) {
    this.fillSafely(LoginLocators.signIn.USERNAME_INPUT, username);
    this.fillSafely(LoginLocators.signIn.PASSWORD_INPUT, password);
    this.clickSafely(LoginLocators.signIn.LOGIN_BUTTON);
  }
}
