export class ApiUtils {
  static get(endpoint: string) {
    return cy.request('GET', `${Cypress.env('REQRES_API_URL')}/${endpoint}`);
  }

  static post(endpoint: string, body: object) {
    return cy.request(
      'POST',
      `${Cypress.env('REQRES_API_URL')}/${endpoint}`,
      body
    );
  }
}
