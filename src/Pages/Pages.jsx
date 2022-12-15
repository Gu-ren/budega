import React from "react";
import FlashDeals from "../components/flashDeals/FlashDeals";
import Home from "../components/MainPage/Home";
import TopCate from "../components/top/TopCate";
import NewArrivals from "../components/newarrivals/NewArrivals";
import Discount from "../components/discount/Discount";
import Shop from "../components/shops/Shop";
import Announcement from "../components/announcement/Announcement";
import Wrapper from "../components/wrapper/Wrapper";

const Pages = ({ productItems, addToCart, shopItems }) => {
  return (
    <>
      <Home />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
      <TopCate />
      <NewArrivals />
      <Discount />
      <Shop shopItems={shopItems} addToCart={addToCart} />
      <Announcement />
      <Wrapper />
    </>
  );
};

export default Pages;
