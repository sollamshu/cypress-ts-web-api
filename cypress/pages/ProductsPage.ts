import { BasePage } from './BasePage';
import { ProductsLocators } from '../locators/ProductsLocators';

export class ProductsPage extends BasePage {
  constructor() {
    super();
  }

  verifyUserIsLoggedIn() {
    cy.get(ProductsLocators.header.TITLE_TEXT)
      .should('be.visible')
      .and('contain', 'Products');

    cy.url().should('include', '/inventory.html');
  }
}
