import experiencesApi from "../services/experiences-Api";
import { FEED_LOAD } from "./reducers";

export function loadFeed() {
  return (dispatch, getState) => {
    dispatch({
      type: FEED_LOAD,
      payload: experiencesApi.search()
    });
  };
}
