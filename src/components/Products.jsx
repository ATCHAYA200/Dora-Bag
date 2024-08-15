import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import './Products.css'; // Add custom CSS for additional styling

export default function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const result = await response.json();
        setData(result);
        setFilter(result);
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => (
    <>
      <div className="col-md-3 mb-4">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3 mb-4">
        <Skeleton height={350} />
      </div>
      <div className="col-md-3 mb-4">
        <Skeleton height={350} />
      </div>
    </>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => (
    <>
      <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button
          className="btn btn-primary me-2 filter-btn"
          onClick={() => setFilter(data)}
        >
          All
        </button>
        <button
          className="btn btn-primary me-2 filter-btn"
          onClick={() => filterProduct("men's clothing")}
        >
          Men
        </button>
        <button
          className="btn btn-primary me-2 filter-btn"
          onClick={() => filterProduct("women's clothing")}
        >
          Women
        </button>
        <button
          className="btn btn-primary me-2 filter-btn"
          onClick={() => filterProduct("jewelery")}
        >
          Jewelry
        </button>
        <button
          className="btn btn-primary me-2 filter-btn"
          onClick={() => filterProduct("electronics")}
        >
          Electronics
        </button>
      </div>
      {filter.length ? (
        filter.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card h-100 text-center p-3 product-card">
              <img
                src={product.image}
                className="card-img-top product-img"
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title mb-2">{product.title.substring(0, 12)}...</h5>
                <p className="card-text lead fw-bold mb-3">₹{product.price}</p>
                <NavLink
                  to={`/products/${product.id}`}
                  className="btn btn-dark btn-outline-light"
                >
                  Buy Now
                </NavLink>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center">No products found.</p>
      )}
    </>
  );

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}
