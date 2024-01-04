import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";


export const ProductList = () => {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    const getproducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3002/api/product/getProducts"
        );
        const data = await response.data;
        setproducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getproducts();
  }, [products]);

  console.log(products);

  return (
    <>
      <div className="container ">
        <div className="d-flex">
          <h2 className="col-3">LATEST PRODUCT </h2>
          <hr className="col-8" />
        </div>
        <div className="row  mt-3 mb-3 d-flex ">
          {products.map((value, index) => (
            <div className="col-3" key={index}>
       
              <div className=" mb-3">
                <Link
                  to={`products/${value._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <img
                    src="/images/laptop/27-300x298.jpg"
                    className=""
                    alt="gggg"
                  />

                  <p className="text-center text-warning">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </p>
                  <h6  className="text-center">{value.title}</h6>

                  <p className="text-center">$ {value.price}.00</p>
                  {/* <p className=" text-center">{value.description}</p> */}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
