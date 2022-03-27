import React from "react";
import { Link } from "react-router-dom";
import Category from "../Categories/Category";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src="https://i.ibb.co/GVnPhTc/logo.webp" alt="logo" />
      <nav className="nav">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link className="btn-blog" to="/blog">
              Blog
            </Link>
          </li>
          <li>
            <Link className="btn-contact" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="btn-login" to="/login">
              Login
            </Link>
          </li>
        </ul>  
      </nav>
    </div>
  );
};

export default Header;

{/* <a href="https://imgbb.com/"><img src="https://i.ibb.co/VB4JGVG/Frame.png" alt="Frame" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/MSY9PnW/Frame-1.png" alt="Frame-1" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/7zCNRdY/Frame-2.png" alt="Frame-2" border="0"></a>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/vQVhNXm/Group.png" alt="Group" border="0"></a> */}
