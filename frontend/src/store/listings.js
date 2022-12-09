import csrfFetch from "./csrf.js";

// ACTION TYPES
const RECEIVE_LISTINGS = "listings/RECEIVE_LISTING";
const ADD_LISTING = "listings/ADD_LISTINGS";
const REMOVE_LISTING = "listings/REMOVE_LISTINGS";

// ACTION CREATORS
const receiveListings = (listings) => ({
  type: RECEIVE_LISTINGS,
  payload: listings,
});
export const addListing = (listing) => ({
  type: ADD_LISTING,
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
    dispatch(receiveListings(listings));
  }
};

export const fetchListing = (listingId) => async (dispatch) => {};

export const createListing = (listing) => async (dispatch) => {
  let res = await csrfFetch(`/api/listings`, {
    method: "POST",
    body: JSON.stringify(listing),
  });
  if (res.ok) {
    let data = await res.json();
    dispatch(addListing(data.listing));
    // check if return needed
    return res;
  }
};
