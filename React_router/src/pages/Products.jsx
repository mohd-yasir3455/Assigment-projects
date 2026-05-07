import React from "react";
import { Link, useParams } from "react-router-dom";
import { categories } from "../data/medicines";

function Products({ products, addToCart }) {
  const { category } = useParams();
  const activeCategory = category || "all";
  const categoryMeta = categories.find((item) => item.slug === activeCategory);

  if (!categoryMeta) {
    return (
      <div className="page">
        <h1>Category Not Found</h1>
        <p>The medicine category you selected does not exist.</p>
        <Link className="button secondary" to="/products">
          Browse All Medicines
        </Link>
      </div>
    );
  }

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="page products-page">
      <div className="page-header">
        <div>
          <p className="eyebrow">Medical Shop</p>
          <h1>{categoryMeta.name}</h1>
          <p className="page-description">
            Choose quality medicines and health products tailored for {categoryMeta.name.toLowerCase()}.
          </p>
        </div>
      </div>

      <div className="category-filter">
        {categories.map((item) => (
          <Link
            key={item.slug}
            to={item.slug === "all" ? "/products" : `/products/${item.slug}`}
            className={`category-pill ${item.slug === activeCategory ? "active" : ""}`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-card__top">
              <span className="product-type">{product.type}</span>
              <span className="product-stock">{product.stock} left</span>
            </div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="product-footer">
              <strong className="product-price">₹{product.price}</strong>
              <button
                className="button primary small"
                onClick={() => addToCart(product.id)}
                disabled={product.stock === 0}
              >
                {product.stock === 0 ? "Out of stock" : "Add to Cart"}
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Products;
