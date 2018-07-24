export const EXPERIENCE_LOAD = 'EXPERIENCE_LOAD';
export const FEED_LOAD = 'FEED_LOAD';
export const EXPERIENCE_ADD = 'EXPERIENCE_ADD';
export const LOAD_USER_EXP = 'LOAD_USER_EXP';
export const ADD_IMAGE_TO_EXP = 'ADD_IMAGE_TO_EXP';
export const DELETE_EXP = 'DELETE_EXP';
export const DELETE_IMAGE_FROM_EXP = 'DELETE_IMAGE_FROM_EXP';
export const ADD_COMMENT_TO_EXP = ' ADD_COMMENT_TO_EXP';

export function experiences(state = [], { type, payload }) {
  switch (type) {
    case LOAD_USER_EXP:
      return payload;
    case EXPERIENCE_LOAD:
      return [...state.filter(exp => exp._id !== payload._id), payload];
    case DELETE_IMAGE_FROM_EXP:
      return state.map(
        exp =>
          exp._id === payload.exp
            ? {
                ...exp,
                images: [
                  ...exp.images.filter(image => image._id !== payload.image)
                ]
              }
            : exp
      );
    case EXPERIENCE_ADD:
      return state;
    case ADD_IMAGE_TO_EXP:
      return state.map(
        exp =>
          exp._id === payload._id
            ? { ...exp, images: [...exp.images, payload.image] }
            : exp
      );
    case ADD_COMMENT_TO_EXP:
      return state.map(
        exp =>
          exp._id === payload.exp
            ? { ...exp, comments: [...exp.comments, payload.comment] }
            : exp
      );
    case DELETE_EXP:
      return [...state.filter(exp => exp._id !== payload)];
    default:
      return state;
  }
}
