import { request } from './request';

export default {
  verify() {
    return request.get('/auth/verify');
  },
  signin(credentials) {
    return request.post('/auth/signin', credentials);
  },
  signup(user) {
    return request.post('/auth/signup', user);
  },
  getUser() {
    return request.get('/auth/getuser');
  },
  updateUser(profile) {
    return request.put('/auth/me', profile);
  }
};
