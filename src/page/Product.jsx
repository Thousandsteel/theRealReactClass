import React, { useEffect, useState } from "react";
import ProductCard from "../components/Product.Card";
import TopRated from "../components/TopRated";
import Latest from "../components/latestProduct";
import ProductsPage from "../components/category";
import Header from "../components/Header"
import "../style/product.css";

function Product() {
  const [products, setProducts] = useState([]);

  const rated = products;

  const myStyle = {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 20,
  };

  const fetchData = async () => {
    const res = await fetch(" https://myecommerce-3.onrender.com/phone");
  
    const product = await res.json();
    setProducts(product.products);
    console.log(product);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {<Header/>}
      <TopRated product={products} style={myStyle} />
      <Latest product={products} style={myStyle} />
      <ProductsPage product={products} style={myStyle} />

      <div style={myStyle} className="">
        {products.map((item, i) => {
          return (
            <ProductCard image={item.images[0]} price={item.price} key={i} description={item.description} id={item.id} />
          );
        })}
        ;
      </div>
    </>
  );
}

export default Product;
