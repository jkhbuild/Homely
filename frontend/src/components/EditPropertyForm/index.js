import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import GoogleStaticMap from "react-google-static";
import * as PropertyActions from "../../store/listings";
import "./EditPropertyForm.css";
import S3FileUpload from "react-s3";

function EditPropertyForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [sf, setSf] = useState("");
  const [rent, setRent] = useState("");
  const [deposit, setDeposit] = useState("");
  const [availableOn, setAvailableOn] = useState("");
  const [isPublished, setisPublished] = useState(false);
  const [errors, setErrors] = useState([]);
  const { listingId } = useParams();
  const listing = useSelector(PropertyActions.getListing(listingId));

  const config = {
    bucketName: "homely-dev",
    dirName: "Uploads",
    region: "us-east-1",
    accessKeyId: "homely-dev",
    secretAccessKey: process.env.REACT_APP_AWS_KEY,
  };

  // if (!listing.photosUrl) {
  //   listing.photos.attach((('https://homely-dev.s3.amazonaws.com/Stock+Photos/photo4.jpeg'), filename: 'photo4.jpeg'))
  // }

  useEffect(() => {
    dispatch(PropertyActions.fetchListing(listingId));
  }, [listingId, dispatch]);

  const upload = (e) => {
    S3FileUpload.uploadFile(e.target.files[0], config)
      .then((data) => {
        console.log(data.location);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisPublished(true);

    return dispatch(
      PropertyActions.updateListing({
        ...listing,
        beds,
        baths,
        sf,
        rent,
        deposit,
        availableOn,
        isPublished,
      })
    )
      .then(() => {
        history.push(`/`);
      })
      .catch(async (res) => {
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
  };

  return (
    <div className="edit-property-main-container">
      <div className="edit-property-container">
        <div className="edit-property-main-content">
          <form className="edit-property-form" onSubmit={handleSubmit}>
            <div className="edit-property-header">
              {/* <ul>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                ))}
              </ul> */}
              <h1>{listing.propertyType} Details</h1>
              {/* <button>Save</button> */}
              <button type="submit">Publish</button>
            </div>

            <div className="edit-property-subheader">
              <div className="edit-property-subheader-left">
                <h2>
                  {listing.address}, {listing.city}, {listing.state},{" "}
                  {listing.zipCode}
                </h2>
              </div>
              <div className="edit-property-subheader-right">
                <button>view all properties</button>
                <i className="fa-solid fa-angle-right"></i>
              </div>
            </div>

            <div className="edit-property-google-maps">
              <GoogleStaticMap
                apiKey={process.env.REACT_APP_STATIC_MAPS_API_KEY}
                latitude={listing.latitude}
                longitude={listing.longitude}
                size={{ width: 1100, height: 150 }}
                scale={2}
                zoom={15}
                iconUrl="https://icons8.com/icon/dPzhTqM4Ay0T/map-marker.png"
              />
            </div>

            <div className="edit-property-table">
              <div className="edit-property-table-headers">
                <div className="beds-column">
                  <p className="x1-table-header">Beds</p>
                </div>
                <div className="baths-column">
                  <p className="x1-table-header">Baths</p>
                </div>
                <div className="sf-column">
                  <p className="x1-table-header">Sq. Foot.</p>
                </div>
                <div className="rent-column">
                  <p className="x1-table-header">Rent</p>
                </div>
                <div className="deposit-column">
                  <p className="x1-table-header">Deposit</p>
                </div>
                <div className="lease-column">
                  <p className="x1-table-header">Lease Length</p>
                </div>
                <div className="availableon-column">
                  <p className="x1-table-header">Available On</p>
                </div>
              </div>
              <div className="edit-property-table-data">
                <div className="beds-column">
                  <select
                    className="x1-table-data"
                    onChange={(e) => setBeds(e.target.value)}
                  >
                    <option value="" defaultValue hidden>
                      Select
                    </option>
                    <option>studio</option>
                    <option>1.0</option>
                    <option>2.0</option>
                    <option>3.0</option>
                    <option>4.0</option>
                    <option>5.0</option>
                    <option>6.0</option>
                  </select>
                </div>
                <div className="baths-column">
                  <select
                    className="x1-table-data"
                    onChange={(e) => setBaths(e.target.value)}
                  >
                    <option value="" defaultValue hidden>
                      Select
                    </option>
                    <option>0.5</option>
                    <option>1.0</option>
                    <option>1.5</option>
                    <option>2.0</option>
                    <option>2.5</option>
                    <option>3.0</option>
                    <option>4.0</option>
                    <option>4.5</option>
                    <option>5.0</option>
                    <option>5.5</option>
                    <option>6.0</option>
                    <option>6.5</option>
                  </select>
                </div>
                <div className="sf-column">
                  <input
                    type="text"
                    className="x1-table-data"
                    id="sf"
                    value={sf}
                    placeholder="SF"
                    onChange={(e) => setSf(e.target.value)}
                  ></input>
                </div>
                <div className="rent-column">
                  <input
                    type="text"
                    className="x1-table-data"
                    id="rent"
                    value={rent}
                    placeholder="$ / mo"
                    onChange={(e) => setRent(e.target.value)}
                  ></input>
                </div>
                <div className="deposit-column">
                  <input
                    type="text"
                    className="x1-table-data"
                    id="deposit"
                    value={deposit}
                    placeholder="$0"
                    onChange={(e) => setDeposit(e.target.value)}
                  ></input>
                </div>
                <div className="lease-column">
                  <input
                    type="text"
                    className="x1-table-data"
                    id="leaseLength"
                    placeholder="12 months"
                  ></input>
                </div>
                <div className="availableon-column">
                  <input
                    type="date"
                    className="x1-table-data"
                    id="availableOn"
                    value={availableOn}
                    onChange={(e) => setAvailableOn(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <div className="listing-photo-upload">
              <input type="file" onChange={upload} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditPropertyForm;
