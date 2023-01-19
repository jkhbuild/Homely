import csrfFetch from "./csrf.js";

const RECEIVE_LIKE = "likes/RECEIVE_LIKE";
const RECEIVE_LIKES = "likes/RECEIVE_LIKES";
const REMOVE_LIKE = "likes/REMOVE_LIKE";

export const receiveLikes = (likes) => ({
  type: RECEIVE_LIKES,
  likes,
});

export const receiveLike = (like) => ({
  type: RECEIVE_LIKE,
  like,
});

export const removeLike = (like) => ({
  type: REMOVE_LIKE,
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

export const deleteLike = (likeId) => async (dispatch) => {
  let res = await csrfFetch(`/api/like/${likeId}`, {
    method: "DELETE",
  });
  if (res.ok) {
    dispatch(removeLike(likeId));
    return likeId;
  }
};
