import React from "react";
import Nav from './NavBar'

const Login = () =>{
    return(
        <div>
            <div className='sticky-nav'>
                <Nav/>
            </div>
           <form 
           action="http://localhost:8000/login"
           method="POST"
           className="form-ui">
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
                  <label className="label">Passw:</label>
                  <div className="form-input">
                    <input
                      type="password"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
                <div className="login-button">
                <button>Login</button>
                </div>
           </form>
        
        </div>
    );
};

export default Login;