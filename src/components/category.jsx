import React, { useState } from "react";

const ProductsPage = ({ product }) => {
  const [searchitem, setSearchitem] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = () => {
    const filtered = product.filter((product) =>
      product.category.toLowerCase().includes(searchitem.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={searchitem}
        onChange={(e) => setSearchitem(e.target.value)}
        style={{
          fontSize: 20,
          borderRadius: 10,
          marginLeft: 20,
          marginBottom: 60,
        }}
      />
      <button onClick={handleSearch}>Search</button>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
