import React from "react";
import Nav from './NavBar'
const Register = () =>{
    return(
        <div>
            <div className='sticky-nav'>
                <Nav/>
            </div>
           <form 
           action="http://localhost:8000/register"
           method="POST"
           className="form-ui">
           <div className="form-row">
                  <label className="label">Name:</label>
                  <div className="form-input">
                    <input
                      type="text"
                      name="name"
                      id="name"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Email:</label>
                  <div className="form-input">
                    <input
                      type="text"
                      name="email"
                      id="email"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Phone:</label>
                  <div className="form-input">
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Pincode:</label>
                  <div className="form-input">
                    <input
                      type="number"
                      name="pincode"
                      id="pincode"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">City/Vill:</label>
                  <div className="form-input">
                    <input
                      type="text"
                      name="city"
                      id="city"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Landmark:</label>
                  <div className="form-input">
                    <input
                      type="text"
                      name="landmark"
                      id="landmark"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <label className="label">Password:</label>
                  <div className="form-input">
                    <input
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
                <div className="login-button">
                <button>Signup</button>
                </div>
           </form>
        
        </div>
    );
};

export default Register;