import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaRegStar } from "react-icons/fa";

import { HiMiniAdjustmentsVertical } from "react-icons/hi2";

import { FaEye  } from "react-icons/fa";
import { CiShoppingBasket ,CiHeart } from "react-icons/ci";
import './slider.css'

function ProductList() {
    const settings = {
        // dots: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // autoplay: true,
        autoplaySpeed: 1000,
      };
    


    const [products, setproducts] = useState([]);
 
    useEffect(() => {
        const getproducts = async () => {
            try {
                const response = await axios.get(
                    'http://localhost:3002/api/product/getproducts'
                );
                const data = await response.data;
                setproducts(data);

            } catch (error) {
                console.log(error)
            }
        }
        getproducts();
    }, [])
  

    return (
        <>
           
            <div className='container'>
            <div className="d-flex">
        <h3 className="col-3">LATEST PRODUCTS </h3>
        <hr className="col-8 "/>
        </div>
                    <div className="row">
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
             
            </div>

        </>



    )
}



export default ProductList