export class ApiUtils {
  private static getHeaders() {
    return {
      'x-api-key': Cypress.env('API_BASE_KEY')
    };
  }

  static get(endpoint: string) {
    return cy.request({
      method: 'GET', 
      url: `${Cypress.env('API_BASE_URL')}/${endpoint}`,
      headers: ApiUtils.getHeaders()
    });
  }

  static post(endpoint: string, body: object) {
    return cy.request({
      method: 'POST',
      url: `${Cypress.env('API_BASE_URL')}/${endpoint}`,
      headers: ApiUtils.getHeaders(),
      body: body
    });
  }
}