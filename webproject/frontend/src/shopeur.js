import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { BsCart4 } from "react-icons/bs";

import { Link } from "react-router-dom";

const Shopeur = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    if (!token) {
      navigate("/signin");
    }
  });

  return (
    <>
      <div className="container">
        <header className="d-flex mt-3 mb-3 align-items-center justify-content-around  ">
          <div className="nav-link">
            <img src="/electronic/logo.png" alt="hhh" />
          </div>

          <div className="  d-flex input-groups broder-1 border   ">
            <select
              className="  py-3 "
              style={{ border: "none", width: "250px" }}
            >
              <option>ALL CATEGORY</option>
              <option>Accessoris</option>
              <option>hydroulic</option>
              <option>Lamp</option>
              <option>Avoinics</option>
            </select>

            <input
              type="text"
              className="  py-3"
              style={{ border: "none", width: "350px" }}
            />

            <button
              className=" btn-warning  btn"
              type="search"
              style={{ width: "120px" }}
            >
              search
            </button>
          </div>

          <div className="nav-link  d-flex align-items-center justify-content-center ">
   
              <VscAccount className="border fs-1 bg-light " />
        
       
          
              <p className="fs-5 ms-3">sign in</p>

     
          </div>
       
          <div className="nav-link d-flex align-items-center justify-content-center">
            <BsCart4 className="fs-1 border bg-light" />

            <Link to="/cart" className="ms-3 fs-5">
              My Cart
            </Link>

          </div>
          <div></div>
        </header>
      </div>
    </>
  );
};

export default Shopeur;
