import csrfFetch from "./csrf.js";

const RECEIVE_LIKES = "listings/RECEIVE_LIKES";

export const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes,
});

export const getLikes = (userId) => (state) =>
  state.likes[userId] ? state.listings[userId] : {};
