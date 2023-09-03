import React from "react";

const Nav = () =>{
    return(
        <div className="Nav-bar">
            <img className="Nav-logo" src="/brandlogo.png" alt="Logo" />
            <div className="Nav-links">
            <a href="/request">Dashboard</a> 
            <a href="/login">Login</a> 
            <a href="/signup">Signup</a>
            </div>
        </div>
    );
};

export default Nav;