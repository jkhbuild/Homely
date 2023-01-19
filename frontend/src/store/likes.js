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

export const removeLike = (listingId) => ({
  type: REMOVE_LIKE,
  listingId,
});

export const getLikes = (state) =>
  state.likes ? Object.values(state.likes) : [];

// export const getUsersLikes = (userId) => (state) => {
//   if (state.likes) {

//   }
// }

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
    // headers: { "Content-Type": "application/json" },
    body: JSON.stringify(like),
  });
  if (res.ok) {
    let data = await res.json();
    dispatch(receiveLike(data));
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
      nextState[action.like.like.id] = action.like.like;
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
