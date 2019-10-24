import React from "react";
import "./Header.css";

const Header = ()=>{
    
    return (
    <div className="row topHeader text-center">
        <div className="col-4 leftHeader d-flex justify-content-center align-items-center">
            <h2> This is a header</h2>
        </div>
        <div className="col-4 middleHeader d-flex justify-content-center align-items-center">
            <h2> This is a middle header</h2>
        </div>
        <div className="col-4 rightHeader d-flex justify-content-center align-items-center" >
            <h2> This is a right  header</h2>
        </div>
    </div>
    )}


export default Header;