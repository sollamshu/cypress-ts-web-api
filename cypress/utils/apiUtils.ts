export class ApiUtils {
  static get(endpoint: string) {
    return cy.request('GET', `${Cypress.env('API_BASE_URL')}/${endpoint}`);
  }

  static post(endpoint: string, body: object) {
    return cy.request(
      'POST',
      `${Cypress.env('API_BASE_URL')}/${endpoint}`,
      body
    );
  }
}
