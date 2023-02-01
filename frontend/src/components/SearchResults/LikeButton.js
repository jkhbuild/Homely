import React, { useEffect, useRef, useState, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as LikeActions from "../../store/likes";

function LikeButton({ listing, sessionUser }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const sessionUserId = sessionUser.id;
  const usersLikes = useSelector(LikeActions.getLikes);

  useEffect(() => {
    dispatch(LikeActions.fetchLikes(sessionUserId));
  }, [sessionUserId, dispatch]);

  const isLiked = (listingId) => {
    let listingLike = usersLikes.filter((like) => like.listingId === listingId);
    if (listingLike.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleLike = (e, listingId) => {
    e.preventDefault();
    setErrors([]);

    let listingLike = usersLikes.filter((like) => like.listingId === listingId);

    if (isLiked(listingId)) {
      dispatch(
        LikeActions.createLike({
          listingId,
        })
      ).catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    } else {
      dispatch(LikeActions.deleteLike(listingLike[0].id)).catch(async (res) => {
        let data;
        try {
          data = await res.clone().json();
        } catch {
          data = await res.text();
        }
        if (data?.errors) setErrors(data.errors);
        else if (data) setErrors([data]);
        else setErrors([res.statusText]);
      });
    }
  };

  return (
    <>
      <button
        className="listing-card-favorite"
        onClick={(e) => handleLike(e, listing.id)}
      >
        <i className="fa-regular fa-heart"></i>
      </button>
    </>
  );
}
export default LikeButton;
