import React from "react";

function About() {
  return (
    <div className="page about-page">
      <h1>About MediMart</h1>
      <p>
        MediMart is a sample React Router medical shop created to showcase a
        structured shopping experience with category browsing, product listing,
        and a shopping cart.
      </p>
      <div className="about-cards">
        <div className="card">
          <h3>Easy Navigation</h3>
          <p>Browse medicines by category and find products for every need.</p>
        </div>
        <div className="card">
          <h3>Cart Experience</h3>
          <p>Store selected medicines in the cart and update quantities with ease.</p>
        </div>
        <div className="card">
          <h3>Responsive Design</h3>
          <p>Works well on mobile and desktop with clean page layouts.</p>
        </div>
      </div>
    </div>
  );
}

export default About;