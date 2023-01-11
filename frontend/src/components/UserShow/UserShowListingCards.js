import React, { useEffect, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as propertyActions from "../../store/listings";

function UserShowListingCards() {
  const history = useHistory();

  return (
    <>
      <div className="user-show-listingcard"></div>
    </>
  );
}

export default UserShowListingCards;
