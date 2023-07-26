import React from "react";

const Nav = () =>{
    return(
        <div className="Nav-bar">
            <img className="Nav-logo" src="/brandlogo.png" alt="Logo" />
            <div className="Nav-links">
            <a href="/">Dashboard</a> 
            <a href="/">Login</a> 
            <a href="/">Signup</a>
            </div>
        </div>
    );
};

export default Nav;