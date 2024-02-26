import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProductListApi() {
    setLoading(true);
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    if (data) {
      setLoading(false);
      setProducts(data);
    }
  }
  useEffect(() => {
    fetchProductListApi();
  }, []);
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center ">
          <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900 mt-[200px]"></div>
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-2">
            {products && products.length
            ? products.map((productItem)=>(<Product product={productItem}/>)):null}
        </div>
      )}
    </>
  );
};

export default Products;
