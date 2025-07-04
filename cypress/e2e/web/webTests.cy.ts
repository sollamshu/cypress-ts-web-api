import { LoginPage } from '../../pages/LoginPage';
import { ProductsPage } from '../../pages/ProductsPage';

describe('Web Tests', () => {
  let loginPage: LoginPage;
  let productsPage: ProductsPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    productsPage = new ProductsPage();
    loginPage.navigateToHomePage();
  });

  it('Verify user is able to login with valid credentials', () => {
    cy.fixture('webData').then((webData) => {
      loginPage.login(webData.signIn.username, webData.signIn.password);
    });

    productsPage.verifyUserIsLoggedIn();
  });
});
