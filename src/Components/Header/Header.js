import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/icons/logo.webp";
import Category from "../Categories/Category";
import "../Header/Header.css";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="" />
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
        </ul>  
      </nav>

      <div >
        <Category></Category>
      </div>
    </div>
  );
};

export default Header;
