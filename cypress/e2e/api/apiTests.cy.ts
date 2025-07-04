import { ApiUtils } from '../../utils/apiUtils';

describe('API Tests', () => {
  it('Debería obtener una lista de usuarios (GET)', () => {
    ApiUtils.get('users?page=2').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.page).to.eq(2);
      expect(response.body.data).to.be.an('array');
    });
  });

  it('Debería crear un nuevo usuario (POST)', () => {
    const newUser = {
      name: 'morpheus',
      job: 'leader',
    };

    ApiUtils.post('users', newUser).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property('name', 'morpheus');
      expect(response.body).to.have.property('job', 'leader');
      expect(response.body).to.have.property('id');
      expect(response.body).to.have.property('createdAt');
    });
  });
});
