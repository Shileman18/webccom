import React, { useEffect, useState } from "react";
import axios from "axios";
import './productcomponent/slider.css'
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import { FaRegStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiMiniAdjustmentsVertical } from "react-icons/hi2";

import { FaEye  } from "react-icons/fa";
import { CiShoppingBasket ,CiHeart } from "react-icons/ci";

export const CatProd = () => {
  const [products, setproducts] = useState([]);

  const settings = {
    // dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

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
      <div className="d-flex mb-4">
<h3 className="col-3">CATEGORY PRODUCTS</h3>
<hr className="col-3 ms-3" />
<NavLink className="col-1 ms-2">ACCESSORIES</NavLink>
<NavLink className="col-1 ms-2">ATOMTRONICS</NavLink>
<NavLink className="col-1 ms-3">NIGHT LAMPS</NavLink>
<NavLink className="col-1 ms-3">INDUCTION</NavLink>
<NavLink className="col-1 ms-2">LAMP</NavLink>
</div>
        <div className="row">
          <div className="col-3">
            <img src="/images/electronic/285x375.jpg " alt="" />
          </div>
       
        <div className="col-9">
        <Slider {...settings}>
                        {products.map((item, index) => (


                            <div key={index} className='col-sm-3 col-lg-3 my-3 fs-6'>
                                <div className='card' style={{ margin: "3px" }}>

                                    <Link to={`products/${item._id}`} style={{textDecoration:"none"}}>
                                        <img src={item.imageURL} alt={item.id} className='images' />
                                        <div className='' style={{ color: "black", textDecoration: "none" }}>
                                            <div className='text-center'>
                                            <p className='text-warning'><FaRegStar/><FaRegStar/><FaRegStar/><FaRegStar/></p>

                                                <h4 class=" text-truncate" style={{ color: "black", textDecoration: "none" }}>{item.title}</h4>
                                                <div >
                                                    <p style={{ color: "black", textDecoration: "none" }}>price: $ {item.price}.00</p>
                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                    <div className="icons-container ">
                                        <span className="icons border text-center rounded  " style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a' href='/'><CiShoppingBasket /></a></span>
                                        <span className="icons border text-center rounded  " style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><CiHeart /></a></span>
                                        <span className="icons border text-center rounded  " style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><HiMiniAdjustmentsVertical /></a></span>
                                        <span className="icons border text-center rounded  " style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><FaEye /></a></span>

                                       
                                    </div>
                                </div>

                            </div>

                        ))}

</Slider>

        </div>
      </div> </div>
    </div>
  );
};
