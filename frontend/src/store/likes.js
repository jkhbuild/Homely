import csrfFetch from "./csrf.js";

const RECEIVE_LIKE = "likes/RECEIVE_LIKE";
const RECEIVE_LIKES = "likes/RECEIVE_LIKES";

export const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes,
});

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});

export const getLikes = (userId) => (state) =>
  state.likes[userId] ? state.likes[userId] : {};

export const createLike = (like) => async (dispatch) => {
  let res = await csrfFetch("/api/likes", {
    method: "POST",
    body: JSON.stringify(like),
  });
  if (res.ok) {
    let data = await res.json();
    dispatch(receiveLike(data.like));
  }
};
