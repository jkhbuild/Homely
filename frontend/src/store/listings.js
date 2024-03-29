import csrfFetch from "./csrf.js";

// ACTION TYPES
const RECEIVE_LISTINGS = "listings/RECEIVE_LISTINGS";
const RECEIVE_LISTING = "listings/RECEIVE_LISTING";
const REMOVE_LISTING = "listings/REMOVE_LISTING";
const SEARCH_LISTINGS = "listings/SEARCH_LISTINGS";

// ACTION CREATORS
export const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  listings,
});
export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  payload: listing,
});
export const removeListing = (listing) => ({
  type: REMOVE_LISTING,
  payload: listing,
});
export const searchListings = (listings) => ({
  type: SEARCH_LISTINGS,
  listings,
});

// selectors
export const getListings = (state) =>
  state.listings ? Object.values(state.listings) : [];

export const getListing = (listingId) => (state) =>
  state.listings[listingId] ? state.listings[listingId] : {};

// THUNK ACTION CREATORS
export const fetchUserListings = (ownerId) => async (dispatch) => {
  const res = await csrfFetch(`/api/users/${ownerId}/listings`);
  if (res.ok) {
    const data = await res.json();
    dispatch(searchListings(data));
    return data;
  }
};
export const fetchSearchedListings = (query) => async (dispatch) => {
  let res = await csrfFetch(`/api/listings?query=${query}`);
  if (res.ok) {
    let data = await res.json();
    dispatch(searchListings(data));
    return data;
  }
};

export const fetchListings = () => async (dispatch) => {
  let res = await csrfFetch(`/api/listings`);

  if (res.ok) {
    let data = await res.json();
    // dispatch(receiveListings(data.listings));
    dispatch(receiveListings(data));
    return data;
  }
};

export const fetchListing = (listingId) => async (dispatch) => {
  let res = await csrfFetch(`/api/listings/${listingId}`);

  if (res.ok) {
    let data = await res.json();
    dispatch(receiveListing(data.listing));
  }
};

export const createListing = (listing) => async (dispatch) => {
  let res = await csrfFetch(`/api/listings`, {
    method: "POST",
    body: JSON.stringify(listing),
  });
  if (res.ok) {
    let data = await res.json();
    dispatch(receiveListing(data.listing));
    // check if return needed
    // return data.listing;
    return data;
  }
  return res;
};

export const updateListing = (listing) => async (dispatch) => {
  let res = await csrfFetch(`/api/listings/${listing.id}`, {
    method: "PATCH",
    body: JSON.stringify(listing),
  });

  if (res.ok) {
    let data = await res.json();
    dispatch(receiveListing(data));
  }
};

export const deleteListing = (listingId) => async (dispatch) => {
  let res = await csrfFetch(`/api/listings/${listingId}`, {
    method: "DELETE",
  });

  if (res.ok) {
    dispatch(removeListing(listingId));
    return listingId;
  }
};

const listingsReducer = (state = {}, action) => {
  const nextState = { ...state };
  switch (action.type) {
    case RECEIVE_LISTING: {
      nextState[action.payload.id] = action.payload;
      return nextState;
    }
    case RECEIVE_LISTINGS: {
      return { ...nextState, ...action.listings };
    }
    case REMOVE_LISTING: {
      delete nextState[action.listing.id];
      return nextState;
    }
    case SEARCH_LISTINGS: {
      return { ...action.listings };
    }
    default:
      return state;
  }
};

export default listingsReducer;
