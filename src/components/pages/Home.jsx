import React from "react";
import Product from "../../page/Product";
import Header from "../Header";
import "../pages/home.css";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="background-pic">
        <div className="wlc">
          <h1>WELCOME TO THOUSANDSTEEL STORE</h1>
              </div>
              <div className="shopping">
                  <NavLink to="/Product">START SHOPPING</NavLink>
              </div>
              
      </div>
    </>
  );
}

export default Home;
