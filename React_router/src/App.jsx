import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import medicines from "./data/medicines";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    setCartItems((previous) => {
      const existing = previous.find((item) => item.id === productId);
      if (existing) {
        return previous.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      const product = medicines.find((item) => item.id === productId);
      return [...previous, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((previous) =>
      previous
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((previous) => previous.filter((item) => item.id !== productId));
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      <Navbar cartCount={cartCount} />
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products products={medicines} addToCart={addToCart} />}
          />
          <Route
            path="/products/:category"
            element={<Products products={medicines} addToCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                updateQuantity={updateQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;