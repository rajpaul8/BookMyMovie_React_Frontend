import "./Header.css";
import HeaderLogo from "../../assets/logo.svg";
import React from "react";

export default function Header(props){
return(
 <div className="headerContainer">
      <img className="headerLogo" alt="Header Logo" src={HeaderLogo} />
 </div>

)
}

