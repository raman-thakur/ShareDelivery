import React from "react";
import Nav from './NavBar'
const AddRequest = () =>{
    return(
        <div>
            <div className='sticky-nav'>
                <Nav/>
            </div>
           <form 
           action="http://localhost:8000/request"
           method="POST"
           className="form-ui">
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
                <div className="login-button">
                <button>Add Request</button>
                </div>
           </form>
        
        </div>
    );
};

export default AddRequest;