import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as PropertyActions from "../../store/listings";
import "./ShowListing.css";

function ShowListing() {
  const dispatch = useDispatch();
  const { listingId } = useParams();
  const listing = useSelector(PropertyActions.getListing(listingId));

  useEffect(() => {
    dispatch(PropertyActions.fetchListing(listingId));
  }, [listingId, dispatch]);

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   console.log(listing);
  // };
  return (
    <div>
      <div className="showlisting-main-container">
        <div className="top-page">
          <div className="image-carousel-container">
            {/* <button class="carousel-prev" onClick={handleClick}>
              <i class="fa-solid fa-angle-left"></i>
            </button>
            <button class="carousel-next">
              <i class="fa-solid fa-angle-right"></i>
            </button> */}
            <div className="carousel-slide1">
              <div className="carousel-mainphoto">
                <img
                  className="listing-show-image"
                  src={listing.photosUrl[0]}
                  alt="logo"
                />
              </div>
            </div>
            {/* <div className="carousel-slide2">placeholder</div> */}
          </div>
        </div>
        <div className="showlisting-bottom">
          <div className="showlisting-bottomleft">
            <div className="showlisting-property-info">
              <div className="showlisting-navlinks">
                <a href="/"> Home /&nbsp; </a>
                <a href={`/search/` + listing.state}>
                  {" "}
                  {listing.state} /&nbsp;
                </a>
                <a href={`/search/` + listing.city}>{listing.city} /&nbsp;</a>
                <h1>&nbsp;{listing.address}</h1>
              </div>
              <div className="showlisting-main-header-container">
                <h1 className="showlisting-main-header">
                  {listing.address} {listing.unit}
                </h1>
                <h4 className="showlisting-main-subheader">
                  {listing.city}, {listing.state} {listing.zipCode}
                </h4>
              </div>
              <div className="showlisting-info-table">
                <div className="showlisting-rent">
                  <h4 className="showlisting-info-table-header">
                    Monthly Rent
                  </h4>
                  <h4 className="showlisting-info-table-data">
                    ${listing.rent}
                  </h4>
                </div>
                <div className="showlisting-beds">
                  <h4 className="showlisting-info-table-header">Bedrooms</h4>
                  <h4 className="showlisting-info-table-data">
                    {listing.beds} bd
                  </h4>
                </div>
                <div className="showlisting-baths">
                  <h4 className="showlisting-info-table-header">Bathrooms</h4>
                  <h4 className="showlisting-info-table-data">
                    {listing.baths} ba
                  </h4>
                </div>
                <div className="showlisting-sf">
                  <h4 className="showlisting-info-table-header">Square Feet</h4>
                  <h4 className="showlisting-info-table-data">
                    {listing.sf} sq ft
                  </h4>
                </div>
              </div>
              <div className="showlisting-description">
                <h1 className="showlisting-description-header">
                  About This Property
                </h1>
                <p className="showlisting-description-data">
                  {listing.description}
                </p>
              </div>
            </div>
          </div>
          <div className="showlisting-bottomright">
            <h1 className="contact-card-header">Contact this site owner</h1>
            <div className="contact-card-link-container">
              <a
                className="contact-card-github"
                href="https://github.com/jkhbuild"
              >
                <i class="fa-brands fa-github-alt"></i>
                GitHub
              </a>
            </div>
            <div className="contact-card-link-container">
              <a
                className="contact-card-linkedin"
                href="https://www.linkedin.com/in/jhpond-45569272/"
              >
                <i class="fa-brands fa-linkedin"></i>
                Linkedin
              </a>
            </div>
            <div className="contact-card-link-container">
              <a
                className="contact-card-readme"
                href="https://github.com/jkhbuild/Homely/wiki"
              >
                <i class="fa-brands fa-readme"></i>
                Homely Wiki
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowListing;
