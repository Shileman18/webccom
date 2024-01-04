import React from "react";
// import Accordion from "react-bootstrap/Accordion";
// import Image from 'react-bootstrap/Image';
// import Col from 'react-bootstrap/Col';
import { FaBars } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
const Imagesbars = () => {
  return (
    <div className="container w-100 mt-3 mb-3">
      <div className="row ">
        <div className="col-3">
          <div className="card">
            <div className="cord-body">
              <div className="">
                <h4 className="bg-warning px-4 py-2 ">
                  <FaBars className="mb-1 me-3" /> ALL CATEGORY
                </h4>
                <p>
                  <a
                    href="/ "
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Accessoris
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Spintronics
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Atomtronics
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Nintendo
                  </a>
                </p>
                <p>
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Night Lamps
                  </a>
                </p>
                <p>
                  {" "}
                  <a
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Avionics
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-9 ">
        <Carousel data-bs-theme="dark">
                            <Carousel.Item  style={{position:"relative"}}>
                                <img
                                    className="d-block w-100 active"
                                    src='/images/img.jpg'
                                    alt="First slide"
                                    style={{height:"400px"}}
                                />
                                <Carousel.Caption className="text-white " style={{position:"absolute",top:"50px" ,right:"",float:"right"}}>
                               <h5>First slide label</h5>
                                    <p>Nulla vitae elit libero,<br/>a pharetra augue mollis interdum.</p>
                                    <button className="btn bg-primary ">Shop Now</button>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='/images/img.jpg'
                                    alt="Second slide"
                                    style={{height:"400px"}}
                                />
                                <Carousel.Caption className="text-white">
                                    <h5>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit.</p>
                                    <button className="btn bg-primary ">Shop Now</button>

                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src='/images/img.jpg'
                                    alt="Third slide"
                                    style={{height:"400px"}}
                                />
                                <Carousel.Caption className="text-white">
                                    <h5>Third slide label</h5>
                                    <p>
                                        Praesent commodo cursus magna,<br/> vel scelerisque nisl consectetur.
                                    </p>
                                    <button className="btn bg-primary ">Shop Now</button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Imagesbars;
