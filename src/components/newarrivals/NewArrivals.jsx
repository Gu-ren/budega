import React from "react";
import Cart from "./Cart";
import "./style.css";

const NewArrivals = () => {
  return (
    <>
      <section className="NewArrivals background">
        <div className="container">
          <div className="heading dd_flex">
            <div className="heading-left .row  f_flex">
              <i class="fa-sharp fa-solid fa-star"></i>
              <h2>New Arrivals </h2>
            </div>

            <div className="heading-right .row ">
              <a href="/"> View all</a>

              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>

          <Cart />
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
