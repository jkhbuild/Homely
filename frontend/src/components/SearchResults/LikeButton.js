import React, { useEffect, useRef, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as LikeActions from "../../store/likes";

function LikeButton({ listing, sessionUser }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const sessionUserId = sessionUser.id;

  useEffect(() => {
    dispatch(LikeActions.fetchLikes(sessionUserId));
  }, [sessionUserId, dispatch]);

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/listings/${listing.id}/show`);
  };
}
export default LikeButton;
