import React from "react";
import Products from "./Products";
import "./Home.css"; // Ensure this file includes the updated CSS below

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container text-center">
          <h1 className="display-4 fw-bold">Welcome to Our Dora-Bag Store</h1>
          <p className="lead mb-4">
            Discover the best products at unbeatable prices. Shop now and enjoy exclusive offers!
          </p>
          <a href="/products" className="btn btn-primary btn-lg">Shop Now</a>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="features py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fa fa-truck fa-3x mb-3"></i>
                <h4>Free Shipping</h4>
                <p>Enjoy free shipping on all orders over $50. No hidden charges.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fa fa-tags fa-3x mb-3"></i>
                <h4>Best Prices</h4>
                <p>Get the best deals on your favorite products. We guarantee the lowest prices.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="feature-box">
                <i className="fa fa-headphones fa-3x mb-3"></i>
                <h4>24/7 Support</h4>
                <p>Our support team is here to help you 24/7. Reach out to us anytime.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="promo-banner py-4 text-center">
        <div className="container">
          <h3 className="display-4 fw-bold">Limited Time Offer!</h3>
          <p className="lead mb-4">Save up to 50% on selected items. Don't miss out!</p>
          <a href="/products" className="btn btn-dark btn-lg">Shop Now</a>
        </div>
      </section>

      {/* Products Section */}
      <Products />
    </div>
  );
}
