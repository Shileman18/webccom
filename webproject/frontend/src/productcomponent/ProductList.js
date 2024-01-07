import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import './cartslider.css'
// import './home.css'
// import SubNav2 from '../navbar/secnavbar'
// import Thirdbar from '../navbar/navbar'
import { HiMiniAdjustmentsVertical } from "react-icons/hi2";

import { FaAngleRight,FaAngleLeft,FaEye  } from "react-icons/fa";
import { CiShoppingBasket ,CiHeart } from "react-icons/ci";
import './slider.css'

function ProductList() {


    const [products, setproducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(10);
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
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 2) % products.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 2 + products.length) % products.length
        );
    };

    return (
        <>
            {/* <SubNav2 />
            <Thirdbar /> */}
            <div className='container'>
                <div className="card-slider">
                    <div className="card-container">

                        {products.slice(currentIndex, currentIndex + 4).map((item, index) => (


                            <div key={index} className='col-sm-3 col-lg-3 my-3 fs-6'>
                                <div className='card' style={{ margin: "3px" }}>

                                    <Link to={`products/${item._id}`} style={{textDecoration:"none"}}>
                                        <img src={item.imageURL} alt={item.id}  />
                                        <div className='card-title' style={{ color: "black", textDecoration: "none" }}>
                                            <div className='card-body'>
                                                <h4 class="card-text text-truncate" style={{ color: "black", textDecoration: "none" }}>{item.title}</h4>
                                                <div >
                                                    <p style={{ color: "black", textDecoration: "none" }}>price: $ {item.price}.00</p>
                                                </div>

                                            </div>
                                        </div>
                                    </Link>
                                    <div className="icons-container ">
                                        <span className="icon border text-center rounded  " style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a' href='/'><CiShoppingBasket /></a></span>
                                        <span className="icon border text-center rounded  " style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><CiHeart /></a></span>
                                        <span className="icon border text-center rounded  " style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><HiMiniAdjustmentsVertical /></a></span>
                                        <span className="icon border text-center rounded  " style={{width:"40px",height:"40px"}}><a className='fs-4 icon-a'href='/'><FaEye /></a></span>

                                       
                                    </div>
                                </div>

                            </div>

                        ))}

                        <button className="prev" onClick={handlePrev}><FaAngleLeft /> </button>
                        <button className="next" onClick={handleNext}><FaAngleRight /></button>

                        {/* </Slider> */}
                    </div>
                </div>
            </div>

        </>



    )
}



export default ProductList