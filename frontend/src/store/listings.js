import csrfFetch from "./csrf.js";

// ACTION TYPES
const RECEIVE_LISTINGS = "listings/RECEIVE_LISTINGS";
const RECEIVE_LISTING = "listings/RECEIVE_LISTING";
const REMOVE_LISTING = "listings/REMOVE_LISTINGS";

// ACTION CREATORS
const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  payload: listings,
});
export const receiveListing = (listing) => ({
  type: RECEIVE_LISTING,
  payload: listing,
});
export const removeListing = (listing) => ({
  type: REMOVE_LISTING,
  payload: listing,
});

// THUNK ACTION CREATORS
// check later
export const fetchListings = (listings) => async (dispatch) => {
  let res = await csrfFetch(`/api/listings`);

  if (res.ok) {
    let data = await res.json();
    dispatch(receiveListings(data.listings));
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
    dispatch(receiveListing(data.listing));
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
    default:
      return state;
  }
};

export default listingsReducer;
