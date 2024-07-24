import React from "react";
import ProductCard from "./Product.Card";


function Latest({ product, style }) {
  return (
    <div
      className=""
      style={{
        marginBottom: 50,
      }}
    >
      <p className="" style={{ fontSize: 24, color: "red", padding: 10,}}>
        Latest products
      </p>
      <div style={style}>
        {product
          .sort((a, b) => b.id - a.id)
          .slice(0, 3)
          .map((item, i) => {
            return (
              <ProductCard
                image={item.images[0]}
                description={item.description}
                price={item.price}
                key={i}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Latest;
