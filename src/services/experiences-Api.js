import { request } from './request';

const URL = '/experiences';

export default {
  search(query = '') {
    return request.get(`${URL}/search/${query}`);
  },
  get(id) {
    return request.get(`${URL}/${id}`);
  },
  getUserExp() {
    return request.get(`${URL}/user`);
  },
  post(exp) {
    return request.post(`${URL}`, exp);
  },
  postImage(id, image) {
    return request.post(`${URL}/${id}/images`, image);
  },
  postComment(id, comment) {
    return request.post(`${URL}/${id}/comments`, comment);
  },
  deleteImage(id, imageId) {
    return request.delete(`${URL}/${id}/images/${imageId}`);
  },
  delete(id) {
    return request.delete(`${URL}/${id}`);
  }
};
