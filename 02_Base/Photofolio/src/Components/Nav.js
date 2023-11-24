import React from "react";
import navStyle from "./nav.module.css";
import logo from "../../src/logo.png";
const Nav = () => {
    return(
        <>
            <div className={navStyle.nav}>
                <img src={logo} alt="logo" style={{height: 90 , width: 100}}/>
                <span className={navStyle.heading}> PhotoFolio</span>
            </div>
        </>
    )
}
export  default  Nav;