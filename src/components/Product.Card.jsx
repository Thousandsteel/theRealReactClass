import React from "react";
import { TiHeartOutline } from "react-icons/ti";
import { productImage } from "../assets";
import "../style/product.css";
import { useNavigate } from "react-router-dom";
import { MdDescription } from "react-icons/md";

const ProductCard = (props) => {
  const Route = useNavigate();
  return (
    <div
      className="product-container"
      onClick={() => {
        Route(`/productDetails/${props.id}`)
      }}
    >
      <div className="image-container">
        <img src={props.image} alt="" className="image" />
        <p className="return">Not Returnable</p>
        <span className="product-icon">
          <TiHeartOutline color="" size={20} />
        </span>
      </div>
      <div className="desc-container">
        <p className="label">shipped from abroad</p>
        <p className="desc">{props.description}
         
        </p>
        <div className="price-con">
          <p className="discount-price">{props.price}</p>
          <p className="price-percent">
            <span className="price">
              <del>#170,000</del>
            </span>
            <span className="percent-text">-40%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
