import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaRegStar } from "react-icons/fa";

export const CatProd = () => {
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
  }, []);

  console.log(products);

  return (
    <div>
      <div className="container mt-4 mb-3">
        <div className="d-flex ">
          <h3 className="col-3">CATEGORY PRODUCTS</h3>
          <hr className="col-3 ms-3" />
          <NavLink className="col-1 ms-2">ACCESSORIES</NavLink>
          <NavLink className="col-1 ms-2">ATOMTRONICS</NavLink>
          <NavLink className="col-1 ms-3">NIGHT LAMPS</NavLink>
          <NavLink className="col-1 ms-3">INDUCTION</NavLink>
          <NavLink className="col-1 ms-2">LAMP</NavLink>
        </div>
        <div className="d-flex">
        <div className="row">
            <div className="col-4">
              <img src="/images/electronic/285x375.jpg " alt="" />
            </div>
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

                    <p className="text-center">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </p>
                    <h4 className="text-center">{value.title}</h4>

                    <p className="text-center">$ {value.price}.00</p>
                    {/* <p className=" text-center">{value.description}</p> */}
                  </Link>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    </div>
  );
};
