import { combineReducers } from "redux";
import * as ACTIONS from "./constants";

export default (state = {}, action) =>
  combineReducers({ user, token, error, checkedToken })(state, action);

export function user(state = null, { type, payload }) {
  switch (type) {
    case ACTIONS.SET_CURRENT_USER:
    case ACTIONS.UPDATE_PROFILE:
      return payload;
    case ACTIONS.LOAD_USER_EXP:
      return { ...state, experiences: payload };
    case ACTIONS.LOGOUT:
    case ACTIONS.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

export function token(state = null, { type, payload }) {
  switch (type) {
    case ACTIONS.GOT_TOKEN:
      return payload;
    case ACTIONS.LOGOUT:
    case ACTIONS.AUTH_FAILED:
      return null;
    default:
      return state;
  }
}

export function error(state = null, { type, payload }) {
  switch (type) {
    case ACTIONS.AUTH_FAILED:
      return payload;
    case ACTIONS.LOGOUT:
    case ACTIONS.GOT_TOKEN:
    case ACTIONS.SET_CURRENT_USER:
      return null;
    default:
      return state;
  }
}

export function checkedToken(state = false, { type, payload }) {
  switch (type) {
    case ACTIONS.CHECKED_TOKEN:
    case ACTIONS.SET_CURRENT_USER:
    case ACTIONS.AUTH_FAILED:
      return true;
    default:
      return state;
  }
}
