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

export const fetchLikes = (userId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${userId}/likes`);
  if (res.ok) {
    const data = await res.json();
    dispatch(receiveLikes(data));
    return data;
  }
};

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

const likeReducer = (state = {}, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_LIKE: {
      nextState[action.id] = action.like;
      return nextState;
    }
    case RECEIVE_LIKES: {
      return { ...nextState, ...action.likes };
    }
    case REMOVE_LIKE: {
      delete nextState[action.like.id];
      return nextState;
    }
    default:
      return state;
  }
};

export default likeReducer;
