import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// eslint-disable-next-line

const TopCategory = () => {
  const [catogary, setCatogary] = useState([]);

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
    const fetctchCat = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3002/api/catogary/getAllCatogary"
        );
        const data = await res.data;
        setCatogary(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetctchCat();
  });

  return (
    <>
   
      <div className="container mt-5 mb-5">
        
        <div className="d-flex">
        <h3 className="col-3">TOP CATEGORY </h3>
        <hr className="col-8 "/>
        </div>
        <Slider {...settings}>
          {catogary.map((value, index) => (
            <div  key={index}>
              <div className="card me-5 img-body mb-3">
                <img src="/images/5-1-360x400_t.jpg" alt="" className=" catImg" style={styles.catImg}/>
                <button className="btn btnbutton btn-light w-75 text-center" style={styles.btnbutton}>{value.title}</button>
              </div>
            </div>
          ))}
         </Slider>
      </div>
    </>
  );
};



const styles={
  catImg:{
   
position:"relative"
  },
  
  btnbutton:{

    position: "absolute",
 
  bottom:"40px",
  left:"40px",
}
}

export default TopCategory;
