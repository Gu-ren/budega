import React from "react";
import Catg from "./Catg";
import ShopCart from "./ShopCart";
import "./style.css";

const Shop = ({ addToCart, shopItems }) => {
  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <Catg />

          <div className="contentWidth">
            <div className="heading dd_flex">
              <div className="heading-left   f_flex">
                <h2>Top Sales</h2>
              </div>
              <div className="heading-right  ">
                <a href="/">
                  {" "}
                  <span>View all</span>
                </a>

                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
            <div className="product-content  grid1">
              <ShopCart addToCart={addToCart} shopItems={shopItems} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
