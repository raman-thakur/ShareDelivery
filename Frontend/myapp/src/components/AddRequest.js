import React from "react";
import { useEffect, useState } from "react";
import { IconButton } from "rsuite"; 
import PinIcon from '@rsuite/icons/Pin'; 
import "rsuite/dist/rsuite.min.css"; 
import Nav from './NavBar'
const AddRequest = () =>{


  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      // const { latitude, longitude } = position.coords;
      // setCurrLocation({ latitude, longitude });
      document.getElementById("location").value = position.coords.latitude + "," + position.coords.longitude;
    });
  };
  
    return(
        <div>
            <div className='sticky-nav'>
                <Nav/>
            </div>
           <form 
           action="http://localhost:8000/request"
           method="POST"
           className="form-ui"
           id="request-form"
           >
           <div className="form-row">
                  <label className="label">Required Order val:</label>
                  <div className="form-input">
                    <input
                      type="number"
                      name="requiredvalue"
                      id="requiredvalue"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Contact Number:</label>
                  <div className="form-input">
                    <input
                      type="number"
                      name="contact"
                      id="contact"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Remaining Time Hrs:</label>
                  <div className="form-input">
                    <input
                      type="number"
                      name="deadlinehours"
                      id="deadlinehours"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Website Name:</label>
                  <div className="form-input">
                    <input
                      type="string"
                      name="website"
                      id="website"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Address:</label>
                  <div className="form-input">
                    <input
                      type="string"
                      name="address"
                      id="address"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">PinCode:</label>
                  <div className="form-input">
                    <input
                      type="number"
                      name="pincode"
                      id="pincode"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Location:</label>
                  <input type="string" className="location-input" name="location" id="location" />
                  <button type="button" onClick={getLocation} className="locate-button">Locate me</button>
                </div>
                <div className="login-button">
                <button type="submit" form="request-form">Add Request</button>
                </div>
           </form>
        
        </div>
    );
};

export default AddRequest;