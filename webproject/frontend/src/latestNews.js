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
    dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
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
        <Slider {...settings}>
          {news.map((value, index) => (
            <div key={index} className="">
              <div className="card img-body me-3 mb-3" key={index}>
                <img
                  src="/images/electronic/9-490x280_t.jpg"
                  alt=""
                  className=""
                />
              </div>
              <div className="card-body">
                <h3 className="card-title text-center">{value.title}</h3>
              </div>
              <p className="card-text text-center  text-secondary">
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
          ))}
        </Slider>
      </div>
    </>
  );
};

export default LatestNews;
