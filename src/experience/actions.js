import experiencesApi from "../services/experiences-Api";
import {
  EXPERIENCE_LOAD,
  DELETE_EXP,
  EXPERIENCE_ADD,
  LOAD_USER_EXP,
  ADD_IMAGE_TO_EXP,
  DELETE_IMAGE_FROM_EXP,
  ADD_COMMENT_TO_EXP
} from "./reducers";

export function loadExp(id) {
  return {
    type: EXPERIENCE_LOAD,
    payload: experiencesApi.get(id)
  };
}

export function addExperience(exp) {
  return {
    type: EXPERIENCE_ADD,
    payload: experiencesApi.post(exp)
  };
}

export function loadExpByUser(id) {
  return {
    type: LOAD_USER_EXP,
    payload: experiencesApi.getUserExp()
  };
}

export function deleteExp(id) {
  return async dispatch => {
    await dispatch({
      type: DELETE_EXP,
      payload: experiencesApi.delete(id).then(() => id)
    });
    dispatch({
      type: LOAD_USER_EXP,
      payload: experiencesApi.getUserExp()
    });
  };
}

export function addImageToExp(id, data) {
  return {
    type: ADD_IMAGE_TO_EXP,
    payload: experiencesApi.postImage(id, data).then(image => ({
      _id: id,
      image
    }))
  };
}

export function DeleteImage(id, imageId) {
  return {
    type: DELETE_IMAGE_FROM_EXP,
    payload: experiencesApi.deleteImage(id, imageId).then(() => ({
      exp: id,
      image: imageId
    }))
  };
}

export function addCommentToExp(id, comment) {
  return {
    type: ADD_COMMENT_TO_EXP,
    payload: experiencesApi.postComment(id, comment).then(() => ({
      exp: id,
      comment
    }))
  };
}
