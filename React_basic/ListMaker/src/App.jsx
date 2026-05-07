import React, { useState } from "react";
import "./App.css";
import Product from "./Product";

function App() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const addProduct = () => {

        if(name === "" || price === "" || quantity === ""){

            alert("Please fill all fields");
            return;

        }

        const newProduct = {

            id: Date.now(),
            name,
            price,
            quantity

        };

        setProducts([...products, newProduct]);

        setName("");
        setPrice("");
        setQuantity("");

    };

    const removeProduct = (id) => {
        const updatedProducts = products.filter(
            (product) => product.id !== id
        );
        setProducts(updatedProducts);

    };

    return (

        <div className="app">
            <h1 className="app__title">
               ADD YOUR store PRODUCTS
            </h1>
            {/* FORM */}
            <div className="app__form">

                <input
                    type="text"
                    placeholder="Enter Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                />

                <button onClick={addProduct}>
                    Add Product
                </button>

            </div>

            {/* CONDITIONAL RENDERING */}

            {
                products.length === 0 ? (

                    <p className="app__empty">
                        No Products Added
                    </p>

                ) : (

                    <div className="app__products">

                        {
                            products.map((product) => (

                                <Product
                                    key={product.id}
                                    product={product}
                                    removeProduct={removeProduct}
                                />

                            ))
                        }

                    </div>
                )
            }

        </div>

    );

}

export default App;