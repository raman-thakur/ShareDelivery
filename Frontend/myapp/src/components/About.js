import React from "react";

const Landing = () =>{
    return(
        <div className="Landing">
            <div className="love-shoping">
            <div>
            <h3>Paying delivery charges for online shoping?</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            <img src="/sharedelivery1.png" alt="Logo" />
            </div>
            <div className="we-solve">
            <img src="/sharedelivery3.png" alt="Logo" />
            <div>
                <h3>Don't worry we will solve your problem</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>
            </div>
            <h3 className="logos-heading">Order anywhere from these without paying delivery charges</h3>
            <div className="available-on">
            <img src="/amazon-logo.png" className="amazonlogo" alt="Logo" />
            <img src="/flipkart-logo.png" className="flipkartlogo" alt="Logo" />
            <img src="/myntra-logo.png" className="myntralogo" alt="Logo" />
            <img src="/ajio-logo.png" className="ajiologo"alt="Logo" />
            </div>
        </div>
    );
};

export default Landing;