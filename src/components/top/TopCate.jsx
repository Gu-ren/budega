import React from "react";
import "./style.css";
import TopCart from "./TopCart";

const TopCate = () => {
  return (
    <>
      <section className="TopCate background">
        <div className="container">
          <div className="heading dd_flex">
            <div className="heading-left   f_flex">
              <i className="fa-solid fa-border-all"></i>
              <h2>Top Categories</h2>
            </div>
            <div className="heading-right  ">
              <a href="/">
                <span>View all</span>
              </a>
              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <TopCart />
        </div>
      </section>
    </>
  );
};

export default TopCate;
