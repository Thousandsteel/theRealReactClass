import ProductCard from "./Product.Card";
import Icon from "./icon/Icon";
import BoldText from "./text/BoldText";
import "../components/header.css";
import ProductsPage from "./category";
import Contact from "./pages/contact";
import { NavLink } from "react-router-dom";
import Product from "../page/Product";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <div>
      {/*    {" "}
      <div>
        <Icon />
        <BoldText />
      </div>{" "} */}
      <div className="head">
        <div className="logo">Thousandsteel store</div>
        {/*  <div className="search">
          <ProductsPage />
        </div> */}

        <nav className="nav">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Product">products</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </nav>

        <div className="cart">
          <FaShoppingCart />
        </div>
      </div>
    </div>
  );
}

export default Header;
