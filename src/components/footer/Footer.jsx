import React from "react";
import "./Footer.css";
import logo from "../../assets/NavLogo.png";
import { Link } from "react-router-dom";
import insta from '../../assets/instaimg.png';
import yt from '../../assets/ytimg.png';
import fb from '../../assets/fbimg.png'

const Footer = () => {
  return (
    <div className="footer">

      <div className="footer-item">
      
        <div className="foot-logo">
          <img src={logo} alt="" />
          <p>Gift & Decoration Store</p>
        </div>

        <ul className="foot-menu">
          <li>
            {" "}
            <Link style={{ textDecoration: "none", color: "#E8ECEF"}} to="/">
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link style={{ textDecoration: "none", color: "#E8ECEF"}} to="/shop">
              Shop
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link style={{ textDecoration: "none",color: "#E8ECEF" }} to="/product">
              Product
            </Link>{" "}
          </li>
          <li>
            <Link style={{ textDecoration: "none",color: "#E8ECEF" }} to="/contactUs">
              Blog
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none",color: "#E8ECEF" }} to="/contactUs">
              Contact us
            </Link>
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <div className="copyright">
          <p className="reserve-right">Copyright © 2023 3legant. All rights reserved</p>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
        
        <ul className="social">
          <li><img src={insta} alt="" /></li>
          <li><img src={yt} alt="" /></li>
          <li><img src={fb} alt="" /></li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
