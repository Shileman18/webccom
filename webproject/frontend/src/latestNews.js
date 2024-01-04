import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import axios from "axios";

const LatestNews = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
      const getNews = async () => {
        try {
          const response = await axios.get(
            "http://localhost:3002/api/product/getProducts"
          );
          const data = await response.data;
          setNews(data);
        } catch (error) {
          console.log(error);
        }
      };
      getNews();
    }, []);
    
  return (
    <>
    <div className="container mt-5 mb-4 ">
     
      <div className="d-flex">
        <h4 className="col-3">LATEST NEWS </h4>
        <hr className="col-8 "/></div>
      <div className="row  mt-3 mb-3 d-flex ">
        {news.map((value, index) => (
          <div className="col-3 ">
            <div className="card  mb-3" key={index}>
              <img src="/images/electronic/9-490x280_t.jpg" alt="" className="" />
              <div className="card-body">
                <h3 className="card-title text-center">{value.title}</h3>
              </div>
              <p className="card-text text-center  text-secondary">{value.description}</p>
              <p className="card-text text-center d-flex justify-content-around">
                <p className=" text-secondary"> <IoPersonSharp className="fs-4"/> Admin</p>
                <p>Read More <FaLongArrowAltRight /></p>
              </p>
            </div>
          </div>
        ))}
      </div>{" "}
    </div>

  
  
  </>
  )
}

export default LatestNews 