import React from "react";
import Nav from './NavBar'

const Request = () =>{
    return(
        <div>
            <div className='sticky-nav'>
                <Nav/>
            </div>
        <div className="Request">
            <p className="Site">Flipkart</p>
            <p className="Name">Raman Thakur</p>
            <p className="Address">Address loream ipsum given shwdv wjnjikwc wnnwc</p>
            <p className="Address">pincode</p>
            <p className="Address">800/-</p>
            <p className="Address">deadline</p>
        </div>
        </div>
    );
};

export default Request;