import React, { useEffect, useState } from "react";
import axios from "axios";

// eslint-disable-next-line

const Category = () => {
  const [catogary, setCatogary] = useState([]);
  useEffect(() => {
    const fetctchCat = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3002/api/catogary/getAllCatogary"
        );
        const data = await res.data;
        setCatogary(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetctchCat();
  });

  return (
    <>
      {" "}
      <div className="container ">
        <h2>TOP CATEGORY </h2>
        <div className="row  mt-3 mb-3 d-flex ">
          {catogary.map((value, index) => (
            <div className="col-3 ">
              <div className="card  mb-3" key={index}>
                <img src="/images/5-1-360x400_t.jpg" className="" />
              </div>
            </div>
          ))}
        </div>{" "}
      </div>
    </>
  );
};

export default Category;
