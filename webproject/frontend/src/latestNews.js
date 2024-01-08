import React, { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const LatestNews = () => {
  const [news, setNews] = useState([]);
  const settings = {
    // dots: true,
    speed: 500,
    slidesToShow: 3 ,
    slidesToScroll: 1,
    infinite: true,
    // autoplay: true,
    autoplaySpeed: 1000,
  };

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
      <div className="container mt-5 mb-4">
        <div className="d-flex">
          <h4 className="col-3">LATEST NEWS </h4>
          <hr className="col-8 " />
        </div>
        <div className="row">
          <Slider {...settings}>
            {news.map((value, index) => (
              <div key={index} className="me-3 ">
             <div className="card me-4">
                  <img src="/images/electronic/9-490x280_t.jpg" alt="" />
              
                <div className="card-body ">
                  <h4 className="card-title text-truncate text-center">
                    {value.title}
                  </h4>

                  <p className="card-text text-center text-truncate text-secondary">
                    {value.description}
                  </p>
                  <p className="card-text text-center d-flex justify-content-around">
                    <p className=" text-secondary">
                      {" "}
                      <IoPersonSharp className="fs-4" /> Admin
                    </p>
                    <p>
                      Read More <FaLongArrowAltRight />
                    </p>
                  </p>
                </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
