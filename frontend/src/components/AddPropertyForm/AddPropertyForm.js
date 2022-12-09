import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import "./LoginForm.css";

function AddPropertyForm() {
  return (
    <div class="main-container">
      <div class="add-property-container">
        <div class="add-property-center">
          <h2>Add Your Property</h2>
          <p>
            Reach millions of renters. Screen applicants.
            <br class="line-break"></br>
            Sign leases. Set up rent payments.
            <form class="add-property-form">
              <div>
                <input type="radio" value="Single Unit"></input>
              </div>
              <div>
                <input type="radio" value="Multiple Units"></input>
              </div>
              <div>
                <label>
                  Address
                  <input type="text"></input>
                </label>
              </div>
              <div>
                <label>
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
              <div>
                <label>
                  <select>
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
              <div>
                <label>
                  Baths
                  <select>
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
              <div>
                <button>Add My Property</button>
              </div>
              <div>
                <p>
                  By clicking Add My Property above, I agree that I will provide
                  accurate and nondiscriminatory information and I will comply
                  with the Homely.com Terms and Conditions and the Add a
                  Property Terms of Service
                </p>
              </div>
            </form>
          </p>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  );
}
export default AddPropertyForm;
