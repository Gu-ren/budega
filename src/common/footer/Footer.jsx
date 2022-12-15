import React from "react";
import "./style.css";
import logo from "../../components/assets/images/logo (3).svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container grid2">
          <div className="footerlogo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
            <p>
              Budega is an online and mobile wholesale retailer that offers
              direct delivery of products via Budega app or website.It can make
              shopping easier for costumers,hustle free,convinient and fun,So
              you can focus on things that really matter.
            </p>
            <div className="icon dd_flex">
              <div className="img d_flex">
                <i class="fa-brands fa-google-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-brands fa-app-store-ios"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box2">
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="box2">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className="box2">
            <h2>Contact Us</h2>
            <ul>
              <li>
                18th floor, The W Fifth Avenue, 5th Ave, Taguig, 1630 Metro
                Manila
              </li>
              <li>Email: budega@gmail.com</li>
              <li>Phone: 09123456789</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
