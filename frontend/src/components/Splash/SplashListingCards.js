import React, { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as propertyActions from "../../store/listings";

function SplashListingCards() {
  const dispatch = useDispatch();
  const query = "Forest Hills";
  const listings = useSelector(propertyActions.getListings);
  useEffect(() => {
    dispatch(propertyActions.fetchSearchedListings(query));
  }, [query, dispatch]);

  return <></>;
}

export default SplashListingCards;
