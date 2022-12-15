import React from "react";

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/3.svg",
      cateName: "Unilever",
    },
    {
      cateImg: "./images/category/1.svg",
      cateName: "Del Monte",
    },

    {
      cateImg: "./images/category/2.svg",
      cateName: "P&G",
    },

    {
      cateImg: "./images/category/4.svg",
      cateName: "Nestle",
    },
    {
      cateImg: "./images/category/5.svg",
      cateName: "Oishi",
    },
    {
      cateImg: "./images/category/6.svg",
      cateName: "Rebisco",
    },
  ];
  return (
    <>
      <div className="category2 ">
        <div className="chead dd_flex">
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className=" box f_flex " key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
        <div className="box box2">
          <button>View All Brands</button>
        </div>
      </div>
    </>
  );
};

export default Catg;
