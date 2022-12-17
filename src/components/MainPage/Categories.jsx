import React from "react";

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/1.png",
      cateName: "Alcohol & Cigarettes",
    },
    {
      cateImg: "./images/category/2.png",
      cateName: "Baby Products",
    },
    {
      cateImg: "./images/category/3.png",
      cateName: "Beverages",
    },
    {
      cateImg: "./images/category/4.png",
      cateName: "Canned Goods",
    },
    {
      cateImg: "./images/category/5.png",
      cateName: "Condiments & Sauces ",
    },
    {
      cateImg: "./images/category/6.png",
      cateName: "Household Care",
    },
    {
      cateImg: "./images/category/7.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "./images/category/8.png",
      cateName: "Personal Care",
    },

    {
      cateImg: "./images/category/9.png",
      cateName: "School Supplies",
    },
    {
      cateImg: "./images/category/10.png",
      cateName: "Sweets",
    },
    {
      cateImg: "./images/category/11.png",
      cateName: "Snacks",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box f_flex" key={index}>
              <a href="#">
                <img src={value.cateImg} alt="" />
                <span>{value.cateName}</span>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Categories;
