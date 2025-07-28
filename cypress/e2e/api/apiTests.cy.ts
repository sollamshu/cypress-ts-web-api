import { ApiUtils } from '../../utils/apiUtils';

describe('API Tests', () => {
  it('Verify user can register accounts via POST /api/users', () => {
    cy.fixture('apiData').then((apiData) => {
      ApiUtils.post('users', apiData.registerData).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('firstName', apiData.registerData.firstName);
        expect(response.body).to.have.property('lastName', apiData.registerData.lastName);
        expect(response.body).to.have.property('gender', apiData.registerData.gender);
        expect(response.body).to.have.property('birthDay', apiData.registerData.birthDay);
        expect(response.body).to.have.property('id');
      });
    });
  });
});
