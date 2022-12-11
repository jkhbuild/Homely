import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import "./EditPropertyForm.css";

function EditPropertyForm() {
  const dispatch = useDispatch;
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(id);
  };

  return (
    <div>
      <form>
        <div className="edit-form-header">
          <h1>Properties</h1>
          <button>Save</button>
          <button>Publish</button>
        </div>

        <div>
          <p>address here</p>
          <button>view all properties</button>
        </div>

        <div>
          <img className="placeholderimg"></img>
        </div>

        <div>
          <p>Basic Info</p>
          <div>
            <p>Beds</p>
            <p>Baths</p>
            <p>Sq. Foot.</p>
            <p>Rent</p>
            <p>Deposit</p>
            <p>Lease Length</p>
            <p>Available On</p>
          </div>
          <div>
            <select>
              <option>studio</option>
              <option>1.0</option>
              <option>2.0</option>
              <option>3.0</option>
              <option>4.0</option>
              <option>5.0</option>
              <option>6.0</option>
            </select>
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
            <input type="text"></input>
            <input type="text"></input>
            <input type="text"></input>
            <input type="date"></input>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditPropertyForm;
