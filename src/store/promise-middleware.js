import { LOADING, LOADED, ERROR } from "../app/reducers";
const isPromise = val => val && typeof val.then === "function";

export default ({ dispatch }) => next => async action => {
  if (!isPromise(action.payload)) return next(action);

  const { type, payload } = action;
  dispatch({ type: LOADING });

  try {
    const result = await payload;
    dispatch({
      type,
      payload: result
    });
    dispatch({ type: LOADED });
    return result;
  } catch (err) {
    dispatch({
      type: ERROR,
      payload: err
    });
    throw err;
  }
};
