import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as PropertyActions from "../../store/listings";
import { useHistory } from "react-router-dom";
import Geocode from "react-geocode";
import "./AddPropertyForm.css";

function AddPropertyForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [hasMultipleUnits, setHasMultipleUnits] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [beds, setBeds] = useState("");
  const [baths, setBaths] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [errors, setErrors] = useState([]);


  const findLatLng = () => {
    Geocode.setApiKey(process.env.REACT_APP_GEOCODING_API_KEY);
    Geocode.setRegion("us");
    Geocode.fromAddress(address).then(
      (response) => {
        const { lat, lng } = response.results[0].geometry.location;
        setLatitude(lat);
        setLongitude(lng);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    findLatLng();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    findLatLng();

    dispatch(
      PropertyActions.createListing({
        hasMultipleUnits,
        address,
        city,
        state,
        zipCode,
        propertyType,
        longitude,
        latitude,
        beds,
        baths,
      })
    )
      .then(({ listing }) => {
        history.push(`/listings/${listing.id}`);
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
    <div className="main-container">
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <div className="add-property-container">
        <div className="add-property-center">
          <div className="top-form">
            <h2 className="property-form-header">Add Your Property</h2>
            <p className="property-form-subheader">
              Reach millions of renters. Screen applicants.
              <br className="line-break"></br>
              Sign leases. Set up rent payments.
            </p>
          </div>
          <form className="add-property-form" onSubmit={handleSubmit}>
            <div className="units-radio-container">
              <div className="single-unit-container">
                <input
                  type="radio"
                  name="radio"
                  className="units-radio"
                  value={false}
                  id="single-radio"
                  onChange={(e) => setHasMultipleUnits(e.target.value)}
                ></input>

                <label className="radio-label" htmlFor="single-radio">
                  <i className="fa-solid fa-person-shelter"></i>
                  Single Unit
                </label>
              </div>

              <div className="multi-unit-container">
                <input
                  type="radio"
                  name="radio"
                  className="units-radio"
                  value={true}
                  id="multi-radio"
                  onChange={(e) => setHasMultipleUnits(e.target.value)}
                ></input>
                <label className="radio-label" htmlFor="multi-radio">
                  <i className="fa-regular fa-building"></i>
                  Multiple Units
                </label>
              </div>
            </div>
            <div className="address-container">
              <label className="add-prop-user-input">
                Address
                <input
                  type="text"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                ></input>
              </label>
            </div>
            <div className="city-state-container">
              <div className="city-container">
                <label className="add-prop-user-input">
                  City
                  <input
                    className="city-state-input"
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  ></input>
                </label>
              </div>
              <div className="state-container">
                <label className="add-prop-user-input">
                  State
                  <input
                    className="city-state-input"
                    type="text"
                    id="state-input"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  ></input>
                </label>
              </div>
            </div>
            <div className="zipcode-container">
              <div className="zipcode-wrapper">
                <label className="add-prop-user-input">
                  Zip code
                  <input
                    className="zipcode-input"
                    type="text"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                  ></input>
                </label>
              </div>
            </div>
            <div className="propertyType-container">
              <label className="add-prop-user-input">
                Property Type
                <select onChange={(e) => setPropertyType(e.target.value)}>
                  <option value="" defaultValue hidden>
                    Select
                  </option>
                  <option>Apartment</option>
                  <option>Single Family House</option>
                  <option>Condominum</option>
                  <option>Townhouse</option>
                  <option>Mobile Home/Manufactured Home</option>
                </select>
              </label>
            </div>
            <div className="beds-baths-container">
              <div className="bedsbaths-select-container">
                <label className="add-prop-user-input">
                  Beds
                  <select
                    className="beds-select"
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
                </label>
              </div>
              <div className="bedsbaths-select-container">
                <label className="add-prop-user-input">
                  Baths
                  <select
                    className="baths-select"
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
                </label>
              </div>
            </div>
            <div className="add-property-button-container">
              <button className="add-property-button">Add My Property</button>
            </div>
            <div className="add-prop-form-full-size">
              <p className="terms">
                By clicking Add My Property above, I agree that I will provide
                accurate and nondiscriminatory information and I will comply
                with the Homely.com Terms and Conditions and the Add a Property
                Terms of Service
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
}
export default AddPropertyForm;
