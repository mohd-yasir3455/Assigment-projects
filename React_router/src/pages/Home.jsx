import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../data/medicines";

function Home() {
  return (
    <div className="page home-page">
      <section className="hero-section">
        <div>
          <p className="eyebrow">Medical Store</p>
          <h1>Find trusted medicines for men, women, and children.</h1>
          <p>
            MediMart makes it easy to browse health products, manage your cart,
            and order the right medicine quickly.
          </p>
          <div className="hero-actions">
            <Link to="/products" className="button primary">
              Shop All Medicines
            </Link>
            <Link to="/products/men" className="button secondary">
              Men's Health
            </Link>
          </div>
        </div>
      </section>

      <section className="home-categories">
        <h2>Shop by category</h2>
        <div className="category-grid">
          {categories
            .filter((category) => category.slug !== "all")
            .map((category) => (
              <Link
                key={category.slug}
                to={`/products/${category.slug}`}
                className="category-card"
              >
                <h3>{category.name}</h3>
                <p>Explore tailored medicines and health support.</p>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;