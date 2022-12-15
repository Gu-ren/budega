import React from "react";
import Dcard from "./Dcard";

const Discount = () => {
  return (
    <>
      <section className="Discount background NewArrivals">
        <div className="container">
          <div className="heading dd_flex">
            <div className="heading-left  f_flex">
              <i class="fa-solid fa-gift"></i>
              <h2>Big Discounts</h2>
            </div>
            <div className="heading-right ">
              <a href="/">View all</a>

              <i className="fa-solid fa-caret-right"></i>
            </div>
          </div>
          <Dcard />
        </div>
      </section>
    </>
  );
};

export default Discount;
