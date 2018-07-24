export const FEED_LOAD = "FEED_LOAD";

export function feed(state = [], { type, payload }) {
  switch (type) {
    case FEED_LOAD:
      return payload;
    default:
      return state;
  }
}
