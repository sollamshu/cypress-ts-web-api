export class BasePage {
  constructor() {}

  navigate(url: string): void {
    cy.visit(url);
  }

  verifyPageTitle(title: string): void {
    cy.title().should('eq', title);
  }

  verifyElementVisible(locator: string, timeout: number = 10000): void {
    cy.get(locator, { timeout }).should('be.visible');
  }

  clickSafely(locator: string): void {
    cy.get(locator).should('be.enabled').click();
  }

  fillSafely(locator: string, value: string): void {
    cy.get(locator).should('be.enabled').type(value);
  }
}
