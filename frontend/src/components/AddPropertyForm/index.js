import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AddPropertyForm.css";

function AddPropertyForm() {
  return (
    <div class="main-container">
      <div class="add-property-container">
        <div class="add-property-center">
          <div className="top-form">
            <h2 className="property-form-header">Add Your Property</h2>
            <p className="property-form-subheader">
              Reach millions of renters. Screen applicants.
              <br class="line-break"></br>
              Sign leases. Set up rent payments.
            </p>
          </div>
          <form class="add-property-form">
            <div class="units-radio-container">
              <div class="add-prop-form-half-size">
                <input
                  type="radio"
                  name="radio"
                  className="units-radio"
                  value="Single Unit"
                  id="single-radio"
                ></input>

                <label class="radio-label" for="single-radio">
                  <i class="fa-solid fa-person-shelter"></i>
                  Single Unit
                </label>
              </div>

              <div class="add-prop-form-half-size">
                <input
                  type="radio"
                  name="radio"
                  className="units-radio"
                  value="Multiple Units"
                  id="multi-radio"
                ></input>
                <label class="radio-label" for="multi-radio">
                  <i class="fa-regular fa-building"></i>
                  Multiple Units
                </label>
              </div>
            </div>
            <div class="add-prop-form-full-size">
              <label className="add-prop-user-input">
                Address
                <input type="text"></input>
              </label>
            </div>
            <div class="city-state-container">
              <div class="add-prop-form-half-size">
                <label className="add-prop-user-input">
                  city
                  <input class="city-state-input" type="text"></input>
                </label>
              </div>
              <div class="add-prop-form-half-size">
                <label className="add-prop-user-input">
                  state
                  <input class="city-state-input" type="text"></input>
                </label>
              </div>
            </div>
            <div class="zipcode-container">
              <div class="add-prop-form-half-size">
                <label className="add-prop-user-input">
                  zip code
                  <input type="text"></input>
                </label>
              </div>
            </div>
            <div class="add-prop-form-full-size">
              <label className="add-prop-user-input">
                Property Type
                <select>
                  <option>Apartment</option>
                  <option>Single Family House</option>
                  <option>Condominum</option>
                  <option>Townhouse</option>
                  <option>Mobile Home/Manufactured Home</option>
                </select>
              </label>
            </div>
            <div className="beds-baths-container">
              <div className="add-prop-form-half-size">
                <label className="add-prop-user-input">
                  Beds
                  <select id="beds-baths-select">
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
              <div class="add-prop-form-half-size">
                <label className="add-prop-user-input">
                  Baths
                  <select id="beds-baths-select">
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
            <div className="add-prop-form-full-size">
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
      <div class="footer"></div>
    </div>
  );
}
export default AddPropertyForm;
