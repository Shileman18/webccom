import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


export const FeatureProduct = () => {
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
    <div className="container-fluid bg-light">
      
      <div className="container ">
      <h2 className="">FEATURED PRODUCTS</h2>
        <div className="d-flex">
        <div className="row  mt-4 mb-4 d-flex ">
          {products.map((value, index) => (
        
             
             <Link   to='/singleProduct'      >
                 <div className="col-md-4" key={index}>
             <div className="card  mb-4" >
                <div className="card-body d-flex ">
                  <div className="col">
                    
                      <img
                        src="/images/laptop/22-300x298.jpg"
                      alt="thhd"
                        className=""
                        width={80}
                      />
                    
                  </div>
                  <div className="col">
                    <h3 className=" text-center">{value.title}</h3>
                    <p className="text-center">{value.price}00 rupees</p>
                  </div>
                </div>
              </div>
              
            </div>
             </Link>
             



          ))}
        </div>{" "}
        <div className="row">
          <div className="col-md-8">
            <img src="/images/laptop/27-300x298.jpg" alt="ttt" className="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
