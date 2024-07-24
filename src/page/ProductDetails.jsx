import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/Product.Card";
import Header from "../components/Header";

function ProductDetails() {
  const [product, setproduct] = useState(null);
  const params = useParams();
  const id = params.id;

  const Data = async () => {
    const fetchdata = await fetch("https://myecommerce-3.onrender.com");
    const item = await fetchdata.json();

    setproduct(item.products.find((item) => item.id == id));
  };

  useEffect(() => {
    Data();
  }, [id]);
  console.log(product);
  return (
    <>
      <div>
        {product && (
          <div className="" style={{ marginLeft: "30%", marginTop: "10%" }}>
            {
              <ProductCard
                image={product.images[0]}
                description={product.description}
                alt="product"
              />
            }
          </div>
        )}
      </div>
    </>
  );
}

export default ProductDetails;
