import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
        <h2>LATEST PRODUCT </h2>
        <div className="row  mt-3 mb-3 d-flex ">
          {products.map((value, index) => (




              <div className="col-3 " key={index}>
                <div className="card  mb-3">
                  
            <Link to={`products/${value._id}`}>
                  <img src="/images/laptop/27-300x298.jpg" className="" alt="gggg" />
                  <div className="cord-body">
                    <h3 className="cord-title text-center">{value.title}</h3>
                  </div>
                  <p className="cord-text text-center">
                    {value.price}00 rupees
                  </p>
                  <p className="cord-text text-center">{value.description}</p>
                  </Link>
                </div>
              </div>
         




          ))}
        </div>
      </div>
    </>
  );
};
