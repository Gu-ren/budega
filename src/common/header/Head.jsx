import React from "react";

const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left .row">
            <label> Free shipping on orders ₱ 2,000+</label>
          </div>
          <div className="right .row RText">
            <label>Theme FAQ"s</label>
            <label>Need Help?</label>
            <i className="fa fa-envelope"></i>
            <label> budega@gmail.com</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
