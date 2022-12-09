import csrfFetch from "./csrf.js";

// ACTION TYPES
const RECEIVE_USER = "users/RECEIVE_USER";
const REMOVE_USER = "users/REMOVE_USER";

// ACTION CREATORS
export const receiveUser = (user) => ({
  type: RECEIVE_USER,
  payload: user,
});

// THUNK ACTION CREATORS
export const loginUser = (user) => async (dispatch) => {
  let res = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify(user),
  });
  let data = await res.json();

  sessionStorage.setItem("currentUser", JSON.stringify(data.user));

  dispatch(receiveUser(data.user));
};

export const logoutUser = (userId) => async (dispatch) => {
  let res = await csrfFetch("/api/session", {
    method: "DELETE",
  });

  if (res.ok) {
    sessionStorage.setItem("currentUser", null);
    dispatch(receiveUser(userId));
  }
};

export const createUser = (user) => async (dispatch) => {
  let res = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });
  let data = await res.json();
  sessionStorage.setItem("currentUser", JSON.stringify(data.user));
  dispatch(receiveUser(data.user));
};

const usersReducer = (state = {}, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_USER:
      nextState[action.payload.id] = action.payload;
      return nextState;
    case REMOVE_USER:
      delete nextState[action.userId];
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
